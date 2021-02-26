const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery')
// const imageList = document.createElement('li')
// const image = document.createElement('img')
// image.classList.add('image')
// const imageList = images.map(image => {
//   const imageEl = document.createElement('img')
//   imageEl.classList.add('image')
//   return galleryRef.insertAdjacentHTML('beforeend', `src = ${ image.url }`)
//   // return imageEl
// })


const imageList = (image) => {
  return image.map(image => {
    const imageEl = document.createElement('img')
    return galleryRef.insertAdjacentHTML('beforeend', `<li><img class = "image" src = ${image.url}></img></li>`)
  })
}
const element = imageList(images)
galleryRef.append(...element)
// galleryRef.appendChild(imageList)
// imageList.appendChild(image)
// console.log(galleryRef);
// console.log(imageList);
// const image = (image) => {
//   const imageList = document.createElement('li img')
//   imageList.classList.add('image')
//   imageList.insertAdjacentHTML('afterbegin') = image;
//   return imageList;
// }
// const renderItem = (list) => {
//   const renderList = list.map((url, alt) => `<img src ="${url}" alt='${alt}'`)
//   renderList.append(...imageList)
// }
// renderList(images)


// const image = document.createElement('img')
// image.classList.add('image')
// image.setAttribute('src', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
// image.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

// galleryRef.appendChild(image)

// const imageList = images
//   .map(({ url, alt }) => `<img src ="${url}" alt='${alt}'`)
//   .join(' ')
// console.log(imageList);
// galleryRef.append(...imageList)