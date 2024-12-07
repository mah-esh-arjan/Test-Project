
const [cart,setCart] = useState({})

const handleAdd = (item) => {
    if(!cart[item.id]){
    setCart((prevCart) => ({
        ...prevCart,
        [item.id] : {...item, 
        quantity: 1}
    }
    )
)
}
}


const quantityplus = (item) => {
    if(cart[item.id]){
        setCart((prevCart) => ({
            ...prevCart,
            [item.id] : {
                ...prevCart[item.id], 
                quantity: prevCart[item.id].quantity +1
            }
        }))
    }

}

const checkId = (item) => {
    if(cart[item.id]){
        return true;
    }
    else{
        return false;
    }
}

const removeId = (item) => {
    if(cart[item.id]){
        delete cart.item.id
    }

}