import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function HomePage() {
  let navigate = useNavigate();
  useEffect(() => {
    const loginFormElement = document.querySelector("#loginForm");
    const inputEmailElement = document.querySelector("#inputEmail");
    const inputPasswordElement = document.querySelector("#inputPassword");

    const expectedEmail = "junx@gmail.com";
    const expectedPassword = "junxgurit";

    loginFormElement.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = inputEmailElement.value;
      const password = inputPasswordElement.value;
      if (email == expectedEmail && password == expectedPassword) {
        navigate("/about");
      } else {
        navigate("/");
      }
    });
  });
  return (
    <div>
      <form action="" id="loginForm" className="form">
        <label htmlFor="inputEmail"></label>
        <input type="text" id="inputEmail" />
        <label htmlFor="inputPassword"></label>
        <input type="text" id="inputPassword" />
        <button id="buttonLogin" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default HomePage;
