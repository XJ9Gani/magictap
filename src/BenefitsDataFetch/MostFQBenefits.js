import React, { Component } from "react";
import axios from "axios";
import Expanded from "../Assets/ExpandedInsurence.jpg";

class MostFQBenefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facilities: [],
      token: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get(
        "http://195.210.47.82:8000/facility/main/"
      );
      this.setState({ facilities: response.data });
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  handleBuyClick = async (facilityId) => {
    try {
      const response = await axios.post(
        `http://195.210.47.82:8000/facility/main/facility/${facilityId}`
      );
      const token = response.data.token; // предположим, что токен возвращается как свойство 'token' в ответе
      this.setState({ token });
      console.log("Полученный токен:", token);
    } catch (error) {
      console.error("Ошибка при выполнении POST-запроса:", error);
    }
  };

  render() {
    const { facilities } = this.state;
    return (
      <section className="programs" id="programs">
        {facilities.length > 0 ? (
          <div className="programs__container">
            {facilities.map((facility) => (
              <div key={facility.id} className="programs__item">
                <h2 className="programs__title">{facility.name}</h2>
                <h2 className="programs__item--title">
                  {facility.facilities[0].name}
                </h2>
                <h2 className="programs__item--description">
                  {facility.facilities[0].description}
                </h2>
                <button
                  className="programs__item--buy"
                  onClick={() => this.handleBuyClick(facility.id)}
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    );
  }
}

export default MostFQBenefits;
