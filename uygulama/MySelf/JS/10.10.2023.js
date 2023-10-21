// // String model;
// // int modelYılı;

// // Araba araba1=new Araba("audi",2018,75000);
// // araba1.setModel="audi";
// // araba1.setKm=75000;

// console.log("Soru-1");
// // 1- myObject isimli boş bir nesne oluşturun.
// const myObject = {};
// console.log(myObject);

// console.log("Soru-2");
// // 2- nesnenin içerisine isim, yas, cinsiyet ve meslek özelliklerini sırasıyla ekleyin
// myObject.isim = "Engin Ertikmen";
// myObject.yas = 33;
// myObject.cinsiyet = "Erkek";
// myObject.meslek = "Mühendis";
// console.log(myObject);

// console.log("Soru-3");
// // 3- nesnenin içerisinden cinsiyet özelliğini kaldırın.
// delete myObject.cinsiyet;
// console.log(myObject);

// console.log("Soru-4");
// // 4- myObject nesnesinin özelliklerini bir başka değişkene kopyalayın.

// const copyMyObject = Object.assign({}, myObject);
// copyMyObject.adres = "İzmir";

// console.log(copyMyObject);

// console.log("Soru-5");
// // 5- nesnenizin anahtarlarını konsola yazdırın.
// console.log(Object.keys(myObject));
// console.log(Object.keys(copyMyObject));
// // Object.keys metodu bize sonuçları array olarak döner.

// console.log("Soru-6");
// // 6- nesnenizin değerlerini konsola yazdırın.

// console.log(Object.values(myObject));
// console.log(Object.values(copyMyObject));
// // Object.values metodu bize sonuçları array olarak döner.

// console.log("Soru-7");
// // 7- nesnenizin tüm key-value çiftlerini konsola yazdırın.
// console.log(myObject);
// console.log("******************************************");
// // console.log(Object.entries(myObject));
// // Her key value çiftinin değerlerini ayrı ayrı array olarak döner ve hepsini de tek bir arrayin içinde döner.
// // Object i bir array haline getiriyor ve içindeki her key value çiftini de ayrı ayrı array haline getiriyor.
// /**
//  * isim     :   Engin Ertikmen
//  * yas      :   33
//  * meslek   :   Mühendis
//  *
//  * [
//  *
//  * [ isim   , Engin Ertikmen]
//  * [ yas    ,       33      ]
//  * [ meslek ,  Mühendis     ]
//  *
//  * ]
//  *
//  *
//  */

// // myObject nesnesinin isim key inin value değerinin uzunluğu nedir?
// console.log(Object.entries(myObject)[2][1].length);

// console.log("Soru-8");
// // 8- nesnenizin içerisinde isim anahtarına sahip bir özellik var mı diye kontrol edin

// console.log(myObject.hasOwnProperty("yas"));
// console.log(myObject.hasOwnProperty("meyve"));

// console.log("Soru-9");
// // 9- nesnenizin özelliklerine değişiklik ve ekleme çıkarma yapılabilmesini engelleyin.

// // Object.freeze(myObject);
// // myObject.isim="Osman";
// // console.log(myObject);
// // delete myObject.yas;
// // console.log(myObject);

// console.log("Soru-10");
// // 10- nesnenizin özelliklerinde değişiklik yapılabilsin ancak ekleme çıkarma yapılabilmesini engelleyin.

// Object.seal(myObject);
// myObject.isim = "Osman";
// console.log(myObject);
// delete myObject.yas;
// console.log(myObject);

const aracBilgileri = {
  id: "audiA6",

  model: "audiA6",

  yil: 2019,

  renk: "kırmızı",

  servisKayitlari: [
    {
      id: "audiA6_Servis_1",

      tarih: "05.01.2020",

      km: 2500,

      ucret: 3000,

      detay: [
        {
          id: "audiA6_Servis_1_1",

          aciklama: "balata değişimi",

          ucret: 1700,
        },

        {
          id: "audiA6_Servis_1_2",

          aciklama: "yağ değişimi",

          ucret: 700,
        },

        {
          id: "audiA6_Servis_1_3",

          aciklama: "boya koruma",

          ucret: 600,
        },
      ],
    },

    {
      id: "audiA6_Servis_2",

      tarih: "25.06.2021",

      km: 10500,

      ucret: 5000,

      detay: [
        {
          id: "audiA6_Servis_2_1",

          aciklama: "balata değişimi",

          ucret: 2700,
        },

        {
          id: "audiA6_Servis_2_2",

          aciklama: "yağ değişimi",

          ucret: 1700,
        },

        {
          id: "audiA6_Servis_2_3",

          aciklama: "boya koruma",

          ucret: 600,
        },
      ],
    },

    {
      id: "audiA6_Servis_3",

      tarih: "28.08.2022",

      km: 25400,

      ucret: 10000,

      detay: [
        {
          id: "audiA6_Servis_3_1",

          aciklama: "balata değişimi",
          ucret: 3500,
        },
        {
          id: "audiA6_Servis_3_2",
          aciklama: "yağ değişimi",
          ucret: 2000,
        },
        {
          id: "audiA6_Servis_3_3",
          aciklama: "seramik kaplama",
          ucret: 4500,
        },
      ],
    },
  ],
};

