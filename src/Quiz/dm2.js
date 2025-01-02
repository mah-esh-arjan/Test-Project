const [cart,setCart] = useState([]);

// [{name: "laptop",key: value}]
function MergeCart(cart1, cart2){

    value1 = Object.values(cart1)
    value2 = Object.values(cart2)

    setCart((prevCart) =>[...prevCart,
        ...value1,
        ...value2
    ])
}