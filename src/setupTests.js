import '@testing-library/jest-dom/extend-expect';
import { configure } from 'mobx'

configure({
  enforceActions: 'never'
})