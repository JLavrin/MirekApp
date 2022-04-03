import create from 'zustand'
import { devtools } from 'zustand/middleware'

type Data = {
  clientCompanyName: string,
    clientCompanyAdress: string,
    clientCompanypostCode: string,
    clientEmailAdress: string,
    clientCompanyNIP: string,
    clientCompanyRegon: string,
    clientCompanyFounder: string,
    contractSignDate: string,
    contractEndDate: string,
    oneTime: string,
      oneTimeString: string,
      subscription: string,
      subscriptionString: string,
      subscriptionAfterContractEnd: string

}

type State = {
  data: Data,
  setData: (Data:Data) => void

}


const initialData = {
  clientCompanyName: '',
  clientCompanyAdress: '',
  clientCompanypostCode: '',
  clientEmailAdress: '',
  clientCompanyNIP: '',
  clientCompanyRegon: '',
  clientCompanyFounder: '',
  contractSignDate: '',
  contractEndDate: '',
    oneTime: '',
    oneTimeString: '',
    subscription: '',
    subscriptionString: '',
    subscriptionAfterContractEnd: ''

}

const useStore = create<State>(devtools(set => ({
  data: initialData,
  setData: (data:Data) => set({data: data})
})))

export default useStore