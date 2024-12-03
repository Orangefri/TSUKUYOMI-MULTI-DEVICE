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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,27710200228";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27710200228,27710200228";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_26_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVElVZHZ5eFJnWTF2bmZZWVpBc1diWkZoQnVjRms1NnVnSTNrc0E1ZkRCdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNWV5SGVVZWJSU3FBbEp0Rkd4ZGx6d1wiLFxuICBcInBob25lSWRcIjogXCJmN2Y2NWY3Ni00NzFiLTQ2ZDQtOGZhNi1iZjNiN2ZkMjc4MjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDk3LFxuICAgICAgMjI3LFxuICAgICAgMTIwLFxuICAgICAgMTI4LFxuICAgICAgODIsXG4gICAgICAxMjEsXG4gICAgICA5NCxcbiAgICAgIDk4LFxuICAgICAgNDAsXG4gICAgICAxODcsXG4gICAgICAxMSxcbiAgICAgIDExNixcbiAgICAgIDUyLFxuICAgICAgMTI3LFxuICAgICAgMTAyLFxuICAgICAgMjA5LFxuICAgICAgMjAzLFxuICAgICAgMTU4LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDE3MyxcbiAgICAgIDc2LFxuICAgICAgMjQzLFxuICAgICAgMjU0LFxuICAgICAgMTI5LFxuICAgICAgMTY2LFxuICAgICAgMjQ3LFxuICAgICAgMTQsXG4gICAgICA3OSxcbiAgICAgIDExNixcbiAgICAgIDM3LFxuICAgICAgNzcsXG4gICAgICAyMzMsXG4gICAgICA0NixcbiAgICAgIDE0MCxcbiAgICAgIDIsXG4gICAgICAxNixcbiAgICAgIDIwLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQjlERlRUTFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzEwMjAwMjI4OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk5NzM0NTM5OTYyMjE6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCt2NFBVR0VMVFl1Ym9HR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyVVNwSVQ2TU1ySndPU1JWRnpNdklQbEFUZzNIdzFFTDh3ajlUcEhZaEZ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpmZytjV25sN0VOZ2ZkMnlTRWJjVTJJZ2lucnNkUW9UY2EzVjVlTjR1L2JUK1gyL1cwTUUzeTNzOWNLaytOaFNnRnczRVR0Q1dWV0hWajYzNDdCOEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJycGpHYUZDQm5Eb2FDQmIwWVgrNTA0dStPQTVaYk9JckZEOG9rOXJEeXpTd2FHUkxFeXEyUEUzK0FZdngyY21vVXdqbXdLRXFKQWhsVHVKYjUveUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzEwMjAwMjI4OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzE5Mjc2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1qLmpzb24iOiAie1wia2V5RGF0YVwiOlwiclJyeEQ1djJoRjZYSE5Ma0FhOGxTaWdNaXV1cVYrTkxHb3Y2dVR6TGdSaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODU3NTU4NDYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ AnbuBlackOps ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝑰𝑻𝑨𝑪𝑯𝑰』*\n youtube.com/UchihaItachi"),
 
  author : process.env.PACK_AUTHER|| "AnbuBlackOps",
  packname: process.env.PACK_NAME || "Mangekyou Sharingan",
  botname : process.env.BOT_NAME  || "𝑻𝑺𝑼𝑲𝑼𝒀𝑶𝑴𝑰 𝑴𝑫",
  ownername:process.env.OWNER_NAME|| "𝑰𝑻𝑨𝑪𝑯𝑰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
