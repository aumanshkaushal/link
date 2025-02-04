module.exports = [{
name: "help",
type: "interaction",
prototype: "slash",
code: `


$interactionFollowUp[{newEmbed:
{description:<:circle:1292523984021229648> **General Commands:**
<:replycontinued:1292516574816763925> </recommend:$getApplicationCommandID[recommend;global]> » Generate a random game from party pack to play with your friends
<:replycontinued:1292516574816763925> </gamelink send:$getApplicationCommandID[gamelink;global]> » Send gamelinks to people present in your voice channel
<:replycontinued:1292516574816763925> </optin:$getApplicationCommandID[optin;global]> » Opt-in and start recieving direct messages from me
<:replycontinued:1292516574816763925> </optout:$getApplicationCommandID[optout;global]> » Opt-out of recieving direct messages from me
<:reply:1292516585092808817> </ping:$getApplicationCommandID[ping;global]> » Check the latency to Discord API!

<:circle:1292523984021229648> **Staff Commands:**
<:replycontinued:1292516574816763925> </settings:$getApplicationCommandID[settings;global]> » View and modify the settings of the link bot
<:replycontinued:1292516574816763925> </trusted add:$getApplicationCommandID[trusted;global]> » Add a user to the trusted users list
<:replycontinued:1292516574816763925> </trusted remove:$getApplicationCommandID[trusted;global]> » Remove a user from the trusted users list
<:replycontinued:1292516574816763925> </customlist add:$getApplicationCommandID[customlist;global]> » Add a custom url to the custom URL list!
<:replycontinued:1292516574816763925> </customlist remove:$getApplicationCommandID[customlist;global]> » Remove a custom url from the custom URL list!
<:replycontinued:1292516574816763925> </pack add:$getApplicationCommandID[pack;global]> » Add a pack to the pack list!
<:replycontinued:1292516574816763925> </pack remove:$getApplicationCommandID[pack;global]> » Remove a pack from the pack list!
<:replycontinued:1292516574816763925> </blockvc:$getApplicationCommandID[blockvc;global]> » Block a voice channel from distributing gamelinks!
<:reply:1292516585092808817> </maxlimit:$getApplicationCommandID[maxlimit;global]> » Set a maximum limit for the voice channel, beyond which the game link will not be sent!


}
{color:2a616a}
}
{actionRow:
{button:Invite Me:5:https#COLON#//discord.com/oauth2/authorize?client_id=1259098975567482890&permissions=274878024769&integration_type=0&scope=bot+applications.commands:false}
{button:Support Server:5:https#COLON#//discord.gg/f85T9H7Wqn:false}
{button:Application Directory:5:https#COLON#//discord.com/application-directory/1259098975567482890:false}
}
]

$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:🔧 **Help Menu** has been opened by $userName!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]

$interactionDefer
`
}]