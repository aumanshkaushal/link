module.exports = [{
name: "trusted",
type: "interaction",
prototype: "slash",
code: `

$interactionReply[$customEmoji[minus] <@$slashOption[user]> has been removed to the trusted users list!]

$onlyIf[$interactionData[options._subcommand]==remove;]

`
}]