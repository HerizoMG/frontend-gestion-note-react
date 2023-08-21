import React, { useEffect, useState } from 'react'
import { CRow, CCol, CFormInput, CFormSelect } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useMatiereContext } from '../../context/MatiereProvider'

const MatiereTerminale = () => {
  const [serie, setSerie] = useState(4)
  const { matiere, fetchAllMatiere } = useMatiereContext()
  useEffect(() => {
    fetchAllMatiere(serie)
  }, [serie])
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
        <CCol xs={4}>
          <CFormSelect
            aria-label="Seconde"
            name="idClasse"
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
          >
            <option disabled={true} selected={true}>
              parcours
            </option>
            <option value="4">A1</option>
            <option value="5">A2</option>
            <option value="6">C</option>
            <option value="7">D</option>
            <option value="8">L</option>
            <option value="9">S</option>
            <option value="10">OSE</option>
          </CFormSelect>
        </CCol>
        <CCol xs={4}></CCol>
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

export default MatiereTerminale
