import Heroes from "../Hero/Heroes";

const HeroList = ({ heroes }) => {
  return (
    <section className="container heroes-container">
      {heroes.map((hero, index) => (
        <Heroes key={index} data={hero} />
      ))}
    </section>
  );
};

export default HeroList;
