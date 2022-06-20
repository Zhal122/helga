let handler = async (m, { conn }) => {
let ren = 'https://api.lolhuman.xyz/api/random/husbu?apikey=#HIDDEN'
    conn.sendButtonImg(m.chat, ren, wm2, 'NEXT', 'HUSBU', '.husbu', m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler
