export function getWixImageUrl(wixUrl) {
  if (!wixUrl) return "";
  if (wixUrl.startsWith("https://")) return wixUrl;
  const fileId = wixUrl
    .replace("wix:image://v1/", "")
    .split("/")[0]
    .split("#")[0];
  return `https://static.wixstatic.com/media/${fileId}`;
}

export function getWixVideoUrl(wixUrl) {
  if (!wixUrl) return "";
  if (wixUrl.startsWith("https://")) return wixUrl;
  const fileId = wixUrl
    .replace("wix:video://v1/", "")
    .split("/")[0]
    .split("#")[0];
  return `https://video.wixstatic.com/video/${fileId}/file.mp4`;
}

export function getMediaItems(mediaItems) {
  return mediaItems?.map((item) => {
    if (item.video) {
      return {
        type: "video",
        url: getWixVideoUrl(item.video?.url),
        thumbnail: getWixImageUrl(item.video?.thumbnail?.url),
      };
    }
    return {
      type: "image",
      url: getWixImageUrl(item.image?.url),
      thumbnail: getWixImageUrl(item.image?.url),
    };
  }).filter(m => m.url) || [];
}
