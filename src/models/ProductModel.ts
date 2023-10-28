class ProductModel {
    id: number;
    name: string;
    description?:string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;


    constructor(id: number, name: string, description: string, copies: number, copiesAvailable: number, category: string, img: string){
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