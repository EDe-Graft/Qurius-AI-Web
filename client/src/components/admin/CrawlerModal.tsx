import { Button } from '@/components/ui/button'
import { CrawlerInterface } from '@/components/admin/CrawlerInterface'

interface CrawlerModalProps {
  isOpen: boolean
  onClose: () => void
  companyId: string
  companyName: string
}

export function CrawlerModal({ isOpen, onClose, companyId, companyName }: CrawlerModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Website Crawler - {companyName}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-red-500"
            >
              ✕
            </Button>
          </div>
        </div>
        <div className="p-6">
          <CrawlerInterface
            companyId={companyId}
            companyName={companyName}
          />
        </div>
      </div>
    </div>
  )
} 