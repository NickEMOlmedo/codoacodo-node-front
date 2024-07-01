import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Card = ({ image, text, link }) => {

    return (
        <CardComponent>
            <p className='text'>{text}</p>
            <div className='img-container'><Link to={link}><img src={image} alt='' className='image' /></Link></div>
        </CardComponent>
    )
}

Card.propTypes = {

    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

const CardComponent = styled.div`

display: flex;
width: 180px;
height:180px;
justify-content:center;
align-items: center;
text-align: center;
flex-direction: column;
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0 5px 10px -5px rgb(0 0 0 / 100%);

.img-container{

margin-bottom: 0.5rem;

}
.text{

margin-top: 0.5rem;
font-size: 1.5rem;
font-weight: bold;
color: #4d4646;

}
`;

export default Card


