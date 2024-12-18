import QuickStats from '@/components/dashboard/quickStats'
import ListnerActivity from '@/components/dashboard/listnerActivity'
import PastJammingSessions from '@/components/dashboard/pastJammingSessions'
import CreeateRoom from '@/components/dashboard/createRoom'

export function AdminDashboardComponent() {

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Create Room Card */}
            <CreeateRoom />
           
            {/* Quick Stats Card */}
            <QuickStats />
          </div>

          {/* Listener Activity Chart */}
          <ListnerActivity />

          {/* Past Jamming Sessions Table */}
          <PastJammingSessions />
        </div>
      </main>
    </div>
  )
}