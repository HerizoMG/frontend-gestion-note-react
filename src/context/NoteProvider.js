import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useVoitureContext } from './NoteProvider'

const ClientContext = createContext()

// eslint-disable-next-line react/prop-types
export const NoteProvider = ({ children }) => {
  const [noteData, setNoteData] = useState([])
  const fetchAllNote = (idMatiere) => {
    axios
      .get(`https://localhost:7076/Note/idMatiere?idMatiere=${idMatiere}`)
      .then((response) => {
        setNoteData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error.message)
      })
  }
  const updateNote = (id, editedValues) => {
    axios
      .put(`https://localhost:7076/Note/update?id=${id}`, editedValues)
      .then((response) => {
        console.log('Note data updated:', response.data)
        fetchAllNote(editedValues.idMatiere)
        Swal.fire('Modifié', 'Modification avec succès', 'success')
      })
      .catch((error) => {
        console.error('Error updating eleve data:', error.message)
      })
  }

  const addNote = (newNote) => {
    axios
      .post('https://localhost:7076/Note/ajouterNote', newNote)
      .then((response) => {
        console.log('New note added:', response.status)
        fetchAllNote(newNote.idMatiere)
        Swal.fire('Ajouté', 'Note ajouté avec succès', 'success')
      })
      .catch((error) => {
        console.log('Error adding new note:', error.config.data)
        if (error.config.data) Swal.fire('Alert', 'Note déja existé', 'warning')
        // Swal.fire('Alert', 'Note déja existé', 'warning')
      })
  }
  const deleteNote = (idNote, idMatiere) => {
    axios
      .delete(`https://localhost:7076/Note/${idNote}`)
      .then((response) => {
        console.log('Note data deleted:', response.data)
        fetchAllNote(idMatiere)
      })
      .catch((error) => {
        console.error('Error deleting note data:', error.message)
      })
  }

  return (
    <ClientContext.Provider
      value={{
        noteData,
        updateNote,
        addNote,
        deleteNote,
        fetchAllNote,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}

export const useNoteContext = () => useContext(ClientContext)
