

const LiftUp = ({int, handleLift}) => {

    return(
        <>
        <button onClick={() => handleLift(int)}>Add{int}</button>
        </>
    )
}

export default LiftUp;