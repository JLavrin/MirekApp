import create from 'zustand'
import { devtools } from 'zustand/middleware'

export type Data = {
  _id: string
  name: string,
  address: string,
  postCode: string,
  email: string,
  nip: string,
  regon: string,
  founder: string,
  founder2: string,
  contractSignDate: string,
  contractEndDate: string,
  oneTimeFee: string,
  oneTimeText: string,
  subscription: string,
  subscriptionText: string,
  extraFee1: string
}

type State = {
  data: Data,
  setData: (Data:Data) => void
  isLoggedIn: boolean,
  setIsLoggedIn: (payload:boolean) => void
  user: string
  setUser: (payload: string) => void
}

const initialData = {
  _id: '',
  name: 'Nazwa firmy',
  address: 'Adres',
  postCode: 'Kod pocztowy',
  email: 'Email',
  nip: 'Nip',
  regon: 'Regon',
  founder: 'Właściciel',
  founder2: 'Właściciel2',
  contractSignDate: 'Data podpisania kontraktu',
  contractEndDate: 'Data zkończenia',
  oneTimeFee: '330.00',
  oneTimeText: '231.23',
  subscription: '212',
  subscriptionText: '212.32',
  extraFee1: '212.29'
}

const useStore = create<State>(devtools(set => ({
  data: initialData,
  setData: (data:Data) => set({ data: data }),
  isLoggedIn: false,
  user: '',
  setUser: (payload) => set({user: payload}),
  setIsLoggedIn: (payload) => set({ isLoggedIn: payload })
})))

export default useStore