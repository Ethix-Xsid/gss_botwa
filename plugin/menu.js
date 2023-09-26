// menu.js
module.exports = {
  mainMenu: (pushname, pushwish, botname, OWNER_NAME, owner, prefix, hours, minutes, seconds, xtime, xdate, me, isPublic) => `
  Hi 👋 *${pushname}*
  *${pushwish}*
  
 ╔═════════════════╗
 ║      『 BOT INFO 』
 ║  ☬─────────────☬  
 ║ 🤖 *BOT NAME*: ${botname}
 ║ 👤 *OWNER NAME*: ${OWNER_NAME}
 ║ 👨‍💻 *NUMBER*: ${owner}
 ║ 🚀 *PREFIX*: ${prefix}
 ║ ⏳ *UPTIMEt: ${hours}h ${minutes}m ${seconds}s
 ║ 🌐 *MODE*: ${isPublic ? 'Public' : 'Self'}
 ╠═════════════════╣
 ║       『 USER INFO 』 
 ║  ☬─────────────☬  
 ║ 🧑 *NAME*: ${pushname}
 ║ 📞 *NUMBER*: @${me.split('@')[0]}
 ║ ✅ *PREMIUM: ✅
 ╠═════════════════╣
 ║      『 TIME INFO 』 
 ║  ☬─────────────☬  
 ║ ⏰ *TIME: ${xtime}
 ║ 📅 *DATE*: ${xdate}
 ╠═════════════════╣
 ║       『 HELP 』
 ║  ☬─────────────☬  
 ║ 🆘 Please Type */HELP*
 ╠═════════════════╣
 ║     『 AI COMMANDS 』
 ║  ☬─────────────☬  
 ║ 1️⃣ .GPT 🅕
 ║ 2️⃣ .IMG 🅕
 ║ 3️⃣ .DALLE 🅕
 ║ 4⃣.BARD 🅕
 ╠═════════════════╣
 ║      『 TOOLS MENU 』
 ║  ☬─────────────☬  
 ║ 🗣 .TTS 🅕
 ║ 📋 .DELETE 🅅
 ║ 🌐 .TRANSLATE 🅕
 ║ ℹ️ .INFO 🅕
 ║ 🧬 .GETBIO 🅕
 ║ 🖇️ .TINYURL 🅕
 ║ 📧 .TEMPMAIL 🅕
 ║ 📩 .CHECKMAIL 🅕
 ╠═════════════════╣
 ║      『 GROUP MENU 』
 ║  ☬─────────────☬  
 ║ 🚫 .KICK @user 🅖
 ║ 🚫 .BAN @user 🅖
 ║ ➕ .ADD @User
 ║ 👑 .PROMOTE @user 🅖
 ║ 👤 .DEMOTE @user 🅖
 ║ 📣 .GROUP off/on 🅖
 ║ 🔗 .LINKGC 🅖
 ║ 🕠 .CLOSETIME 🅖
 ║ 🕥 .OPENTIME 🅖
 ║ ⛓️ .ANTILINKGC 🅖
 ║ 🗣️ .ANTITOXIC 🅖
 ║ 🚪 .LEAVEGC 🅖
 ║ 📊 .POLL 🅖
 ║ 🤝 .JOIN 🅖
 ║ 🚫 .REVOKE 🅖
 ║ 💌 .INVITE 🅖
 ╠═════════════════╣
 ║     『 OWNER MENU 』
 ║  ☬─────────────☬  
 ║ ✏️ .SETNAME 🅅
 ║ 📝 .SETBIO 🅅
 ║ 🚫 .BLOCK 🅅
 ║ ✅ .UNBLOCK
 ║ 😴 .SLEEP 🅅
 ║ 🔁 .AUTOREAD 🅅
 ║ 🌐 .SELF 🅅
 ║ 🌍 .PUBLIC 🅅
 ║ 🆕 .ADDOWNER 🅅
 ║ 🚮 .DELOWNER 🅅
 ║ ➕ .ADDPREM
 ║ ➖ .DELPREM
 ║ ➕🚫 .addbadword 🅅
 ║ ➖🚫 .delbadword 🅅
 ║ 📋 .listprem 🅅
 ║ 📋🚫 .listbadword 🅅
 ║ 📝 .autotyping 🅅
 ║ 🌟 .alwaysonline 🅅
 ╠═══════════════╣
 ║      『 BUG REPORTING 』
 ║  ☬─────────────☬  
 ║ 🐞 .bug 🅕
 ╠═══════════════╣
 ║      『 STICKER MENU 』
 ║  ☬─────────────☬  
 ║ 🎨 .sticker 🅕
 ╠═══════════════╣
 ║     『 SEARCH MENU 』
 ║  ☬─────────────☬ 
 ║ 🔍 .google 🅕
 ║ 📷 .insta 🅕
 ║ 📦 - .apk 🅕
 ║ 🎬 - .yts 🅕
 ║ 🌦️ - .weather 🅕
 ║ 🎵 - .lyrics 🅕
 ║ 🕵️️ - .githubstalk 🅕
 ║ 👤 - .igs 🅕
 ╠═══════════════╣
 ║     『 DOWNLOAD MENU 』
 ║ ☬─────────────☬ 
 ║ 📽️ - .video 🅕
 ║ 🎵 - .song 🅕
 ║ 📂 - .fb 🅕
 ║ 📦 - .gdrive 🅕
 ║ 📦 - .gitclone 🅕
 ╠══════════════╣
 ║     『 ANIME 18+ MENU 』
 ║ ☬─────────────────☬ 
 ║ 🚫 - .antinsfw 🅕
 ║ 🔞 - .nsfwmenu 🅕
 ╚═══════════════╝
 ╔═══════════════╗
 ║🤖 𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫
 ║════════════════
 ║  👨‍💻 *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐠𝐬𝐬 𝐭𝐞𝐚𝐦*
 ╚═══════════════╝
`,
  nsfwmenu: `
 ╔═══════════════╗
 ║     『 ANIME (18+) 』
 ║  ☬─────────────────☬  
 ║ 🍑 - .hentai 🅕 
 ║ 😺 - .neko  🅕 
 ║ 🙇♂️ - .trap   🅕 
 ║ 💦 - .gasm 🅕 
 ║ 😮 - .ahegao 🅕 
 ║ 🍑 - .ass 🅕 
 ║ 🔞 - .bdsm 🅕 
 ║ 👄 - .blowjob 🅕 
 ║ 👀 - .cuckold 🅕 
 ║ 💦 - .cum 🅕
 ║ 👩🦰 - .milf 🅕 
 ║ 🦄 - .eba 🅕 
 ║ 💋 - .ero 🅕 
 ║ 👠 - .femdom 🅕 
 ║ 👣 - .foot 🅕 
 ║ 🥂 - .gangbang 🅕
 ║ 👓 - .glasses 🅕 
 ║ 🎸 - .jahy 🅕 
 ║ 🍆 - .masturbation 🅕 
 ║ 📚 - .manga   🅕 
 ║ 😼 - .neko-hentai  🅕 
 ║ 😽 - .neko-hentai2 🅕 
 ║ 🍭 - .nsfwloli 🅕 
 ║ 🎉 - .orgy 🅕 
 ║ 👙 - .panties 🅕 
 ║ 🍑 - .pussy 🅕 
 ║ 🐙 - .tentacles 🅕
 ║ 🦵 - .thighs 🅕 
 ║ 👭 - .yuri 🅕 
 ║ 🩱 - .zettai 🅕 
 ╚═══════════════╝
 ╔═══════════════╗
 ║🤖 𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫
 ║════════════════
 ║  👨‍💻 *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐠𝐬𝐬 𝐭𝐞𝐚𝐦*
 ╚═══════════════╝
  `
};
