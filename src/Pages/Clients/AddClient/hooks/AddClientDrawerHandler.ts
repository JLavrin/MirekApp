import { useCallback, useState } from 'react'

const AddClientDrawerHandler = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(
    () => {
      setIsOpen(prevState => !prevState)
    },
    [isOpen],
  )

  return {
    isOpen,
    toggleOpen
  }
}

export default AddClientDrawerHandler