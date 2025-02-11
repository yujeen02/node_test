const userInfoContainer = document.getElementById("userInfoContainer");
// 저장된 데이터 갖고오기
let data_map = JSON.parse(localStorage.getItem("userinfo")) || [];

// 화면에 데이터 추가 함수
function renderData(data) {
  userInfoContainer.innerHTML += data
    .map(
      (user) => `
      <div class="user">
        <div class="email"><span>${user.email}</span>님 환영합니다.</div>
        <div class="pw">비밀번호는 <span>${user.pw}</span></div>
        <div class="name">이름 <span>${user.name}</span></div>
        <div class="age">나이 <span>${user.age}</span></div>
        <br />
      </div>
    `
    )
    .join("");
}

// 로컬스토리지에 있는 데이터 화면에 렌더링
if (data_map.length > 0) {
  renderData(data_map);
}

// 서버에서 데이터 불러오기
fetch("/userinfo")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      data_map.push(...data);
      localStorage.setItem("userinfo", JSON.stringify(data_map));
      renderData(data);
    }
  })
  .catch((error) => {
    console.error("Error", error);
  });
