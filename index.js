const { Client } = require("discord.js")
const client = new Client({intents:32767})
const axios = require("axios")
const config = { kanalId:"", token:"" }
async function getLatest(){
let d = await axios.get("https://nicat-dcw.me/api/v1/deprem")
return d;
}
client.on("ready", () => {
const call = getLatest()
call.map(x=>{
client.channels.cache.get(config.kanalId).send({
content:`Derinlik ${x.ml} | Şehir: ${x.yer}`
})
})
}
client.login(config.token)
