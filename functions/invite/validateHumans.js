const { isOpttedIn } = require('../opt/isOpttedIn')

async function validateHumans(db, humans) {
    let validatedHumans = []
    for (const userId of humans) {
        if (await isOpttedIn(db, userId)) {
            validatedHumans.push(userId)
        }
    }
    return validatedHumans

}

module.exports = {
    validateHumans
}