// XHR ile "https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.

// callbackFn=(response,error)
// const fonksiyon=()=>{};

const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

const getRequest = (callBackFunction, endPoint) => {
  const request = new XMLHttpRequest();
  request.open("GET", endPoint);
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);

      callBackFunction(data, null);
    } else if (request.readyState === 4) {
      callBackFunction(
        null,
        `Bu işlem hatalıdır.${request.status} Bunları hepsi Ali beyin suçu`
      );
    }
  });
  request.send();
};

const callBackFunctionAysu = (response, error) => {
  if (response) {
    console.log(response);
  } else {
    console.log(error);
  }
};

// getRequest(callBackFunctionAysu, url + "/posts");
let resource = 0;
while (resource != 1 && resource != 2) {
  resource = prompt(
    "Lütfen sorgulamak istediğiniz sayfayı giriniz. 1- Post 2-User"
  );
  if (resource == 1) {
    const takenId = prompt(
      "Lütfen sorgulamak istediğiiniz post un id sini giriniz. 1-100 arasında olmalıdır."
    );
    if (takenId > 0 && takenId < 101) {
      getRequest(callBackFunctionAysu, url + postsURL + "/" + takenId);
    } else {
      alert("Yanlış bir değer girdiniz...");
    }
  } else if (resource == 2) {
    const takenId = prompt(
      "Lütfen sorgulamak istediğiiniz user ın id sini giriniz. 1-10 arasında olmalıdır."
    );
    if (takenId > 0 && takenId < 11) {
      getRequest(callBackFunctionAysu, url + userURL + "/" + takenId);
    } else {
      alert("Yanlış bir değer girdiniz...");
    }
  } else {
    alert("Yanlış bir seçim yaptınız..");
  }
}
