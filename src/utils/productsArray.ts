type Product = {
  name: string,
  type: string,
  capacity: number,
  desc: string,
  price: number,
  id: number,
}

const productsArray:Product[] = [
  {id: 1, name: 'Iphone Pro', desc: 'prefect phone', price: 1440, capacity: 256, type: 'phone'},
  {id: 2, name: 'Samsung 12 Pro', desc: 'another phone another phone', price: 899, capacity: 256, type: 'phone'},
  {id: 3, name: 'Samsung Not Pro', desc: 'also phone another phone another phone another phone', price: 200, capacity: 256, type: 'phone'},
  {id: 4, name: 'Iphone 10 Pro', desc: 'prefect phone', price: 1440, capacity: 456, type: 'phone'},
  {id: 5, name: 'Samsung Pro', desc: 'another phone another phone', price: 599, capacity: 256, type: 'phone'},
  {id: 6, name: 'Samsung 14 Pro', desc: 'also phone another phone another phone another phone', price: 600, capacity: 256, type: 'phone'}
];


export default productsArray