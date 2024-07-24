import { createBrowserRouter } from 'react-router-dom'
import { withSuspense } from '~/hocs/withSuspese'
import { lazyImport } from '~/utils/lazyImport'
import { useMember } from '~/hooks/useMember'

const { HomeRoutes } = lazyImport(() => import('~/features/home'), 'HomeRoutes')
const { TaskRoutes } = lazyImport(
  () => import('~/features/tasks/routes'),
  'TaskRoutes'
)

const Root = withSuspense(() => {
  useMember()

  return (
    <div className="flex flex-col h-screen w-full">
      <HomeRoutes />
      <TaskRoutes />
    </div>
  )
})

export const appRouter = createBrowserRouter([
  {
    path: '*',
    Component: Root,
  },
])
