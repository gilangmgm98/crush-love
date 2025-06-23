const noTexts = [
  "Yakin Nggak Mau?",
  "Jangan bohong deh~",
  "Coba pikirin lagi 😏",
  "Masa sih enggak mau?",
  "Plis jangan gitu dong :(",
  "Cie malu~",
  "Aduh kok tega...",
  "Aku nangis nih 😢",
  "Pikirin ulang ya",
  "Yakin segitu tega?",
  "Gak kasihan aku?",
  "Coba klik Yes aja deh!",
  "Jangan kabur dong~",
  "Klik yang kanan gih!",
  "Nanti nyesel loh!",
  "Ya ampun kok kamu jahat",
  "Aku kecewa 😔",
  "Kamu tega banget...",
  "Coba sekali lagi, plis",
  "Enggak? Seriusan?",
  "Kamu bercanda kan?",
  "Plis jangan No :(",
  "Yes lebih enak kok",
  "Hehe ketipu~",
  "Tombol ini gak guna",
  "Eh gak bisa loh!",
  "Kenapa pilih ini sih 😩",
  "Jangan main-main gitu~",
  "Kok kamu jahat sih :(",
  "Ya udah aku pergi...",
  "Tombol ini rusak 😅",
  "Salah tombol nih?",
  "Beneran gak mau?",
  "Pikir-pikir lagi deh!",
  "Gak usah gengsi dong",
  "Nanti kamu nyesel",
  "Aku udah nunggu loh",
  "Mau marah tapi sayang 😘",
  "Hehe coba lagi yuk",
  "Klik YES aja plis!",
  "Kok milih yang itu?",
  "Eits jangan klik aku",
  "Aku nggak berfungsi 😝",
  "Heheheh~",
  "Ciee ngejar~",
  "Ga bisa ditangkap dong!",
  "Ngapain coba klik No",
  "Aku geser lagi nih~",
  "Hehehe... gemes!"
];

$(document).ready(function () {
  setTimeout(function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 600);
});

function start() {
  var btnYes = document.querySelector(".btn--yes");
  var btnNo = document.querySelector(".btn--no");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__overlay");
  var btnClose = document.querySelector(".btn-close");
  var headerModar = document.querySelector(".heading-name");
  var desccriptionModar = document.querySelector(".message");

  window.onload = () => {
    document.querySelector(".music").play();
    document.querySelector(".music").volume = 1;
  };
  window.onkeypress = (e) => {
    if (e.charCode === 32) {
      document.querySelector(".music").play();
    }
  };

  document.querySelector(".header").innerHTML = `
        <h1 class="header-name">
            ${CONFIGDATA.titleHeader}
        </h1>
        <p class="header-description">${CONFIGDATA.descriptionHeader}
        </p>`;
  btnYes.innerHTML = `<i class=""></i> ${CONFIGDATA.buttonYes}`;
  btnNo.innerHTML = `<i class=""></i> ${CONFIGDATA.buttonNo}`;
  headerModar.innerHTML = `${CONFIGDATA.titleModar} <i class=""></i>`;
  desccriptionModar.innerHTML = `${CONFIGDATA.descriptionModar}`;

  btnYes.onclick = () => {
    document.querySelector(".music").play();
    popup.classList.add("show");
  };
  btnClose.onclick = () => {
    popup.classList.remove("show");
  };

  overlay.onclick = () => {
    popup.classList.remove("show");
  };

  btnNo.onclick = () => {
    btnNo.style.top = 100 + "px";
    btnYes.style.top = 280 + "px";
  };

  btnNo.onmouseover = (e) => {
    // Acak posisi
    var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
    var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
    btnNo.style.top = x + "px";
    btnNo.style.right = y + "px";

    // Acak teks
    const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
    btnNo.innerHTML = `<i class=""></i> ${randomText}`;
  };

}

start();
