const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");


export const showProductContainer = (products ) => {
    if(!products){
        return false;
    }

    products.forEach((curProd) => {
        const {id, name, brand, category, price, stock, description, image } = curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".productName").content = name;

        productContainer.append(productClone);
    });

};