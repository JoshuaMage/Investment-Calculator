import investment from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investment} alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
