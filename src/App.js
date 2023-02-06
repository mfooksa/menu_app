import './App.css'
import foods from './food.json'
import Drinks from './components/Drinks'
import Appetizers from './components/Appetizers'
import Entrees from './components/Entrees'
import Desserts from './components/Desserts'
import Sandwiches from './components/Sandwiches'

const App = () => {
  return (
    <div>
      <nav>
        <div>
          <p>Home</p>
          <p>About Us</p>
        </div>
        <div>
          <p>
            <a href="fake.com">Log In</a>
          </p>
          <p>
            <a href="fake.com">Sign Up</a>
          </p>
        </div>
      </nav>
      <h1>Welcome to my Restaurant</h1>
      <h2>Click on each menu item to learn more!</h2>
      <div class="mainmenu">
        <div>
          <h2>Drinks</h2>
          <div class="menusection">
            {foods.map((food) => (
              <Drinks
                key={food.name}
                name={food.name}
                category={food.category}
                sizes={food.size_prices}
                image={food.image}
                vegan={food.vegan}
                price={food.price}
                gf={food.glutenfree}
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Appetizers</h2>
          <div class="menusection">
            {foods.map((food) => (
              <div>
                <Appetizers
                  key={food.name}
                  name={food.name}
                  category={food.category}
                  sizes={food.size_prices}
                  image={food.image}
                  allergens={food.allergens}
                  price={food.price}
                  vegan={food.vegan}
                  gf={food.glutenfree}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="mainmenu">
        <div>
          <h2>Entrees</h2>
          <div class="menusection">
            {foods.map((food) => (
              <div>
                <Entrees
                  key={food.name}
                  name={food.name}
                  category={food.category}
                  sizes={food.size_prices}
                  image={food.image}
                  allergens={food.allergens}
                  price={food.price}
                  vegan={food.vegan}
                  gf={food.glutenfree}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>Sandwiches</h2>
          <div class="menusection">
            {foods.map((food) => (
              <div>
                <Sandwiches
                  key={food.name}
                  name={food.name}
                  category={food.category}
                  sizes={food.size_prices}
                  image={food.image}
                  allergens={food.allergens}
                  price={food.price}
                  vegan={food.vegan}
                  gf={food.glutenfree}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="mainmenu">
        <div>
          <h2>Desserts</h2>
          <div class="menusection">
            {foods.map((food) => (
              <div>
                <Desserts
                  key={food.name}
                  name={food.name}
                  category={food.category}
                  sizes={food.size_prices}
                  image={food.image}
                  allergens={food.allergens}
                  price={food.price}
                  vegan={food.vegan}
                  gf={food.glutenfree}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
