// BEBERAPA MODULE UNTUK SUPPORT BOT
const Discord = require("discord.js");
const modals  = require("discord-modals");
const ora     = require("ora"); //MEMBUAT ANIMASI LOADING
const chalk   = require("chalk"); // MEMBUAT TULISAN TEBAL MERAH
const db      = require("quick.db"); //DATABASE MODE LITE
const fs      = require("node:fs");
const { STATUS } = require("./status.json")

// KONSTRUKTORNYA
const data    = new db.QuickDB({filePath:__dirname+"/def.sqlite"})
const client  = new Discord.Client({
   intents: 32767 
});
modals(client);

// EVENT READY DAN TAMBAHAN SLASH COMMAND UNTUK MEMPERMUDAH
client.on("ready", () => {
    // PROSES LOADING BOT SEBELUM READY
    const _0x34e3f1=_0x4de0;(function(_0x4eafa6,_0x1fd8eb){const _0x158ae8=_0x4de0,_0x3c386b=_0x4eafa6();while(!![]){try{const _0xff485b=-parseInt(_0x158ae8(0xfa))/0x1+parseInt(_0x158ae8(0xfe))/0x2*(parseInt(_0x158ae8(0x101))/0x3)+-parseInt(_0x158ae8(0xfd))/0x4*(-parseInt(_0x158ae8(0xf9))/0x5)+parseInt(_0x158ae8(0xf7))/0x6*(-parseInt(_0x158ae8(0xfb))/0x7)+-parseInt(_0x158ae8(0x102))/0x8*(parseInt(_0x158ae8(0x100))/0x9)+-parseInt(_0x158ae8(0x103))/0xa*(-parseInt(_0x158ae8(0xf8))/0xb)+parseInt(_0x158ae8(0xfc))/0xc;if(_0xff485b===_0x1fd8eb)break;else _0x3c386b['push'](_0x3c386b['shift']());}catch(_0xf52157){_0x3c386b['push'](_0x3c386b['shift']());}}}(_0x2cad,0x4b3fe));let _=ora(_0x34e3f1(0xff))['start']();function _0x4de0(_0xb341aa,_0x57e086){const _0x2cadb2=_0x2cad();return _0x4de0=function(_0x4de0a2,_0x5b8de9){_0x4de0a2=_0x4de0a2-0xf7;let _0x2ff654=_0x2cadb2[_0x4de0a2];return _0x2ff654;},_0x4de0(_0xb341aa,_0x57e086);}function _0x2cad(){const _0x1f88a1=['1356006HdAPVn','591657swuEzr','95CEjljB','106425GjfBXu','7LJKnDn','505752EEKPvI','38820OFPcPe','1193958VImIGS','Sedang\x20Loading\x20harap\x20tunggu\x20ya\x20ges...','1260noyLzW','3BJsEGz','22744nWxGce','40PYYOxd'];_0x2cad=function(){return _0x1f88a1;};return _0x2cad();}
    var _0x47a7ef=_0x45b2;function _0x45b2(_0x46286f,_0xa69d0d){var _0x3d00fa=_0x3d00();return _0x45b2=function(_0x45b289,_0x4e9da5){_0x45b289=_0x45b289-0x1b9;var _0x49a9cd=_0x3d00fa[_0x45b289];return _0x49a9cd;},_0x45b2(_0x46286f,_0xa69d0d);}function _0x3d00(){var _0x722306=['Developer\x20by\x20Near\x20Hoshinova','7AWMYKK','yellow','username','2000560vHgPuh','6569376lAzoFi','611454GjMJQN','198329dZpctB','665964fioIif','color','358515AxZGCA','Discord\x20Account:\x20XiaoXiao#5925','Berhasil\x20masuk\x20kedalam\x20BOT\x20','succeed','Wajib\x20Follow\x20github\x20biar\x20Work\x20ya\x20https://github.com/GarudaID','707475EXAKDo','red','-------------------------------------------'];_0x3d00=function(){return _0x722306;};return _0x3d00();}(function(_0x36e745,_0x349521){var _0x16dfd4=_0x45b2,_0x58c10b=_0x36e745();while(!![]){try{var _0xfa5bb7=parseInt(_0x16dfd4(0x1bb))/0x1+parseInt(_0x16dfd4(0x1bc))/0x2+-parseInt(_0x16dfd4(0x1be))/0x3+parseInt(_0x16dfd4(0x1ca))/0x4+parseInt(_0x16dfd4(0x1c3))/0x5+parseInt(_0x16dfd4(0x1ba))/0x6*(parseInt(_0x16dfd4(0x1c7))/0x7)+-parseInt(_0x16dfd4(0x1b9))/0x8;if(_0xfa5bb7===_0x349521)break;else _0x58c10b['push'](_0x58c10b['shift']());}catch(_0x24844f){_0x58c10b['push'](_0x58c10b['shift']());}}}(_0x3d00,0x51962),setTimeout(()=>_[_0x47a7ef(0x1bd)]=_0x47a7ef(0x1c8),0x1ae),setTimeout(()=>_['succeed'](_0x47a7ef(0x1c5)),0x4b0),setTimeout(()=>_[_0x47a7ef(0x1c1)](_0x47a7ef(0x1c0)+chalk[_0x47a7ef(0x1c4)]['bold'](client['user'][_0x47a7ef(0x1c9)])),0x4b0),setTimeout(()=>_[_0x47a7ef(0x1c1)]('-------------------------------------------'),0x4b0),setTimeout(()=>_[_0x47a7ef(0x1c1)](_0x47a7ef(0x1c6)),0x4b0),setTimeout(()=>_[_0x47a7ef(0x1c1)](_0x47a7ef(0x1bf)),0x4b0),setTimeout(()=>_[_0x47a7ef(0x1c1)]('Discord\x20Server:\x20https://dsc.gg/svcc'),0x4b0),setTimeout(()=>_[_0x47a7ef(0x1c1)](_0x47a7ef(0x1c2)),0x4b0),setTimeout(()=>_['succeed'](_0x47a7ef(0x1c5)),0x4b0));
    client.user.setActivity('Kotak Saran');
    client.user.setStatus("phone");
    let commands = [
        {name:"set-saran-channel",description:"tetapkan tempat saran",type:1},
        {name:"hapus-tempatsaran-channel",description:"menghapus channel tempat saran",type:1},
        {name:"suggestion-logs",description:"tambahkan log untuk saran apa pun",type:1},
        {name:"kirim-saran",description:"kirim saran ke saluran saran",type:1},
        {name:"get-user-suggestions",description:"dapatkan saran dari pengguna mana pun",type:1,options:[
            {name:"user",description:"pengguna Anda akan mendapatkan saran dari",required:true,type:6}
        ]},
        {name:"my-suggestions",description:"lihat semua saran Anda dan edit",type:1,options:[
            {name:"message_id",description:"id dari pesan yang tidak akan Anda edit",required:false,type:3}
        ]}
    ];
    client.application.commands.set(commands)
}).login(fs.readFileSync(__dirname+"/TokenConfig/token.txt", {encoding:"utf-8"})); // CATCH TOKEN DARI FILE TOKEN.TXT

