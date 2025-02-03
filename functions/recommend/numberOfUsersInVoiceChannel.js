async function numberOfUsersInVoiceChannel(d, channelID) {
    const channel = await d.util.getChannel(d, channelID, true);

    if (!channel)
        return d.aoiError.fnError(d, "channel", {inside: data.inside});
    if (
        ![d.util.channelTypes.Voice, d.util.channelTypes.Stage].includes(
            channel.type,
        )
    )
        return d.aoiError.fnError(
            d,
            "custom",
            {inside: data.inside},
            "Channel Type Is Not Voice/Stage",
        );
    let botCount = 0;
    channel.members.forEach(users => {
    users.user.bot ? botCount++ : botCount;
    });
    return channel.members.size - botCount;
}

module.exports = {
    numberOfUsersInVoiceChannel
}