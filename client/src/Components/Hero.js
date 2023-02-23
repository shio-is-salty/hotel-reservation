import heroBg from "../Assets/bg/hero-bg.png"
export const Hero = () => {
  return (
    <section className="hero">
      <div className="title">
        <h2>BELLUS HOTEL</h2>
        <h1>LUXURY HOTEL ROOMS</h1>
      </div>

      <img className="hero-img" src={heroBg} alt="hero" />
    </section>
  )
}
