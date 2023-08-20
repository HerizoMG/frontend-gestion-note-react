import React, { useEffect, useState } from 'react'
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
import DataTable from 'react-data-table-component'
import PropTypes from 'prop-types'
import { useNoteContext } from '../../context/NoteProvider'
import { useClientContext } from '../../context/EleveProvider'
import Swal from 'sweetalert2'
const VerticallyCentered = ({ row }) => {
  const [visible, setVisible] = useState(false)
  const [editedValues, setEditedValues] = useState({
    idNote: row.idNote,
    note: row.note,
    idMatiere: 1,
    matricule: row.matricule,
    idPeriode: 1,
  })
  const { updateNote } = useNoteContext()
  const updateNoteData = () => {
    updateNote(editedValues.idNote, editedValues)
  }
  // edit note
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
          <CModalTitle>Edite Note</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Note"
            value={editedValues.note}
            onChange={(e) => setEditedValues({ ...editedValues, note: e.target.value })}
          />
          <br />
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setVisible(false)}>
            Annuler
          </CButton>
          <CButton color="success" onClick={updateNoteData}>
            Enregistrer
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

VerticallyCentered.propTypes = {
  row: PropTypes.shape({
    note: PropTypes.string.isRequired,
    idNote: PropTypes.string.isRequired,
    matricule: PropTypes.string.isRequired,
    idPeriode: PropTypes.string.isRequired,
  }).isRequired,
}

const AddNote = () => {
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState({
    matricule: '001',
    note: '',
    idMatiere: 9,
    idPeriode: 1,
  })
  const { addNote } = useNoteContext()
  const { etudiantData } = useClientContext()

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
  const addNoteData = () => {
    addNote(formData)
    // Optionally, you can reset the form after adding a client
    setFormData({
      matricule: '001',
      note: '',
      idMatiere: 9,
      idPeriode: 1,
    })
    setVisible(false)
  }

  // ajout note ++++++++++++++++++++++++++++++++
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>AJOUTER</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Ajouter un Etudiant</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {/* Other form inputs */}
          <CFormSelect
            aria-label="Etudiant"
            name="matricule"
            value={formData.matricule}
            onChange={(e) => setFormData({ ...formData, matricule: e.target.value })}
          >
            <option disabled={true} selected={true}>
              Etudiant
            </option>
            {etudiantData.map((item, i) => (
              <option key={i} value={item.matricule}>
                {item.nom + ' ' + item.prenoms}
              </option>
            ))}
          </CFormSelect>
          {/* Other form inputs */}
          <CFormInput
            type="text"
            label="Note"
            name="note"
            required={true}
            value={formData.note}
            onChange={(e) => handleInputChange(e)}
          />
          {/* Other form inputs */}
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setVisible(false)}>
            Annuler
          </CButton>
          <CButton color="success" onClick={addNoteData}>
            Enregistrer
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

// affichage etudiant
const Eps = () => {
  const { noteData, deleteNote, fetchAllNote } = useNoteContext()
  useEffect(() => {
    fetchAllNote(9)
  }, [])
  const handleDelete = (note) => {
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
        text:
          'Voulez vous vraiment supprimer le note de' +
          note.etudiant.nom +
          ' ' +
          note.etudiant.prenoms +
          ' ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui supprimer',
        cancelButtonText: 'Non, annuler',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire('Supprimé', 'Suppression avec succès', 'success')
          deleteNote(note.idNote, note.idMatiere)
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Annulé', 'Supprission annulé :)', 'error')
        }
      })
  }
  const columns = [
    {
      name: 'N°',
      selector: (row) => row.idNote,
    },
    {
      name: 'Matricule',
      selector: (row) => row.matricule,
    },
    {
      name: 'Nom',
      selector: (row) => row.etudiant.nom,
    },
    {
      name: 'Prénoms',
      selector: (row) => row.etudiant.prenoms,
    },
    {
      name: 'Note',
      selector: (row) => row.note,
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
          <AddNote />
        </CCol>
        <CCol xs={4}></CCol>
        <br />
        <br />
        <br />
        <DataTable columns={columns} data={noteData} fixedHeader pagination dense={false} />
      </CRow>
    </>
  )
}
export default Eps