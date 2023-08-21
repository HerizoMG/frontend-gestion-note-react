import React, { useEffect } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { CChartBar, CChartDoughnut } from '@coreui/react-chartjs'
import { useClientContext } from '../../context/EleveProvider'

const Dashboard = () => {
  const { etudiantData, fetchAllEleveCount } = useClientContext()
  useEffect(() => {
    fetchAllEleveCount()
  }, [])
  return (
    <CRow>
      <CCol xs={8}>
        <CCard className="mb-4">
          <CCardHeader></CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: etudiantData.nomsClasses,
                datasets: [
                  {
                    label: 'Nombre des eleves',
                    backgroundColor: '#0a0c72',
                    data: etudiantData.nombresEtudiants,
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={4}>
        <CCard className="mb-4">
          <CCardHeader></CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: etudiantData.nomsClasses,
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: etudiantData.nombresEtudiants,
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
