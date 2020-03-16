import logo from "./logo.svg";
import React from "react";
import Banner from "react-js-banner";
import AddFoodItemForm from "./components/AddFoodItemForm";
import EditFoodItemForm from "./components/EditFoodItemForm";
import FoodItemList from "./components/FoodItemList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      foodItem: {
        id: null,
        userId: 1,
        food: "",
        cost: "",
        status: false
      },
      foodItems: [
        { id: 1, userId: 1, food: "Rice", cost: 100, status: false },
        { id: 2, userId: 1, food: "Beans", cost: 200, status: false },
        { id: 3, userId: 1, food: "Tomato", cost: 340, status: false },
        { id: 4, userId: 1, food: "Beer", cost: 700, status: false },
        { id: 5, userId: 1, food: "Chicken", cost: 300, status: false },
        { id: 6, userId: 1, food: "Meat", cost: 500, status: false },
        { id: 7, userId: 1, food: "Orange", cost: 50, status: false },
        { id: 8, userId: 1, food: "Garlic", cost: 400, status: false }
      ],
      editing: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteFoodItem = this.deleteFoodItem.bind(this);
    this.boughtFoodItem = this.boughtFoodItem.bind(this);
    this.releaseFoodItem = this.releaseFoodItem.bind(this);
    this.addFoodItem = this.addFoodItem.bind(this);
    this.editFoodItem = this.editFoodItem.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.updateFoodItem = this.updateFoodItem.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addFoodItem(event) {
    event.preventDefault();
    if (!this.state.food) return;
    const foodItem = {
      id: this.state.foodItems.length + 1,
      food: this.state.food,
      cost: this.state.cost,
      userId: this.state.userId,
      statu: this.state.status
    };

    this.setState({
      food: "",
      cost: "",
      foodItem: foodItem,
      foodItems: [...this.state.foodItems, foodItem]
    });
  }

  deleteFoodItem(id) {
    const foodItems = this.state.foodItems.filter(item => item.id !== id);
    this.setState({ foodItems: foodItems });
  }

  setEditing(value) {
    if (typeof value !== "boolean") {
      throw new Error(" This value must either be true or false");
    }
    this.setState({
      editing: value
    });
  }

  editFoodItem(foodItem) {
    this.setEditing(true);
    this.setState({
      food: foodItem.food,
      cost: foodItem.cost,
      foodItem: foodItem
    });
  }

  boughtFoodItem(currentFood) {
    const updatedCurrentFood = Object.assign({}, currentFood, { status: true });
    const foodItems = this.state.foodItems.map((foodItem, index) =>
      foodItem.id === currentFood.id ? updatedCurrentFood : foodItem
    );
    this.setState({ foodItems: foodItems });
  }

  releaseFoodItem(currentFood) {
    const updatedCurrentFood = Object.assign({}, currentFood, {
      status: false
    });
    const foodItems = this.state.foodItems.map((foodItem, index) =>
      foodItem.id === currentFood.id ? updatedCurrentFood : foodItem
    );
    this.setState({ foodItems: foodItems });
  }

  updateFoodItem(event) {
    event.preventDefault();
    const updatedFood = this.state.food;
    const updatedCost = this.state.cost;
    const updatedFoodItem = Object.assign({}, this.state.foodItem, {
      food: updatedFood,
      cost: updatedCost
    });
    const foodItems = this.state.foodItems.map(foodItem =>
      foodItem.id === this.state.foodItem.id ? updatedFoodItem : foodItem
    );
    this.setState({ food: "", cost: "", foodItems: foodItems });
  }

  render() {
    const { cost, food, foodItems, editing } = this.state;
    return (
      <div className="App">
        <Banner
          title="FoodReca by Ayobami Ogundiran (CodeNinja)"
          image={logo}
          imageClass="App-logo"
          css={this.state.banner2Css}
        />
        <div className="row App-main">
          <FoodItemList
            foodItems={foodItems}
            deleteFoodItem={this.deleteFoodItem}
            boughtFoodItem={this.boughtFoodItem}
            releaseFoodItem={this.releaseFoodItem}
            editFoodItem={this.editFoodItem}
          />
        </div>
        <div className="row App-main">
          {editing ? (
            <EditFoodItemForm
              food={food}
              cost={cost}
              handleInputChange={this.handleInputChange}
              setEditing={this.setEditing}
              updateFoodItem={this.updateFoodItem}
            />
          ) : (
            <AddFoodItemForm
              food={food}
              cost={cost}
              handleInputChange={this.handleInputChange}
              addFoodItem={this.addFoodItem}
            />
          )}
        </div>
        <div className="container" style={{ color: "gray" }}>
          <a href="https://dev.to/codingnninja/react-made-easy-a-quick-guide-to-making-crud-apps-with-react-3668">
            Source
          </a>
        </div>
        <Banner title="Check https://www.npmjs.com/package/react-js-banner. Copyright 2020" />
      </div>
    );
  }
}

export default App;
