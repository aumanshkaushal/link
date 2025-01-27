async function isUrl(str) {
  const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w\-._~%!$&'()*+,;=:@]*)*\/?$/;
  return urlPattern.test(str)
}

module.exports = {
    isUrl
}