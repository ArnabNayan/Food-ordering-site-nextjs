import DbConnect from "./DbConnect";
// import "server only"
export const getProductsFromDb=async()=>{
    const db=await DbConnect();
    const productsCollection=db.collection("products");
    return productsCollection.find({}).toArray();
}