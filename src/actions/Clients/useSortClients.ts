import useStore from 'store/clients'
import useGetClients from 'actions/Clients/useGetClients'
import shallow from 'zustand/shallow'

const useSortClients = () => {
  const { setIsError, setData, setRefetch } = useStore(state => state, shallow)
  const { isError, data, isFetching, refetch } = useGetClients()
  if (data) {
    setIsError(isError)
    setData(data)
    setRefetch(refetch)
  }
  return {
    refetch,
    isFetching
  }
}

export default useSortClients
