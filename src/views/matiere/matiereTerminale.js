import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const MatiereTermianle = () => {
  return (
    <CTable color="success" striped>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Matiere</CTableHeaderCell>
          <CTableHeaderCell scope="col">Coeff</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableDataCell scope="row">1</CTableDataCell>
          <CTableDataCell>Terminale</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell scope="row">2</CTableDataCell>
          <CTableDataCell>Jacob</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableDataCell scope="row">3</CTableDataCell>
          <CTableDataCell>Larry the Bird</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}

export default MatiereTermianle
