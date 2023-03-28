import axios from 'axios'
import Title from 'components/Title/Title'
import { useState } from 'react'

type Props = {}
type Order = {
    name: string
    address: string
}
const CheckoutPage = (props: Props) => {
    const [isOrderSent, setIsOrderSent] = useState<boolean>(false)
    const [orderData, setorderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setorderData((prev) => ({
            ...prev,
            name: e.target.value,
        }))
    }
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setorderData((prev) => ({
            ...prev,
            address: e.target.value,
        }))
    }

    const sendOrder = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
            .post('http://localhost:1337/api/orders', {
                data: {
                    name: orderData.name,
                    address: orderData.address,
                },
            })
            .then((res) => console.log(res.data.data.attributes))
            /* .then(({ name, address }) => {
                setorderData({
                    name,
                    address,
                })
                setIsOrderSent(true)
            }) */
            .catch((er) => console.log(er))
    }
    const renderForm = () => {
        return (
            <form onSubmit={sendOrder}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        name=""
                        id=""
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        name=""
                        id=""
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }
    const renderMessage = () => {
        return (
            <div>
                <div>Dear {orderData.name}, thanks for your order!</div>
                <p>Address: {orderData.address}</p>
            </div>
        )
    }

    console.log(orderData)
    return (
        <>
            <Title>Checkout</Title>
            {isOrderSent ? renderMessage() : renderForm()}
        </>
    )
}
export default CheckoutPage
