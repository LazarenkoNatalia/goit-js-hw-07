const categorieList = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories : ${categorieList.length}`);

categorieList.forEach((elem) => {
    console.log(`Category : ${elem.firstElementChild.textContent}`);
    console.log(`Elements : ${elem.lastElementChild.children.length}`);
})

