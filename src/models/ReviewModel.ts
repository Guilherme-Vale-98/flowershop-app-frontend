class ReviewModel{
    id: number;
    userEmail: string;
    date: string;
    rating: number;
    product_id: number;
    content?: string;

    constructor(id: number, userEmail: string, date: string, rating: number, product_id: number, content: string){
        this.id = id;
        this.userEmail = userEmail;
        this.date = date;
        this.rating = rating;
        this.product_id = product_id;
        this.content = content;
    }
}