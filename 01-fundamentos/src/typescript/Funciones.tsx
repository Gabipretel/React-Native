const Funciones = () => {
  const sum = (a: number, b: number): number => {
    return Math.pow(a, b);
  };

  return (
    <>
      <h3>Funciones</h3>
      <p>{sum(4, 3)}</p>
    </>
  );
};

export default Funciones;
