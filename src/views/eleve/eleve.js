import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
import Swal from 'sweetalert2'
import DataTable from 'react-data-table-component'
import PropTypes from 'prop-types'
import { useClientContext } from '../../context/EleveProvider'
const VerticallyCentered = ({ row }) => {
  const [visible, setVisible] = useState(false)
  const [editedValues, setEditedValues] = useState({
    matricule: row.matricule,
    nom: row.nom,
    prenoms: row.prenoms,
    adresse: row.adresse,
    email: row.email,
    idClasse: row.idClasse,
    idPeriode: row.idPeriode,
    idSerie: row.idSerie,
  })
  const { updateEtudiant } = useClientContext()
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
  const updateClientData = () => {
    updateEtudiant(editedValues.matricule.toString(), editedValues)
  }

  const onChangeNiveau = (event) => {
    const { name, value } = event.target
    setEditedValues((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    // seconde
    if (value === '1') {
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

  const handleidPeriodeChange = (event) => {
    const { name, value } = event.target
    setEditedValues((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <>
      <CButton color="none" onClick={() => setVisible(!visible)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M10.733 2.56a1.914 1.914 0 0 1 2.707 2.708l-.733.734l-2.708-2.708l.734-.733Zm-1.44 1.441L3.337 9.955a1.65 1.65 0 0 0-.398.644l-.914 2.743a.5.5 0 0 0 .632.633L5.4 13.06c.243-.08.463-.217.644-.398L12 6.709L9.292 4Z"
          />
        </svg>
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Edite Etudiant</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            hidden={true}
            value={editedValues.matricule}
            onChange={(e) => setEditedValues({ ...editedValues, matricule: e.target.value })}
          />
          <br />
          <CFormInput
            type="text"
            label="Nom"
            value={editedValues.nom}
            onChange={(e) => setEditedValues({ ...editedValues, nom: e.target.value })}
          />
          <br />
          <CFormInput
            type="text"
            label="Prenoms"
            value={editedValues.prenoms}
            onChange={(e) => setEditedValues({ ...editedValues, prenoms: e.target.value })}
          />
          <br />
          <CFormInput
            type="text"
            label="Adresse"
            value={editedValues.adresse}
            onChange={(e) => setEditedValues({ ...editedValues, adresse: e.target.value })}
          />
          <br />
          <CFormInput
            type="text"
            label="Mail"
            value={editedValues.email}
            onChange={(e) => setEditedValues({ ...editedValues, email: e.target.value })}
          />
          <br />
          <CCol>
            {/* Other form inputs */}
            <CFormSelect
              aria-label="Seconde"
              name="idClasse"
              value={editedValues.idClasse}
              onChange={(e) => onChangeNiveau(e)}
            >
              <option disabled={true} selected={true}>
                Seconde
              </option>
              <option value="1">Seconde</option>
              <option value="2">Premiere</option>
              <option value="3">Terminale</option>
            </CFormSelect>
            {/* Other form inputs */}
            <br />
            <CFormSelect
              className="series"
              aria-label="Series"
              name="idSerie"
              value={editedValues.idSerie}
              onChange={(e) => handleidPeriodeChange(e)}
            >
              <option disabled={select.troncCommun} value="1">
                Tronc commun
              </option>
              <option disabled={select._s} value="2">
                SCIENTIFIQUE
              </option>
              <option disabled={select._l} value="3">
                LITTERAIRE
              </option>
              <option disabled={select.a1} value="4">
                A1
              </option>
              <option disabled={select.a2} value="5">
                A2
              </option>
              <option disabled={select.c} value="6">
                C
              </option>
              <option disabled={select.d} value="7">
                D
              </option>
              <option disabled={select.l} value="8">
                L
              </option>
              <option disabled={select.s} value="9">
                S
              </option>
              <option disabled={select.ose} value="10">
                OSE
              </option>
            </CFormSelect>
            <br />
            <CFormSelect
              aria-label="Annee Scolaire"
              name="idPeriode"
              value={editedValues.idPeriode}
              onChange={(e) => setEditedValues({ ...editedValues, idPeriode: e.target.value })}
            >
              <option disabled={true} selected={true}>
                Annee Scolaire
              </option>
              <option value="1">2022-2023</option>
            </CFormSelect>
          </CCol>
          <br />
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setVisible(false)}>
            Annuler
          </CButton>
          <CButton color="success" onClick={updateClientData}>
            Enregistrer
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

VerticallyCentered.propTypes = {
  row: PropTypes.shape({
    matricule: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    prenoms: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    adresse: PropTypes.string.isRequired,
    idSerie: PropTypes.string.isRequired,
    idPeriode: PropTypes.string.isRequired,
    idClasse: PropTypes.string.isRequired,
    niveau: PropTypes.string.isRequired,
    nomSerie: PropTypes.string.isRequired,
  }).isRequired,
}

const AddClient = () => {
  const [select, setSelect] = useState({
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
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState({
    matricule: '',
    nom: '',
    prenoms: '',
    adresse: '',
    email: '',
    idClasse: 1,
    idPeriode: 1,
    idSerie: 1,
  })

  const { addEtudiant } = useClientContext()

  const handleidPeriodeChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const addClientData = () => {
    addEtudiant(formData)
    // Optionally, you can reset the form after adding a client
    setFormData({
      matricule: '',
      nom: '',
      prenoms: '',
      adresse: '',
      email: '',
      idClasse: 1,
      idPeriode: 1,
      idSerie: 1,
    })
    setVisible(false)
  }
  const onChangeNiveau = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    if (value === '1') {
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

  // ajout etudiant ++++++++++++++++++++++++++++++++
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>AJOUTER</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Ajouter un Etudiant</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {/* Other form inputs */}
          <CFormInput
            type="text"
            label="Nom"
            name="nom"
            value={formData.nom}
            onChange={(e) => handleInputChange(e)}
          />
          {/* Other form inputs */}
          <CFormInput
            type="text"
            label="Prenoms"
            name="prenoms"
            value={formData.prenoms}
            onChange={(e) => handleInputChange(e)}
          />
          {/* Other form inputs */}
          <CFormInput
            type="text"
            label="Adresse"
            name="adresse"
            value={formData.adresse}
            onChange={(e) => handleInputChange(e)}
          />
          {/* Other form inputs */}
          <CFormInput
            type="text"
            label="Mail"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
          <CCol>
            {/* Other form inputs */}
            <CFormSelect
              aria-label="Seconde"
              name="idClasse"
              value={formData.idClasse}
              onChange={(e) => onChangeNiveau(e)}
            >
              <option disabled={true} selected={true}>
                Seconde
              </option>
              <option value="1">Seconde</option>
              <option value="2">Premiere</option>
              <option value="3">Terminale</option>
            </CFormSelect>
            {/* Other form inputs */}
            <br />
            <CFormSelect
              className="series"
              aria-label="Series"
              name="idSerie"
              value={formData.idSerie}
              onChange={(e) => handleidPeriodeChange(e)}
            >
              <option disabled={select.troncCommun} value="1">
                Tronc commun
              </option>
              <option disabled={select._s} value="2">
                SCIENTIFIQUE
              </option>
              <option disabled={select._l} value="3">
                LITTERAIRE
              </option>
              <option disabled={select.a1} value="4">
                A1
              </option>
              <option disabled={select.a2} value="5">
                A2
              </option>
              <option disabled={select.c} value="6">
                C
              </option>
              <option disabled={select.d} value="7">
                D
              </option>
              <option disabled={select.l} value="8">
                L
              </option>
              <option disabled={select.s} value="9">
                S
              </option>
              <option disabled={select.ose} value="10">
                OSE
              </option>
            </CFormSelect>
            {/* Other form inputs */}
            <br />
            <CFormSelect
              aria-label="Annee Scolaire"
              name="idPeriode"
              value={formData.idPeriode}
              onChange={(e) => handleInputChange(e)}
            >
              <option disabled={true} selected={true}>
                Annee Scolaire
              </option>
              <option value="1">2022-2023</option>
            </CFormSelect>
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setVisible(false)}>
            Annuler
          </CButton>
          <CButton color="success" onClick={addClientData}>
            Enregistrer
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

// affichage etudiant
const Eleve = () => {
  const { etudiantData, deleteEtudiant } = useClientContext()

  const handleDelete = (eleve) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons
      .fire({
        title: 'Etes vous sûr?',
        text: 'Voulez vous vraiment supprimer ' + eleve.nom + ' ' + eleve.prenoms + ' ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui supprimer',
        cancelButtonText: 'Non, annuler',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('Supprimé', 'Suppression avec succès', 'success')
          deleteEtudiant(eleve.matricule)
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Annulé', 'Supprission annulé :)', 'error')
        }
      })
  }

  const columns = [
    {
      name: 'N°',
      selector: (row) => row.matricule,
    },
    {
      name: 'Nom',
      selector: (row) => row.nom,
    },
    {
      name: 'Prénoms',
      selector: (row) => row.prenoms,
    },
    {
      name: 'Mail',
      selector: (row) => row.email,
    },
    {
      name: 'Adresse',
      selector: (row) => row.adresse,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <VerticallyCentered row={row} />
          <CButton color="none" onClick={() => handleDelete(row)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="currentColor"
                  d="M20 5a1 1 0 1 1 0 2h-1l-.003.071l-.933 13.071A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.933-13.07A1.017 1.017 0 0 1 5 7H4a1 1 0 0 1 0-2h16Zm-6-3a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2h4Z"
                />
              </g>
            </svg>
          </CButton>
        </div>
      ),
      ignoreRowClick: true,
    },
  ]
  return (
    <>
      <CRow>
        <CCol xs={8}>
          <AddClient />
        </CCol>
        <CCol xs={4}>
          <CFormInput type="text" placeholder="Rechercher..." />
        </CCol>
        <br />
        <br />
        <br />
        <DataTable columns={columns} data={etudiantData} fixedHeader pagination dense={false} />
      </CRow>
    </>
  )
}
export default Eleve
