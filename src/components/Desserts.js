import Food from './Food'

const Desserts = (props) => {
  return (
    <div>
      {props.category == 'dessert' ? (
        <Food key={props.name} name={props.name} sizes={props.sizes} />
      ) : null}
    </div>
  )
}

export default Desserts
