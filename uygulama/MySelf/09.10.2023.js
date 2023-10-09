// Kullanılacak diziler
const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

// console.log("Soru-1");
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
// dizi.forEach((eleman)=>{
//         console.log(`${eleman}`);
//     }
// )

// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
// console.log("Soru-2");

// dizi.forEach((eleman)=>{
//     if(eleman%2==0){
//         console.log(eleman);
//     }
//     }
// )

//  8 6 10 4
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
// console.log("Soru-3");
// const newArray=[];
// dizi3.forEach((e)=>{
//        newArray.push(e*2); 
//     }  
// )

// console.log(newArray);
// // console.log(dizi3);

// newArray.forEach((eleman)=>{
//     console.log(`${eleman}`);
//     }
// )

// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Soru-4");
// let sum=0;
// dizi.forEach((e)=>{
//     sum+=e;
//     }
// )

// console.log(sum);

// console.log("Soru-5");
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// dizi.forEach((eleman,index)=>{
//     if(index==dizi.length-1){
//         console.log(`Son eleman: ${eleman}`);
//     }else{
//          console.log(eleman);
//     }
   
// }

// )

// dizi.forEach((eleman,index)=>{  
//     if(index==0){
//         alert(`İlk eleman: ${eleman}`);
//     }else{
//          console.log(eleman);
//     }  
//     }

// )
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// dizi1.forEach((eleman)=>{
//     console.log(`${eleman}`);
// }
// )

// dizi1.forEach((eleman,index)=>{
//     if(index==2){
//         alert (`${eleman}`);
//     }else{
//         console.log(eleman+" "+index);
//     }
// }
// )

// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
const yeniDizi=dizi1.map((eleman)=> eleman.toUpperCase());

console.log(yeniDizi);

// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const yeniDizi2=dizi.map((e)=>Math.ceil(Math.random()*10)+e);

console.log(yeniDizi2);


// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// const isimler=["aysu","ali","engin"];
// const yeniDizi3=isimler.map((e)=>e.reverse());

// console.log(yeniDizi3);

const sentence="elma armut kedi köpek deniz kumsal";
const tersKelimeler=sentence.split(" ").map(e => e.split("").reverse().join(""));
console.log(tersKelimeler);

 const isimler=["aysu","ali","engin","deniz","ayşe","ece"];
 const yeniDizi3=isimler.map((e)=>e.split("").reverse().join(""));
 console.log(yeniDizi3);

 // 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const stringDizi=dizi.map(e => e.toString());
console.log(stringDizi);

// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
// const isimler=["aysu","ali","engin"];
console.log("Soru-10")
const tersDizi=isimler.map(eleman=>{    //aysu  4  0,1,2,3
        tersIsim="";
        for(let i=eleman.length-1;i>=0;i--){
            tersIsim+=eleman[i];
        }
        return tersIsim;
    }
);

console.log(`${tersDizi}`);

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ciftsayilar=dizi.filter((eleman)=>eleman%2==0);
console.log(ciftsayilar);

const sayilar=[];
dizi.map(e=>{
    if(e%2===0){
        sayilar.push(e);
    }
});

console.log(sayilar);

// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
// const isimler=["aysu","ali","engin","deniz","ayşe","ece"];
console.log("Soru-12")
let uzunluk=4;

const esitString=isimler.filter(e=>e.length==4);
console.log(esitString);

const kisaString=isimler.filter(e=>e.length<4);
console.log(kisaString);

const uzunString=isimler.filter(e=>e.length>4);
console.log(uzunString);

// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const diziToplam=dizi.reduce((toplam,eleman)=>toplam+(eleman+2),0);
console.log(diziToplam);

// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek

const ilkCift=dizi.find(eleman=>eleman%2==0);
console.log(ilkCift);

// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek

const sonCift=dizi.findLast(eleman=>eleman%2==0);
console.log(sonCift);


// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek

// const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const dizi1 = ["elma", "armut", "kiraz", "üzüm"];
// const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];
// const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];

const negatifVarMi=dizi3.some(eleman=>eleman<0);
console.log(negatifVarMi);

// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek

const hepsiPozitifMi=dizi2.every(eleman=>eleman>0);
console.log(hepsiPozitifMi);
console.log("********************************************")
// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
const siraliDizi1=dizi3.sort((a,b)=> a-b);
console.log(siraliDizi1);
const siraliDizi2=dizi3.sort((a,b)=> b-a);
console.log(siraliDizi2);