// DETEKSI INTERAKSI EVENTS
client.on("interactionCreate", async(interaction) => {
    // BEBERAPA KONDISI
    if (interaction.isButton()) return await buttons(interaction);
    if (
        !interaction.isCommand()
        || 
        !interaction.guild?.id
        ||
        !interaction.user
        ||
        interaction.channel.type == "DM"
        ||
        !interaction.guild.me.permissionsIn(interaction.channel)
        .has(Discord.Permissions.FLAGS.SEND_MESSAGES)
       )
    return;
    if (interaction.commandName == "set-saran-channel") {
        if (!interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))
        return interaction.reply(
            {content:"Kamu butuh izin untuk menggunakan perintah **`"+interaction.commandName+"`** command.",ephemeral:true}
        )
        let channel = interaction.channelId;
        let  value   = {channel:channel}
        let   key   = "SuggestionsChannel_"+interaction.guild?.id;

        if ((await (data.get(key)))) {
            interaction.reply(
                {content:"📝 Ini adalah **CHANNEL** tempat saran.",ephemeral:true}
            )
        }

        else {
            await data.set(key, value)
            interaction.reply(
                {content:"<#"+channel+"> telah di tetapkan tempat saran di channel **"+interaction.guild?.name+"**.",ephemeral:true}
            )
        }
    }
    else if (interaction.commandName == "suggestion-logs") {
        if (!interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))
        return interaction.reply(
            {content:"<:peringatan:1026504194116567150> Kamu membutuhkan izin untuk bisa menggunakan perintah **`"+interaction.commandName+"`** command.",ephemeral:true}
        )
        let channel = interaction.channelId;
        let  value   = {channel:channel}
        let   key   = "SuggestionsLogsChannel_"+interaction.guild?.id;
        
        if ((await (data.get(key)))?.channel == channel) {
            await data.delete(key)
            interaction.reply(
                {content:"<:peringatan:1026504194116567150> **CHANNEL** Logs telah di hapus.",ephemeral:true}
            )
        }

        else {
            await data.set(key, value);
            interaction.reply(
                {content:"<#"+channel+"> Telah di atur Logs channel ke **"+interaction.guild?.name+"**.",ephemeral:true}
            )
        }
    }
    else if (interaction.commandName == "hapus-tempatsaran-channel") {
        if (!interaction.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))
        return interaction.reply(
            {content:"<:peringatan:1026504194116567150> kamu membutuhkan izin untuk bisa menggunakan commands **`"+interaction.commandName+"`** command.",ephemeral:true}
        )
        let key     = "SuggestionsChannel_"+interaction.guild?.id;
        
        if ((await (data.get(key)))) {
            await data.delete(key)
            interaction.reply(
                {content:"<:peringatan:1026504194116567150> **CHANNEL** tempat saran telah dihapus.",ephemeral:true}
            )
        }

        else {
            interaction.reply(
                {content:"<:peringatan:1026504194116567150> Disini tidak ada **CHANNEL** tempat saran.",ephemeral:true}
            )
        }
    }
    else if (interaction.commandName == "get-user-suggestions") {
        let  userInfos  = interaction.options.getUser("user",true);
        let   userKey   = "Suggestions_"+interaction.guild.id+"_"+userInfos.id.toString()+".sugs";
        let    udata    = await data.get(userKey);

        if (udata == null) return interaction.reply(
            {content:"<@"+userInfos.id+"> tidak memiliki saran tentang **"+interaction.guild?.name+"**.",ephemeral:true}
        )
        else {
            let calSugs = await udata.map((message, index) => `${index + 1}. [pergi ke pesan saran](${message.url})\n\`\`\`\n${message.content}\`\`\``).join("\n\n");
            interaction.reply(
                {content:calSugs,ephemeral:true}
            )
        }
    }
    else if (interaction.commandName == "kirim-saran") {
        const modal = new modals.Modal()
        .setCustomId('send')
        .setTitle('ketik saran Anda di bawah ini:')
        .addComponents(
          new modals.TextInputComponent()
            .setCustomId('input')
            .setLabel('Masukan Textnya disini')
            .setStyle('LONG')
            .setMinLength(3)
            .setMaxLength(1024)
            .setPlaceholder('tuliskan saran kamu disini!')
            .setRequired(true)
        );

        let modalData = await modals.showModal(modal, {
            client: client,
            interaction: interaction
        });
        modalData;
    }
    else if (interaction.commandName == "my-suggestions") {
        let  messageId  = interaction.options.getString("message_id");
        let   userKey   = "Suggestions_"+interaction.guild.id+"_"+interaction.user.id.toString()+".sugs";
        let    udata    = await data.get(userKey);
        if (!messageId) {
            if (udata == null) return interaction.reply(
                {content:"Anda tidak punya saran tentang **"+interaction.guild?.name+"**.",ephemeral:true}
            )
            else {
                let calSugs = await udata.map((message, index) => `${index + 1}. [pergi ke pesan saran](${message.url}) (${message.url.split("https://discord.com/channels/"+interaction.guild.id+"/").join("").split("/")[1]})\n\`\`\`\n${message.content}\`\`\``).join("\n\n");
                interaction.reply(
                    {content:calSugs,ephemeral:true}
                )
            }
        }

        else {
            let key     = "SuggestionsChannel_"+interaction.guild?.id;
        
            if (await (await data.get(key))?.channel) {
                let c = interaction.guild.channels.cache.get(await (await data.get(key))?.channel);
                try {
                let m = await c.messages.fetch(messageId);

                await interaction.reply({content: "How we can help u??",components: [
                    new Discord.MessageActionRow()
                      .addComponents(
                        new Discord.MessageButton()
                        .setCustomId("delete")
                        .setStyle("DANGER")
                        .setLabel("🗑️ Hapus"),
                        new Discord.MessageButton()
                        .setCustomId("edit")
                        .setStyle("SECONDARY")
                        .setLabel("🖍️ Edit")
                      )
                ],ephemeral:true});
                interaction.channel.createMessageComponentCollector({
                    componentType: "BUTTON",
                    filter: (u) => u.user.id == interaction.user.id,
                    max: 1
                }).on("collect", async(s) => {
                    interaction.editReply({content:"Makasih coy telah menggunakan kita.",components:[]})
                    if (s.customId == "delete") {
                        let u = interaction.guild.members.cache.find(o => o.user.username == m.embeds[0].author.name);

                        let     userKey     = "Suggestions_"+interaction.guild?.id+"_"+u.id+".sugs";
                        let       key2      = messageId.toString();
                        let      data32     = await data.get(userKey);
                        let       newD      = []
                        data32.forEach(async(d) => {
                        if (d.content !== m.embeds[0].description) {
                            newD.push({
                                url: d.url,
                                content: d.content
                                })
                            }
                        });
                        setTimeout(async() => {
                            await data.set(userKey, newD);
                            await data.delete(key2);
                            if (m && m.deletable) m.delete();
                        }, 6574)
                    } else {
                        
                    }
                })
                } catch (err) {
                    interaction.channel.send(`\`\`\`\n${err}\`\`\``)
                }
            } else interaction.reply("error ??: channel saran tidak ada di sini?")
        }
    }
    
});

