// engin   e-n-g-i-n==>n-i-g-n-e==>nigne
// const tersKelime2="";
// for (var i = kelime.length - 1; i >= 0; i--) { 
//     tersKelime2 += kelime[i];
// }

// const sayi1=5   const sayi2="5" 
//if elseif elseif elseif elseif else


// const kelime="kayak";
// const tersKelime= kelime.split("").reverse().join("");
// console.log(tersKelime);

// if(kelime===tersKelime){
//     console.log(`${kelime} kelimesi bir palindromdur.`);
// }else{
//     console.log(`${kelime} kelimesi bir palindrom değildir.`);
// }

// const yas=prompt("Lütfen yaşınızı giriniz.");

// if(yas>=18){
//     console.log(`Ehliyet alabilirsiniz. Çünkü yaşınız ${yas}`);
// }else{
//     console.log(`Ehliyet alamazsınız. Çünkü yaşınız ${yas}. ${18-yas} yıl sonra ehliyet alabilirsiniz. Ali ata bak.`);
// }

// const saat=prompt("Lütfen saat giriniz.");
// if(saat>=6 && saat<=11){
//     console.log(`Günaydın`); // Ali  Aysu Engin
// }else if(saat>=11 && saat<=16 ){
//     console.log(`İyi öğlenler`);    
// }else if(saat>=16 && saat<=24 ){
//     console.log(`İyi akşamlar`);      
// }else if(saat>=0 && saat<=6 ){
//     console.log(`İyi geceler`);      
// }else{
//     alert("Yanlış saat girdiniz.");
// }

const userName=prompt("Lütfen kullanıcı adınızı giriniz.");
const password=prompt("Lütfen şifrenizi giriniz.");

const user1="engin";
const user1Password=123;  //  123=="123"   123==="123"

// if(user1===userName || password===user1Password){
//     console.log("Doğru");
// }


if(userName===user1 && password===user1Password){
    console.log("Hoşgeldiniz...");
}else if(userName!=user1 && password===user1Password){
    console.log("Kullanıcı adınız yanlış fakat şifreniz doğru");
}else if(userName===user1 && password!=user1Password){
    console.log("Kullanıcı adınız doğru fakat şifreniz yanlıştır.");
}else{
    console.log("Kullanıcı adınız ve şifreniz yanlıştır.");
}

















