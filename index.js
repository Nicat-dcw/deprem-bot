const { Client } = require("discord.js")
const client = new Client({intents:32767})
const axios = require("axios")
const db = require("quick.db")//install 7.1.3
client.db = db;
const config = { kanalId:"", token:"" }

client.on("ready", () => {
/*deprem kontrol*/

    setInterval(async function(){

const getDepremData = await axios.get("https://api.orhanaydogdu.com.tr/deprem/live.php?limit=1")//.then(x=> {

   /* const data = x.data;

console.log(Object.keys(data.data))

})*/

        client.guilds.cache.map(x=> {

     const depremKanallar = client.db.get(`depremBilgi_${x.id}`)

        

 //   getDepremData.data.map(x => {

    if(!depremKanallar) return;

       depremKanallar.map(y => {

           const d = getDepremData.data

           const date = new Date()

      

d.result.map(async (x) => {

       

                let last = x

                  let color = ""

                if(x.mag < 3){

                color = "GREEN"

                }else if(x.mag < 4){

                color = "ORANGE"

                }else if(x.mag > 6){

                color = "RED"

                }

          

            const embed = new Discord.MessageEmbed()

            .setColor(color || "#2F3136")

            .setTitle("Deprem Gerçekleşti!")

            .setDescription(`Tüm bu veriler [Orhan Ay Doğdu](https://api.orhanaydogdu.com.tr/deprem/live.php) tarafından sağlanılıyor.`)

              .addField(`Bölge`,`${x.lokasyon}`, true)

              .addField(`Tarih`,`${x.date_day} | ${x.date_hour}`, true)

              .addField(`Büyüklük (ML)`,`${x.mag}` ,true)

              .addField(`Derinlik`,`**${x.depth}**km` ,true)

              .addField(`Boylam`,`${x.lng}`, true)

              .addField(`Enlem`,`${x.lat}`, true)

.setFooter("#GeçmişOlsunTürkiye")

                const xdd = new Date(x.date)

                const hours = xd.getHours()

                const minutes = xd.getMinutes()

                const seconds = xd.getSeconds()

                const months = xd.getMonth() +1

                const years = xd.getFullYear()

                const date = xd.getDate()

             

const c = await client.db.get(`depremLast`)

  if(c === x.timestamp){ return }

    console.log(y.kanal)

   // y.map(x=>{

        client.channels.cache.get(y.kanal).send({embeds:[embed]}).catch(err=> { return; })

//},30000)

   // })

      await client.db.set(`depremLast`, x.timestamp)

        

               //[] }

            })

       })

         //   console.log(getDepremData.data.filter(x=>x.ml))

        })

    },17000)


})
client.login(config.token)
