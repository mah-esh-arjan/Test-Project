import Card from './Card';


const Custom = () => {

    return(
        <>
        <Card 
        title={"title1"}
        content={"content2"}
        props={<div>Hello footer</div>}
        />

        <Card 
        title={"title2"}
        content={"content3"}
        props={<div>Hello footer</div>}
        />
        </>
    )
}

export default Custom;