// ucretDetay(aracBilgileri);
// aşağıda verilen aracBilgileri nesnesi içerisinde bulunan her bir servis kayıdına ait tarih bilgisi ve ilgili servis kayıdına ait detay kısmında bulunan aciklama ve ucret bilgilerini konsola yazdırın.

/*(örn çıktı:

05.01.2020 balata değişimi - 1700 TL

05.01.2020 yağ değişimi - 700 TL

05.01.2020 boya koruma - 700 TL

...

...

...

28.08.2022 seramik kaplama - 4500 TL

)

*/
// { id, model, renk,yil,
//servisKayitlari[ {id:1,tarih:01.01.2023,km:2020,ucret:5000,      detay[{id:5},{aciklama:Bozuk},{ucret:2000}]},

//{id,tarih,km,ucret,detay[{id},{aciklama},{ucret}]},{id,tarih,km,ucret,detay[{id},{aciklama},{ucret}]} ] }

// aracBilgileri

// const student = {
//   isim: "Ali",
//   yas: 32,
//   cinsiyet: "Erkek",
//   notlar: [40, 80, 75],
//   arkadaslar: [
//     { isim: "Aysu", yas: 27 },
//     { isim: "Engin", yas: 33 },
//     { isim: "Serkan", yas: 32 },
//   ],
// };
// console.log(student);

// console.log(student.isim);

// console.log(student.notlar[1]);

// console.log(student.arkadaslar[2].isim);

/**
 * aracBilgileri.renk
 * aracBilgileri.serviskayitlari[0].km
 * aracbilgileri.serviskayitlari[0].detay[1].ucret
 */
console.log(aracBilgileri);

console.log("Soru-11");

const ucretDetay = (object) => {
  object.servisKayitlari.forEach((e) => {
    let servisTarihi = e.tarih;
    e.detay.forEach((a) => {
      console.log(servisTarihi + " " + a.aciklama + " " + a.ucret + " TL");
    });
    console.log("******************************");
  });
};

// servisTarihi=object.servisKayitlari[0].tarih

// object.servisKayitlari[0].detay[0].aciklama //balata değişimi
// object.servisKayitlari[0].detay[1].aciklama  //yağ değişimi
// object.servisKayitlari[0].detay[2].aciklama  //boya koruma

// servisTarihi=object.servisKayitlari[1].tarih
//object.servisKayitlari[1].detay[0].aciklama //balata değişimi
//object.servisKayitlari[1].detay[1].aciklama //yağ değişimi
//object.servisKayitlari[1].detay[2].aciklama //boya koruma

// servisTarihi=object.servisKayitlari[1].tarih
//object.servisKayitlari[2].detay[0].aciklama //balata değişimi
//object.servisKayitlari[2].detay[1].aciklama //yağ değişimi
//object.servisKayitlari[2].detay[2].aciklama //boya koruma

ucretDetay(aracBilgileri);

// student isimli bir nesne oluşturun ve içerisine 3 adet özellik ekleyin. Nesnenin özelliklerini `for...in` döngüsüyle dolaşan ve konsola yazdıran bir fonksiyon yazın.

const student = {
  isim: "Ali",
  soyIsim: "Yıldız",
  yas: 32,
  cinsiyet: "Erkek",
};

for (let a in student) {
  console.log(a + ": " + student[a]);
}

// İçerisinde 3 adet öğrenci nesnesi bulunan bir dizi oluşturun. her nesnenin kendisine ait isim ve not özellikleri bulunsun.(örn. {name: "Cem", grades: [80, 90, 50]}) Öğrencilerin ortalama notlarını `for...of` döngüsü kullanarak hesaplayın ve dersten geçip geçmedikleri bilgisini isimleriyle birlikte konsola yazdırın. (Geçer not 60)

const students = [
  { name: "Ali", grades: [40, 30, 50, 24, 14] },
  { name: "Ahmet", grades: [80, 90, 50, 75] },
  { name: "Serkan", grades: [60, 70, 50] },
];

// Ali ortalaması: 40 kaldı

const basariDurumu = (arr) => {
  for (let ogrenci of arr) {
    let notToplam = 0;
    for (let not of ogrenci.grades) {
      notToplam += not;
    }
    const ortalama = Math.ceil(notToplam / ogrenci.grades.length);
    if (ortalama >= 60) {
      console.log(
        `${ogrenci.name}'in ortalamasi ${ortalama}, bu sebeple başarılı bir öğrencidir.`
      );
    } else {
      console.log(
        `${ogrenci.name}'in ortalamasi ${ortalama}, bu sebeple başarısız ve tembel bir öğrencidir.`
      );
    }
  }
};

basariDurumu(students);

// ogrenci[0]
// ogrenci[1]
