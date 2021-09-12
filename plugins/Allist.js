/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX බටන් බලන්නත ආවෙ 😂 මේකත් උස්සපන් චීත්තයක් නෙ උබ තමා අපෙ එව්වා උස්සන්නෙ
*/

const Amazone = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('amazone');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

Amazone.addCommand({pattern: 'menu', fromMe: true, desc: Lang.MENU}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '📑මූලික උදව් | 👩‍🦰HELP-LIST', description: "⚙Bot පිළිබද අවබෝධයක් සහ මූලික උදව්.\n\nhi \nj hhh \n \n hi", rowId:"rowid1"},
        {title: '📑සම්පූර්ණ විධාන ලැයිස්තුව | 👩‍🦰ALL-COMMANDS', description: "⚙සම්පූර්ණ විධාන ලැයිස්තුව.", rowId:"rowid2"},
        {title: '📑Logo සැකසීම | 👩‍🦰LOGO-LIST', description: "⚙Logo සැකසීමෙ විධාන.", rowId:"rowid3"},
        {title: '📑මාධ්‍ය මෙවලම් | 👩‍🦰MEDIA-LIST', description: "⚙එය මාධ්‍ය මෙවලම් 25+ ඇතුලත් විධාන ලැයිස්තුව.", rowId:"rowid4"},
        {title: '📑බාගත කිරීම් | 👩‍🦰DOWNLOAD-LIST', description: "⚙එය මාධ්‍ය බාගත කිරීම් ඇතුලත් විධාන ලැයිස්තුව.", rowId:"rowid5"},
        {title: '📑පරිපාලක විධාන | 👩‍🦰ADMIN-LIST', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.\n\n\n*◁=====👩‍🦰Queen Alexa Admin Panel====▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```\n\n*🌀විධානය* : .rename\n*💠විස්තරය* : සමූහයෙ නම වෙනස් කරයි.\n\n*🌀විධානය* : .safemode on -off\n*💠විස්තරය* : අර queen මේ queen ඔයාගෙ ගෲප් එක ස්පෑම් ගහන්න හැදුවොත් Auto Remove.", rowId:"rowid6"},
        {title: '📑ඇනිම් ලැයිස්තුව | 👩‍🦰ANIME-LIST', description: "⚙Ramdom ඇනිම් ලැයිස්තුව.\n\n\n*👩‍🦰Amazone Alexa Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷", rowId:"👩‍🦰ANIME-LIST"},
        {title: '📑මීම් ලැයිස්තුව   | 👩‍🦰MEME-LIST', description: "⚙මීම් සැකසීමෙ ලැයිස්තුව.\n\n\n*╔═════◉ᴀᴍᴀᴢᴏɴᴇ◉═════╗*\n           👩‍🦰ǫᴜᴇᴇɴ ᴀᴍᴀᴢᴏɴᴇ 🪐\n*❖═මීම් ලැයිස්තුව ᴍᴇᴍᴇ ᴘᴀᴄᴋ═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.mcn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v*", rowId:"rowid8"},
        {title: '📑Ttp ලැයිස්තුව   | 👩‍🦰TTP-LIST', description: "⚙TTP ලැයිස්තුව.", rowId:"rowid9"}
        {title: '📑පොත් ලැයිස්තුව   | 👩‍🦰BOOK-LIST', description: "පොත් ලැයිස්තුව.\n\n\n*=====👩‍🦰Amazone සිංහල නවකතා ලැයිස්තුව====*\n\n🔎  .1book\n📚රාවණා\n\n🔎 .2book\n📚ශ්‍රී රාවණා පුවත\n\n🔎 .3book\n📚මළවුන්ගෙන් අවුරුදු දා\n\n🔎 .4book\n📚මළගිය ඇත්තෝ\n\n🔎 .5book\n📚ගග අද්දර\n\n🔎 .6book\n📚මීනා\n\n🔎 .7book\n📚පිච්ච මල\n\n🔎 .8book\n📚අම්මා\n\n🔎 .9book\n📚තෙරීසා\n\n🔎 .10book\n📚සෙංකොට්ටං\n\n🔎 .11book\n📚අරණකට පෙම් බැද\n\n🔎 .12book\📚ජනාධිපති තාත්තා\n\n🔎 .13book\n📚පිපියන් දාස්පෙති\n\n🔎 .14book\n📚වනගත වීරයෝ\n\n🔎 .15book\n📚මනමාල මුවැත්තී\n\n🔎 .16book\n📚සුදු රෙදි හොරා\n\n🔎 .17book\n📚ලොවීනා\n\n🔎 .18book\n📚පවුකාරයාට ගල් ගැසීම\n\n🔎 .19book\n📚ආදරෙයි බුබුළු\n\n🔎 .20book\n📚අහම්බ කාරක\n\n*⏱දිනෙන් දින මෙම ලැයිස්තුව Update වේ පොත් 2500ක් ඇතුලත් කිරීම අරමුණ වේ📑*", rowId:"rowid10"}
        {title: '📑APK ලැයිස්තුව   | 👩‍🦰APK-LIST', description: "⚙APK ලැයිස්තුව.", rowId:"rowid9"}
       ]
       
       const sections = [{title: "Command Panel", rows: rows}]
       
       const button = {
        buttonText: 'Click Me!',
        description: "👩‍🦰Amazone Alexa මූලික විධාන ලැයිස්තු - Command panel",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));

if (Config.WORKTYPE == 'public') {

Amazone.addCommand({pattern: 'menu', fromMe: false, dontaddCommandList:true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '📑මූලික උදව් | MAIN HELP!', description: "⚙Bot පිළිබද අවබෝධයක් සහ මූලික උදව්.", rowId:"rowid1"},
        {title: '📑සම්පූර්ණ විධාන ලැයිස්තුව | ALL COMMANDS!', description: "⚙සම්පූර්ණ විධාන ලැයිස්තුව.", rowId:"rowid2"},
        {title: '📑Logo සැකසීම | LOGO CMD!', description: "⚙Logo සැකසීමෙ විධාන.", rowId:"rowid3"},
        {title: '📑මාධ්‍ය මෙවලම් | MEDIA CMD!', description: "⚙එය මාධ්‍ය මෙවලම් 25+ ඇතුලත් විධාන ලැයිස්තුව.", rowId:"rowid4"},
        {title: '📑බාගත කිරීම් | DOWNLOAD CMD!', description: "⚙එය මාධ්‍ය බාගත කිරීම් ඇතුලත් විධාන ලැයිස්තුව.", rowId:"rowid5"},
        {title: '📑පරිපාලක විධාන | ADMIN LIST!', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.", rowId:"rowid6"},
        {title: '📑ඇනිම් ලැයිස්තුව | ANIME PACK!', description: "⚙Ramdom ඇනිම් ලැයිස්තුව.", rowId:"rowid7"},
        {title: '📑මීම් ලැයිස්තුව   | MEME PACK!', description: "⚙මීම් සැකසීමෙ ලැයිස්තුව.", rowId:"rowid8"},
        {title: '📑Ttp ලැයිස්තුව   | TTP LIST!', description: "⚙TTP ලැයිස්තුව.", rowId:"rowid9"}
       ]
       
       const sections = [{title: "Command Panel", rows: rows}]
       
       const button = {
        buttonText: 'Click Me!',
        description: "👩‍🦰Amazone Alexa මූලික විධාන ලැයිස්තු",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
}
