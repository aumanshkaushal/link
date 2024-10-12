module.exports = [{
name: "settings",
type: "interaction",
prototype: "slash",
code: `

$interactionFollowUp[{newEmbed: 
{color: 2a616a}
{description:### ⚙️ **__Settings Menu#COLON#__**}
{field:📦 Packs enabled#COLON#:\`card_games\`, \`paid\`, \`party_pack\`:true}
{field:👤 Trusted Staff#COLON#:$getTrustedUsers[$guildID]
-# $customEmoji[reply] Use /trusted add/remove to modify this list!:true}
{field:🔗 Custom URL(s) enabled#COLON#:\`geoguesser.com/\`, \`somerandomgame.com/\`
-# $customEmoji[reply] Use /customlist add/remove to modify this list!:false}
}]

$interactionDefer
`
}]