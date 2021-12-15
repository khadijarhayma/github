var likes = document.getElementsByClassName("like");

for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.style.color == "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}

var pluss = document.getElementsByClassName("plus-btn");

for (let i = 0; i < pluss.length; i++) {
  let plus = pluss[i];

  plus.addEventListener("click", function () {
    plus.previousElementSibling.value++;
  });
}

var minuss = document.getElementsByClassName("minus-btn");

for (let i = 0; i < minuss.length; i++) {
  let minus = minuss[i];

  minus.addEventListener("click", function () {
    if (minus.nextElementSibling.value > 1) {
      minus.nextElementSibling.value--;
    }
  });
}
