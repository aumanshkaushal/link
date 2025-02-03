async function base64toString(string) {
    return Buffer.from(string, 'base64').toString('ascii')
}

module.exports = {
    base64toString
} 