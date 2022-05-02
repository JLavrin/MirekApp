import React, { FunctionComponent, MouseEvent, useCallback, useEffect, useState, VoidFunctionComponent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import useStore, { Data } from 'store'
import clientsStore from 'store/clients'
import {StyledClientBox, StyledTitle, StyledTitleBox, StyledTopBox } from './Client.styled'
import ClientBox from 'Pages/Client/ClientBox'
import { StyledButton } from 'Pages/Clients/ClientAccordion/ClientAccordion.styled'
import Cookies from 'universal-cookie'
import {Client as ClientType} from 'types/Client'
import InitialClientState from 'constants/InitialClientState'
import { Alert, Snackbar } from '@mui/material'

interface ServerResponse {
  data: ClientType
}



const handleEditModalOpen = () => {

  const [open, setOpen] = useState(false)
  const [modalType, setModalType] = useState(true)

  const editModalManager = useCallback(
    (event: MouseEvent<HTMLButtonElement>, modalType:boolean) => {
      event.preventDefault()
      setOpen(prevState => !prevState)
      setModalType(modalType)
    },
    [open],
  )
  return {editModalManager, open, modalType}
}

const Client: VoidFunctionComponent = () => {
  const {id} = useParams()
  const { isLoggedIn } = useStore(state => state)
  const [client, setClient] = useState({...InitialClientState, _id: ''})
  const cookies = new Cookies()
  const { open, editModalManager, modalType } = handleEditModalOpen()
  useEffect(() => {
    axios.get<ClientType>(`/api/clients/${id}`, {
      headers: {
        'Authorization' : `Bearer ${cookies.get('auth')}`
      }
    })
      .then((response: ServerResponse) => {
        setClient(response.data)
      })
  }, [open])

  const deleteClient = (clientID: string) => {
    axios.delete(`/api/clients/${clientID}`, {
      headers: {
        'Authorization' : `Bearer ${cookies.get('auth')}`
      }
    })
      .then((response) => {
      })
      .catch(err => console.log(err))
  }



  return (
    <>
      {!isLoggedIn && <Navigate to='/' />}
      <StyledClientBox>
        <StyledTopBox>
          <StyledTitleBox>
            <StyledTitle variant="h1">Profil klienta</StyledTitle>
            <Link style={{textDecoration: 'none'}} to={'/clients'}>
              <StyledButton
                style={{width: '100px'}}
                variant="contained"
                color="primary"
                onClick={() => deleteClient(id!)}
              >
                Usuń
              </StyledButton>
            </Link>

          </StyledTitleBox>
        </StyledTopBox>
        <ClientBox client={client} open={open} editModalManager={editModalManager} modalType={modalType}/>
      </StyledClientBox>
    </>
  )

}

export default Client