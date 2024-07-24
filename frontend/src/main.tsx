import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import { AppProvider } from './providers'
import { appRouter } from './routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <RouterProvider router={appRouter} />
  </AppProvider>
)
