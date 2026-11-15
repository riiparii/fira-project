
const pages = [

    // HALAMAN 1
    `
    <p class="small-label">WELCOME TO OUR LITTLE BOOK</p>
    <h2>Hey, my favorite person! ♡</h2>
    <div class="photo-placeholder">
    <img src="foto/image1.jpg" alt="Our Photo">
</div>
    <p>
        Aku membuat buku kecil ini khusus buat kamu.
        Mungkin sederhana, tapi setiap halaman di dalamnya
        punya sesuatu yang ingin aku sampaikan.
    </p>
    <p class="quote">
        "Some people make ordinary days feel special."
    </p>
    `,

    // HALAMAN 2
    `
    <p class="small-label">CHAPTER 01 — OUR STORY</p>
    <h2>Our Little Universe</h2>
    <p>
        Setiap cerita pasti punya awal. Dan aku senang
        karena salah satu cerita yang aku punya adalah
        cerita tentang kita.
    </p>
    <p>
        Dari hal-hal kecil, obrolan sederhana, sampai
        momen yang mungkin terlihat biasa bagi orang lain.
        Semuanya punya tempat tersendiri.
    </p>
    <div class="photo-placeholder">
    <img src="foto/image2.png" alt="Our Memory">
</div>
    `,

    // HALAMAN 3
    `
    <p class="small-label">LITTLE MOMENTS</p>
    <h2>Memories We Keep</h2>
    <p>
        Ada banyak hal yang mungkin tidak bisa diulang,
        tapi selalu bisa dikenang.
    </p>
    <div class="photo-placeholder">
    <img src="foto/image3.jpg" alt="Our First Memory">
</div>
    <p class="quote">
        "The little things are actually the big things."
    </p>
    `,

    // HALAMAN 4
    `
    <p class="small-label">CHAPTER 02 — A LITTLE LETTER</p>
    <h2>Open When You Miss Me</h2>
    <p>
        Ada sesuatu yang ingin aku titipkan untuk
        hari-hari ketika kamu sedang membutuhkan
        sedikit semangat.
    </p>

    <div class="letter">
        <h3>Dear You, ♡</h3>
        <p>
            Sebelum lanjut, ada surat kecil yang
            ingin aku sampaikan.
        </p>
        <button onclick="openLetter()">
            Open this letter ✉
        </button>

        <div class="letter-message" id="letterMessage">
            <p>
                Hai, kamu. Kalau suatu hari kamu merasa
                lelah, ingat kalau kamu sudah melewati
                banyak hal sampai sejauh ini.
            </p>
            <p>
                Jangan terlalu keras sama diri sendiri.
                Kamu nggak harus selalu sempurna.
                Tetap jadi dirimu sendiri, ya.
            </p>
            <p>
                With lots of love, ♡
            </p>
        </div>
    </div>
    `,

    // HALAMAN 5
    `
    <p class="small-label">CHAPTER 03 — A LITTLE GAME</p>
    <h2>How Well Do You Know Us?</h2>
    <p>
        Sekarang waktunya sedikit bermain!
        Coba jawab pertanyaan kecil ini.
    </p>

    <h3>Apa yang paling aku suka dari kamu?</h3>

    <button class="quiz-option" onclick="answerQuiz(0)">
        A. Cara kamu tersenyum
    </button>

    <button class="quiz-option" onclick="answerQuiz(1)">
        B. Cara kamu bercerita
    </button>

    <button class="quiz-option" onclick="answerQuiz(2)">
        C. Semua hal kecil tentang kamu
    </button>

    <div class="quiz-result" id="quizResult">
        Pilih jawabanmu terlebih dahulu ♡
    </div>
    `,

    // HALAMAN 6
    `
    <p class="small-label">A LITTLE REMINDER</p>
    <h2>Things I Appreciate</h2>
    <p>
        Ada beberapa hal sederhana yang ingin
        aku ingat tentang kamu.
    </p>
    <div class="letter">
        <p>♡ Cara kamu membuat hari terasa lebih menyenangkan.</p>
        <p>♡ Cerita-cerita kecil yang kamu bagikan.</p>
        <p>♡ Hal sederhana yang membuat kamu menjadi dirimu.</p>
        <p>♡ Kehadiranmu dalam cerita ini.</p>
    </div>
    <p class="quote">
        "You are appreciated more than you know."
    </p>
    `,

    // HALAMAN 7
    `
    <p class="small-label">CHAPTER 04 — THE SURPRISE</p>
    <h2>A Little Surprise For You</h2>
    <p>
        Kita sudah sampai di halaman terakhir.
        Tapi sebelum menutup buku ini,
        masih ada satu hadiah kecil.
    </p>

    <button class="gift-box" onclick="openGift()">
        <span>🎁</span>
        Click to open your gift!
    </button>

    <div class="final-message" id="finalMessage">
        <h3>Surprise! ♡</h3>
        <p>
            Terima kasih sudah menjadi bagian
            dari cerita ini.
        </p>
        <p>
            Semoga hari-harimu selalu dipenuhi
            hal-hal baik dan kebahagiaan.
        </p>
        <p class="quote">You deserve all the good things. ♡</p>
    </div>
    `,

    // HALAMAN 8
    `
<div class="ending-page">
    <div class="ending-decoration">♡</div>
    <div class="ending-decoration flower">✿</div>

    <p class="ending-small">OUR LITTLE STORY</p>

    <h2>This Is Not The End</h2>

    <div class="ending-line"></div>

    <p>
        And that's the end of this little book...
    </p>

    <p>
        But it's not the end of our story.
    </p>

    <p>
        Thank you for being part of my days,
        my happiness, and all the little moments
        that make life feel special.
    </p>

    <p>
        I don't know what the future holds,
        but I hope there will be many more pages with you.
    </p>

    <h3>Until we write another chapter. ♡</h3>

    <div class="ending-footer">
        Made with love, just for you.
        <br>
        <span>12 November 2026</span>
    </div>

    <button class="read-again-button" onclick="readAgain()">
        Read Again ♡
    </button>
</div>
`
    
];