// RESPOND TERHADAP MODAL
client.on('modalSubmit', async (modal) => {
    if (modal.customId == 'send') {
      let         key         = "SuggestionsChannel_"+modal.guild?.id;
      let         res         = modal.getTextInputValue('input');
      let        value        = await data.get(key)?.channel
      let       channel       = client.channels.cache.get(value);

      if (!channel) return modal.reply(
        {content:'Maaf! Saya tidak dapat menemukan saluran saran di server ini',ephemeral:true}
      );

      modal.reply(
        {content:'Selesai! Saran Anda telah berhasil dikirim, saran:```\n'+res+'```',ephemeral:true}
      );
      channel.send({
        embeds: [
            {author:{
                name: modal.user.username,
                iconURL: modal.user.avatarURL({dynamic:true})
            },color:0x2c2f33,timestamp: new Date(),footer:{
                iconURL: modal.guild?.iconURL({dynamic:true}),
                text: modal.guild?.name
            },description:res,fields:[
                {name:"<:8410pepephone202:973771152445038662> Terima kasih sarannya!",value:"```\nSaran anda telah diproses```",inline:true},
            ]}
        ],
    }).then(async message => {
        
        let dataConstructor = {url:message.url.toString(),content:res}
        let     userKey     = "Suggestions_"+modal.guild?.id+"_"+modal.user.id.toString()+".sugs";
        let      udata      = await data.get(userKey)
        let      value      = {voters: [],votersInfo: []}
        let       key       = message.id.toString()

        if (udata == null) await data.set(userKey, [dataConstructor]);
        else await data.push(userKey, dataConstructor)

        await data.set(key, value);
        
      });
    }  
  });

