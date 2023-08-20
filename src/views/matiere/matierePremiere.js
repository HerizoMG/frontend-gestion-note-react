import React, { useEffect } from 'react'
import { CButton, CRow, CCol, CFormInput } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useMatiereContext } from '../../context/MatiereProvider'

const MatierePremiere = () => {
  const { matiere, fetchAllMatiere } = useMatiereContext()
  useEffect(() => {
    fetchAllMatiere(2)
  }, [])
  const columns = [
    {
      name: 'Matiere',
      selector: (row) => row.matiere.nomMatiere,
    },
    {
      name: 'Coefficient',
      selector: (row) => row.coeff,
    },
  ]
  return (
    <>
      <CRow>
        <CCol xs={8}></CCol>
        <CCol xs={4}>
          <CFormInput type="text" placeholder="Rechercher..." />
        </CCol>
        <br />
        <br />
        <br />
        <DataTable columns={columns} data={matiere} fixedHeader pagination dense={false} />
      </CRow>
    </>
  )
}

export default MatierePremiere
