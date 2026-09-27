function bukaPesan() {

    const pesan = document.getElementById("pesan");

    pesan.classList.remove("hidden");

    setTimeout(function () {

        pesan.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);
}


function kePertanyaan() {

    const pertanyaan =
        document.getElementById("pertanyaan");

    pertanyaan.classList.remove("hidden");

    setTimeout(function () {

        pertanyaan.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);
}


function maafinAku() {

    const hasil =
        document.getElementById("hasil");

    const belumBtn =
        document.getElementById("belumBtn");

    const kejutan =
        document.getElementById("kejutan");

    hasil.innerHTML = `
        🥹❤️ Serius kamu maafin aku?
        <br>
        Makasih ya, Sayang...
    `;

    belumBtn.style.display = "none";

    setTimeout(function () {

        kejutan.classList.remove("hidden");

        kejutan.scrollIntoView({
            behavior: "smooth"
        });

    }, 1200);
}


function belumMau() {

    const tombol =
        document.getElementById("belumBtn");

    const hasil =
        document.getElementById("hasil");

    const pesan = [

        "🥺 Jangan marah lama-lama ya, Sayang...",

        "😭 Aku sudah minta maaf lho...",

        "🥹 Kasihan aku dong, Sayang...",

        "❤️ Aku masih sayang kamu...",

        "😔 Jangan cuekin aku terus ya...",

        "🥺 Sekali ini aja maafin aku...",

        "💕 Aku janji akan berusaha lebih baik..."

    ];

    const random =
        pesan[
            Math.floor(
                Math.random() * pesan.length
            )
        ];

    hasil.innerHTML = random;


    const area =
        document.querySelector(".buttons");


    const maxX =
        Math.max(
            0,
            area.clientWidth -
            tombol.offsetWidth
        );


    const maxY =
        Math.max(
            0,
            area.clientHeight -
            tombol.offsetHeight
        );


    const x =
        Math.random() * maxX;


    const y =
        Math.random() * maxY;


    tombol.style.position =
        "absolute";


    tombol.style.left =
        x + "px";


    tombol.style.top =
        y + "px";
}


function pesanTerakhir() {

    const pesan =
        document.getElementById(
            "pesanTerakhir"
        );

    pesan.innerHTML = `
        💌 Sayang...

        <br><br>

        Kalau suatu hari aku bikin kamu
        kesel lagi, jangan langsung pergi ya.

        <br><br>

        Ingatkan aku untuk menjadi lebih baik.

        <br><br>

        Karena aku masih ingin berjalan
        bareng kamu.

        <br><br>

        <strong>
            Aku sayang kamu,
            Sayang. ❤️
        </strong>
    `;
}