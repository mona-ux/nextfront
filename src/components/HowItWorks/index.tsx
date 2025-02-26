import React from "react";
import "./index.css";

const steps = [
  { id: 1, title: "Select location", description: "Choose the location where your food will be delivered.", icon: "/images/Group.png" },
  { id: 2, title: "Choose order", description: "Check over hundreds of menus to pick your favorite food.", icon: "/images/me.png" },
  { id: 3, title: "Pay advanced", description: "It's quick, safe, and simple. Select several methods of payment.", icon: "/images/in.png" },
  { id: 4, title: "Enjoy meals", description: "Food is made and delivered directly to your home.", icon: "/images/do.png" },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How does it work</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <img src={step.icon} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
