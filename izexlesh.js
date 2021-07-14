const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')
var prefix = ayarlar.prefix;
client.on('ready', () => {
  console.log(`Ahhh aahhh nerde o eski ramazanlar  ${client.user.username}!`);
  client.user.setActivity('Hoş geldin Ramazan !yardım', {type: "WATCHING"});
});
client.on('message', msg => {
  if (msg.content === prefix + 'iftar') {
  	if (msg.author.bot) return;
   	msg.reply(' !iftar [Şehir İsmi] | Şehirin baş harfi büyük olacak şekilde yazınız!');
  }
  if (msg.content === prefix + 'iftar'+' Adana') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4892/ADANA/TURKIYE');
  } 
    if (msg.content === prefix + 'iftar'+' Adıyaman') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4893/ADIYAMAN/TURKIYE');
  }
    if (msg.content === prefix + 'iftar'+' Afyon') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4894/AFYON/TURKIYE');
  }
    if (msg.content === prefix + 'iftar'+' Ağrı') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4895/AGRI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Amasya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4911/AMASYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Ankara') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4913/ANKARA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Antalya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4914/ANTALYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Artvin') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4921/ARTVIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Aydın') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4924/AYDIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Balıkesir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4928/BALIKESIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bilecik') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4938/BILECIK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bingöl') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4939/BINGOL/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bitlis') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4941/BITLIS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bolu') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4942/BOLU/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Burdur') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4946/BURDUR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bursa') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4947/BURSA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Çanakkale') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4953/CANAKKALE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Çankırı') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4954/CANKIRI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Çorum') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4968/CORUM/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Denizli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4976/DENIZLI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Diyarbakır') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4984/DIYARBAKIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Edirne') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4987/EDIRNE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Elazığ') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4989/ELAZIG/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Erzincan') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4995/ERZINCAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Erzurum') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4996/ERZURUM/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Eskişehir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4998/ESKISEHIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Gaziantep') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5005/GAZIANTEP/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Giresun') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5010/GIRESUN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Gümüşhane') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5015/GUMUSHANE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Hakkari') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5020/HAKKARI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Hatay') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5023/HATAY/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Isparta') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5039/ISPARTA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Mersin') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5100/MERSIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' İstanbul') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5041/ISTANBUL/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' İzmir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5043/IZMIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kars') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5062/KARS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Malatya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5094/MALATYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Manisa') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5097/MANISA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Maraş') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5046/KAHRAMANMARAS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Mardin') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5098/MARDIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Muğla') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5104/MUGLA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Muş') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5105/MUS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Nevşehir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5110/NEVSEHIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Niğde') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5111/NIGDE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Ordu') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5117/ORDU/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Rize') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5128/RIZE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Sakarya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5130/SAKARYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Samsun') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5131/SAMSUN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Siirt') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5142/SIIRT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Sinop') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5147/SINOP/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Sivas') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5149/SIVAS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Tekirdağ') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5156/TEKIRDAG/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Tokat') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5160/TOKAT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bayburt') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4931/BAYBURT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Karaman') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5056/KARAMAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kırıkkale') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5076/KIRIKKALE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Batman') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4930/BATMAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Şırnak') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5148/SIRNAK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Bartın') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4929/BARTIN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Ardahan') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4916/ARDAHAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Iğdır') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5033/IGDIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Yalova') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5174/YALOVA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Karabük') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5050/KARABUK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kilis') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5073/KILIS/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Osmaniye') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5119/OSMANIYE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Düzce') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4985/DUZCE/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kastamonu') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5065/KASTAMONU/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kayseri') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5068/KAYSERI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kırklareli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5077/KIRKLARELI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kırşehir') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5078/KIRSEHIR/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kocaeli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5082/KOCAELI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Konya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5084/KONYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Kütahya') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5092/KUTAHYA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Trabzon') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5164/TRABZON/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Tunceli') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5166/TUNCELI/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Şanlıurfa') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5133/SANLIURFA/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Uşak') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5169/USAK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Van') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5172/VAN/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Yozgat') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5178/YOZGAT/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Zonguldak') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/5181/ZONGULDAK/TURKIYE');
  }
     if (msg.content === prefix + 'iftar'+' Aksaray') {
   	msg.reply('https://iftaranekadarkaldi.com/sehir/4900/AKSARAY/TURKIYE');
  }
  if (msg.content === 'acıktım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Açlığını unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Açlığını unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Açlığını unutursun. Güneşden gitmemeye çalış!Dur dur şaka coronayı unuttuk :) Açlık başımıza vurdu iyice ');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki çatalı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki kaşığı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bıçağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }

  if (msg.content === 'susadım') {
   	if (Math.floor((Math.random() * 15) + 1) === 1) {
   		msg.reply('Az sabret iftara az kaldı!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 2) {
   		msg.reply('Sabreden deviş muradına ermiş!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 3) {
   		msg.reply('Sabret kardeşim!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 4) {
   		msg.reply('Film izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 5) {
   		msg.reply('Dizi izle. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 6) {
   		msg.reply('Oyun oyna. Susuzluğunu unutursun. :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 7) {
   		msg.reply('Ders çalış açlığını unutursun! Susuzluğunu unutursun. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 8) {
   		msg.reply('Git bi gez gel. Susuzluğunu unutursun.');
   	}else if (Math.floor((Math.random() * 15) + 1) === 9) {
   		msg.reply('Geçecek bunlar, sen neler atlattın bu ne ki? :)');
   	}else if (Math.floor((Math.random() * 15) + 1) === 10) {
   		msg.reply('Büyüyünce geçer. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 11) {
   		msg.reply('Ağla. :D');
   	}else if (Math.floor((Math.random() * 15) + 1) === 12) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki şişeyi yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 13) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki içeceği yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 14) {
   		msg.reply('Lanet olsun dostum, hemen o elindeki bardağı yere bırak!');
   	}else if (Math.floor((Math.random() * 15) + 1) === 15) {
   		msg.reply('Başka bir şey düşünmeye çalış!');
   	}
  }
  if (msg.content === 'of') {
   	msg.reply('Oflama geçer bugünler!');
  }
  if (msg.content === 'ah') {
   	msg.reply('Ah deme oh de!');
  }
  if (msg.content === 'oh') {
   	msg.reply('Oh deme püf de!');
  }
  if (msg.content === 'püf') {
   	msg.reply('Git, Barış MANÇO nun -Lambaya Püf De- dinle!');
  }
  if (msg.content === 'iftara ne kadar var') {
   	msg.reply('Şimdi öğren -> !iftar [Şehir ismi ilk harfi büyük yaz]');
  }
  if (msg.content === 'iftara kaç saat var') {
   	msg.reply('Şimdi öğren -> !iftar [Şehir ismi ilk harfi büyük yaz]');
  }
  if (msg.content === 'iftara kaç dakika var') {
   	msg.reply('Şimdi öğren -> !iftar [Şehir ismi ilk harfi büyük yaz]');
  }
  if (msg.content === 'iftara kaç gün var') {
   	msg.reply('Yok devenin bale pabucu!?');
  }

  if (msg.content === 'iftar ne zaman') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Zamanı geldiği zaman!');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('İmam uyumuş olmasın?');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('İmam bayıldı(!)');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Biraz Google la! ;)');
   	}
  }

  if (msg.content === 'iftara ne kadar kaldı') {
  	if (Math.floor((Math.random() * 4) + 1) === 1) {
   		msg.reply('Çok değil! https://media.giphy.com/media/xUOwGn1kOzKcUZPBSw/giphy.gif');
   	}else if (Math.floor((Math.random() * 4) + 1) === 2) {
   		msg.reply('Görende 3 gün aç kaldı sanacak! www.com');
   	}else if (Math.floor((Math.random() * 4) + 1) === 3) {
   		msg.reply('Görende 3 gün susuz kaldı sanacak! www.com');
   	}else if (Math.floor((Math.random() * 4) + 1) === 4) {
   		msg.reply('Biraz Google la! ;)');
   	}
  }
  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }
  if (msg.content === 'bye bye') {
   	msg.reply('su gibi git su gibi gel ');
  }
  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }
  if (msg.content === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :) ');
  }
  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler ');
  }
  if (msg.content === 'sa') {
   	msg.reply('as');
  }
  if (msg.content === 'Sa') {
   	msg.reply('as');
  }
  if (msg.content === 's.a') {
   	msg.reply('a.s');
  }
  if (msg.content === 'S.a') {
   	msg.reply('as');
  }
  if (msg.content === 'sea') {
   	msg.reply('as');
  }
  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }
  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }
  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
  if (msg.content === 'iftar') {
   	msg.reply('Şimdi öğren -> !iftar [Şehir ismi ilk harfi büyük yaz] ');
  }
  if (msg.content === 'oruçda geldi') {
   	msg.reply('Gelmesin mi ? :)');
  }
  if (msg.content === 'gelsin') {
   	msg.reply('iyi tamam geldim :)');
  }
  if (msg.content === 'selamun aleyküm') {
   	msg.reply('Ve Aleykümselam');
  }
    if (msg.content === '!yardım') {
   	msg.reply('!iftar = Yazarak istediğiniz şehirin iftar saatine bakarsınız \n susadım = Sizlere mesajlar atar \n acıktım = Sizlere mesajlar atar \n iftar ne zaman = Sizlere mesajlar atar \n iftara ne kadar kaldı = Sizlere mesajlar atar');
  }

});
client.login(ayarlar.token); //Tokeni .env giriniz eğer ayarlar.json girmek istiyotsanız = client.login(ayarlar.token); yapınız!
