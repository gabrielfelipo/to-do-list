import { PageLayout } from '~/components/PageLayout'

import TableTask from '../components/table/tableTasks'
import { useListTasks } from '../api/listTasks'

export const TaskList: React.FC = () => {
  const { data: tasks = [], isLoading } = useListTasks()

  if (isLoading) {
    return (
      <PageLayout className="h-full items-center justify-center">
        <div>Loading...</div>
      </PageLayout>
    )
  }

  return (
    <PageLayout className="w-full h-full items-center justify-center bg-slate-50">
      <div className="space-y-4 p-4 rounded-3xl bg-white drop-shadow-2xl w-11/12">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Tasks
          </h1>
        </div>
        <TableTask tasks={tasks} />
      </div>
    </PageLayout>
  )
}
