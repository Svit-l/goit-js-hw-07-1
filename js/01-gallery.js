import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ===== 1. Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

function selectImg(event) {
  event.preventDefault();
  // ====== 2. Реализация делегирования на div.gallery и получение url большого изображения.
  const selectedImg = event.target.dataset.source;

  // ====== 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
  // Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
  // ====== 4. Открытие модального окна по клику на элементе галереи.
  // Для этого ознакомься с документацией и примерами.
  const instance = basicLightbox.create(`<img src=${selectedImg}>`);

  instance.show();
}

function closeEscape(event) {
  const instance = basicLightbox.create(`<img src="">`);
  if (event.key === "Escape") {
    // console.log(instance);
    instance.close(() => console.log("lightbox not visible anymore"));
    return;
  }
}

gallery.addEventListener("click", selectImg);
gallery.addEventListener("keydown", closeEscape);

console.log(galleryItems);

// gelleryRef.addEventListener("click", imgShow);

// const instance = basicLightbox.create(`<img src="" />`, {
//   onShow: () => {
//     window.addEventListener("keydown", keydownEscape);
//   },
//   onClose: () => {
//     window.removeEventListener("keydown", keydownEscape);
//   },
// });

// function keydownEscape(event) {
//   console.log(event);
//   if (event.key === "Escape") {
//     instance.close();
//     return;
//   }
// }

// // ===== 1. Создание и рендер разметки по массиву данных galleryItems
// // и предоставленному шаблону элемента галереи.
// const gallery = document.querySelector(".gallery");

// const markup = galleryItems
//   .map(
//     ({ preview, original, description }) =>
//       `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </div>`
//   )
//   .join("");

// gallery.insertAdjacentHTML(
//   "afterbegin",
//   `<ul class="gallery__list">
//   ${markup}
//   </ul>`
// );

// // ====== 2. Реализация делегирования на div.gallery и получение url большого изображения.

// // This is where delegation «magic» happens
// function selectImg(event) {
//   event.preventDefault();
//   // if (event.target.nodeName !== "IMG") {
//   //   return;
//   // }
//   const selectedImg = event.target.dataset.source;
//   // console.log(selectedImg);
//   const instance = basicLightbox.create(`
//     <img src=${selectedImg} width="800" height="600">
// `);

//   instance.show();
//   // return;
// }
// gallery.addEventListener("click", selectImg);
// // ====== 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// // Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// // ====== 4. Открытие модального окна по клику на элементе галереи.
// // Для этого ознакомься с документацией и примерами.

// // document.querySelector("button.image").onclick = () => {
// //   basicLightbox
// //     .create(
// //       `
// // 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// // 	`
// //     )
// //     .show();
// // };
