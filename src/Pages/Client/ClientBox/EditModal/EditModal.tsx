import { ButtonGroup, Dialog } from '@mui/material'
import React, { MouseEvent, useEffect, useState, VoidFunctionComponent } from 'react'
import DataSection from 'Pages/Client/ClientBox/EditModal/DataSection'
import PaymentsSection from 'Pages/Client/ClientBox/EditModal/PaymentsSection'
import { Client } from 'types/Client'
import {
  StyledButtonSection,
  StyledEditModal,
  StyledDialog,
  StyledDataButton,
  StyledPaymentsButton,
  StyledCloseButton} from 'Pages/Client/ClientBox/EditModal/EditModal.styled'
import { Close } from '@mui/icons-material'

type Props = {
  handleEditModalOpen: (event: MouseEvent<HTMLButtonElement>, modalType: boolean) => void
  isOpen: boolean
  modalType: boolean
  client: Client
}


const EditModal:VoidFunctionComponent<Props> = ({handleEditModalOpen, isOpen, modalType, client}) => {

  const [chosen, setChosen] = useState(modalType)

  useEffect(() => {
    setChosen(modalType)
  }, [modalType])


  return (
    <StyledDialog  open={isOpen} onClose={(e:MouseEvent<HTMLButtonElement>) => handleEditModalOpen(e, true)}>
      <StyledEditModal>
        <StyledButtonSection>
          <ButtonGroup>
            <StyledDataButton variant='contained' onClick={() => setChosen(true)} disabled={chosen}>Dane Klienta</StyledDataButton>
            <StyledPaymentsButton variant="contained" onClick={() => setChosen(false)} disabled={!chosen}>Płatności</StyledPaymentsButton>
          </ButtonGroup>
          <StyledCloseButton style={{position: 'absolute'}} onClick={(e:MouseEvent<HTMLButtonElement>) => handleEditModalOpen(e, true)}><Close/></StyledCloseButton>
        </StyledButtonSection>
        {chosen ? <DataSection client={client}/> : <PaymentsSection client={client}/>}
      </StyledEditModal>
    </StyledDialog>
  )
}

export default EditModal
