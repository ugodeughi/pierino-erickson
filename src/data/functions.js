const getPathImage = (imageName) => {
  return new URL(`../img/${imageName}.png`, import.meta.url).href
}
const getPathVideo = (videoName) => {
  return new URL(`../video/${videoName}.mp4`, import.meta.url).href
}


export { getPathImage, getPathVideo }