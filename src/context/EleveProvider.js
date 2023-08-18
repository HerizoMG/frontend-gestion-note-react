import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useAchatContext } from './AchatProvider'
import { useVoitureContext } from './VoitureProvider'

const ClientContext = createContext()

// eslint-disable-next-line react/prop-types
export const EleveProvider = ({ children }) => {
  const [clientData, setClientData] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetchAllEleve()
  }, [])
  const fetchAllEleve = () => {
    axios
      .get('https://localhost:7076/Etudiant')
      .then((response) => {
        setClientData(response.data)
        setRecords(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }

  const updateClient = (id, editedValues) => {
    axios
      .put(`https://localhost:7076/Etudiant/update?id=${id}`, editedValues)
      .then((response) => {
        console.log('Eleve data updated:', response.data)
        fetchAllEleve()
        Swal.fire('Modifié', 'Modification avec succès', 'success')
      })
      .catch((error) => {
        console.error('Error updating eleve data:', error.message)
      })
  }

  const addClient = (newEleve) => {
    axios
      .post('https://localhost:7076/Etudiant/create', newEleve)
      .then((response) => {
        console.log('New eleve added:', response.data)
        fetchAllEleve()
        Swal.fire(
          'Ajouté',
          response.data.nom + response.data.prenoms + ' ajouté avec succès',
          'success',
        )
      })
      .catch((error) => {
        console.error('Error adding new eleve:', error.message)
      })
  }

  const deleteClient = (deleteID) => {
    axios
      .delete(`https://localhost:7076/Etudiant/${deleteID}`)
      .then((response) => {
        console.log('Eleve data updated:', response.data)
        fetchAllEleve()
      })
      .catch((error) => {
        console.error('Error updating eleve data:', error.message)
      })
  }

  return (
    <ClientContext.Provider value={{ clientData, records, updateClient, deleteClient, addClient }}>
      {children}
    </ClientContext.Provider>
  )
}

export const useClientContext = () => useContext(ClientContext)
