export default function smallImage(imagePath, width, heigth = "-") {
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${width}/${heigth}/screenshots`
      )
    : imagePath.replace("media/games", `media/resize/${width}/${heigth}/games`);
  return image;
}