// MESSAGE EVENT
client.on("messageCreate", async(msg) => {
    if (msg.author.bot) {
        if (msg.components[0]?.components[0]?.customId !== "up") return;

        let   key   = "SuggestionsLogsChannel_"+msg.guild?.id;
        let  data2  = await data.get(key);

        let channel = msg.guild.channels.cache.get(data2?.channel);
        if (!channel) return;

        if (channel.isText()) channel.send({
            content: "new **Suggestion** here: "+msg.url,
            embeds: [
                {
                    color: "YELLOW",
                    description: `**\`\`\`\n${msg.embeds[0].description}\`\`\`**\nBy: @${msg.embeds[0].author.name}`,
                    footer: {text:"At:"},
                    timestamp: msg.embeds[0].timestamp,
                }
            ],
            
        })
    }
    else {
        if (!msg.guild?.id) return;

        let          key        = "SuggestionsChannel_"+msg.guild?.id;
        let         guild       = msg.guild
        let        channel      = msg.channel;
        let       msgAuthor     = msg.author;
        let      rawEContent    = msg["content"]
        let data2 = await data.get(key);
        if (data2 == null) return;

        if (msg.channelId !== data2.channel) return;
        if (msg.deletable) msg.delete();
        
        channel.send({
            embeds: [
                {author:{
                    name: msgAuthor.username,
                    iconURL: msgAuthor.avatarURL({dynamic:true})
                },color:0x2c2f33,timestamp: new Date(),footer:{
                    iconURL: guild.iconURL({dynamic:true}),
                    text: guild.name
                },description:rawEContent,fields:[
                    {name:"<:8410pepephone202:973771152445038662> Terima kasih sarannya!",value:"```\nSaran anda telah diproses```",inline:true},                ]}
            ],
        }).then(async message => {
            
            let dataConstructor = {url:message.url.toString(),content:rawEContent}
            let     userKey     = "Suggestions_"+msg.guild.id+"_"+msg.author.id.toString()+".sugs";
            let      udata      = await data.get(userKey)
            let      value      = {voters: [],votersInfo: []}
            let       key       = message.id.toString()

            if (udata == null) await data.set(userKey, [dataConstructor]);
            else await data.push(userKey, dataConstructor)

            await data.set(key, value);
            
        });
    }
})
/**
 * 
 * @param {Discord.ButtonInteraction} interaction 
 */
