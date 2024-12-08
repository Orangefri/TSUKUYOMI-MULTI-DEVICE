const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="Itachiuchiha@gmail.com"
global.location="Konoha, HIDDEN LEAF."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Orangefri/TSUKUYOMI-MD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p";
global.website=process.env.GURL || "https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/b5x33a.jpg" || "https://files.catbox.moe/e7kfcs.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© AnbuBlackOps" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27710200228";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/ldqbq0.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,27710200228";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,27710200228";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27710200228,27710200228";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_27_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIweVNsOUFTZEc0MnlLWjVKM3Y0OXE5V3VoZ3RYcnNPdHBiZTFsVVJNU0pvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIUEJRSmtyWFRQZTU0cHpud1N5ZjR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5ODAxYjg0LWNlMzQtNGNlZS04MTUwLWFjOGZmYTgwM2EzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAxNDMsXG4gICAgICAyMzgsXG4gICAgICAxMjAsXG4gICAgICA3LFxuICAgICAgODYsXG4gICAgICA1LFxuICAgICAgMTExLFxuICAgICAgMTIxLFxuICAgICAgMjM2LFxuICAgICAgMTkwLFxuICAgICAgMjIzLFxuICAgICAgMTk1LFxuICAgICAgMTE5LFxuICAgICAgMTcyLFxuICAgICAgMTc3LFxuICAgICAgOTIsXG4gICAgICAxNTQsXG4gICAgICA0LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgNzAsXG4gICAgICAxOTQsXG4gICAgICA5MSxcbiAgICAgIDEzLFxuICAgICAgMjM3LFxuICAgICAgMTc4LFxuICAgICAgMzMsXG4gICAgICAzMSxcbiAgICAgIDUzLFxuICAgICAgMTgsXG4gICAgICAxMixcbiAgICAgIDgsXG4gICAgICAxNjIsXG4gICAgICA2MixcbiAgICAgIDEyNSxcbiAgICAgIDExNSxcbiAgICAgIDc4LFxuICAgICAgMTQzLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTkFSQlpZSkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzEwMjAwMjI4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk5NzM0NTM5OTYyMjE6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCt2NFBVR0VQWG8xYm9HR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyVVNwSVQ2TU1ySndPU1JWRnpNdklQbEFUZzNIdzFFTDh3ajlUcEhZaEZ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJqTkJDMk1NSHFqT1hsaTdBempCN3FKay83U3pTZlpvSzdkeEQyTkFlakpJbVpVNEljTS9WTGFPRWdZRm9EVGQ3eE9MZXh3YkxhbEkyalhURi96aEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxFemM1MThHZ1pFcnRIbGZXUDVTbU5nRjhLc3hMeDMwZ09PbG54NVBTd1BnS29XY3pDaUFUSUpudVhVV1BUS3JUMm5mQjhQQVpOSFk2cmdPTXhuMUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzEwMjAwMjI4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY1MzYyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1yLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQkcwa0R6bVpqUWJ0MklRakVKMVBsam5nbnRmZDd4SDZqcnFMMUZlVWxtOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODU3NTU4NDYzLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsOCwxMF19LFwidGltZXN0YW1wXCI6XCIxNzMzMTkyNzkxNDU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ AnbuBlackOps ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝑰𝑻𝑨𝑪𝑯𝑰』*\n youtube.com/UchihaItachi"),
 
  author : process.env.PACK_AUTHER|| "AnbuBlackOps",
  packname: process.env.PACK_NAME || "Mangekyou Sharingan",
  botname : process.env.BOT_NAME  || "𝑻𝑺𝑼𝑲𝑼𝒀𝑶𝑴𝑰 𝑴𝑫",
  ownername:process.env.OWNER_NAME|| "AnbuBlackOp1",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ITACHI"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://files.catbox.moe/e7kfcs.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
