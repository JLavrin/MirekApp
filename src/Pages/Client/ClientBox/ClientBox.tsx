import {
  StyledClientBox
} from './ClientBox.styled'
import {MouseEvent, useCallback, useState, VoidFunctionComponent } from 'react'
import ClientProfile from 'Pages/Client/ClientBox/ClientProfile'
import ClientDocuments from 'Pages/Client/ClientBox/ClientDocuments'
import ClientPayments from 'Pages/Client/ClientBox/ClientPayments'
import EditModal from 'Pages/Client/ClientBox/EditModal'
import { Client } from 'types/Client'

type Props = {
  client: Client
  open: boolean
  modalType:boolean
  editModalManager: (event: MouseEvent<HTMLButtonElement>, modalType: boolean) => void
}



const ClientBox: VoidFunctionComponent<Props> = ({client, open, editModalManager, modalType}) => {


  return (
    <StyledClientBox>
      <ClientProfile client={client} handleEditModalOpen={editModalManager}/>
      <ClientPayments client={client} handleEditModalOpen={editModalManager}/>
      <ClientDocuments client={client}/>
      <EditModal  client={client} isOpen={open}  handleEditModalOpen={editModalManager} modalType={modalType}/>
    </StyledClientBox>
  )
}

export default ClientBox