import { createContext } from 'react'
import UserStore from './UserStore'

// eslint-disable-next-line import/prefer-default-export
export const userContext = createContext(new UserStore())
