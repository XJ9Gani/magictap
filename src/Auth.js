import React, { Component } from "react";
import axios from "axios";

class Auth extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.elements.userName.value;
    const password = event.target.elements.password.value;

    try {
      const response = await axios.post(
        "http://195.210.47.82:8000/auth/login/",
        {
          username: username,
          password: password,
        }
      );

      console.log("Полученный токен:", response.data.access);

      // Сохраняем токен в localStorage
      localStorage.setItem("accessToken", response.data.access);

      // Проверяем условие, если данные существуют и пароль совпадает
      if (username === "yourUsername" && password === "yourPassword") {
        // Переход на страницу benefits (замените на ваш роут)
        this.props.history.push("/benefits");
      } else {
        console.log("Неправильное имя пользователя или пароль");
        // Дополнительная логика обработки, если нужно
      }
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
      // Обработка ошибок авторизации
    }
  };

  componentDidMount() {
    // При монтировании компонента проверяем, есть ли сохранённый токен в localStorage
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // Установка токена для всех последующих запросов axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      // Проверяем условие, если токен существует и соответствует вашим требованиям
      // Например, проверка на валидность токена или другие требования
      // Здесь можно добавить дополнительную логику, если нужно
    }
  }

  render() {
    return (
      <section className="auth-page">
        <form className="form" onSubmit={this.handleSubmit}>
          <section className="form__container">
            <h1 className="form__label">Username</h1>
            <input type="text" className="userName" name="userName" />
            <h1 className="form__label">Password</h1>
            <input type="password" className="password" name="password" />
            <button type="submit" className="submit">
              <a href="/benefits"> Войти </a>
            </button>
          </section>
        </form>
      </section>
    );
  }
}

export default Auth;
