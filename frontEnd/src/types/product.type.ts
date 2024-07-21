export interface IProduct {
id:number,
title : string,
price:string,
cat_prefix?:string,
img:string,
max:string
quantity?:number,
isLiked?:boolean,
addCart?:(id:number) => void,
removeItem:(id:number) => void,
changeQuantityHandler:(id:number,quantity:number) => void,
}