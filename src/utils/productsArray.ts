export type Product = {
  name: string,
  type: string,
  capacity: number,
  desc: string,
  price: number,
  id: number,
  image: string,
}

const productsArray:Product[] = [
  {id: 15, name: 'Iphone Pro', desc: 'prefect phone', price: 1440, capacity: 256, type: 'phone', image: '/images/iphone-13.jpg'},
  {id: 2, name: 'Samsung 12 Pro', desc: 'another phone another phone', price: 899, capacity: 256, type: 'phone', image: '/images/iphone-14.jpg'},
  {id: 3, name: 'Samsung Not Pro', desc: 'also phone another phone another phone', price: 200, capacity: 256, type: 'phone', image: '/images/iphone-14.jpg'},
  {id: 4, name: 'Iphone 10 Pro', desc: 'prefect phone', price: 1440, capacity: 456, type: 'phone', image: '/images/iphone-13.jpg'},
  {id: 5, name: 'Samsung Pro', desc: 'another phone another phone', price: 599, capacity: 256, type: 'phone', image: '/images/iphone-13.jpg'},
  {id: 10, name: 'Samsung 14 Pro', desc: 'also phone another phone another phone', price: 600, capacity: 256, type: 'phone', image: '/images/iphone-14.jpg'}
];

export const getProductsObject = (productsArray:Product[]) => 
   productsArray.reduce((acc, el) => ({
   ...acc, [el.id] : el
}), {})



export default productsArray