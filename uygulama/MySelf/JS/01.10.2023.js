// console.log("*********");
// const story="Sadece iyi değil mükemmel iyi günler diliyorum.";
// console.log(story);
// console.log("Soru 1");
// console.log(story.length);
// console.log("Soru 2");
// console.log(story.length-1);
// console.log("Soru 3");
// console.log(story.indexOf("iyi"));
// console.log(story.lastIndexOf("iyi"));
// console.log("Soru 4");
// console.log(story.substring(0,15));
// console.log(story.slice(0,15));
// console.log("Soru 5");
// console.log(story.substring(15));
// console.log(story.substring(15,story.length));
// console.log("Soru 6");
// console.log(story.substring(story.length-5));
// console.log(story.slice(story.length-5));
// console.log(story.slice(-5));
// console.log("Soru 7");
// console.log(story.substring(12,22));
// console.log("Soru 8");
// console.log(story.substring(0,story.length-5));
// console.log("Soru 9");
// console.log(story.includes("Aysu"));
// console.log("Soru 10");
// console.log(story.replaceAll("i","ı"));
// console.log("Soru 11");
// console.log(story.replace("a","e"));
// console.log("Soru 12");
// console.log(story.toUpperCase());
// console.log("Soru 13");
// console.log(story.toLowerCase());
// console.log("Soru 14");
// const userName=prompt("Adınızı giriniz...");
// console.log("Hoşgeldin: "+userName);
// alert("Hoşgeldin: "+userName);
//  console.log(`Benim adım: ${userName}`);
// console.log("Soru 15");
// const userName=prompt("Adınızı giriniz...");
// console.log(userName.trimStart());
// console.log(userName.trimEnd());
// const userName2=userName.trim();
// console.log(userName2);
//    " A Y S U "
// userName2=userName.trim();
// const arr=userName2.split(" ");
// console.log(arr);
// let bosluk=prompt("veri gir");
// console.log(bosluk.trimStart());

//  ahmet eve gitti. ali evden geldi. aysu uyudu. engin konuşamadı.

const paragraf="ahmet eve gitti. ali evden geldi. aysu uyudu. engin konuşamadı.";
console.log(paragraf);
console.log("*****************************");
const cumleler=paragraf.split(". ");
console.log(cumleler);
// console.log("*****************************");
// console.log(cumleler[0]);
// console.log("*****************************");


const cumle0=cumleler[0];
const cumle1=cumleler[1];
const cumle2=cumleler[2];
const cumle3=cumleler[3];

console.log(cumle0);
console.log(cumle1);
console.log(cumle2);
console.log(cumle3);
console.log("*****************************");
console.log(cumle0[0].toUpperCase()+cumle0.substring(1)+".");
console.log(cumle1[0].toUpperCase()+cumle1.substring(1)+".");
console.log(cumle2[0].toUpperCase()+cumle2.substring(1)+".");
console.log(cumle3[0].toUpperCase()+cumle3.substring(1));

console.log("*****************************");

console.log(cumle0[0].toUpperCase()+cumle0.substring(1)+". "+cumle1[0].toUpperCase()+cumle1.substring(1)+". "+cumle2[0].toUpperCase()+cumle2.substring(1)+". "+cumle3[0].toUpperCase()+cumle3.substring(1));










