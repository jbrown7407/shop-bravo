import React from "react";

const groceries = [
 
  {
    item: "Pods",
    brand: "Tide",
    units: 5,
    quantity: 13,
    isPurchased: false
  },
  {
    item: "Toothpaste",
    brand: "Crest",
    units: 2,
    quantity: 22,
    isPurchased: false
  },
  {
    item: "Tequila",
    brand: "Tesla",
    units: 99,
    quantity: 11,
    isPurchased: false
  },
  {
    item: "Cough Drops",
    brand: "Ricola",
    units: 1,
    quantity: 100,
    isPurchased: false
  },
  {
    item: "Chocolate",
    brand: "Hershey",
    units: 3,
    quantity: 8,
    isPurchased: false
  },
];

console.log(groceries);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: groceries,
      item: "",
      brand: "",
      units: 0,
      quantity: 0,
      isPurchased: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrocery = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    };
    this.setState({
      groceries: [...this.state.groceries, newGrocery],
      item: "",
      brand: 0,
      units: 0,
      quantity: 0,
      isPurchased: false
    });
  }

  render() {
    return (
      <div>
        <h1>My Grocery List</h1>

        {this.state.isInStock ? (
          <h2>Yes, in stock!</h2>
        ) : (
          <h2>Out of stock, check back tomorrow.</h2>
        )}

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item: </label>
          <input
            type="text"
            id="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="brand">Brand: </label>
          <input
            type="text"
            id="brand"
            value={this.state.brand}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="units">units: </label>
          <input
            type="number"
            id="units"
            value={this.state.units}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="brand">Quantity: </label>
          <input
            type="number"
            id="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
           <br />
          <label htmlFor="brand">Is Purchased? </label>
          <input
            type="boolean"
            id="isPurchased"
            value={this.state.isPurchased}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Add Grocery" />
          
        </form>

        <div>
          <h2>Item Preview</h2> 
          <h4>Item: {this.state.item}</h4>
          <h4>Brand: {this.state.brand}</h4>
          <h4>Units: {this.state.units}</h4>
          <h4>Quantity: {this.state.quantity}</h4>
          <h4>Is Purchased?: {this.state.isPurchased}</h4>
        </div>

        <ul>
          {this.state.groceries.map((Grocery, i) => {
            return (
              <li key={i}>
                Item: {Grocery.item} | Brand: {Grocery.brand} | Units: {Grocery.units} | Quantity: {Grocery.quantity} | IsPurchased: {Grocery.isPurchased}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;