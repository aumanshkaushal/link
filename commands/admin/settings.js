module.exports = [{
name: "settings",
type: "interaction",
prototype: "slash",
code: `

$interactionFollowUp[{newEmbed: 
{color: 2a616a}
{description:### ⚙️ **__Settings Menu#COLON#__**}
{field:📦 Packs enabled#COLON#:$parseEnabledPacks[$guildID]:true}
{field:👤 Trusted Staff#COLON#:$getTrustedRoles[$guildID]
-# <:reply:1292516585092808817> Use /trusted add/remove to modify this list!:true}
{field:🔗 Custom URL(s) enabled#COLON#:$parseCustomUrls[$guildID]
-# <:reply:1292516585092808817> Use /customlist add/remove to modify this list!:false}
}]

$interactionDefer
`
}]