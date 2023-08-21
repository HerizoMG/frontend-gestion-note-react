import React, { useEffect, useState } from 'react'
import { CButton, CRow, CCol, CFormInput, CFormSelect } from '@coreui/react'
import DataTable from 'react-data-table-component'
import { useNoteContext } from '../../context/NoteProvider'

const SecondeR = () => {
  const { moyenneData, fetchAllMoyenneBySerieAndEtudiant } = useNoteContext()
  const [serie, setSerie] = useState(1)
  const [classe, setClasse] = useState(1)
  const [trimestre, setTrimestre] = useState(1)
  const [select, setSelect] = useState({
    a1: true,
    a2: true,
    c: true,
    d: true,
    l: true,
    s: true,
    ose: true,
    troncCommun: false,
  })
  useEffect(() => {
    fetchAllMoyenneBySerieAndEtudiant(1, trimestre)
  }, [trimestre])
  const onChangeNiveau = (event) => {
    const { name, value } = event.target
    setClasse(value)
    // seconde
    if (value === '1') {
      setSerie(1)
      setSelect({
        _s: true,
        _l: true,
        a1: true,
        a2: true,
        c: true,
        d: true,
        l: true,
        s: true,
        ose: true,
        troncCommun: false,
      })
    }
    if (value === '2') {
      setSerie(2)
      setSelect({
        _s: false,
        _l: false,
        a1: true,
        a2: true,
        c: true,
        d: true,
        l: true,
        s: true,
        ose: true,
        troncCommun: true,
      })
    }
    if (value === '3') {
      setSerie(4)
      setSelect({
        _s: true,
        _l: true,
        a1: false,
        a2: false,
        c: false,
        d: false,
        l: false,
        s: false,
        ose: false,
        troncCommun: true,
      })
    }
  }
  const handleSerieChange = (event) => {
    setSerie(event.target.value)
  }
  const handleTrimestreChange = (event) => {
    setTrimestre(event.target.value)
  }
  const columns = [
    {
      name: 'Matricule',
      selector: (row) => row.matricule,
    },
    {
      name: 'Nom',
      selector: (row) => row.nom,
    },
    {
      name: 'Prenoms',
      selector: (row) => row.prenoms,
    },
    {
      name: 'Moyenne',
      selector: (row) => row.moyenne,
    },
  ]
  return (
    <>
      <CRow>
        {/*<CCol xs={3}>*/}
        {/*  <CFormSelect*/}
        {/*    aria-label="Seconde"*/}
        {/*    name="idClasse"*/}
        {/*    value={classe}*/}
        {/*    onChange={(e) => onChangeNiveau(e)}*/}
        {/*  >*/}
        {/*    <option disabled={true} selected={true}>*/}
        {/*      Seconde*/}
        {/*    </option>*/}
        {/*    <option value="1">Seconde</option>*/}
        {/*    <option value="2">Premiere</option>*/}
        {/*    <option value="3">Terminale</option>*/}
        {/*  </CFormSelect>*/}
        {/*</CCol>*/}
        {/*<CCol xs={3}>*/}
        {/*  <CFormSelect*/}
        {/*    className="series"*/}
        {/*    aria-label="Series"*/}
        {/*    name="idSerie"*/}
        {/*    value={serie}*/}
        {/*    onChange={(e) => handleSerieChange(e)}*/}
        {/*  >*/}
        {/*    <option disabled={select.troncCommun} value="1">*/}
        {/*      Tronc commun*/}
        {/*    </option>*/}
        {/*    <option disabled={select._s} value="2">*/}
        {/*      SCIENTIFIQUE*/}
        {/*    </option>*/}
        {/*    <option disabled={select._l} value="3">*/}
        {/*      LITTERAIRE*/}
        {/*    </option>*/}
        {/*    <option disabled={select.a1} value="4">*/}
        {/*      A1*/}
        {/*    </option>*/}
        {/*    <option disabled={select.a2} value="5">*/}
        {/*      A2*/}
        {/*    </option>*/}
        {/*    <option disabled={select.c} value="6">*/}
        {/*      C*/}
        {/*    </option>*/}
        {/*    <option disabled={select.d} value="7">*/}
        {/*      D*/}
        {/*    </option>*/}
        {/*    <option disabled={select.l} value="8">*/}
        {/*      L*/}
        {/*    </option>*/}
        {/*    <option disabled={select.s} value="9">*/}
        {/*      S*/}
        {/*    </option>*/}
        {/*    <option disabled={select.ose} value="10">*/}
        {/*      OSE*/}
        {/*    </option>*/}
        {/*  </CFormSelect>*/}
        {/*</CCol>*/}
        <CCol xs={3}>
          <CFormSelect
            aria-label="TRIMESTRE"
            name="idPeriode"
            value={trimestre}
            onChange={(e) => handleTrimestreChange(e)}
          >
            <option disabled={true} selected={true}>
              Trimestre
            </option>
            <option value="1">TRIMESTRE I</option>
            <option value="2">TRIMESTRE II</option>
            <option value="3">TRIMESTRE III</option>
          </CFormSelect>
        </CCol>
        <br />
        <br />
        <br />
        <DataTable columns={columns} data={moyenneData} fixedHeader pagination dense={false} />
      </CRow>
    </>
  )
}

export default SecondeR
