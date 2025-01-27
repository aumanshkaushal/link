async function humansInVoiceChannel(d, voiceId) {
    const channel = await d.util.getChannel(d, voiceId, true);

    if (!channel)
        return []
    if (
        ![d.util.channelTypes.Voice, d.util.channelTypes.Stage].includes(
            channel.type,
        )
    )
        return []
    let members = []
    channel.members.forEach(users => {
        if (!users.user.bot) {
            members.push(users.user.id)
        }
    });
    return members
}

module.exports = {
    humansInVoiceChannel
}