import { IProduct } from "./product.type"

export type TOrderProduct = {
    id:number,
    userId?:number,
    items:IProduct[]
    subTotal:number
    }
    