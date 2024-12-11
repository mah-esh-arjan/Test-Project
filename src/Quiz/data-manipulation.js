
cart = {  101: {id: 101, name: "Laptop", price: 1000, quantity: 1   }, 102: {id: 102, name: "Laptop", price: 1000, quantity: 1 } } 
// const [cart,setCart]

const productCart = (item) => {

    setCart( (prevCart) => {
        if (prevCart[item.id]){
            return {
                ...prevCart,
                [item.id] : { ...prevCart[item.id], quantity : prevCart[item.id].quantity + 1}
            }
        }
        else {
            return {
                [item.id] : {...item, quantity: 1}

            }

        }
     })
}

//Qn2:
const handleAddCart = (item) => {
    setCart((prevCart) => [...prevCart, item])
}

const removeId = (id) => {
    setCart((prevCart) => prevCart.filter((item) => (item.id !== id)))
}

const updateQuanitity = (id) => {
    setCart((prevCart) => (
        prevCart.map((item) =>
        item.id === id? {...item, quantity: item.quantity +1 }  : item
        )
    )
    )
}


//QN.3 :
const addItemCart = (item) => {
setCart((prevCart) => {
        return{
            ...prevCart,
            [item.code] : item
        }
})
}

//QN.4 :

const handleAddClick = (item) => {
setCart((prevCart) => [...prevCart,item])

}

return (
    <div> 
        <h1>{cart.length === 0 ? "Cart is empty": cart.map((item,index) => (
            <div key={index}>
                <h2> 
                {item.name} 
                </h2>
                <h2> {item.quantity}</h2>
                </div>
        ))}</h1>
    </div>
)

//QN.5

const logItem = (temp) => {

    setState((prevCart) => {
        if(prevCart.user.name === temp.name){
            return{
                ...prevCart,
                user : {
                    ...user,
                    name : temp.name,
                    loggedIn : true,
                }
            }
        }
    })
}

const itemCart = (temp) => {

    setState((prevState) => {
        return{
        ...prevState,
        cart : [...prevState, temp]
    }
    })
}

