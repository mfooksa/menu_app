import Price from './Price'

const Food = (props) => {
  //   const allergens = props.allergens
  //   let new_allergens=[]
  //   for (i=0;i<allergens.length;i++){
  //     new_allergens.push()
  // }
  return (
    <div class="food">
      <h4>
        <a href={props.image}>{props.name}</a>
      </h4>
      {/* <img src={props.image} />
      <h5>Allergens: </h5> */}
      <h5>Price: ${props.price}</h5>
    </div>
  )
}

export default Food
