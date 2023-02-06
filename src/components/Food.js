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
    <div>
      <div class="food">
        <h4>
          <a onClick={show}>{props.name}</a>
        </h4>
        <h5>Price: ${props.price.toFixed(2)}</h5>
      </div>
      {shown && (
        <div>
          <img src={props.image} />
          {props.vegan && props.gf ? (
            <p>This item is vegan and gluten-free.</p>
          ) : null}
          {props.vegan && !props.gf ? (
            <p>This item is vegan and contains gluten.</p>
          ) : null}
          {!props.vegan && props.gf ? (
            <p>This item is gluten-free. This item is not vegan.</p>
          ) : null}
          {!props.vegan && !props.gf ? (
            <p>This item is neither vegan nor gluten-free.</p>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default Food
