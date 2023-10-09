// const baslangicSayisi=parseInt(prompt("Başlangıç sayısını giriniz."));
// const bitisSayisi=parseInt(prompt("Bitiş sayısını giriniz."));

// // 5 -  25
// let sum=0;
// for(let i=baslangicSayisi;i<=bitisSayisi;i++){
//     sum=sum+i;  //sum+=i;
// }
// console.log(`Başlangıç sayısı: ${baslangicSayisi}`);
// console.log(`Bitiş sayısı: ${bitisSayisi}`);
// console.log(`Toplam: ${sum}`);


// let notToplam=0;
// let gecenOgrenci=0;

// for(let i=1;i<=5;i++){  
//     let not= parseInt(prompt(`${i}. Öğrencinin Notunu Giriniz.`));
//     notToplam+=not;
//     if (not>=60) {
//         gecenOgrenci++;
//     }
// }
// console.log("Sınıf ortalaması: "+notToplam/5);
// console.log("Geçen öğrenci sayısı: "+gecenOgrenci);

// let sayi=Math.floor(Math.random() * 10)+1; // 0-1   0,0000000008=0,000000008=0+1=1
// let hak=3;                                  //0,999999547215=9,999999548215=9+1=10
// let tahmin;                               //0,6485265945=6,485265945=6+1=7
// console.log(sayi);
// while(sayi!=tahmin && hak>0){    
//     tahmin=parseInt(prompt("Lütfen 1-10 arası sayı giriniz."));
//     if(tahmin>sayi){  
//         console.log("Tahmin ettiğiniz sayı tuttuğum sayıdan büyüktür.");
//         hak--;
//     }else if(tahmin<sayi){
//         console.log("Tahmin ettiğiniz sayı tuttuğum sayıdan küçüktür.");
//         hak--;
//     }else{
//         console.log("Doğru cevap");
//     }
// }
// if(hak>0){
//     console.log(`${4-hak}. tahmininizde bildiniz.`);
// }else{
//     console.log("Bilemediniz.!");
// }

// sayi=5(random) tahmin=6  hak=2
//  sayi=5(random) tahmin=4  hak=1
//  sayi=5(random)  tahmin=8  hak=0 

// sayi=4(random) tahmin=7  hak=2
// sayi=4         tahmin=4  hak=2

let toplamFiyat=0;
let urunAd;
let urunFiyat;
let urunler=[];

while(urunAd!="onayla"){
    urunAd=prompt("Lütfen ürün ismi giriniz veya toplam sepeti görmek için onayla yazın..");

    if(urunAd!="onayla"){
         urunFiyat=parseInt(prompt("Lütfen ürün fiyatını giriniz.."));
    urunler.push([urunAd,urunFiyat]);
    toplamFiyat+=urunFiyat; 
    }
   
   
}

console.log(urunler);
console.log(`Toplam seperiniz: ${toplamFiyat}`);




