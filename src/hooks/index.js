import { useContext } from 'react'
import { userContext } from '../stores/contexts'

// eslint-disable-next-line import/prefer-default-export
export function useUser() {
  return useContext(userContext)
}
