import React, { Component } from "react";
import Expanded from "../src/Assets/ExpandedInsurence.jpg";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch("http://195.210.47.82:8000/auth/me/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      this.setState({ userData: data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { userData, error, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <>
        <h1 className="profile__title">My Profile</h1>

        <section className="profile">
          <section className="profile__content">
            <div className="profile__content__about" id="about">
              <img
                src={Expanded}
                alt="profile-img"
                className="profile__content--img"
              />
              <h1 className="profile__content--name">
                {userData.first_name} {userData.last_name}
              </h1>
              <h2 className="profile__content--count">
                Количество Бонусов: {userData.coins}
              </h2>
            </div>

            <div className="profile__content__benefits" id="chosen_benefits">
              <h1 className="profile__content--chosen">Выбранные Льготы</h1>
              <ul>
                {userData.orders.map((order, index) => (
                  <li key={index}>
                    <p>
                      <strong>Date:</strong> {order.date}
                    </p>
                    <ul>
                      {order.facilities.map((facility, idx) => (
                        <li key={idx}>
                          <p>
                            <strong>Name:</strong>
                            <h1 className="profile__content--name">
                              {facility.name}
                            </h1>
                          </p>
                          <p>
                            <strong>Description:</strong> {facility.description}
                          </p>
                          <p>
                            <strong>Expired Date:</strong>{" "}
                            {facility.expired_date}
                          </p>
                          <p>
                            <strong>Cost:</strong> {facility.cost}
                          </p>
                          <p>
                            <strong>Category:</strong> {facility.category}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default Profile;
