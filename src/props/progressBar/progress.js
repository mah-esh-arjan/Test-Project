import './progress.css'

const Progress = ({percent}) => {

    return(
        <>
        <div className='nonBootstrap-progress-bar' style={{ width: `${percent}%` }}>

        </div>  
        </>
    )
}

export default Progress;