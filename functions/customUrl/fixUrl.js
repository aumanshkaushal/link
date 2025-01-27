function fixUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
}

module.exports = {
    fixUrl
}