import React, { useEffect } from 'react'
import { CButton, CRow, CCol, CFormInput } from '@coreui/react'
import { useClientContext } from '../../context/EleveProvider'
import Swal from 'sweetalert2'
import DataTable from 'react-data-table-component'

const Terminale_D = () => {
  const { terminale, fetchAllEleveTerminale, deleteEtudiant } = useClientContext()
  useEffect(() => {
    fetchAllEleveTerminale(7)
  }, [])
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
        <CCol xs={8}></CCol>
        <CCol xs={4}>
          <CFormInput type="text" placeholder="Rechercher..." />
        </CCol>
        <br />
        <br />
        <br />
        <DataTable columns={columns} data={terminale} fixedHeader pagination dense={false} />
      </CRow>
    </>
  )
}

export default Terminale_D
