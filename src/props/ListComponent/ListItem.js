const ListItem = ({arr}) => {

    return(
        <>
        {arr.map((item,index) => (
            <h1 key={index}>{item.fact}</h1>
        ))}
        </>
    )
}

export default ListItem;