let currentPage = 0;

// LOVE VERIFICATION

// GANTI DENGAN DATA KALIAN
const correctName = "ALBANI FACHRI SUFIYAN";
const correctDate = "13/07/2026";

document.getElementById("loveForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document
        .getElementById("boyfriendName")
        .value.trim();

    const date = document
        .getElementById("anniversaryDate")
        .value.trim();

    const message = document.getElementById(
        "verificationMessage"
    );

    if (
        name.toLowerCase() === correctName.toLowerCase() &&
        date === correctDate
    ) {

        message.style.color = "#619b78";
        message.textContent = "Yay! You know our story! ♡";

        setTimeout(() => {

            document
                .getElementById("verificationScreen")
                .classList.add("hidden");

            document
                .getElementById("coverScreen")
                .classList.remove("hidden");

        }, 800);

    } else {

        message.style.color = "#c56c80";
        message.textContent =
            "Oops! Something is incorrect. Try again, sweetheart ♡";

    }

});


const leftContent = document.getElementById("leftContent");
const rightContent = document.getElementById("rightContent");


function openBook() {
  const coverScreen = document.getElementById("coverScreen");
  const cover = document.querySelector(".book-cover");
  const bookScreen = document.getElementById("bookScreen");
  const music = document.getElementById("backgroundMusic");

  cover.classList.add("opening");

  setTimeout(() => {
    coverScreen.classList.add("fade-out");

    setTimeout(() => {
      coverScreen.classList.add("hidden");
      bookScreen.classList.remove("hidden");

      renderPages();

      music.play().then(() => {
    document.getElementById("musicToggle").classList.add("playing");
}).catch(error => {
    console.log("Musik tidak dapat diputar:", error);
});

      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  }, 1400);
}

function renderPages() {

    leftContent.innerHTML = pages[currentPage];

    rightContent.innerHTML =
        pages[currentPage + 1] || "";

    document.getElementById("leftNumber").textContent =
        String(currentPage + 1).padStart(2, "0");

    document.getElementById("rightNumber").textContent =
        String(currentPage + 2).padStart(2, "0");

    document.getElementById("pageNumber").textContent =
        `${String(currentPage + 1).padStart(2, "0")} / 08`;

    document.getElementById("navigationText").textContent =
        `Page ${currentPage + 1}–${currentPage + 2}`;

    document.getElementById("prevBtn").disabled =
        currentPage === 0;

    document.getElementById("nextBtn").disabled =
        currentPage >= pages.length - 2;
}

function changePage(direction) {

    currentPage += direction;

    if (currentPage < 0) {
        currentPage = 0;
    }

    if (currentPage > pages.length - 2) {
        currentPage = pages.length - 2;
    }

    renderPages();
}

function readAgain() {
    currentPage = 0;
    renderPages();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openLetter() {

    const letter = document.getElementById("letterMessage");

    letter.classList.toggle("show");

}

function answerQuiz(answer) {

    const result = document.getElementById("quizResult");

    if (answer === 2) {
        result.innerHTML =
            "Correct! ♡ Jawabannya memang semua hal kecil tentang kamu.";
    } else {
        result.innerHTML =
            "Hehe, hampir benar! Tapi jawabannya C. Semua hal kecil tentang kamu ♡";
    }

}

function openGift() {

    const message = document.getElementById("finalMessage");

    message.classList.add("show");

    document.querySelector(".gift-box").innerHTML =
        "<span>💗</span> Your gift has been opened!";

    document.querySelector(".gift-box").disabled = true;

}

// MUSIC PLAY / PAUSE
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicToggle");

    if (music.paused) {
        music.play();
        button.classList.add("playing");
        button.innerHTML = "♫";
    } else {
        music.pause();
        button.classList.remove("playing");
        button.innerHTML = "♪";
    }
}

