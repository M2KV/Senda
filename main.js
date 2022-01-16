const readMoreBtn = document.querySelectorAll(".read-more-btn");
const content = document.querySelectorAll(".content");


  for (let i = 0; i < readMoreBtn.length; i++) {
    readMoreBtn[i].addEventListener("click", (e) => {
      content[i].classList.toggle("show-more");
      if (readMoreBtn[i].innerText === "Đọc thêm...") {
        readMoreBtn[i].innerText = "Thu gọn";
      } else {
        readMoreBtn[i].innerText = "Đọc thêm...";
      }
    });
  }
