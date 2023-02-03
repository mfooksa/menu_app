import Food from './Food'

const Drinks = (props) => {
  return (
    <div class="menusection">
      {props.category == 'drink' ? (
        <Food
          key={props.name}
          name={props.name}
          sizes={props.sizes}
          image={props.image}
          price={props.price}
        />
      ) : null}
    </div>
  )
}

export default Drinks
