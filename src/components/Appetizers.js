import Food from './Food'

const Appetizers = (props) => {
  return (
    <div>
      {props.category == 'appetizer' ? (
        <Food key={props.name} name={props.name} sizes={props.sizes} />
      ) : null}
    </div>
  )
}

export default Appetizers
