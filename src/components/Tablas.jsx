import React from 'react';
import LeadMagnet from './../images/LeadMagnet.png';
import Table from 'react-bootstrap/Table';
import "./Tablas.css"

const Tablas = () => {
  return <div >
    <h className="TarifasTitulo"> <a> Tarifas</a> </h>

    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firsts</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>

}
export default Tablas;