export function getWixImageUrl(wixUrl) {
  if (!wixUrl) return "";
  if (wixUrl.startsWith("https://")) return wixUrl;
  const fileId = wixUrl
    .replace("wix:image://v1/", "")
    .split("/")[0]
    .split("#")[0];
  return `https://static.wixstatic.com/media/${fileId}`;
}
