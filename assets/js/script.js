const scriptURL =
  "https://script.google.com/macros/s/AKfycbxbO4v11T-UkKvoN14lU4cHaDt1QbuswLt6V2MC1isfGGhO2SQy0irHOLKYjxg2e4sD/exec";

const form = document.forms["rd-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  Swal.fire({
    title: 'Kirim sekarang?',
    text: "Pastikan pesan yang anda tulis sudah benar!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ok'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Sukses!',
        'Pesan anda sudah terkirim.',
        'success'
      )
      // Ketika tombol Kirim diklik
      // Tampilkan tombol Loading, Hilangkan tombol Kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");

      fetch(scriptURL, {
          method: "POST",
          body: new FormData(form),
        })


        .then((response) => {
          // Tampilkan tombol Kirim, Hilangkan tombol Loading
          btnLoading.classList.toggle("d-none");
          btnKirim.classList.toggle("d-none");

          form.reset();
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    }
  })
})

// Animasi AOS
AOS.init({
  once: true,
  duration: 3000
});

// Animasi GSAP
gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {
  duration: 2,
  delay: 1.5,
  text: 'PHP DEVELOPER'
})

gsap.from('.navbar', {
  duration: 2,
  y: '-100%',
  opacity: 0,
  ease: 'bounce'
})

gsap.from('.jumbotron img', {
  duration: 2,
  y: '-100%',
  opacity: 0,
  ease: 'bounce'
})

gsap.from('.display-4', {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.5,
  ease: 'back'
})

// Tilt Js Animation
VanillaTilt.init(document.querySelectorAll(".chars-box"), {
  max: 25,
  speed: 400
});
VanillaTilt.init(document.querySelector(".jumbotron img"), {
  max: 40,
  speed: 400
});
VanillaTilt.init(document.querySelector(".display-4"), {
  max: 50,
  speed: 400
});
VanillaTilt.init(document.querySelector(".lead"), {
  max: 60,
  speed: 400
});