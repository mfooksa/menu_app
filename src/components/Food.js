import Price from './Price'

const Food = (props) => {
  return (
    <div class="food">
      <p>{props.name}</p>
      <div class="pricebar">
        <Price key={props.name} prices={props.sizes} />
      </div>
    </div>
  )
}

export default Food
