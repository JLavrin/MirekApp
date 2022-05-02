import React from 'react'
import ClientAccordion from 'Pages/Clients/ClientAccordion/ClientAccordion'
import { StyledBox } from './Clients.styled'
import useSortClients from 'actions/Clients/useSortClients'
import useStore from 'store'
import { Navigate } from 'react-router-dom'

const Clients = () => {
  const { isLoggedIn } = useStore(state => state)
   const { refetch } = useSortClients()

  return (
    <>
      {!isLoggedIn && <Navigate to='/' />}
      <StyledBox>
        <ClientAccordion refetch={refetch}/>
      </StyledBox>

    </>
  )
}

export default Clients