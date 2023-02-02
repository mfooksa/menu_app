import './App.css'
import foods from './food.json'
import Food from './components/Food'
import Drinks from './components/Drinks'
import Appetizers from './components/Appetizers'
import Entrees from './components/Entrees'
import Desserts from './components/Desserts'

const App = () => {
  return (
    <div>
      <h1>Welcome to my Restaurant</h1>
      {/* {foods.map((food) => (
        <Food key={food.name} name={food.name} />
      ))} */}
      <h2>Drinks</h2>
      {foods.map((food) => (
        <div>
          <Drinks
            key={food.name}
            name={food.name}
            category={food.category}
            sizes={food.size_prices}
          />
        </div>
      ))}
      <h2>Appetizers</h2>
      {foods.map((food) => (
        <div>
          <Appetizers
            key={food.name}
            name={food.name}
            category={food.category}
            sizes={food.size_prices}
          />
        </div>
      ))}
      <h2>Entrees</h2>
      {foods.map((food) => (
        <div>
          <Drinks
            key={food.name}
            name={food.name}
            category={food.category}
            sizes={food.size_prices}
          />
        </div>
      ))}
      <h2>Desserts</h2>
      {foods.map((food) => (
        <div>
          <Desserts
            key={food.name}
            name={food.name}
            category={food.category}
            sizes={food.size_prices}
          />
        </div>
      ))}
    </div>
  )
}

export default App
