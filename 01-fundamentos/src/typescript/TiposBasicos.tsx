
const TiposBasicos = () => {
    const name: string = 'Gabriel'
    const age: number = 27
    const  isActive: boolean= true
    const countries:string[]= ['Argentina', 'Chile', 'Bolivia', 'Brasil']
    countries.push('Ecuador')
    
  return (
    <>
        <h3>Tipos Básicos Ts</h3>
        <p>{name} {age}</p> 
        <p>{isActive ? 'activo ': 'no activo' }</p>
        <p>{countries.join(' ')}</p>


    </>
  )
}

export default TiposBasicos




