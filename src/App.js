import { useState, useEffect } from "react";
import HeroList from "./components/HeroesList/HeroList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    async function fetchHeroes() {
      const { results } = await fetch(
        "https://swapi.dev/api/people/?format=json"
      ).then((res) => res.json());
      setHeroes(results);
    }
    fetchHeroes();
  }, []);

  const onSearchChange = (event) => {
    setTerm(event.target.value);
  };
  const filteredHeroes = heroes.filter((hero) => {
    return hero.name.toLowerCase().includes(term.toLowerCase());
  });

  if (heroes.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <header className="header container">
        <h1>Star war Heroes</h1>
        <SearchBar searchChange={onSearchChange} />
      </header>
      <HeroList heroes={filteredHeroes} />
    </div>
  );
}

export default App;
