const scriptURL =
  "https://script.google.com/macros/s/AKfycbxbO4v11T-UkKvoN14lU4cHaDt1QbuswLt6V2MC1isfGGhO2SQy0irHOLKYjxg2e4sD/exec";

const form = document.forms["rd-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  Swal.fire({
    title: 'Kirim sekarang?',
    text: "Pastikan pesan yang akan dikirim sudah benar!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ok'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Sukses!',
        'Pesan anda sudah dikirim.',
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


// btnKirim.addEventListener('click', function () {
//   Swal.fire({
//     title: 'Kirim sekarang?',
//     text: "Pastikan pesan yang akan dikirim sudah benar!",
//     icon: 'question',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Ok'
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire(
//         'Sukses!',
//         'Pesan anda sudah dikirim.',
//         'success'
//       )
//     }
//   })
// })