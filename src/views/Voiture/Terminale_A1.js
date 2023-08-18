import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
const Terminale_A1 = () => {
  return (
    <CTable color="success" striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">N°</CTableHeaderCell>
          <CTableHeaderCell scope="col">Nom</CTableHeaderCell>
          <CTableHeaderCell scope="col">Prénoms</CTableHeaderCell>
          <CTableHeaderCell scope="col">Addresse</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableDataCell scope="row">1</CTableDataCell>
          <CTableDataCell>Mark</CTableDataCell>
          <CTableDataCell>Otto</CTableDataCell>
          <CTableDataCell>@mdo</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell scope="row">2</CTableDataCell>
          <CTableDataCell>Jacob</CTableDataCell>
          <CTableDataCell>Thornton</CTableDataCell>
          <CTableDataCell>@fat</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell scope="row">3</CTableDataCell>
          <CTableDataCell>Larry the Bird</CTableDataCell>
          <CTableDataCell>Jacques</CTableDataCell>
          <CTableDataCell>@Terminale1</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}
export default Terminale_A1
