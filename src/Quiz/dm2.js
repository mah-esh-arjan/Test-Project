

function mergeCart(cart1, cart2) {
    
    for (key in cart1){   //1 , 2 
        if(cart2[key]){ //cart2[key] represents an whole object 1:{name:"lorem",age:"ipsum"}
            cart1[key].quantity = cart1[key].quantity + cart2[key].quantity;
            continue;
        }
    }
    for (key in cart2){
        if(!cart1[key]){
            cart1[key] = cart2[key]
        }
    }

    return cart1 ;
}

const cart1 = { 1: { name: "Laptop", quantity: 1, price: 1000 },
                2: { name: "Phone", quantity: 1, price: 800 } };
const cart2 = { 2: { name: "Phone", quantity: 1, price: 800 } };


//qn2
const handleCartArray = () => {

    setCart((prevCart) => prevCart.map((item) => (
    {    ...item,
        price: item.price * 0.9}
    )))

}

const handleCartQuantity = () => {
 setCart((prevCart) => prevCart.map((item) => ({
        ...item,
        quantity: item.quantity+1
    })))
}

//qn3
const handleWarranty = () => {

    setCart( (prevCart) => {
        let updatedCart = {};

        for ( key in prevCart){
            updatedCart[key] = {
                ...prevCart[key],
                    details: {
                    ...prevCart[key].details,
                    warranty : "3 years"
                }
            }

        }

        return updatedCart;

    })

}

const handleAddDetail = () => {
    setCart( (prevCart) => {
        let addDetailObj = {};

        for (key in prevCart){
            addDetailObj[key] = {
                ...prevCart[key],
                details: {
                    ...prevCart[key].details,
                    brand: "apple",
                }
            }

        }
        return addDetailObj;
    })

}