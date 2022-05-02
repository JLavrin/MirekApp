import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { snackbarClasses } from '@mui/material'

export type Data = {
  _id: string
  name?: string,
  address?: string,
  postCode?: string,
  email?: string,
  nip?: string,
  regon?: string,
  founder?: string,
  founder2?: string,
  contractSignDate?: string,
  contractEndDate?: string,
  oneTimeFee?: string,
  oneTimeText?: string,
  subscription?: string,
  subscriptionText?: string,
  extraFee1?: string
}[]

type State = {
  data: Data,
  refetch: () => void,
  setData: (Data:Data) => void
  setRefetch: (payload:() => void) => void
  isError: boolean
  setIsError: (payload: boolean) => void
  snackbarClients: boolean
  setSnackbarClients: (payload: boolean) => void
}


const useStore = create<State>(devtools(set => ({
  data: [],
  refetch: () => {},
  setRefetch: (payload) => set({refetch: payload}),
  setData: (payload:Data) => set({data: payload}),
  isError: false,
  setIsError: (payload)  => set({isError: payload}),
  snackbarClients: false,
  setSnackbarClients: (payload)  => set({isError: payload})
})))

export default useStore