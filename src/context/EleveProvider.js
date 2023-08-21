import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useVoitureContext } from './NoteProvider'

const ClientContext = createContext()

// eslint-disable-next-line react/prop-types
export const EleveProvider = ({ children }) => {
  const [etudiantData, setEtudiantData] = useState([])
  const [records, setRecords] = useState([])
  const [seconde, setSeconde] = useState([])
  const [premiere, setPremiere] = useState([])
  const [terminale, setTerminale] = useState([])

  useEffect(() => {
    fetchAllEleve()
  }, [])
  const fetchAllEleve = () => {
    axios
      .get('https://localhost:7076/Etudiant')
      .then((response) => {
        setEtudiantData(response.data)
        setRecords(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }

  const fetchAllEleveSeconde = () => {
    axios
      .get('https://localhost:7076/Etudiant/seconde')
      .then((response) => {
        setSeconde(response.data)
        setRecords(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }

  const fetchAllElevePremiereL = () => {
    axios
      .get('https://localhost:7076/Etudiant/premiereL')
      .then((response) => {
        setPremiere(response.data)
        setRecords(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }

  const fetchAllElevePremiereS = () => {
    axios
      .get('https://localhost:7076/Etudiant/premiereS')
      .then((response) => {
        setPremiere(response.data)
        setRecords(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }

  const fetchAllEleveTerminale = (id) => {
    axios
      .get(`https://localhost:7076/Etudiant/terminale?id=${id}`)
      .then((response) => {
        setTerminale(response.data)
        setRecords(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }
  const updateEtudiant = (id, editedValues) => {
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

  const addEtudiant = (newEleve) => {
    axios
      .post('https://localhost:7076/Etudiant/create', newEleve)
      .then((response) => {
        console.log('New eleve added:', response.data)
        fetchAllEleve()
        Swal.fire('Ajouté', response.data.id + ' ajouté avec succès', 'success')
      })
      .catch((error) => {
        console.error('Error adding new eleve:', error.message)
      })
  }

  const deleteEtudiant = (deleteID) => {
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
    <ClientContext.Provider
      value={{
        etudiantData,
        records,
        seconde,
        premiere,
        terminale,
        fetchAllEleveSeconde,
        fetchAllElevePremiereL,
        fetchAllElevePremiereS,
        fetchAllEleveTerminale,
        updateEtudiant,
        deleteEtudiant,
        addEtudiant,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}

export const useClientContext = () => useContext(ClientContext)
