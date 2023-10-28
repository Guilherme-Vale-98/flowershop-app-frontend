class ProductModel {
    id: Number;
    name: String;
    description?:String;
    copies?: Number;
    copiesAvailable?: Number;
    category?: String;
    img?: String;


    constructor(id: Number, name: String, description: String, copies: Number, copiesAvailable: Number, category: String, img: String){
        this.id = id;
        this.name = name;
        this.description = description;
        this.copies = copies;
        this.copiesAvailable = copiesAvailable;
        this.category = category;
        this.img = img;

    }
}
export default ProductModel;