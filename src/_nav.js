import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCart, cilPeople, cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'
import { cilCarAlt } from '@coreui/icons/js/free/cil-car-alt'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Elèves',
    to: '/eleve',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Classe',
    to: '/classes',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Seconde',
        to: '/voitures/seconde',
      },
      {
        component: CNavGroup,
        name: 'Premiere',
        to: 'premiere',
        items: [
          {
            component: CNavItem,
            name: 'Premiere L',
            to: '/voitures/premiereL',
          },
          {
            component: CNavItem,
            name: 'Premiere S',
            to: '/voitures/premiereS',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Terminale',
        to: 'terminale',
        items: [
          {
            component: CNavItem,
            name: 'Terminale A1',
            to: '/voitures/terminaleA1',
          },
          {
            component: CNavItem,
            name: 'Terminale A2',
            to: '/voitures/terminaleA2',
          },
          {
            component: CNavItem,
            name: 'Terminale C',
            to: '/voitures/terminaleC',
          },
          {
            component: CNavItem,
            name: 'Terminale D',
            to: '/voitures/terminaleD',
          },
          {
            component: CNavItem,
            name: 'Terminale L',
            to: '/voitures/terminaleL',
          },
          {
            component: CNavItem,
            name: 'Terminale S',
            to: '/voitures/terminaleS',
          },
          {
            component: CNavItem,
            name: 'Terminale OSE',
            to: '/voitures/terminaleOSE',
          },
        ],
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Matiere',
    to: '/matiere',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Seconde',
        to: '/matiere/seconde',
      },
      {
        component: CNavItem,
        name: 'Premiere',
        to: '/matiere/premiere',
      },
      {
        component: CNavItem,
        name: 'Terminale',
        to: '/matiere/terminale',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Note',
    to: '/note',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mathematique',
        to: '/note/mathematique',
      },
      {
        component: CNavItem,
        name: 'Physique Chimie',
        to: '/note/physiqueChimie',
      },
      {
        component: CNavItem,
        name: 'Français',
        to: '/note/francais',
      },
      {
        component: CNavItem,
        name: 'Anglais',
        to: '/note/anglais',
      },
      {
        component: CNavItem,
        name: 'Philosophie',
        to: '/note/philosophie',
      },
      {
        component: CNavItem,
        name: 'Histoire-Geographie',
        to: '/note/histoireGeographie',
      },
      {
        component: CNavItem,
        name: 'SVT',
        to: '/note/svt',
      },
      {
        component: CNavItem,
        name: 'EPS',
        to: '/note/eps',
      },
      {
        component: CNavItem,
        name: 'Malagasy',
        to: '/note/malagasy',
      },
    ],
  },
]

export default _nav
