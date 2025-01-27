const { isUrl } = require("./isUrl");

async function strippedUrl(url) {
    if (!isUrl(url)){
        return
    }    

    return url.replace(/(^\w+:|^)\/\//, '')

}

module.exports = {
    strippedUrl
}