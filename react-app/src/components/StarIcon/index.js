import react from 'react';
import star from '../../assets/star-square.svg';


const StarIcon = ({className, fillColor}) => {
    return <img src={star} alt="star" className={className}
    style={{ fill: fillColor, width: '1em', height: '1em' }}
    />

}

export default StarIcon
