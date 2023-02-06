import Price from './Price'
import { useState } from 'react'

const Food = (props) => {
  const [shown, setShown] = useState(false)
  //   const allergens = props.allergens
  //   let new_allergens=[]
  //   for (i=0;i<allergens.length;i++){
  //     new_allergens.push()
  // }
  const show = (e) => {
    e.preventDefault()
    setShown((current) => !current)
  }
  return (
    <div class="food">
      <h4>
        <a onClick={show}>{props.name}</a>
      </h4>
      {shown && (
        <div>
          <img src={props.image} />
        </div>
      )}
      <h5>Price: ${props.price.toFixed(2)}</h5>
    </div>
  )
}

export default Food
