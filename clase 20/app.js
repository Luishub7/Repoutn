const handleSubmit = async (event) => {
  event.preventDefault(); 

 
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    const postData = {
    title: title,
    body: body,
    userId: 1, 
  };


  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });


  const data = await response.json();


  console.log("Enviado", data);
};


const formHTML = document.getElementById("postForm");
formHTML.addEventListener("submit", handleSubmit);
