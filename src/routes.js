import React from 'react'
import { Form } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Eleve = React.lazy(() => import('./views/eleve/eleve'))
const PhysiqueChimie = React.lazy(() => import('./views/note/physiqueChimie'))
const Mathematique = React.lazy(() => import('./views/note/mathematique'))
const Francais = React.lazy(() => import('./views/note/francais'))
const Anglais = React.lazy(() => import('./views/note/anglais'))
const Philosophie = React.lazy(() => import('./views/note/philosophie'))
const Svt = React.lazy(() => import('./views/note/svt'))
const Eps = React.lazy(() => import('./views/note/eps'))
const HistoireGeographie = React.lazy(() => import('./views/note/histoireGeographie'))
const Malagasy = React.lazy(() => import('./views/note/malagasy'))
const Seconde = React.lazy(() => import('./views/Voiture/Seconde'))
const Achat = React.lazy(() => import('./views/Achat/Achat'))
const Premiere_L = React.lazy(() => import('./views/Voiture/Premiere_L'))
const Premiere_S = React.lazy(() => import('./views/Voiture/Premiere_S'))
const Terminale_A1 = React.lazy(() => import('./views/Voiture/Terminale_A1'))
const Terminale_A2 = React.lazy(() => import('./views/Voiture/Terminale_A2'))
const Terminale_C = React.lazy(() => import('./views/Voiture/Terminale_C'))
const Terminale_D = React.lazy(() => import('./views/Voiture/Terminale_D'))
const Terminale_L = React.lazy(() => import('./views/Voiture/Terminale_L'))
const Terminale_S = React.lazy(() => import('./views/Voiture/Terminale_S'))
const Terminale_OSE = React.lazy(() => import('./views/Voiture/Terminale_OSE'))
const MatiereSeconde = React.lazy(() => import('./views/matiere/matiereSeconde'))
const MatierePremiere = React.lazy(() => import('./views/matiere/matierePremiere'))
const MatiereTerminale = React.lazy(() => import('./views/matiere/matiereTerminale'))
const ResultatSeconde = React.lazy(() => import('./views/resultat/secondeR'))
const ResultatPremiere = React.lazy(() => import('./views/resultat/premiereR'))
const ResultatTerminal = React.lazy(() => import('./views/resultat/terminalR'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: ListGroups },
  { path: '/eleve', name: 'Eleve', element: Eleve },
  { path: '/note/physiqueChimie', name: 'Physique Chimie', element: PhysiqueChimie },
  { path: '/note/mathematique', name: 'Mathematique', element: Mathematique },
  { path: '/note/francais', name: 'Français', element: Francais },
  { path: '/note/anglais', name: 'Anglais', element: Anglais },
  { path: '/note/philosophie', name: 'Philosophie', element: Philosophie },
  { path: '/note/histoireGeographie', name: 'Histoire-Geographie', element: HistoireGeographie },
  { path: '/note/svt', name: 'Svt', element: Svt },
  { path: '/note/eps', name: 'EPS', element: Eps },
  { path: '/note/malagasy', name: 'Malagasy', element: Malagasy },
  { path: '/voitures/seconde', name: 'Seconde', element: Seconde },
  { path: '/voitures/premiereL', name: 'Premiere L', element: Premiere_L },
  { path: '/voitures/premiereS', name: 'Premiere S', element: Premiere_S },
  { path: '/voitures/terminaleA1', name: 'Terminale A1', element: Terminale_A1 },
  { path: '/voitures/terminaleA2', name: 'Terminale A2', element: Terminale_A2 },
  { path: '/voitures/terminaleC', name: 'Terminale C', element: Terminale_C },
  { path: '/voitures/terminaleD', name: 'Terminale D', element: Terminale_D },
  { path: '/voitures/terminaleL', name: 'Terminale L', element: Terminale_L },
  { path: '/voitures/terminaleS', name: 'Terminale S', element: Terminale_S },
  { path: '/voitures/terminaleOSE', name: 'Terminale OSE', element: Terminale_OSE },
  { path: '/matiere/seconde', name: 'Seconde', element: MatiereSeconde },
  { path: '/matiere/premiere', name: 'Premiere', element: MatierePremiere },
  { path: '/matiere/terminale', name: 'Terminale', element: MatiereTerminale },
  { path: '/resultat/secondeR', name: 'Seconde', element: ResultatSeconde },
  { path: '/resultat/premiereR', name: 'Premiere', element: ResultatPremiere },
  { path: '/resultat/terminalR', name: 'Terminale', element: ResultatTerminal },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/achat', name: 'Achat', element: Achat },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
