export type Product = {
    title: string
    type: string
    capacity: number
    description: string
    price: number
    id: number
    image: string
    fulldescription?: string
}

const productsArray: Product[] = [
    {
        id: 15,
        title: 'Iphone Pro',
        fulldescription: '<div class="red">prefect phone</div>',
        description: 'prefect phone',
        price: 1440,
        capacity: 256,
        type: 'phone',
        image: '/images/iphone-13.jpg',
    },
    {
        id: 2,
        title: 'Samsung 12 Pro',
        description: 'another phone another phone',
        price: 899,
        capacity: 256,
        type: 'phone',
        image: '/images/iphone-14.jpg',
    },
    {
        id: 3,
        title: 'Samsung Not Pro',
        description: 'also phone another phone another phone',
        price: 200,
        capacity: 256,
        type: 'phone',
        image: '/images/iphone-14.jpg',
    },
    {
        id: 4,
        title: 'Iphone 10 Pro',
        description: 'prefect phone',
        price: 1440,
        capacity: 456,
        type: 'phone',
        image: '/images/iphone-13.jpg',
    },
    {
        id: 5,
        title: 'Samsung Pro',
        description: 'another phone another phone',
        price: 599,
        capacity: 256,
        type: 'phone',
        image: '/images/iphone-13.jpg',
    },
    {
        id: 10,
        title: 'Samsung 14 Pro',
        description: 'also phone another phone another phone',
        price: 600,
        capacity: 256,
        type: 'phone',
        image: '/images/iphone-14.jpg',
    },
]

export const getProductsObject = (productsArray: Product[]) =>
    productsArray.reduce(
        (acc, el) => ({
            ...acc,
            [el.id]: el,
        }),
        {}
    )

export default productsArray
