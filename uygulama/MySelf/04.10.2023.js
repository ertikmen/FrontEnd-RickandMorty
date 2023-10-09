// const ay=prompt("Lütfen bir ay ismi giriniz.");

// switch (ay) {
//     case "ocak":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "şubat":
//         console.log(`${ay} ayı 28 gündür`);
//         break;
//     case "mart":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "nisan":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "mayıs":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "haziran":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "temmuz":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "ağustos":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "eylül":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "ekim":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "kasım":
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     case "aralık": // ARALIK   aralik
//         console.log(`${ay} ayı 30 gündür`);
//         break;
//     default:
//         console.log(`Geçersiz giriş`);
//         break;
// }

// const num1=parseInt(prompt("Lütfen bir sayı giriniz."));

//  switch (num1) {
//         case 5:
//             console.log(`${num1} beş`);
//             break;
//         case "8":
//             console.log(`${num1} sekiz`);
//             break;
//         default:
//             console.log("Yanlış değer");
//  }

// const car=prompt("Lütfen aradığınız araba modelini giriniz.");
// const renk=prompt("Lütfen aradığınız araba rengini giriniz.");

// switch(car){
//     case "BMW":
//         switch(renk){
//             case "siyah":
//             console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//             break;
//             case "beyaz":
//             console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//             break;
//             default:
//             console.log(`${car} markalı aracımızda ${renk} bulunmamaktadır!`);
//             break;
//         }
//     break;
    
//     case "Mercedes":
//         switch(renk){
//             case "beyaz":
//             console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//             break;
//             case "siyah":
//             console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//             break;
//             default:
//             console.log(`${car} markalı aracımızda ${renk} bulunmamaktadır!`);
//             break;
//         }
//     break;
//     case "Audi":
//         switch(renk){
//             case "siyah":
//             console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//             break;
//             case "beyaz":
//             console.log(`${car} markalı ve ${renk} arabamız mevcuttur.`);
//             break;
//             default:
//             console.log(`${car} markalı aracımızda ${renk} bulunmamaktadır!`);
//             break;
//         }
//     break;
//     default:
//         console.log(`Aradığınız ${car} markalı aracımız bulunmamaktadır!`);
//     break;
// }

// const num1=prompt("Lütfen 1. sayıyı giriniz..");
// const num2=prompt("Lütfen 2. sayıyı giriniz..");
// const simge=prompt("Lütfen yapmak istediğiniz işlemi belirtiniz (+ - * / şeklinde)");

// switch(simge){
//     case "+":
//         console.log(`${num1} ile ${num2} toplama sonucu :${parseInt(num1)+ parseInt(num2)}`);
//     break;
//     case "-":
//         console.log(`${num1} ile ${num2} çıkartma sonucu :${parseInt(num1)- parseInt(num2)}`);
//     break;
//     case "*":
//         console.log(`${num1} ile ${num2} çarpım sonucu :${parseInt(num1)* parseInt(num2)}`);
//     break;
//     case "/":
//         console.log(`${num1} ile ${num2} bölüm sonucu :${parseInt(num1)/ parseInt(num2)}`);
//     break;
//     default:
//         console.log('Yanlış simge girişi yaptınız!');
// }

const sayi1 = parseInt(prompt("Lütfen birinci sayıyı giriniz"));
const sayi2 = parseInt(prompt("Lütfen ikinci sayıyı giriniz"));
const sayi3=parseInt(sayi1%sayi2);
//girilen sayının çift mi tek mi ya da 0 mı olduğunu bulalım?
// ayrıca bu sayının negatif mi pozitif mi?
// Girilen sayının sayı 2  ile bölmünden kalan kaçtır.

if(sayi1%2==0){
    console.log(`${sayi1} Sayısı Çift Bir Sayidir`) ;
}
else{
    console.log(`${sayi1} Sayısı Tek Bir Sayidir `);
}
if(sayi1>0){
    console.log(`${sayi1} Sayısı Pozitif Bir Sayidir `);
}
else if (sayi1<0) {
    console.log(`${sayi1} Sayısı Negatif Bir Sayidir `);
}else{
    console.log(`${sayi1} Sayısı sıfırdır.`);
}
console.log(sayi3);
