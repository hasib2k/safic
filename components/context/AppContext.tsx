import { createContext } from 'react'
import { AppContextType } from '../../types'

const AppContext = createContext<AppContextType>({
  prayerTimes: null,
  announcements: [],
  isLoading: true
})

export default AppContext
