"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Reviews.module.css";

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7ViyXXaS8ztprK23idlwxqx7Yew74w1QT-qHyjr4EjZHccxdA_DD3yfhsQmsBmWPzK5t00a2m--qh/pub?output=csv";

const INITIAL_LOAD = 20;
const LOAD_MORE_COUNT = 10;

function csvToArray(text) {
  let p = "", row = [""], ret = [row], i = 0, r = 0, s = true, l;
  for (l of text) {
    if ('"' === l) { if (s && l === p) row[i] += l; s = !s; }
    else if ("," === l && s) l = row[++i] = "";
    else if ("\n" === l && s) { if ("\r" === p) row[i] = row[i].slice(0, -1); row = ret[++r] = [l = ""]; i = 0; }
    else row[i] += l;
    p = l;
  }
  return ret;
}

function formatDate(d) {
  if (!d) return "";
  try {
    const dt = new Date(d);
    return `${String(dt.getMonth()+1).padStart(2,"0")}/${String(dt.getDate()).padStart(2,"0")}/${dt.getFullYear()}`;
  } catch { return d; }
}

export default function Reviews() {
  const [allReviews, setAllReviews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [limit, setLimit] = useState(INITIAL_LOAD);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [starFilter, setStarFilter] = useState("all");
  const [sort, setSort] = useState("recent");
  const [avgRating, setAvgRating] = useState(0);
  const [modal, setModal] = useState(null);
  const [lightboxList, setLightboxList] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const gridRef = useRef(null);

  useEffect(() => {
    fetch(CSV_URL + "&t=" + Date.now())
      .then(r => r.text())
      .then(text => {
        const rows = csvToArray(text);
        rows.shift();
        const reviews = rows.filter(r => r.length >= 3).map((row, idx) => {
          const rawMedia = row[6]?.trim() || "";
          const isVideo = rawMedia.includes(".mp4") || rawMedia.includes(".mov");
          return {
            id: idx,
            rating: parseInt(row[1]) || 5,
            author: row[2] || "Customer",
            body: row[4] || "",
            date: row[5] || "",
            photoUrl: (!isVideo && rawMedia) ? rawMedia : "",
            videoUrl: (isVideo && rawMedia) ? rawMedia : "",
            hasMedia: rawMedia.length > 5,
            isVerified: ["TRUE","1"].includes(row[7]?.trim().toUpperCase()),
            variant: row[8]?.trim() || "",
          };
        });
        const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
        setAvgRating(avg.toFixed(1));
        setAllReviews(reviews);
        setFiltered(reviews);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let f = [...allReviews];
    if (starFilter !== "all") f = f.filter(r => r.rating === parseInt(starFilter));
    if (search) f = f.filter(r => r.body.toLowerCase().includes(search.toLowerCase()) || r.author.toLowerCase().includes(search.toLowerCase()));
    if (sort === "highest") f.sort((a, b) => b.rating - a.rating);
    else if (sort === "lowest") f.sort((a, b) => a.rating - b.rating);
    else f.sort((a, b) => a.id - b.id);
    setFiltered(f);
    setLimit(INITIAL_LOAD);
  }, [allReviews, starFilter, search, sort]);

  useEffect(() => {
    if (!gridRef.current || loading) return;
    const applyMasonry = () => {
      const grid = gridRef.current;
      if (!grid) return;
      const cards = grid.querySelectorAll(".rv-card");
      if (!cards.length) return;
      const gap = 12;
      const cols = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 640 ? 2 : 1;
      const containerW = grid.offsetWidth;
      const cardW = (containerW - gap * (cols - 1)) / cols;
      const colHeights = Array(cols).fill(0);
      cards.forEach(card => {
        card.style.position = "absolute";
        card.style.width = cardW + "px";
        const shortest = colHeights.indexOf(Math.min(...colHeights));
        card.style.left = shortest * (cardW + gap) + "px";
        card.style.top = colHeights[shortest] + "px";
        colHeights[shortest] += card.offsetHeight + gap;
      });
      grid.style.height = Math.max(...colHeights) + "px";
    };
    setTimeout(applyMasonry, 100);
    window.addEventListener("resize", applyMasonry);
    return () => window.removeEventListener("resize", applyMasonry);
  }, [filtered, limit, loading]);

  const toShow = filtered.slice(0, limit);
  const lightbox = toShow.filter(r => r.hasMedia);

  const openModal = (review) => {
    const idx = lightbox.findIndex(r => r.id === review.id);
    setLightboxList(lightbox);
    setSlideIndex(idx >= 0 ? idx : 0);
    setModal(lightbox[idx >= 0 ? idx : 0]);
  };

  const changeSlide = (step) => {
    const next = (slideIndex + step + lightboxList.length) % lightboxList.length;
    setSlideIndex(next);
    setModal(lightboxList[next]);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setModal(null);
      if (modal) {
        if (e.key === "ArrowLeft") changeSlide(-1);
        if (e.key === "ArrowRight") changeSlide(1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modal, slideIndex, lightboxList]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Customer Reviews</h2>

        {!loading && (
          <div className={styles.header}>
            <div className={styles.ratingSummary}>
              <span className={styles.stars}>★★★★★</span>
              <div className={styles.avgRating}>{avgRating} out of 5</div>
            </div>
            <div className={styles.filters}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search reviews..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {["all","5","4","3"].map(f => (
                <button
                  key={f}
                  className={`${styles.filterBtn} ${starFilter === f ? styles.active : ""}`}
                  onClick={() => setStarFilter(f)}
                >
                  {f === "all" ? "All" : `${f} ★`}
                </button>
              ))}
              <select className={styles.sortSelect} value={sort} onChange={e => setSort(e.target.value)}>
                <option value="recent">Original Order</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>
          </div>
        )}

        {loading && (
          <div className={styles.skeletonGrid}>
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={`${styles.skeleton} ${styles.skImg}`} />
                <div className={`${styles.skeleton} ${styles.skLine}`} />
                <div className={`${styles.skeleton} ${styles.skLine}`} />
                <div className={`${styles.skeleton} ${styles.skShort}`} />
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <div className={styles.grid} ref={gridRef}>
            {toShow.map(review => {
              const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
              return (
                <div key={review.id} className={`${styles.card} rv-card`}>
                  {review.hasMedia && (
                    <div className={styles.imgWrap} onClick={() => openModal(review)}>
                      {review.photoUrl ? (
                        <img src={review.photoUrl} alt="Review" className={styles.img} />
                      ) : (
                        <video src={review.videoUrl + "#t=0.1"} muted playsInline preload="metadata" className={styles.img} />
                      )}
                      {review.videoUrl && <div className={styles.playIcon}>▶</div>}
                      <div className={styles.zoomIcon}>🔍</div>
                    </div>
                  )}
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <div className={styles.authorLine}>
                        <span className={styles.author}>{review.author}</span>
                        {review.isVerified && <span className={styles.verified}>✓ Verified</span>}
                      </div>
                      <span className={styles.date}>{formatDate(review.date)}</span>
                    </div>
                    <div className={styles.cardStars}>{stars}</div>
                    <p className={styles.body}>{review.body}</p>
                    {review.variant && <div className={styles.variant}><strong>Item:</strong> {review.variant}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!loading && limit < filtered.length && (
          <div className={styles.loadMoreWrap}>
            <button className={styles.loadMore} onClick={() => setLimit(l => l + LOAD_MORE_COUNT)}>
              Show More Reviews
            </button>
          </div>
        )}
      </div>

      {modal && (
        <div className={styles.modal} onClick={() => setModal(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setModal(null)}>✕</button>
            <div className={styles.modalLeft}>
              {modal.videoUrl ? (
                <video src={modal.videoUrl} controls autoPlay muted loop playsInline className={styles.modalMedia} />
              ) : (
                <img src={modal.photoUrl} alt="Review" className={styles.modalMedia} />
              )}
              <button className={styles.prevBtn} onClick={() => changeSlide(-1)}>❮</button>
              <button className={styles.nextBtn} onClick={() => changeSlide(1)}>❯</button>
            </div>
            <div className={styles.modalRight}>
              <div className={styles.modalAuthor}>
                {modal.author}
                {modal.isVerified && <span className={styles.verified}>✓ Verified</span>}
              </div>
              <div className={styles.modalDate}>{formatDate(modal.date)}</div>
              <div className={styles.modalStars}>{"★".repeat(modal.rating)}{"☆".repeat(5 - modal.rating)}</div>
              <p className={styles.modalBody}>{modal.body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
