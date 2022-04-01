const App = function () {
  return (
    <div id="main">
      <div id="dash">
        <button id="one" onClick={btn1}>
          FORM
        </button>
        <button id="two" onClick={btn2}>
          DETAILS
        </button>
      </div>
      <div id="page_one">
        <div id="form_page">
          <h1>FILL CREDENTIALS</h1>
          <form>
            <label for="input_one" id="input_one_label">
              <p>FIRST NAME</p>
            </label>
            <input type="text" id="input_one"></input>

            <label for="input_two" id="input_two_label">
              <p> LAST NAME</p>
            </label>
            <input type="text" id="input_two"></input>

            <label for="input_three" id="input_three_label">
              <p> E-MAIL</p>
            </label>
            <input type="text" id="input_three"></input>
            <label for="input_four" id="input_four_label">
              <p>INSTITUTION</p>
            </label>
            <input type="text" id="input_four"></input>
            <input type="submit" id="submit"></input>
          </form>
        </div>
      </div>
      <div id="page_two" className="toggle">
        <div id="list_one">
          <ul>
            <li>apurva</li>
            <li>mishra</li>
            <li>apurva.mishra26@yahoo.com</li>
            <li>delhi iniversity</li>
          </ul>
        </div>
        <div id="list_two">
          <ul>
            <li>ipsum</li>
            <li>lorem </li>
            <li>ipsum.lorem@yahoo.com</li>
            <li>lucknow university</li>
          </ul>
        </div>
        <div id="list_three">
          <ul>
            <li>some</li>
            <li>thing </li>
            <li>some.thing@yahoo.com</li>
            <li>lucknow university</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
