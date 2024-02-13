fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>  res.json()) 
    .then((data) => console.log(data));
     
const data = {
    title : "This is Title",
    body : "This is body",
    UserId : 2
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body : JSON.stringify(data),
    headers: {
        "content-type": "application/json"
    }
}) .then((res) => res.json())
   .then((data) => console.log(data));