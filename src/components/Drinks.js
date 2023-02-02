import Food from './Food'

const Drinks = (props) => {
  return (
    <div>
      {props.category == 'drink' ? (
        <Food key={props.name} name={props.name} sizes={props.sizes} />
      ) : null}
    </div>
  )
}

export default Drinks
