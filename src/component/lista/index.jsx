const Listado = (props)=>{

    return (   <div className="lista-compras-container">
    <ul className="lista-items">
      {props.lista.map((itemLista)=>{
        return <li>{itemLista}</li>
      })}
    </ul> 
  </div>)
}
export default Listado;