import { useState } from "react";
import igm1 from './img/img1.png';
import igm2 from './img/img2.png';
import igm3 from './img/img3.png';
import './Carousel.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Carousel = () => {

const [slider,setSlider] = useState(1);

const onLeftClick = () => {

    setSlider(slider => slider === 1 ? 3 : slider - 1 )

}

const onRightClick = () => {

    setSlider(slider => slider === 3 ? 1 : slider + 1 )

}

const renderSlider = () => {

    switch (slider) {
        case 1:
            return <img src={igm1} />

        case 2:
            return <img src={igm2} />
        case 3:

            return <img src={igm3} />
        
        default:
            return <img src={igm1} />
    }

}

return(
    <section id="Carousel">

    <button onClick={onLeftClick}> <ArrowBack /> </button>
    {renderSlider()}
    <button onClick={onRightClick}> <ArrowForward /> </button>
    </section>
)


}

export default Carousel