interface Person {
  name: string;
  lastName: string;
  age: number;
  location: Location;
}

interface Location {
  dir: string;
  dir_num: number;
}

const ObjetosLiterales = () => {
  const person: Person = {
    name: "Gabriel",
    lastName: "Pretel",
    age: 27,
    location: {
      dir: "Calle 104",
      dir_num: 135,
    },
  };
  return (
    <>
      <h3>TS-Objetos Literales-</h3>
      <p>{JSON.stringify(person, null, 4)}</p>
    </>
  );
};

export default ObjetosLiterales;
