import Food from './Food'

const Desserts = (props) => {
  return (
    <div class="menusection">
      {props.category == 'dessert' ? (
        <Food
          key={props.name}
          name={props.name}
          sizes={props.sizes}
          image={props.image}
          price={props.price}
          vegan={props.vegan}
          gf={props.gf}
        />
      ) : null}
    </div>
  )
}

export default Desserts
