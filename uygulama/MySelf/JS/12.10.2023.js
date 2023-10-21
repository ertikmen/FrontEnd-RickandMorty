const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

const getRequest2 = (endPoint, callbackFunction) => {
  const request = new XMLHttpRequest();

  request.open("GET", endPoint);
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      const response = JSON.parse(request.responseText);
      callbackFunction(response, null);
    } else if (request.readyState === 4) {
      callbackFunction(
        null,
        `${request.status} hata kodunu aldık işlem başarısız.`
      );
    }
  };
  request.send();
};

const callBackFunctionAysu = (response, error) => {
  if (response) {
    console.log(response);
  } else {
    console.log(error);
  }
};
console.log("Aysu hanım haklı %100 katılıyorum.");

// getRequest2(url + userURL + "/7", callBackFunctionAysu);

getRequest2(url + userURL, callBackFunctionAysu);

//POST REQUEST

const postData = { name: "Ali", age: 32 };

const postRequest = (endPoint, callbackFunction, data) => {
  const request = new XMLHttpRequest();
  request.open("POST", endPoint);
  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 201) {
      const response = JSON.parse(request.responseText);
      callbackFunction(response, null);
    } else if (request.readyState === 4) {
      callbackFunction(null, `${request.status} hatası.. işlem başarısız...`);
    }
  };
  request.send(JSON.stringify(data));
};

// const url = "https://jsonplaceholder.typicode.com";
// const userURL = "/users";
// const commentsURL = "/comments";
// const todosURL = "/todos";
// const postsURL = "/posts";

// postRequest(url + userURL, callBackFunctionAysu, postData);

// PUT REQUEST

const postData1 = { name: "Aysu", age: 27 };

const putRequest = (endPoint, callbackFunction, data) => {
  const request = new XMLHttpRequest();
  request.open("PUT", endPoint);
  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      const response = JSON.parse(request.responseText);
      callbackFunction(response, null);
    } else if (request.readyState === 4) {
      callbackFunction(null, `${request.status} kodlu hata alınmıştır.`);
    }
  };
  request.send(JSON.stringify(data));
};

// putRequest(url + userURL + "/1", callBackFunctionAysu, postData1);
// "https://jsonplaceholder.typicode.com/users/1"

// const callBackFunctionAysu = (response, error) => {
//   if (response) {
//     console.log(response);
//   } else {
//     console.log(error);
//   }
// };

// PATCH REQUEST
const postData2 = { name: "Engin", age: 33, username: "terminatör" };
const patchRequest = (endPoint, callbackFunction, data) => {
  const request = new XMLHttpRequest();
  request.open("PATCH", endPoint);
  request.setRequestHeader("Content-type", "application/json");

  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const response = JSON.parse(request.responseText);
      callbackFunction(response, null);
    } else if (request.readyState === XMLHttpRequest.DONE) {
      callbackFunction(null, `${request.status} kodlu hata alınmıştır.`);
    }
  };
  request.send(JSON.stringify(data));
};

// patchRequest(url + userURL + "/2", callBackFunctionAysu, postData2);

// get   : Verileri getiriyoruz.
// post  : Gönderme işlemi yapar. (Yeni bir eleman ekler.)
// put   : id belirleriz. içini temizler. verdiğimiz bilgileri girer.
// patch : id belirleriz. içini temizlemez. Eşleşen veriler değişir. girdiğimiz veriler yoksa ek yapar.

//DELETE REQUEST

const deleteRequest = (endPoint, callbackFunction) => {
  const request = new XMLHttpRequest();
  request.open("DELETE", endPoint);
  request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      callbackFunction(`Silme işlemi başarılı`, null);
    } else if (request.readyState === 4) {
      callbackFunction(null, `İşlem başarısız ${request.status}`);
    }
  };
  request.send();
};
// deleteRequest(url + userURL + "/5", callBackFunctionAysu);
//https://jsonplaceholder.typicode.com/users/5

// const callBackFunctionAysu = (response, error) => {
//   if (response) {
//     console.log(response);
//   } else {
//     console.log(error);
//   }
// };

// const url = "https://jsonplaceholder.typicode.com";
// const userURL = "/users";
// const commentsURL = "/comments";
// const todosURL = "/todos";
// const postsURL = "/posts";

// https://jsonplaceholder.typicode.com/users/4
const userId = prompt(
  "Lütfen görüntülemek istediğiniz kullanıcının id'sini giriniz."
);

getRequest2(url + userURL + "/" + userId, callBackFunctionAysu);
