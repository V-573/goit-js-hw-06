const categoriesList = document.getElementById('categories'); // Select the parent element that contains the children for each category

const categoryItems = categoriesList.getElementsByClassName('item'); // create an array for each items with the name "item"
const numberOfCategories = categoryItems.length; // i obtain a quantity for the length of array
//console.log(` number of categories: ${numberOfCategories} `);

for (const categoryItem of categoryItems) {// getElementsByClassName no devuelve un array real, sino un objeto de tipo HTMLcolection, no se pueden usar metodos de array como el forEach
    const categoryTitle = categoryItem.querySelector('h2').textContent;// pero podria convertir los datos almacenados en "categoryItems" en un array, con la funcion: Array.form
    const articulsCategory = categoryItem.querySelectorAll('ul > li').length;// tocaria crear variable, ejemplo: arrayCategoryItems= Array.Form(category.Items)
   // console.log(`category:${categoryTitle}`);
  //  console.log(`number of item for category: ${articulsCategory}`);

}


//forma dos de hacer el ejercicio:
const listaCategorias = document.querySelector('#categories');
const categoriaElementos= listaCategorias.querySelectorAll('.item');
const numeroDeCategorias = categoriaElementos.length;
console.log(`numero de categorias: ${numeroDeCategorias}` ); //ctr + k + u (descomento) pero +c (comento)

categoriaElementos.forEach(categoryItem => {
  // categoryItems.forEach(categoryItem => {
    const categoriaTitulo = categoryItem.querySelector('h2').textContent;
    const articuloCategoria = categoryItem.querySelectorAll('ul > li').length;

    console.log(`Categoria: ${categoriaTitulo}`);
    console.log(`numero de elementos: ${articuloCategoria}`);

});