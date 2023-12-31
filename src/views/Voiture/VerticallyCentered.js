import React, { useEffect, useState } from 'react'
import { useVoitureContext } from '../../context/NoteProvider'
import axios from 'axios'
import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

export const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  const [isNewCategory, setIsNewCategory] = useState(false)
  const [isNewMarque, setIsNewMarque] = useState(false)
  const [categories, setCategories] = useState([])
  const [marques, setMarques] = useState([])
  const [formData, setFormData] = useState({
    numserie: 'string',
    idcategorie: '',
    idmarque: '',
    designvoiture: '',
    prix: 0,
    img: 'string',
    type: '',
    boitevitesse: '',
    status: 0,
    categorie: {
      idcategorie: '',
      designcat: '',
    },
    marque: {
      idmarque: '',
      designmarque: '',
    },
  })
  const {
    addVoiture,
    addVoitureNewCategorie,
    addVoitureNewMarque,
    addVoitureNewCategorieAndMarque,
  } = useVoitureContext()

  useEffect(() => {
    axios
      .get('https://localhost:7001/api/Categorie')
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => {
        console.error('Error fetching category data:', error.message)
      })

    axios
      .get('https://localhost:7001/api/Marques')
      .then((response) => {
        setMarques(response.data)
      })
      .catch((error) => {
        console.error('Error fetching marque data:', error.message)
      })
  }, [])

  const saveCar = () => {
    if (isNewCategory && isNewCategory) addVoitureNewCategorieAndMarque(formData)
    if (isNewCategory && !isNewMarque) addVoitureNewCategorie(formData)
    if (!isNewCategory && isNewMarque) addVoitureNewMarque(formData)
    if (!isNewMarque && !isNewCategory) addVoiture(formData)
    setFormData({
      numserie: 'string',
      idcategorie: '',
      idmarque: '',
      designvoiture: '',
      prix: 0,
      img: 'string',
      type: '',
      boitevitesse: '',
      status: 0,
      categorie: {
        idcategorie: '',
        designcat: '',
      },
      marque: {
        idmarque: '',
        designmarque: '',
      },
    })
    console.log(formData)
    setVisible(false)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCatInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      idcategorie: value,
      categorie: {
        idcategorie: value,
        designcat: value,
      },
    }))
  }

  const handleMarInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      idmarque: value,
      marque: {
        idmarque: value,
        designmarque: value,
      },
    }))
  }

  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Ajouter</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Ajouter une voiture</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            name="designvoiture"
            value={formData.designvoiture}
            onChange={handleInputChange}
            label="Modéle"
            aria-label="default input example"
          />
          <br />
          <CFormCheck
            label="Nouvelle catégorie"
            checked={isNewCategory}
            onChange={() => setIsNewCategory(!isNewCategory)}
          />
          {isNewCategory ? (
            <CFormInput
              type="text"
              name="idcategorie"
              value={formData.categorie.designcat}
              onChange={handleCatInputChange}
              label="Catégorie"
              aria-label="default input example"
            />
          ) : (
            <CFormSelect
              name="idcategorie"
              value={formData.idcategorie}
              onChange={handleCatInputChange}
              label="Catégorie"
              aria-label="Default select example"
            >
              <option value="choose">Choisissez une catégorie</option>
              {categories.map((category) => (
                <option key={category.idcategorie} value={category.idcategorie}>
                  {category.designcat}
                </option>
              ))}
            </CFormSelect>
          )}
          <br />
          <CFormCheck
            label="Nouvelle marque"
            checked={isNewMarque}
            onChange={() => setIsNewMarque(!isNewMarque)}
          />
          {isNewMarque ? (
            <CFormInput
              type="text"
              name="idcategorie"
              value={formData.marque.designmarque}
              onChange={handleMarInputChange}
              label="Terminale_A1"
              aria-label="default input example"
            />
          ) : (
            <CFormSelect
              name="idmarque"
              value={formData.idmarque}
              onChange={handleMarInputChange}
              label="Terminale_A1"
              aria-label="Default select example"
            >
              <option>Choisissez une marque</option>
              {marques.map((marque) => (
                <option key={marque.idmarque} value={marque.idmarque}>
                  {marque.designmarque}
                </option>
              ))}
            </CFormSelect>
          )}
          <br />
          <CFormSelect
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            label="Type"
            aria-label="Default select example"
          >
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Electrique">Electrique</option>
          </CFormSelect>
          <br />
          <CFormSelect
            name="boitevitesse"
            value={formData.boitevitesse}
            onChange={handleInputChange}
            label="Boîte"
            aria-label="Default select example"
          >
            <option value="Manuelle">Manuelle</option>
            <option value="Automatique">Automatique</option>
          </CFormSelect>
          <br />
          <CFormInput
            type="text"
            name="prix"
            value={formData.prix}
            onChange={handleInputChange}
            label="Prix"
            aria-label="default input example"
          />
          <br />
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => setVisible(false)}>
            Annuler
          </CButton>
          <CButton color="success" onClick={saveCar}>
            Enregistrer
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
