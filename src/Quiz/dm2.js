

const [cart,setCart] = useState({})

const mergeCart = () => {
    setCart( (prevCart) => {
        let cart1key = Object.keys(cart1)
        let cart2key = Object.keys(cart2)
        if(cart1key === cart2key){
            return{
                ...prevCart,
                [cart1key] : {
                    ...cart1,
                    quantity: cart1.quantity + cart2.quantity
                }
            }
        }
        else{
            return{
                ...prevCart,
                ...cart1,
                ...cart2,
            }
        }
    })

}

function mergeCart ( obj1,obj2) {
 for(let key in obj1) {
    for( let key2 in obj2){
        if(key === key2){

        return{
            ...obj1,
            ...obj2,
            [obj1[key]] : {
                ...obj1,
                quantity: obj1[key].quantity + obj2[key2].quantity
            }
        }
        }
    }
 }
}