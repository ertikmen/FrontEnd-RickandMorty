const silinenler=[];


console.log("Soru-1");
const myArray=["Engin","Ertikmen",33,true,"armut","kavun","elma","patlıcan","fasülye","pilav"];
console.log(myArray);
console.log("Soru-2");
myArray[0]="Mert";
console.log(myArray);
console.log("Soru-3");
const uzunluk=myArray.length;
console.log(uzunluk);
console.log("Soru-4");
// const yeniUzunluk=myArray.push("panda");
// console.log(`Yeni Uzunluk: ${yeniUzunluk}`);
// console.log(myArray);

myArray.push("panda");
const yeniUzunluk=myArray.length;
console.log(myArray);
console.log(yeniUzunluk);


console.log("Soru-5");
// const yeniUzunluk2=myArray.unshift("uğur böceği");
// console.log(`Yeni Uzunluk2: ${yeniUzunluk2}`);
// console.log(myArray);

myArray.unshift("uğur böceği");
const yeniUzunluk2 = myArray.length;
console.log(myArray);
console.log(yeniUzunluk2);


console.log("Soru-6");
const silinenEleman=myArray.pop();
console.log(silinenEleman);
console.log(myArray);
silinenler.push(silinenEleman);
console.log(silinenler);

console.log("Soru-7");
const silinenEleman2=myArray.shift();
console.log(silinenEleman2);
console.log(myArray);
silinenler.push(silinenEleman2);
console.log(silinenler);


console.log("Soru-8");
const newArray=[yeniUzunluk,yeniUzunluk2,silinenEleman,silinenEleman2];
console.log(newArray);
// const newArray=[];
// newArray.push(yeniUzunluk,yeniUzunluk2,silinenEleman,silinenEleman2);

console.log(newArray);

console.log("Soru-9");
// const newArray2=myArray.concat(newArray); //123  789     123789 
const newArray2= [...myArray,...newArray,...["Aysu","Ali","Engin"],56,"Ahmet"];
console.log("MyArray");
console.log(myArray);
console.log("newArray");
console.log(newArray);
console.log("NewArray2");
console.log(newArray2);

console.log("Soru-10");
console.log(newArray2.includes("Aysu"));
console.log(newArray2.includes("Mert"));
console.log(newArray2.includes("Murat"));

if(newArray2.includes("Aysu")){
    console.log(`${"Aysu"} isimli eleman var`);
}else{
    console.log(`${"Aysu"} isimli eleman yok`);
}

console.log("Soru-11");
console.log(newArray2.includes("armut",4));//index olarak 4 dahil sonuna kadar arar.
console.log("Soru-12");
console.log(newArray2.indexOf("armut"));
console.log("Soru-13");
// const arr2=[];
// arr2.push(newArray[0],newArray[1],newArray[2]);
// console.log(arr2);
const arr2=newArray.slice(0,3);// 0 dahil 3 dahil değil.
console.log(arr2);
console.log("Soru-14");
console.log(arr2.splice(1,1,"Aysu","Deniz"));
console.log(arr2);          
// const arr3=[1,2,3,4,5,6,7]; //  1,2,"Engin",3,4,[1,2],7
// console.log(arr3);
// console.log(arr3.splice(2,4,"Engin",3,4,[1,2]));// silinenleri yazdırır.
// console.log(arr3);

    //  Elma     Armut     Kavun    Karpuz
    //  Elma     Üzüm      Çilek    Karpuz
//  Elma   Üzüm      Çilek     Karpuz
console.log("Soru-15");
console.log(arr2.splice(1,2,"Üzüm","Çilek"));
console.log(arr2);
console.log("Soru-16");
const arr4=arr2.join(" + ");
console.log(arr4);

// const arr4=["safsdfsdafgsdgfdgd fgdf sgsdfg dgfdgdgfdfgfdg"];
// console.log(arr4);

