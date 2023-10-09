// 1- Verilen iki sayının çarpımını döndüren bir fonksiyon yazın. (Arrow Function ile) Hoisting Çalışmaz!!!
console.log("Soru-1");
const carpim=function (num1,num2){
    return num1*num2;
}
console.log(carpim(5,4));

//  ()=>();
const carpma=(sayi1,sayi2)=>sayi1*sayi2;
console.log(`Carpım sonucu: ${carpma(30,6)}`);


// 2- Verilen bir cümlenin kelime sayısını döndüren bir arrow fonksiyon yazın.
console.log("Soru-2");
// "engin ara verdiğimiz".
// ["engin","ara","verdiğimiz"]
// 3

let kelimeSayisiniHesapla=(lolo)=>(lolo.split(" ").length);
// const kelimeSayisiniHesapla=(cumle)=>(cumle.split(" ").length);

let cumle="Ali Aysu Engin Ahmet Elma Kavun Ekmek";
console.log(kelimeSayisiniHesapla(cumle));


// 3- Verilen bir sayının faktöriyelini hesaplayan bir fonksiyon yazın. (Function Declaration Yöntemi ile) Hoisting'e Tabidir.

// 5!=5*4*3*2=120
console.log("Soru-3");
function faktoriyel(sayi){
    let sonuc=1;
    for(let i=1;i<=sayi;i++){  // 1   1,2,6,24,120
        sonuc=sonuc*i
    }
    return sonuc;
}

console.log(faktoriyel(5));

const faktoriyel2=(sayi)=>{
    let sonuc=1;
    for(let i=1;i<=sayi;i++){  
        sonuc=sonuc*i
    }
    return sonuc;
};

console.log(faktoriyel2(5));

console.log("Soru-4");

// 4- Verilen bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın. (Function Expression Yöntemi ile) Hoisting Çalışmaz !!!!

const sayiAsalMi=function(sayi){
    if(sayi<2){
    console.log("2 den küçük bir sayı girdiniz.");
    return false;
    }
    let sayac=0;
    for(let i=2;i<sayi;i++){ // 
        if(sayi%i==0){
            sayac++;          //5
        }
    }
    if(sayac==0){
        console.log(`${sayi} sayisi asaldir.`);
    }else{
        console.log(`${sayi} sayisi asal değildir.`)
    }
};

sayiAsalMi(12);

const sayiAsalMi2=(sayi)=>{
    if(sayi<2){
    console.log("2 den küçük bir sayı girdiniz.");
    return false;
    }
    let sayac=0;
    for(let i=2;i<sayi;i++){
        if(sayi%i==0){
            sayac++;          
        }
    }
    if(sayac==0){
        console.log(`${sayi} sayisi asaldir.`);
    }else{
        console.log(`${sayi} sayisi asal değildir.`)
    }
};

sayiAsalMi2(91);


// 5- Verilen bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
console.log("Soru-5");
const arr1=[15,27,48,5,95,98,155];

function enBuyukSayiyiBul(array){
    let enBuyuk=array[0];     //enBuyuk=15  27  48  95  98 155
    for(let i=1;i<array.length;i++){
        if(array[i]>enBuyuk){
            enBuyuk=array[i];
        }
    }
    return (enBuyuk);
}

console.log(enBuyukSayiyiBul(arr1));

// 6- Verilen bir dizi içindeki sayıların toplamını hesaplayan bir fonksiyon yazın.
console.log("Soru-6");

const arr2=[15,27,48,5,95,98,155];

function arrayToplama(array){
    let toplam=0;
    for(i=0;i<array.length;i++){
        toplam+=array[i] ;
    }
    return (`Dizinin elemanları ${toplam}`);
}

console.log(arrayToplama(arr2));

const arrayToplama2=(array)=>{
    let toplam=0;
    for(i=0;i<array.length;i++){
        toplam+=array[i] ;
    }
    return (`Dizinin elemanları ${toplam}`);
};

// const fonksiyonismi=("dışarıdan alınan parametreler")=>{işlemler};

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

const isim="engin";

const terseCeviren=(string)=>{
    let tersIsim="";
    for(let i=string.length-1;i>=0;i--){  //  engin 5   isim[0]=e isim[4]=n
        tersIsim+=string[i];
    }
    return (`${string} kelimesinin tersi ${tersIsim}`);
}

console.log(terseCeviren(isim));

// 8- Verilen bir stringi tersine çeviren bir fonksiyon yazın.

console.log("Soru-8");
const kelime = "Verilen bir stringi tersine çevirme";
const tersineCevirme = (dizi) => {
  return [...dizi].reverse().join("");
};
console.log(`${kelime} -->${tersineCevirme(kelime)}`);
console.log(tersineCevirme(kelime));

// 10- Verilen bir sayının pozitif bölenlerini bulan bir fonksiyon yazın.(örn. 12'nin pozitif bölenleri 1,2,3,4,6,12)

console.log("Soru-10");

const pozitifBolenler=(sayi)=>{
    const bolenler=[];
    for(let i=1;i<=sayi;i++){
        if(sayi%i===0){
            bolenler.push(i);
        }
    }
    return bolenler;
}

console.log(pozitifBolenler(15));

// 11- Verilen bir stringin içinde belirli bir karakterin kaç kez tekrarlandığını hesaplayan bir fonksiyon yazın.

// motor     o

console.log("Soru-11");

const karakterSayisi=(string,karakter)=>{
    let sayac=0;
    for(let i=0;i<string.length;i++){
        if(string[i] === karakter ){
            sayac++;            //  1   2
        }
    }
    return sayac;
}

console.log(karakterSayisi("almanya",'a'));


// 12 - içerisine kaç adet sayı yazılırsa yazılsın, sayıların toplamını döndüren bir fonksiyon yazınız.
console.log("Soru-12");

const hepsininToplami=(...sayilar)=>{
    let toplam=0;
    for(let i=0;i<sayilar.length;i++){
        toplam+=sayilar[i];
    }
    return toplam;
}

console.log(hepsininToplami(5,10,15,20,25,30,80));
















