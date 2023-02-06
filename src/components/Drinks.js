import Food from './Food'

const Drinks = (props) => {
  return (
    <div>
      {props.category === 'drink' ? (
        <div>
          <Food
            key={props.name}
            name={props.name}
            sizes={props.sizes}
            image={props.image}
            price={props.price}
            vegan={props.vegan}
            gf={props.gf}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Drinks
