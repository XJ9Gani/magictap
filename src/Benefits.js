import React, { Component } from "react";
import ValidBenefits from "./BenefitsDataFetch/ValidBenefits";
import MostFQBenefits from "./BenefitsDataFetch/MostFQBenefits";
class Benefits extends Component {
  render() {
    return (
      <>
        <ValidBenefits />
        <br />
        <MostFQBenefits />
      </>
    );
  }
}

export default Benefits;
