import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X, Trash2, RotateCcw } from 'lucide-react';

interface FAQEntry {
  id: string;
  question: string;
  answer: string;
  isApproved: boolean;
  isEdited: boolean;
  originalQuestion?: string;
  originalAnswer?: string;
}

interface FAQPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  generatedFAQs: Array<{ question: string; answer: string }>;
  onSaveApproved: (approvedFAQs: Array<{ question: string; answer: string }>) => void;
  companyName: string;
  isLoading?: boolean;
}

export function FAQPreviewModal({ 
  isOpen, 
  onClose, 
  generatedFAQs, 
  onSaveApproved, 
  companyName,
//   isLoading = false 
}: FAQPreviewModalProps) {
  const [faqEntries, setFaqEntries] = useState<FAQEntry[]>([]);
  const [saving, setSaving] = useState(false);

  // Handle click outside modal to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Initialize FAQ entries when modal opens
  useEffect(() => {
    if (isOpen && generatedFAQs.length > 0) {
      const entries = generatedFAQs.map((faq, index) => ({
        id: `faq-${index}`,
        question: faq.question,
        answer: faq.answer,
        isApproved: true, // Default to approved
        isEdited: false,
        originalQuestion: faq.question,
        originalAnswer: faq.answer
      }));
      setFaqEntries(entries);
    }
  }, [isOpen, generatedFAQs]);

  const toggleApproval = (id: string) => {
    setFaqEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { ...entry, isApproved: !entry.isApproved } : entry
      )
    );
  };

  const updateFAQ = (id: string, field: 'question' | 'answer', value: string) => {
    setFaqEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { 
          ...entry, 
          [field]: value,
          isEdited: true 
        } : entry
      )
    );
  };

  const deleteFAQ = (id: string) => {
    setFaqEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const resetFAQ = (id: string) => {
    setFaqEntries(prev => 
      prev.map(entry => 
        entry.id === id ? {
          ...entry,
          question: entry.originalQuestion || entry.question,
          answer: entry.originalAnswer || entry.answer,
          isEdited: false
        } : entry
      )
    );
  };

  const approveAll = () => {
    setFaqEntries(prev => prev.map(entry => ({ ...entry, isApproved: true })));
  };

  const rejectAll = () => {
    setFaqEntries(prev => prev.map(entry => ({ ...entry, isApproved: false })));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const approvedFAQs = faqEntries
        .filter(entry => entry.isApproved)
        .map(entry => ({
          question: entry.question,
          answer: entry.answer
        }));

      await onSaveApproved(approvedFAQs);
      onClose();
    } catch (error) {
      console.error('Error saving FAQs:', error);
    } finally {
      setSaving(false);
    }
  };

  const approvedCount = faqEntries.filter(entry => entry.isApproved).length;
  const totalCount = faqEntries.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-50 p-2 mt-10 sm:p-4 overflow-y-auto" onClick={handleBackdropClick}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-6xl mx-auto my-4 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                Review AI-Generated FAQs - {companyName}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                Review and edit the AI-generated FAQs before saving them to your knowledge base
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-red-500 flex-shrink-0"
            >
              ✕
            </Button>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          {/* Summary and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="font-medium text-green-600">{approvedCount}</span> of{' '}
                <span className="font-medium">{totalCount}</span> FAQs approved
              </div>
              <div className="text-sm text-gray-500">
                {faqEntries.filter(entry => entry.isEdited).length} edited
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={approveAll}
                className="text-xs px-2 py-1 h-8"
              >
                <Check className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">Approve All</span>
                <span className="sm:hidden">All</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={rejectAll}
                className="text-xs px-2 py-1 h-8"
              >
                <X className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">Reject All</span>
                <span className="sm:hidden">None</span>
              </Button>
            </div>
          </div>

          {/* FAQ Entries */}
          <div className="space-y-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
            {faqEntries.map((entry, index) => (
              <div 
                key={entry.id} 
                className={`border rounded-lg p-3 sm:p-4 transition-all ${
                  entry.isApproved 
                    ? 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20' 
                    : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      FAQ #{index + 1}
                    </span>
                    {entry.isEdited && (
                      <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                        Edited
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => resetFAQ(entry.id)}
                      disabled={!entry.isEdited}
                      className="text-gray-500 hover:text-blue-600 p-1 sm:p-2 h-8 w-8"
                      title="Reset to original"
                    >
                      <RotateCcw className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteFAQ(entry.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20 p-1 sm:p-2 h-8 w-8"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                    <Button
                      variant={entry.isApproved ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleApproval(entry.id)}
                      className={`text-xs px-2 py-1 h-8 ${
                        entry.isApproved 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'text-gray-600'
                      }`}
                    >
                      {entry.isApproved ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          <span className="hidden sm:inline">Approved</span>
                          <span className="sm:hidden">✓</span>
                        </>
                      ) : (
                        <>
                          <X className="h-3 w-3 mr-1" />
                          <span className="hidden sm:inline">Rejected</span>
                          <span className="sm:hidden">✗</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Question
                    </label>
                    <Input
                      value={entry.question}
                      onChange={(e) => updateFAQ(entry.id, 'question', e.target.value)}
                      placeholder="What are your business hours?"
                      className="w-full text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Answer
                    </label>
                    <Textarea
                      value={entry.answer}
                      onChange={(e) => updateFAQ(entry.id, 'answer', e.target.value)}
                      placeholder="We are open Monday-Friday, 9am-5pm"
                      rows={3}
                      className="w-full text-sm resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
              {approvedCount > 0 ? (
                `${approvedCount} FAQ${approvedCount !== 1 ? 's' : ''} will be saved`
              ) : (
                'No FAQs selected for saving'
              )}
            </div>
            <div className="flex space-x-3 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={onClose}
                disabled={saving}
                className="flex-1 sm:flex-none"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                disabled={saving || approvedCount === 0}
                className="bg-green-600 hover:bg-green-700 flex-1 sm:flex-none"
              >
                {saving ? 'Saving...' : `Save ${approvedCount} FAQ${approvedCount !== 1 ? 's' : ''}`}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 