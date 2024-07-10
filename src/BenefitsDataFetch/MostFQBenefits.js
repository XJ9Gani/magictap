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
        "http://195.210.47.82:8000/benefit/main/"
      );
      this.setState({ facilities: response.data });
    } catch (error) {
      console.error("Ошибка при получении данных:", error.response.data);
    }
  };

  handleBuyClick = async (facilityId) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);

    const response = await fetch(
      `http://195.210.47.82:8000/benefit/main/benefit/${facilityId}/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  };
  render() {
    const { facilities } = this.state;
    return (
      <section className="programs" id="programs">
        {facilities.length > 0 ? (
          <div className="programs__container">
            {facilities.map((facility) => (
              <div key={facility.facilities[0].id} className="programs__item">
                <h2 className="programs__title">{facility.name}</h2>
                <img
                  src={facility.photo}
                  alt="icon"
                  className="programs__item--img"
                />
                <h2 className="programs__item--title">
                  {facility.facilities[0].name}
                </h2>
                <h2 className="programs__item--description">
                  {facility.facilities[0].description}
                </h2>
                <button
                  className="programs__item--buy"
                  onClick={() => this.handleBuyClick(facility.facilities[0].id)}
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
