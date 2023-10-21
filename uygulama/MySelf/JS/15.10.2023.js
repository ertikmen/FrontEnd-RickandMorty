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

// put method'u

const putCommentsThen = fetch(url + commentsURL + "/4", {
  method: "PUT",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    postId: "1",
    name: "aliosso",
    email: "alig@gmail.com",
    location: "KARS",
  }),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("put komutunu kullandik", data);
  })
  .catch((error) => {
    console.log("hata aldık:", error);
  });
