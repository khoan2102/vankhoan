const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");
const userNameInput = document.getElementById("userName");
const displayName = document.getElementById("displayName");
const audio = document.getElementById("audio");
const showButton = document.getElementById("showButton");
const guideInfo = document.getElementById("guideInfo");
const closeButton = document.getElementById("closeButton");

// Đóng thiệp
closeButton.addEventListener("click", function () {
  guideInfo.classList.add("hidden");
  showButton.classList.remove("hidden"); // Hiện nút "Mở lại" khi đóng thiệp
});

// Mở lại thiệp
showButton.addEventListener("click", function () {
  guideInfo.classList.remove("hidden");
  showButton.classList.add("hidden");
});

function createSnowflakes() {
  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.classList.add("snowflakes");
  document.body.appendChild(snowflakesContainer);

  for (let i = 0; i < 60; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    const size = Math.random() * 8 + 4;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    snowflake.style.setProperty("--random-x", Math.random());
    snowflakesContainer.appendChild(snowflake);
  }
}

startButton.addEventListener("click", function () {
  const name = userNameInput.value.trim();
  if (name !== "") {
    displayName.innerText = name;

    // Ẩn màn hình chào
    welcomeScreen.style.opacity = "0";

    setTimeout(() => {
      welcomeScreen.classList.add("hidden");

      // Hiện nội dung chính và thiệp
      mainContent.classList.remove("hidden");
      guideInfo.classList.remove("hidden");

      // Bật nhạc
      audio
        .play()
        .catch((err) =>
          console.log("Nhạc chưa chạy được do trình duyệt chặn: ", err)
        );
      createSnowflakes();
    }, 800);
  } else {
    alert("Bạn vui lòng nhập tên để nhận quà nhé! ❤️");
  }
});
