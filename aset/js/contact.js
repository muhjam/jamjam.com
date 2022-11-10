const scriptURL = "http://localhost/portofolio/php/send.php";
const form = document.forms["jamjam-contact-form"];

const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

const gagalAlert = document.querySelector(".gagal-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ketika tombol loading di klik
    // tampilkan tombol loading hilangkan tombol kirim
    btnLoading.classList.remove("d-none");
    btnKirim.classList.add("d-none");
    myAlert.classList.add("d-none");

    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
        .then((response) => {
            // tampilkan tombol kirim, tampilkan tombol loading
            btnLoading.classList.add("d-none");
            btnKirim.classList.remove("d-none");

            // tampilkan alert
            myAlert.classList.remove("d-none");

            // rest form
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => {
            // tampilkan tombol kirim, tampilkan tombol loading
            btnLoading.classList.add("d-none");
            btnKirim.classList.remove("d-none");

            // tampilkan alert
            gagalAlert.classList.remove("d-none");

            // rest form
            form.reset();

            console.error("Error!", error.message);
        });
});