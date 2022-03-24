import { useState, useEffect } from "react";
import "./App.css";
import Headler from "./component/headler";
import Listado from "./component/lista";

function App() {
  const [valorCampo, setValorCampo] = useState('')
 //useEffect(()=>{console.log(valorCampo)},[valorCampo])
  const [getListaCompras, setListaCompra] = useState([])
  
  const escreve =()=>{
    var valor = getListaCompras 
    console.log(valor)

    valor.push(valorCampo)
    console.log(valor)
    setListaCompra(valor)

    setValorCampo('')
  }

   return (
    <div className="App">

      <Headler titulo="Lista de Compras:"/>

      <Listado lista={getListaCompras}/>
     
      
   
      <form className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" value={valorCampo} onChange={(e)=>{setValorCampo(                   e.target.value)}} className="form-control" id="item" />
          </div>6+ 
          <button type="submit" onClick={(e)=>{e.preventDefault();escreve()}} className="btn btn-primary">
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
