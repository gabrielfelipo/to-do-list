import { createBrowserRouter } from 'react-router-dom'
import { lazyImport } from '~/utils/lazyImport'
import { withSuspense } from '~/hocs/withSuspese'

const { HomeRoutes } = lazyImport(
  () => import('~/features/home'),
  'HomeRoutes'
)

const Root = withSuspense(() => {
  return (
    <div className="flex flex-col h-screen w-full">
      <HomeRoutes />
    </div>
  )
})

export const appRouter = createBrowserRouter([
  {
    path: '*',
    Component: Root,
  },
])
