case prefix+'kick': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}