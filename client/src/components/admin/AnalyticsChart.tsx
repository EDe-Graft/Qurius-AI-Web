
interface ChartData {
  name: string
  value: number
  [key: string]: any
}

interface AnalyticsChartProps {
  data: ChartData[]
  type: 'bar' | 'line' | 'pie'
  title: string
  color?: string
  height?: number
}

export function AnalyticsChart({ 
  data, 
  type, 
  title, 
  color = '#3B82F6',
  height = 300 
}: AnalyticsChartProps) {
  const renderBarChart = () => {
    // Filter out zero values for better visualization
    const filteredData = data.filter(item => item.value > 0)
    
    // If no data or all values are zero, show empty state
    if (filteredData.length === 0) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          No data available
        </div>
      )
    }
    
    const maxValue = Math.max(...filteredData.map(d => d.value))
    
    return (
      <div className="space-y-2">
        {filteredData.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-24 text-sm text-gray-600 dark:text-gray-400 truncate">
              {item.name}
            </div>
            <div className="flex-1">
              <div className="relative">
                <div 
                  className="h-6 rounded bg-gray-200 dark:bg-gray-700"
                  style={{ width: `${(item.value / maxValue) * 100}%`, backgroundColor: color }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                  {item.value}
                </span>
              </div>
            </div>
          </div>
        ))}
        {/* Show count of zero values if any */}
        {data.length > filteredData.length && (
          <div className="text-xs text-gray-400 dark:text-gray-500 pt-2 border-t border-gray-200 dark:border-gray-600">
            {data.length - filteredData.length} item(s) with 0% not shown
          </div>
        )}
      </div>
    )
  }

  const renderLineChart = () => {
    // Filter out zero values for better visualization
    const filteredData = data.filter(item => item.value > 0)
    
    // If no data or all values are zero, show empty state
    if (filteredData.length === 0) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          No data available
        </div>
      )
    }
    
    const maxValue = Math.max(...filteredData.map(d => d.value))
    
    return (
      <div className="relative" style={{ height }}>
        <svg className="w-full h-full" viewBox={`0 0 ${filteredData.length * 60} ${height}`}>
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={filteredData.map((item, index) => 
              `${index * 60 + 30},${height - (item.value / maxValue) * (height - 40) - 20}`
            ).join(' ')}
          />
          {filteredData.map((item, index) => (
            <circle
              key={index}
              cx={index * 60 + 30}
              cy={height - (item.value / maxValue) * (height - 40) - 20}
              r="4"
              fill={color}
            />
          ))}
        </svg>
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
          {filteredData.map((item, index) => (
            <span key={index} className="text-center truncate px-1">
              {item.name}
            </span>
          ))}
        </div>
        {/* Show count of zero values if any */}
        {data.length > filteredData.length && (
          <div className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
            {data.length - filteredData.length} item(s) with 0% not shown
          </div>
        )}
      </div>
    )
  }

  const renderPieChart = () => {
    // Filter out zero values to prevent overlap issues
    const filteredData = data.filter(item => item.value > 0)
    const total = filteredData.reduce((sum, item) => sum + item.value, 0)
    
    // If no data or all values are zero, show empty state
    if (filteredData.length === 0) {
      return (
        <div className="flex items-center justify-center h-32 text-gray-500 dark:text-gray-400">
          No data available
        </div>
      )
    }
    
    let currentAngle = 0
    
    return (
      <div className="flex items-center space-x-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {filteredData.map((item, index) => {
              const percentage = (item.value / total) * 100
              const angle = (percentage / 100) * 360
              const x1 = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180)
              const y1 = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180)
              const x2 = 50 + 40 * Math.cos(((currentAngle + angle) * Math.PI) / 180)
              const y2 = 50 + 40 * Math.sin(((currentAngle + angle) * Math.PI) / 180)
              
              const largeArcFlag = angle > 180 ? 1 : 0
              
              const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899']
              const currentColor = colors[index % colors.length]
              
              currentAngle += angle
              
              return (
                <path
                  key={index}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={currentColor}
                />
              )
            })}
          </svg>
        </div>
        <div className="space-y-2 min-w-0 flex-1">
          {filteredData.map((item, index) => {
            const percentage = ((item.value / total) * 100).toFixed(1)
            const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899']
            const currentColor = colors[index % colors.length]
            
            return (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: currentColor }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {item.name}: {percentage}%
                </span>
              </div>
            )
          })}
          {/* Show count of zero values if any */}
          {data.length > filteredData.length && (
            <div className="text-xs text-gray-400 dark:text-gray-500 pt-1 border-t border-gray-200 dark:border-gray-600">
              {data.length - filteredData.length} item(s) with 0% not shown
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return renderBarChart()
      case 'line':
        return renderLineChart()
      case 'pie':
        return renderPieChart()
      default:
        return null
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <div style={{ height }}>
        {renderChart()}
      </div>
    </div>
  )
} 