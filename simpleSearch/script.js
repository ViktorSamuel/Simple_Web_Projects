const result = document.querySelector(".users-list"),
      input = document.querySelector(".search"),
      userList = [];

getData();

input.addEventListener("input", function(e){
    dataFilter(e.target.value);
});

async function getData(){
    const allUsers = await fetch("https://randomuser.me/api?results=50"),
          data = await allUsers.json();
   
    result.innerHTML = "";

    data.results.forEach(user => {
        const li = document.createElement("li");

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-information">
            <h3 class="name">${user.name.first} ${user.name.last}</h3>
            <p class="locatin">${user.location.city}, ${user.location.country}</p>
        </div>
        `;

        result.appendChild(li);

        userList.push(li);
    });
};

function dataFilter(inputText){
    userList.forEach(oneUser => {
        if(oneUser.innerText.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide");
        } else{
            oneUser.classList.add("hide");
        }
    });
};