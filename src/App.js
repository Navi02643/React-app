import React, { useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      name: "Carlos Ivan",
      lastName: "Mercado Marin",
      age: 18,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [favouriteFood, setFavouriteFood] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("");

  const [Num1, setfirstNumber] = useState("");
  const [Num2, setsecondtNumber] = useState("");
  const [result, SetOperationResult] = useState("");
  const suma = function(e) {
    SetOperationResult(Number(Num1) + Number(Num2));
  };
  const resta = function(e) {
    SetOperationResult(Number(Num1) - Number(Num2));
  };
  const multi = function(e) {
    SetOperationResult(Number(Num1) * Number(Num2));
  };
  const divi = function(e) {
    SetOperationResult(Number(Num1) / Number(Num2));
  };

  return (
    <div className="App pt-5 m-5">
      <div className="row">
        <div className="col-4">
          <h1>Add User</h1>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">
              Lastname:
            </label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">
              Age:
            </label>
            <input
              className="form-control"
              type="text"
              name="age"
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="favouriteFood" class="form-label">
              Favourite Food:
            </label>
            <input
              className="form-control"
              type="text"
              name="favouriteFood"
              onChange={(event) => {
                setFavouriteFood(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="favorite color" class="form-label">
              Favourite Colour:
            </label>
            <input
              className="form-control"
              type="text"
              name="favouriteColour"
              onChange={(event) => {
                setFavouriteColour(event.target.value);
              }}
            />
          </div>
          <br />
          <button
            className="btn btn-block btn-outline-success"
            onClick={() => {
              setPeople((current) => [
                { name, lastName, age, favouriteFood, favouriteColour },
                ...current,
              ]);
            }}
          >
            Add user
          </button>
        </div>
        <div className="col-4">
          <h1>User List</h1>
          <table className="table table-secondary table-striped">
            <thead>
              <tr>
                <td>Name</td>
                <td>Lastname</td>
                <td>Age</td>
                <td>Favourite Food</td>
                <td>Favourite Colour</td>
              </tr>
            </thead>
            <tbody>
              {people.map((person, idx) => (
                <tr id={idx}>
                  <td>{`${person.name}`}</td>
                  <td>{`${person.lastName}`}</td>
                  <td>{`${person.age}`}</td>
                  <td>{`${person.favouriteFood}`}</td>
                  <td>{`${person.favouriteColour}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <h1>Calc</h1>
          <div class="mb-3">
            <label for="favouriteFood" class="form-label">
              First Number:
            </label>
            <input
              className="form-control"
              type="number"
              name="number1"
              pattern="[0-9]{0,8}"
              onChange={(event) => {
                setfirstNumber(event.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="favouriteFood" class="form-label">
              Second Number:
            </label>
            <input
              className="form-control"
              type="number"
              name="number1"
              pattern="[0-9]{0,8}"
              onChange={(event) => {
                setsecondtNumber(event.target.value);
              }}
            />
          </div>
          <button
            className="btn btn-block btn-outline-warning m-2"
            onClick={suma}
          >
            +
          </button>
          <button
            className="btn btn-block btn-outline-warning m-2"
            onClick={resta}
          >
            -
          </button>
          <button
            className="btn btn-block btn-outline-warning m-2"
            onClick={multi}
          >
            *
          </button>
          <button
            className="btn btn-block btn-outline-warning m-2"
            onClick={divi}
          >
            /
          </button>
          <hr />
          <label for="favouriteFood" class="form-label">
            Result:
          </label>
          <input
            type="text"
            className="form-control"
            name="results"
            value={result}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default App;
