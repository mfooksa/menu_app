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
        <img src="https://images.unsplash.com/photo-1588604820861-a4840746755d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2712&q=80" />
        <div>
          <p>
            <a href="fake.com">Contact Us</a>
          </p>
          <p>
            <a href="fake.com">Sign Up</a>
          </p>
        </div>
      </nav>
      <h1>Welcome to my Restaurant</h1>
      <h3>
        We are a family-owned and operated establishment located solely on this
        website. We aim to provide information about these food items that you
        unfortunately are unable to actually order.
      </h3>
      <h3> Click on each menu item to learn more!</h3>
      <div class="gif">
        <iframe
          allow="fullscreen"
          frameBorder="0"
          height="360"
          src="https://giphy.com/embed/7miScS1Jlkajv92Xbl/video"
          width="480"
        ></iframe>
      </div>
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
      <h2 class="adieu">Come back and see us soon!</h2>
    </div>
  )
}

export default App
