const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6282346841421@s.whatsapp.net"]
global.nomerOwner = "6282346841421"
global.nomorOwner = ['6282346841421']
global.namaDeveloper = "CybotVIP"
global.namaBot = "CybotVIP"
global.packname = ""
global.author = "Sticker By CYCI CNS"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/