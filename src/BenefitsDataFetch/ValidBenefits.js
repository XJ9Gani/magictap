import React, { Component } from "react";
import axios from "axios";

class ValidBenefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facilities: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get(
        "http://195.210.47.82:8000/facility/main/facalities/"
      );
      this.setState({ facilities: response.data });
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  render() {
    return (
      <>
        <section className="benefits" id="benefits">
          <h1 className="benefits__title">Company Benefits</h1>
          <div className="benefits__container">
            {this.state.facilities.map((facility, index) => (
              <div key={index} className="benefits__item">
                <h1 className="benefits__item__title">{facility.name}</h1>
                <h4 className="benefits__item__subtitle">
                  Programs count: {facility.count}
                </h4>
                {/* Здесь можно добавить другие поля из данных объекта facility */}
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default ValidBenefits;
