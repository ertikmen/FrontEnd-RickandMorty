const url = "https://jsonplaceholder.typicode.com";
const userURL = "/users";
const commentsURL = "/comments";
const todosURL = "/todos";
const postsURL = "/posts";

const commentEx = {
  postId: 2,
  name: "Engin Ertikmen",
  email: "ertikmen@gmail.com",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

// https://jsonplaceholder.typicode.com URL'ine istek atın. Her bir isteği bir kere then 1 kere de async/await yöntemi ile atın. update isteklerini put ve patch şeklinde ayrı ayrı atın. Toplamda 5 adet then, 5 adet adet async/await isteği atacaksınız.
//getAllComments, getCommentById, deleteComment, updateComment(put, patch)

// const getAllCommentsThen = fetch(url + commentsURL + "/5555")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("HTTP error! status:" + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const getAllCommentsThen = fetch(url + commentsURL + "/5555")
// .then((response) => {
//   if (!response.ok) {
//     throw new Error("HTTP error! status:" + response.status);
//   }
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
//   console.log(error);
// });

// const getAllCommentsAsync = async () => {
//   try {
//     const response = await fetch(url + commentsURL);
//     if (!response.ok) {
//       throw new Error("Hata alındı");
//     }
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Bir hata oluştu" + error);
//   }
// };

// getAllCommentsAsync();

// const getCommentByIdThen = fetch(url + commentsURL + "/5")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const getCommentByIdAsync = async () => {
//   try {
//     const response = await fetch(url + commentsURL + "/5");
//     if (!response.ok) {
//       throw new Error("Network Response not ok");
//     }
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const putCommentsThen = fetch(url + commentsURL + "/5", {
//   method: "PUT",
//   headers: { "Context-type": "application/json" },
//   body: JSON.stringify(commentEx),
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

// const putCommentsByIdAsync = async () => {
//   try {
//     const response = await fetch(url + commentsURL + "/5", {
//       method: "PUT",
//       headers: { "Context-type": "application/json" },
//       body: JSON.stringify(commentEx),
//     });
//     if (!response.ok) {
//       throw new Error("Network Response not ok");
//     }
//     const data = response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const patchCommentThen = fetch(url + commentsURL + "/5", {
//   method: "PATCH",
//   headers: { "Constext-type": "application/json" },
//   body: JSON.stringify(commentEx),
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

// const patchCommentAsync = async () => {
//   try {
//     const response = await fetch(url + commentsURL + "/5", {
//       method: "PATCH",
//       headers: { "Context-type": "application/json" },
//       body: JSON.stringify(commentEx),
//     });
//     if (!response.ok) {
//       throw new Error("Network Response not ok");
//     }
//     const data = response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deleteCommentThen = fetch(url + commentsURL + "/5", {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log("Silme işlemi başarılı");
//     } else {
//       console.log("Silinemedi");
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const deleteCommentAsync = async () => {
//   try {
//     const response = await fetch(url + commentsURL + "/5", {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error("Network Response not ok");
//     }
//     console.log("Silme işlemi başarılı");
//   } catch (error) {
//     console.log("Başarısız...");
//   }
// };

const getAllCommentsAsync = async () => {
  try {
    let response;
    response = await fetch(url + commentsURL);
    if (!response.ok) {
      throw new Error("Aysu");
    }
    const data = response.json();
    console.log(data);
  } catch {
    console.log("Ali");
  }
};
getAllCommentsAsync();
