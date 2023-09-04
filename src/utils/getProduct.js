import { getProductsFromDb } from "@/services/product.service";
import { cache } from 'react' 
// import "server only"
const getProduct = cache(() => {
    return getProductsFromDb()
 });

export default getProduct;