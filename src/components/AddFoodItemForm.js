import React from "react";

const AddFoodItemForm = props => {
  return (
    <div className="container">
      <form onSubmit={props.addFoodItem} className="col-md-12 mb-6">
        <div>
          <div>
            <label style={{ width: "100px" }}>Food name</label>
            <input
              type="text"
              name="food"
              value={props.food}
              onChange={props.handleInputChange}
            />
          </div>
          <div>
            <label style={{ width: "100px" }}>Food cost</label>
            <input
              type="number"
              name="cost"
              value={props.cost}
              onChange={props.handleInputChange}
            />
          </div>
          <button className="button" style={{ margin: "10px" }}>
            {" "}
            Add food item{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFoodItemForm;
