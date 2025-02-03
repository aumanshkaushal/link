const variables = require('../../variables');

module.exports = [{
name: "guildLeave",
type: "guildLeave",
channel: variables.guildLogChannel,
code: `
$channelSendMessage[$getVar[guildLogChannel];{newEmbed: {color: ed556f}
{description:📤 **Left Guild**
> Name: $guildName[$guildID]
> ID: $guildID
> Members: $membersCount
> Owner: $userTag[$guildOwnerID]
> Owner ID: $guildOwnerID
> Created At: $creationDate[$guildID]}
{footer:Server Count#COLON# $guildCount | User Count#COLON# $allMembersCount}{timestamp}{thumbnail:$guildIcon}
}]
`
}];
