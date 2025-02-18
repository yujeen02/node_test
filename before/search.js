const userInfoContainer = document.getElementById("userInfoSearchContainer");
let storageData = JSON.parse(localStorage.getItem("userinfo")) || [];

fetch("/username")
  .then((response) => response.json())
  .then((data) => {
    let list = storageData.filter((user) => user.name === data.name);

    if (list.length > 0) {
      renderData(list);
    }
  })
  .catch((error) => {
    console.error("Error", error);
  });

function renderData(data) {
  userInfoContainer.innerHTML += data
    .map(
      (user) => `
        <div class="user">
          <div class="name">이름: <span>${user.name}</span></div>
          <div class="email">이메일: <span>${user.email}</span></div>
          <div class="age">나이: <span>${user.age}</span></div>
        </div>
      `
    )
    .join("");
}
