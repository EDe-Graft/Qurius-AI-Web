import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
// import { Progress } from '@/components/ui/progress'
import { 
  Calendar, 
//   Clock, 
  Play, 
  Pause, 
  RefreshCw, 
  Settings, 
  BarChart3, 
  Activity,
  AlertCircle,
  CheckCircle,
  XCircle,
  Plus,
  Trash2,
  Edit
} from 'lucide-react'

interface CrawlSchedule {
  id: string
  company_id: string
  base_url: string
  frequency: 'daily' | 'weekly' | 'monthly'
  max_pages: number
  max_depth: number
  delay_ms: number
  change_threshold: number
  is_active: boolean
  next_crawl: string
  created_at: string
  companies: {
    id: string
    name: string
    email: string
  }
}

interface AutomationAnalytics {
  id: string
  company_id: string
  crawl_session_id: string
  trigger_type: string
  content_changes_detected: number
  new_faqs_generated: number
  execution_time_ms: number
  error_message: string
  created_at: string
  companies: {
    name: string
  }
}

interface SchedulerStatus {
  isRunning: boolean
  activeCrawls: number
  maxConcurrentCrawls: number
  checkIntervalMinutes: number
  batchSize: number
}

interface DashboardData {
  scheduler: SchedulerStatus
  recentAnalytics: AutomationAnalytics[]
  activeSchedules: number
  companiesDueForCrawling: any[]
  summary: {
    totalExecutions: number
    successfulExecutions: number
    failedExecutions: number
  }
}

