import Price from './Price'
import { useState } from 'react'

const Food = (props) => {
  const [isShown, setIsShown] = useState(false)
  //   const allergens = props.allergens
  //   let new_allergens=[]
  //   for (i=0;i<allergens.length;i++){
  //     new_allergens.push()
  // }
  const show = (e) => {
    e.preventDefault()
    setIsShown((current) => !current)
  }
  return (
    <div class="food">
      <h4>
        <a onClick={show}>{props.name}</a>
      </h4>
      {isShown && (
        <div>
          <img src={props.image} />
        </div>
      )}
      {/* <img src={props.image} />
      <h5>Allergens: </h5> */}
      <h5>Price: ${props.price}</h5>
    </div>
  )
}

export default Food