async function buttons(interaction) {
    await interaction.deferUpdate().catch(() => {})
    if (interaction.customId.startsWith("remove_")) {
        let id      = interaction.customId.split("remove_").join("");
        let key     = "SuggestionsChannel_"+interaction.guild?.id;
        
        if (await (await data.get(key))?.channel) {
            
            let c = interaction.guild.channels.cache.get(await (await data.get(key))?.channel);
            if (c.isText()) {
                interaction.message.edit({content:"Tempat saran telah dihapus.",embeds:[],components:[]})
                try {
                let m = await c.messages.fetch(id);
                
                // MENCOBA MENDAPATKAN USER
                let u = interaction.guild.members.cache.find(o => o.user.username == m.embeds[0].author.name);
                if (u) u.send({
                    content: "saran anda di **"+interaction.guild.name+"** telah dihapus oleh admin..."
                }).catch(() => {});
  
                let     userKey     = "Suggestions_"+interaction.guild?.id+"_"+u.id+".sugs";
                let       key2      = id.toString();
                let      data32     = await data.get(userKey);
                let       newD      = []
                data32.forEach(async(d) => {
                if (d.content !== m.embeds[0].description) {
                    newD.push({
                        url: d.url,
                        content: d.content
                        })
                    }
                });
                setTimeout(async() => {
                    await data.set(userKey, newD);
                    await data.delete(key2);
                    if (m && m.deletable) m.delete();
                }, 6574)
              } catch {}
            }
        }
    }

    else {
        switch (interaction.customId) {
            case "up": {
                let   message   = interaction.message;
                let    embed    = message.embeds[0];
                let    dater    = new Date().getTime(); //`${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                let     key     = message.id.toString()+".voters";
                let     ke2     = message.id.toString()+".votersInfo";
                let    value    = {user:interaction.user,date: dater}
                let  newNumber  = Number(embed.fields[0].value.split("```\n")[1].split("```")[0]) + 1;
                let    voter    = await data.get(message.id.toString()).voters;
                if (voter.includes(interaction.user.id)) return interaction.followUp({content:"You have voted for this suggestion before.", ephemeral:true});
                let editedEmbed = {author:embed.author,color:embed.color,timestamp: embed.timestamp,footer:embed.footer,
                    description:embed.description,fields:[
                    {name:"<:8410pepephone202:973771152445038662> Terima kasih sarannya!",value:`\`\`\`\n${newNumber}\`\`\``,inline:true},
                    embed.fields[1],
                ]}
                await data.push(key, interaction.user.id);
                await data.push(ke2, value)
                message.edit({components: message.components,embeds: [editedEmbed]})
            }
            break;

            case "down": {
                let   message   = interaction.message;
                let    embed    = message.embeds[0];
                let    dater    = new Date().getTime(); //`${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
                let     key     = message.id.toString()+".voters";
                let     ke2     = message.id.toString()+".votersInfo";
                let    value    = {user:interaction.user,date: dater}
                let  newNumber  = Number(embed.fields[1].value.split("```\n")[1].split("```")[0]) + 1;
                let    voter    = await data.get(message.id.toString()).voters;
                if (voter.includes(interaction.user.id)) return interaction.followUp({content:"You have voted for this suggestion before.", ephemeral:true});
                let editedEmbed = {author:embed.author,color:embed.color,timestamp: embed.timestamp,footer:embed.footer,
                    description:embed.description,fields:[
                    embed.fields[0],
                    {name:"<:8410pepephone202:973771152445038662> Terima kasih sarannya!down",value:`\`\`\`\n${newNumber}\`\`\``,inline:true},
                ]}
                await data.push(key, interaction.user.id);
                await data.push(ke2, value)
                message.edit({components: message.components,embeds: [editedEmbed]})
            }
            break;
        
            case "info": {
                let   voters   = await data.get(interaction.message.id.toString()).votersInfo;
                let    raws    = voters.map((voter, index) => `${index + 1}. ${voter.user.username} - <t:${
                    require("moment")(voter.date).unix()}:R>`).join("\n")

                if (!raws) return interaction.followUp({content:"tidak ada voter", ephemeral:true}); 

                interaction.followUp({content:raws, ephemeral:true}); 
            }
            break;
            default:
                break;
        }
    }
}
