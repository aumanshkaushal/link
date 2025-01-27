async function dmInvite(d, userId, message) {
    const user = await d.util.getUser(d, userId);
    if (!user) return

    msg = await d.util.errorParser(message, d);
    
    try {
        await user.send(msg)
        return true
    }
    catch (err) {
        return false
    }
    
}

module.exports = {
    dmInvite
}