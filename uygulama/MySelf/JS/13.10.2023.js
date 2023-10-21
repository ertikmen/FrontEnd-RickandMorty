const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";
const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

// const getRequest = (callBackFunction, endPoint) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", endPoint);
//   request.onreadystatechange = () => {
//     if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callBackFunction(null, data);
//     } else if (request.readyState === 4) {
//       let error = `Hata aldık. Hata kodumuz: ${request.status}`;
//       callBackFunction(error, null);
//     }
//   };
//   request.send();
// };

// const callBackFunctionAysu = (error, response) => {
//   if (response) {
//     console.log(response);
//   } else {
//     console.log(error);
//   }
// };

// getRequest(callBackFunctionAysu, `${url}${userURL}`);

// getRequest((error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//     getRequest((error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(response);
//         getRequest((error, response) => {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(response);
//             getRequest((error, response) => {
//               if (error) {
//                 console.log(error);
//               } else {
//                 console.log(response);
//                 getRequest((error, response) => {
//                   if (error) {
//                     console.log(error);
//                   } else {
//                     console.log(response);
//                   }
//                 }, `${jsonplaceholderURL}users/5`);
//               }
//             }, `${jsonplaceholderURL}users/4`);
//           }
//         }, `${jsonplaceholderURL}users/3`);
//       }
//     }, `${jsonplaceholderURL}users/2`);
//   }
// }, `${jsonplaceholderURL}users/1`);

// const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";

// PROMISE

// const getRequest = (endPoint) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.onreadystatechange = () => {
//       if (
//         request.readyState === XMLHttpRequest.DONE &&
//         request.status === 200
//       ) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject(`Hata aldık. Hata kodumuz: ${request.status}`);
//       }
//     };
//     request.open("GET", endPoint);
//     request.send();
//   });
// };

// const url = "https://jsonplaceholder.typicode.com";
// const userURL = "/users";
// const commentsURL = "/comments";
// const todosURL = "/todos";
// const postsURL = "/posts";
// 1-2-3-4-5 id li userları yazdıralım.
// console.log(1);
// console.log(2);
// // https://jsonplaceholder.typicode.com/users/1
// getRequest(url + userURL + "/1").then((response) => {
//   console.log(response);
//   getRequest(url + userURL + "/2").then((response) => {
//     console.log(response);
//     getRequest(url + userURL + "/33254546").then((response) => {
//       console.log(response);
//       getRequest(url + userURL + "/4").then((response) => {
//         console.log(response);
//         getRequest(url + userURL + "/5").then((response) => {
//           console.log(response);
//         });
//       });
//     });
//   });
// });

// console.log(3);
// console.log(4);
// function fonksiyonAysu2(){};

// const fonksiyonAysu = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number <= 10) {
//       resolve(`İşlem başarılı. Sayınız: ${number}`);
//     } else {
//       reject(`İşlem başarısız. Sayınız: ${number}`);
//     }
//   });
// };

// fonksiyonAysu(1)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch(url + userURL + "/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const url = "https://jsonplaceholder.typicode.com";
// const userURL = "/users";
// const commentsURL = "/comments";
// const todosURL = "/todos";
// const postsURL = "/posts";

// console.log(fetch(url + todosURL + "/1"));

//FETCH GET
// https://jsonplaceholder.typicode.com/users/4

// fetch(url + userURL + "/4")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Hata", error);
//   });

// FETCH POST

const newComment = {
  postId: 3,
  name: "Aysu Çağışlar",
  email: "aysucagislar@gmail.com",
  body: "Ali Güneş",
};
// https://jsonplaceholder.typicode.com/comments/
// https://jsonplaceholder.typicode.com/comments
// fetch (url,gereken metodlar)
// fetch(url + commentsURL, {
//   method: "POST",
//   headers: { "Context-Type": " application/json" },
//   body: JSON.stringify(newComment),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const newUser = {
//   name: "Engin Ertikmen",
//   username: "engin.ee",
//   email: "ertikmen@mail.com",
// };
// FETCH PUT

// fetch(url + userURL + "/4", {
//   method: "PUT",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify(newUser),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Hata durumu: ${error}`);
//   });

// // FETCH DELETE
// fetch(url + userURL + "/15", {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log(`Silme işlemi başarılıdır.`);
//     } else {
//       console.log("hatalı");
//     }
//   })
//   .catch((error) => {
//     console.log(`Silme işlemi başarısız oldu.${error}`);
//   });

// ASYNC/AWAIT

// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Hata:', error);
//   }
// }

// const url = "https://jsonplaceholder.typicode.com";
// const userURL = "/users";
// const commentsURL = "/comments";
// const todosURL = "/todos";
// const postsURL = "/posts";

const getTodoById = async (todoId) => {
  console.log("inner 1");
  console.log("inner 2");
  const response = await fetch(url + todosURL + "/" + todoId);
  const data = await response.json();
  console.log(data);
  console.log("inner 3");
  console.log("inner 4");
  return data;
};

console.log("outer 1");
console.log("outer 2");
getTodoById(50); //
console.log("outer 3");
console.log("outer 4");
console.log("outer 5");
console.log("outer 6");
console.log("outer 7");
console.log("outer 8");
console.log("outer 9");

console.log("Aysu");

getTodoById(95); //

console.log("Ali");
console.log("outer 10");
console.log("outer 11");

getTodoById(155); //

console.log("Engin");
console.log("outer 12");
console.log("outer 13");
console.log("outer 14");
console.log("outer 15");
console.log("outer 16");
