let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://restapi-beta.herokuapp.com/api/zerochan/${command}?apikey=Fajar Ihsana, '', '', m)
}
handler.help = ['zero']
handler.tags = ['anime']
handler.command = /^(zero)$/i

module.exports = handler
