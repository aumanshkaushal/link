module.exports = [{
name: "trusted",
type: "interaction",
prototype: "slash",
code: `

$interactionReply[<:add:1291465921621397514> <@$slashOption[user]> has been added to the trusted users list!]

$onlyIf[$interactionData[options._subcommand]==add;]

`
}]