const AutomationManager: React.FC = () => {
  const [schedules, setSchedules] = useState<CrawlSchedule[]>([])
  const [analytics, setAnalytics] = useState<AutomationAnalytics[]>([])
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [schedulerStatus, setSchedulerStatus] = useState<SchedulerStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingSchedule, setEditingSchedule] = useState<CrawlSchedule | null>(null)

  // Form state for creating/editing schedules
  const [formData, setFormData] = useState({
    company_id: '',
    base_url: '',
    frequency: 'weekly' as const,
    max_pages: 25,
    max_depth: 1,
    delay_ms: 1000,
    change_threshold: 0.1,
    is_active: true
  })

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const [schedulesRes, analyticsRes, dashboardRes, statusRes] = await Promise.all([
        fetch('/api/automation/schedules'),
        fetch('/api/automation/analytics'),
        fetch('/api/automation/dashboard'),
        fetch('/api/automation/status')
      ])

      if (schedulesRes.ok) {
        const schedulesData = await schedulesRes.json()
        setSchedules(schedulesData.schedules || [])
      }

      if (analyticsRes.ok) {
        const analyticsData = await analyticsRes.json()
        setAnalytics(analyticsData.analytics || [])
      }

      if (dashboardRes.ok) {
        const dashboardData = await dashboardRes.json()
        setDashboardData(dashboardData)
      }

      if (statusRes.ok) {
        const statusData = await statusRes.json()
        setSchedulerStatus(statusData)
      }

    } catch (err) {
      setError('Failed to fetch automation data')
      console.error('Error fetching automation data:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSchedulerControl = async (action: 'start' | 'stop') => {
    try {
      const response = await fetch('/api/automation/scheduler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      })

      if (response.ok) {
        await fetchData()
      } else {
        setError(`Failed to ${action} scheduler`)
      }
    } catch (err) {
      setError(`Failed to ${action} scheduler`)
    }
  }

  const handleCreateSchedule = async () => {
    try {
      const response = await fetch('/api/automation/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowCreateModal(false)
        setFormData({
          company_id: '',
          base_url: '',
          frequency: 'weekly',
          max_pages: 25,
          max_depth: 1,
          delay_ms: 1000,
          change_threshold: 0.1,
          is_active: true
        })
        await fetchData()
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to create schedule')
      }
    } catch (err) {
      setError('Failed to create schedule')
    }
  }

  const handleUpdateSchedule = async (id: string, updates: Partial<CrawlSchedule>) => {
    try {
      const response = await fetch(`/api/automation/schedules/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      })

      if (response.ok) {
        setEditingSchedule(null)
        await fetchData()
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to update schedule')
      }
    } catch (err) {
      setError('Failed to update schedule')
    }
  }

  const handleDeleteSchedule = async (id: string) => {
    if (!confirm('Are you sure you want to delete this schedule?')) return

    try {
      const response = await fetch(`/api/automation/schedules/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        await fetchData()
      } else {
        setError('Failed to delete schedule')
      }
    } catch (err) {
      setError('Failed to delete schedule')
    }
  }

  const handleManualTrigger = async (companyId: string) => {
    try {
      const response = await fetch(`/api/automation/trigger/${companyId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force: false })
      })

      if (response.ok) {
        await fetchData()
      } else {
        setError('Failed to trigger manual crawl')
      }
    } catch (err) {
      setError('Failed to trigger manual crawl')
    }
  }

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'daily': return 'bg-red-100 text-red-800'
      case 'weekly': return 'bg-blue-100 text-blue-800'
      case 'monthly': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (isActive: boolean) => {
    return isActive ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <XCircle className="h-4 w-4 text-red-600" />
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduler Status</CardTitle>
            {schedulerStatus?.isRunning ? (
              <Activity className="h-4 w-4 text-green-600" />
            ) : (
              <Pause className="h-4 w-4 text-red-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {schedulerStatus?.isRunning ? 'Running' : 'Stopped'}
            </div>
            <p className="text-xs text-muted-foreground">
              {schedulerStatus?.activeCrawls || 0} active crawls
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Schedules</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData?.activeSchedules || 0}</div>
            <p className="text-xs text-muted-foreground">
              {dashboardData?.companiesDueForCrawling?.length || 0} due for crawling
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Executions</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData?.summary?.totalExecutions || 0}</div>
            <p className="text-xs text-muted-foreground">
              {dashboardData?.summary?.successfulExecutions || 0} successful
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardData?.summary?.totalExecutions 
                ? Math.round((dashboardData.summary.successfulExecutions / dashboardData.summary.totalExecutions) * 100)
                : 0}%
            </div>
            <p className="text-xs text-muted-foreground">
              {dashboardData?.summary?.failedExecutions || 0} failed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Scheduler Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Scheduler Controls
          </CardTitle>
          <CardDescription>
            Control the automation scheduler and monitor its status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium">Scheduler Status</p>
              <p className="text-sm text-muted-foreground">
                {schedulerStatus?.isRunning ? 'Running' : 'Stopped'} - 
                Checking every {schedulerStatus?.checkIntervalMinutes || 5} minutes
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleSchedulerControl('start')}
                disabled={schedulerStatus?.isRunning}
                size="sm"
              >
                <Play className="h-4 w-4 mr-2" />
                Start
              </Button>
              <Button
                onClick={() => handleSchedulerControl('stop')}
                disabled={!schedulerStatus?.isRunning}
                variant="outline"
                size="sm"
              >
                <Pause className="h-4 w-4 mr-2" />
                Stop
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-medium">Active Crawls</p>
              <p className="text-muted-foreground">
                {schedulerStatus?.activeCrawls || 0} / {schedulerStatus?.maxConcurrentCrawls || 3}
              </p>
            </div>
            <div>
              <p className="font-medium">Batch Size</p>
              <p className="text-muted-foreground">{schedulerStatus?.batchSize || 10}</p>
            </div>
            <div>
              <p className="font-medium">Check Interval</p>
              <p className="text-muted-foreground">{schedulerStatus?.checkIntervalMinutes || 5} min</p>
            </div>
            <div>
              <p className="font-medium">Companies Due</p>
              <p className="text-muted-foreground">{dashboardData?.companiesDueForCrawling?.length || 0}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="schedules" className="space-y-4">
        <TabsList>
          <TabsTrigger value="schedules">Crawl Schedules</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="schedules" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Crawl Schedules</h3>
            <Button onClick={() => setShowCreateModal(true)} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Schedule
            </Button>
          </div>

          <div className="grid gap-4">
            {schedules.map((schedule) => (
              <Card key={schedule.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{schedule.companies?.name}</h4>
                        {getStatusIcon(schedule.is_active)}
                        <Badge className={getFrequencyColor(schedule.frequency)}>
                          {schedule.frequency}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {schedule.base_url}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Next: {new Date(schedule.next_crawl).toLocaleDateString()}</span>
                        <span>Max pages: {schedule.max_pages}</span>
                        <span>Threshold: {Math.round(schedule.change_threshold * 100)}%</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleManualTrigger(schedule.company_id)}
                        size="sm"
                        variant="outline"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => setEditingSchedule(schedule)}
                        size="sm"
                        variant="outline"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => handleDeleteSchedule(schedule.id)}
                        size="sm"
                        variant="outline"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <h3 className="text-lg font-medium">Automation Analytics</h3>
          <div className="grid gap-4">
            {analytics.slice(0, 10).map((analytic) => (
              <Card key={analytic.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{analytic.companies?.name}</h4>
                        <Badge variant={analytic.error_message ? "destructive" : "default"}>
                          {analytic.trigger_type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{new Date(analytic.created_at).toLocaleString()}</span>
                        <span>Changes: {analytic.content_changes_detected}</span>
                        <span>New FAQs: {analytic.new_faqs_generated}</span>
                        <span>Time: {Math.round(analytic.execution_time_ms / 1000)}s</span>
                      </div>
                      {analytic.error_message && (
                        <p className="text-sm text-red-600 mt-2">{analytic.error_message}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <div className="grid gap-4">
            {dashboardData?.recentAnalytics?.slice(0, 10).map((analytic) => (
              <Card key={analytic.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{analytic.companies?.name}</h4>
                        <Badge variant={analytic.error_message ? "destructive" : "default"}>
                          {analytic.trigger_type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{new Date(analytic.created_at).toLocaleString()}</span>
                        <span>Changes: {analytic.content_changes_detected}</span>
                        <span>New FAQs: {analytic.new_faqs_generated}</span>
                        <span>Time: {Math.round(analytic.execution_time_ms / 1000)}s</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Create/Edit Schedule Modal */}
      {(showCreateModal || editingSchedule) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>
                {editingSchedule ? 'Edit Schedule' : 'Create Schedule'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="company_id">Company ID</Label>
                <Input
                  id="company_id"
                  value={formData.company_id}
                  onChange={(e) => setFormData({ ...formData, company_id: e.target.value })}
                  placeholder="Enter company ID"
                />
              </div>
              <div>
                <Label htmlFor="base_url">Base URL</Label>
                <Input
                  id="base_url"
                  value={formData.base_url}
                  onChange={(e) => setFormData({ ...formData, base_url: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <Label htmlFor="frequency">Frequency</Label>
                <Select
                  value={formData.frequency}
                  onValueChange={(value) => setFormData({ ...formData, frequency: value as any })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="max_pages">Max Pages</Label>
                  <Input
                    id="max_pages"
                    type="number"
                    value={formData.max_pages}
                    onChange={(e) => setFormData({ ...formData, max_pages: parseInt(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="change_threshold">Change Threshold (%)</Label>
                  <Input
                    id="change_threshold"
                    type="number"
                    step="0.1"
                    value={formData.change_threshold * 100}
                    onChange={(e) => setFormData({ ...formData, change_threshold: parseFloat(e.target.value) / 100 })}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                />
                <Label htmlFor="is_active">Active</Label>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={editingSchedule ? () => handleUpdateSchedule(editingSchedule.id, formData) : handleCreateSchedule}
                  className="flex-1"
                >
                  {editingSchedule ? 'Update' : 'Create'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowCreateModal(false)
                    setEditingSchedule(null)
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default AutomationManager 