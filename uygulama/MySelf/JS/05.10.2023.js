const silinenler=[];
console.log("Soru1");
const myArray=["Engin","Ertikmen",33,true,"armut","elma","kavun","patlıcan","pilav","fasülye"]; //10
console.log(myArray);
console.log("Soru2");
myArray[0]="Mert";
console.log(myArray);
console.log("Soru3");
console.log(myArray.length);
console.log("Soru4");
myArray.push("köpek");
const uzunluk1=myArray.length; //11
console.log("Soru5");
myArray.unshift("kedi");
console.log(myArray.length);  
console.log(myArray);
const uzunluk2=myArray.length; //12
console.log("Soru6");
// const silinenEleman=myArray.pop();
// console.log(silinenEleman);
// console.log(myArray);
// silinenler.push(myArray.pop());
// console.log(silinenler);
// silinenler.push(myArray.pop());
// console.log(silinenler);
// silinenler.push(myArray.pop());
// console.log(silinenler);
// silinenler.push(myArray.pop());
// console.log(silinenler);
// console.log(myArray);
// console.log(silinenler);
const silinenEleman=myArray.pop();
console.log(silinenEleman);
console.log("Soru7");
const silinenEleman2=myArray.shift();
console.log(silinenEleman2);
console.log("Soru8");
const yeniDizi=[uzunluk1,uzunluk2,silinenEleman,silinenEleman2];
console.log(yeniDizi);
// const yeniDizi=[];
// yeniDizi.push(uzunluk1,uzunluk2,silinenEleman,silinenEleman2);
// console.log(yeniDizi);

// const yeniDizi=[];
// yeniDizi.push(uzunluk1);
// yeniDizi.push(uzunluk2);
// console.log(yeniDizi);
console.log("Soru9");
const ucuncuArray=myArray.concat(yeniDizi);
const ucuncuArray2=[...myArray,...yeniDizi,...[1,2,3]];
console.log(ucuncuArray2);
// console.log(myArray.concat(yeniDizi)); //14
// console.log(myArray);  //10
// console.log(yeniDizi);  //4
// console.log("*************************")
console.log("Soru10");
if(myArray.includes("Mert")){
    console.log("MERT BULUNDU!");
}else{
    console.log("MERT YOKTUR!!!");
}
console.log("Soru11");
const myArray2=["Engin","Ertikmen",33,true,"armut","elma","kavun","patlıcan","pilav","fasülye"];
console.log(myArray2.includes("armut",2)); //true
console.log(myArray2.includes("armut",5)); 
console.log("Soru12");
console.log(myArray2.indexOf("armut"));
console.log("Soru13");
const myArray3=myArray2.slice(0,3);
console.log(myArray3);

// const myArray3=[];
// myArray3.push(myArray2[0],myArray2[1],myArray2[2]);
// console.log(myArray3);
console.log("Soru14");
console.log(myArray2.splice(3,4,"Uygar","Yusuf")); 
console.log(myArray2);
// 0 dan başlayıp 3 dahil 4 tane sil


// const arr1=[1,2,3,4,5,6,7];
// console.log(arr1);
// console.log(arr1.splice(1,4,"Uygar","Yusuf")); 
// console.log(arr1);
console.log("Soru15");

const arr1=[1,2,3,4];
arr1.splice(0,2,"Ali","Engin")  // Ali 2 3 4 
console.log(arr1);

// 1,2,3,4
//3,4
// Ali engin 3 4 
console.log("Soru16");

console.log(arr1.join(" + "));

const abc=arr1.join(" + ");

console.log(arr1);

// 1+2+3+4
// ["1+2+3+4"]
// "1+2+3+4"