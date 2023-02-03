import Food from './Food'

const Appetizers = (props) => {
  return (
    <div class="menusection">
      {props.category === 'appetizer' ? (
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

export default Appetizers
