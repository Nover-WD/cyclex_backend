const orders2 = [
    {
        orderItems: {
            name: "Black Road Bike",
            qty: 1,
            image: "/assets/img/road-bike.png",
            price: 999.99
        },
        shippingAddress: {
            address: "Caloocan Philippines",
            city: "Caloocan",
            postalCode: "1111",
            country: "Philippines"
        },
        paymentMethod: "Paypal",
        paymentResult: {
            id: 1,
            status: "successful",
            updateTime: "2022-04-01 at 11:54 pm",
            emailAddress: "johndoe@gmail.com"
        },
        taxPrice: 0.2,
        shippingPrice: 10.0,
        totalPrice: 40.2,
        isPaid: true,
        paidAt: "2022-04-01",
        deliveredAt: "Caloocan Phillippines"
    },
    {
        orderItems: {
            name: "Customized Helmets",
            qty: 1,
            image: "/frontend/public/assets/img/helmets.png",
            price: 15
        },
        shippingAddress: {
            address: "Quezon City Philippines",
            city: "Quezon City",
            postalCode: "2222",
            country: "Philippines"
        },
        paymentMethod: "Paypal",
        paymentResult: {
            id: "2",
            status: "successful",
            updateTime: "2022-05-01 at 11:54 pm",
            emailAddress: "janedoe@gmail.com"
        },
        taxPrice: 0.2,
        shippingPrice: 10.0,
        totalPrice: 25.2,
        isPaid: true,
        paidAt: "2022-05-01",
        deliveredAt: "Quezon City Phillippines"
    },
    {
        orderItems: {
            name: "Extreme Mountain Bike",
            qty: 1,
            image: "/frontend/public/assets/img/mountain-bike2.png",
            price: 90,
        },
        shippingAddress: {
            address: "Quezon City Philippines",
            city: "Quezon City",
            postalCode: "2222",
            country: "Philippines"
        },
        paymentMethod: "Paypal",
        paymentResult: {
            id: "3",
            status: "pending",
            updateTime: "2022-03-01 at 10:54 pm",
            emailAddress: "janedoe@gmail.com"
        },
        taxPrice: 0.2,
        shippingPrice: 12.0,
        totalPrice: 112.2,
        isPaid: false,
        paidAt: "2022-01-01",
        deliveredAt: "Quezon City Phillippines"
    },
    {
        orderItems: {
            name: "Extreme Mountain Bike",
            qty: 1,
            image: "/frontend/public/assets/img/mountain-bike2.png",
            price: 90,
        },
        shippingAddress: {
            address: "Las Piñas Philippines",
            city: "Las Piñas City",
            postalCode: "3333",
            country: "Philippines"
        },
        paymentMethod: "COD",
        paymentResult: {
            id: "4",
            status: "pending",
            updateTime: "2022-02-01 at 10:54 pm",
            emailAddress: "janedoe@gmail.com"
        },
        taxPrice: 0.2,
        shippingPrice: 12.0,
        totalPrice: 112.2,
        isPaid: false,
        paidAt: "2022-01-02",
        deliveredAt: "Las Piñas Phillippines"
    },
    {
        orderItems: {
            name: "Black Road Bike",
            qty: 1,
            image: "/frontend/public/assets/img/road-bike.png",
            price: 999.99,
            },
        shippingAddress: {
            address: "Las Piñas Philippines",
            city: "Las Piñas City",
            postalCode: "3333",
            country: "Philippines"
        },
        paymentMethod: "COD",
        paymentResult: {
            id: "4",
            status: "succesful",
            updateTime: "2022-02-01 at 09:54 pm",
            emailAddress: "johndoe@gmail.com"
        },
        taxPrice: 10,
        shippingPrice: 11.0,
        totalPrice: 1023,
        isPaid: true,
        paidAt: "2022-02-01",
        deliveredAt: "Las Piñas Phillippines"
    }
]

export default orders2;