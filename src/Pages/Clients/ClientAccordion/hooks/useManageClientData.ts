import useStore from 'store/clients'
import axios from 'axios'
import { generatePath } from 'react-router-dom'
import Cookies from 'universal-cookie'

const useManageClientData = (refetch: () => void) => {
  const {data, setData, isError, setIsError} = useStore(state => state)
  const cookies = new Cookies()

  const deleteClient = (clientID: string) => {
    axios.delete(`/api/clients/${clientID}`, {
      data: {
        token_type: 'bearer',
        access_token:  cookies.get('auth')
      }
    })
      .then((response) => {
        setData(data.filter(client => client._id !== clientID))
        refetch()
      })
      .catch(err => console.log(err))
  }

  const moreDetails = (clientID: string) => {
    generatePath("/client/:id", { id: clientID})
  }

  return {
    data,
    deleteClient,
    moreDetails,
    isError,
    setIsError
  }

}
export default useManageClientData
