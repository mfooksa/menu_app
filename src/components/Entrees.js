import Food from './Food'

const Entrees = (props) => {
  return (
    <div class="menusection">
      {props.category == 'entree' ? (
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

export default Entrees
