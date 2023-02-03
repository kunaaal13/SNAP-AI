import FileSaver from 'file-saver'

export default function downloadImage(image: string) {
  // Generate a unique name for the image
  const name = 'id' + new Date().getTime()

  // Download the image
  FileSaver.saveAs(image, `${name}.png`)
}
