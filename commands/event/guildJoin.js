const variables = require('../../variables');

module.exports = [{
name: "guildJoin",
type: "guildJoin",
channel: variables.guildLogChannel,
code: `
$channelSendMessage[$getVar[guildLogChannel];{newEmbed: {color: 2a616a}
{description:📥 **Joined Guild**
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
