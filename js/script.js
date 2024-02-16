let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );

    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = titleCount + "." + title;
    titleContainer.appendChild(p);
    titleCount++;
    totalPrice += price;
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  });
}
const inputButton = document.getElementById("apply-btn");
inputButton.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();
  if (totalPrice >= 200) {
    if (couponCode === "SELL200") {
      const discountElement = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.2;
      discountElement.innerText = discountAmount.toFixed(2);
      const restTotal = document.getElementById("total");
      restTotal.innerText = totalPrice - discountAmount.toFixed(2);
      document.getElementById("input-field").value = "";
    } else {
      alert("Invalid Coupon");
    }
  } else {
    alert("spend more than $200.");
  }
});
// const makePerches = document.getElementById('perches');
// const popupSection = document.getElementById('popup');
// const darkThem = document.getElementById('dark');
// const closeButton = document.getElementById('closebtn'); 
// makePerches.addEventListener('click', function(){
//   popupSection.classList.add('block');
//   darkThem.style.opacity = '0.3';
  
// })
// closeButton.addEventListener('click',function(){
//   popupSection.remove('block');
// })
function toggle(){
  const  blur = document.getElementById('blur');
  blur.classList.toggle('active');
  const close = document.getElementById('popup');
  close.classList.toggle('active')
}
