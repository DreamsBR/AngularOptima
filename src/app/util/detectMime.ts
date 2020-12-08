export const detectMime = (filename: string): any => {
  const extension = filename.split('.').pop()
  let mime = null
  switch (extension) {
    case 'png':
      mime = 'data:image/png;base64,'
      break
    case 'jpg':
      mime = 'data:image/jpg;base64,'
      break
    case 'jpeg':
      mime = 'data:image/jpeg;base64,'
      break
    case 'pdf':
      mime = 'data:application/pdf;base64,'
      break
    default:
      break
  }
  return mime
}
