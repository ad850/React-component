import React from 'react'
import Card from './Card'
import CardList from './CardList';


const MainCard = () => {


    return (

        CardList.map((val) => <Card key={val.id} link={val.link} sname={val.sname} image={val.image} title={val.title} />)



    )

}



export default MainCard;