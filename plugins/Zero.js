let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://restapi-beta.herokuapp.com/api/${body.slice()}?query=hatsune%20miku Ihsana, '', '', m)
}
handler.help = ['zero']
handler.tags = ['anime']
handler.command = /^(zero)$/i

module.exports = handler
