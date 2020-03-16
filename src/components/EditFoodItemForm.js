import React from "react";

const EditFoodItemForm = props => {
  return (
    <div className="container">
      <form className="col-md-12 mb-6">
        <div>
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
            <div>
              <button style={{ margin: "10px" }} onClick={props.updateFoodItem}>
                {" "}
                Update{" "}
              </button>
              <button
                style={{ margin: "10px" }}
                onClick={() => props.setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFoodItemForm;
