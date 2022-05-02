import { useQuery } from 'react-query'
import { Navigate} from 'react-router-dom'
import { Data } from 'store/clients'
import Cookies from 'universal-cookie'

const  useGetClients = () => {
  const cookies = new Cookies()
  return useQuery<Data, any>('clientsGet', () =>
    fetch('/api/clients', {
      method: 'GET',
      headers: {
        'Authorization' : `Bearer ${cookies.get('auth')}`
      }
    })
      .then(res => res.json())
      .catch(err => {
        console.log('Redirect')
        return <Navigate replace to="/"/>
      })
  , {
    refetchInterval: 30000
    })
}

export default useGetClients