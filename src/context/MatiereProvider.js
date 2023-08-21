import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useAchatContext } from './AchatProvider'
import { useVoitureContext } from './NoteProvider'

const ClientContext = createContext()

// eslint-disable-next-line react/prop-types
export const MatiereProvider = ({ children }) => {
  const [matiere, setMatiere] = useState([])
  const fetchAllMatiere = (idSerie) => {
    axios
      .get(`https://localhost:7076/Matiere/matiere?idSerie=${idSerie}`)
      .then((response) => {
        setMatiere(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }

  return (
    <ClientContext.Provider
      value={{
        matiere,
        fetchAllMatiere,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}

export const useMatiereContext = () => useContext(ClientContext)
