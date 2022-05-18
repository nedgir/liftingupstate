import React from 'react'
import Card from './UI/Card'
import Dtformat from './utility/Dtformat'

const Hobbies = (props) => {
  function addFav1(){
    props.addFavourite(props.id);
  }
  return (
      <Card>
        <div><img src={props.img}/></div>
    <div>{props.hobby}</div>
    <div><Dtformat dt={props.dt}/></div>
    <div>{props.fav?'Favourite':<button className='btn btn-primary' onClick={addFav1}>Add to favourite</button>}</div>
    </Card>

  )
}

export default Hobbies