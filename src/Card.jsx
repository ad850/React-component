import React from 'react'
import './Heading.css';
import Image from './Image';
import Title from './Title';
import Name from './Name';
import Link from './Link';


const Card = (props) => {


    return (

        <div id="container">
            <div id="main">
                <Image Image={props.image} />
                <Title title={props.title} />
                <Name name={props.sname} />
                <Link link={props.link} />
            </div>
        </div>

    )
}
export default Card;