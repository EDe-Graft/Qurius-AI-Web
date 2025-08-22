import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X, Trash2, RotateCcw, RefreshCw, Loader2 } from 'lucide-react';
import { faqService } from '@/services/faqService';

interface FAQEntry {
  id: string;
  question: string;
  answer: string;
  isEdited: boolean;
  originalQuestion: string;
  originalAnswer: string;
  isUpdating: boolean;
}

interface FAQEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyId: string;
  companyName: string;
  onFAQsUpdated?: () => void;
}

export function FAQEditModal({ 
  isOpen, 
  onClose, 
  companyId,
  companyName,
  onFAQsUpdated
}: FAQEditModalProps) {
  const [faqEntries, setFaqEntries] = useState<FAQEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  // Load FAQs when modal opens
  useEffect(() => {
    if (isOpen && companyId) {
      loadFAQs();
    }
  }, [isOpen, companyId]);

  const loadFAQs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const faqs = await faqService.getFAQs(companyId);
      
      const entries = faqs.map((faq) => ({
        id: faq.id || '',
        question: faq.question,
        answer: faq.answer,
        isEdited: false,
        originalQuestion: faq.question,
        originalAnswer: faq.answer,
        isUpdating: false
      }));
      
      setFaqEntries(entries);
    } catch (error) {
      console.error('Error loading FAQs:', error);
      setError('Failed to load FAQs. Please try again.');
    } finally {
      setLoading(false);
    }
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
          question: entry.originalQuestion,
          answer: entry.originalAnswer,
          isEdited: false
        } : entry
      )
    );
  };

  const updateSingleFAQ = async (entry: FAQEntry) => {
    try {
      setFaqEntries(prev => 
        prev.map(e => 
          e.id === entry.id ? { ...e, isUpdating: true } : e
        )
      );

      await faqService.updateFAQ(
        companyId,
        companyName,
        entry.id,
        entry.question,
        entry.answer
      );

      // Update the entry to mark as not edited and update originals
      setFaqEntries(prev => 
        prev.map(e => 
          e.id === entry.id ? {
            ...e,
            isEdited: false,
            originalQuestion: e.question,
            originalAnswer: e.answer,
            isUpdating: false
          } : e
        )
      );

      // Show success feedback
      const successEntry = document.getElementById(`faq-${entry.id}`);
      if (successEntry) {
        successEntry.classList.add('bg-green-50', 'border-green-200');
        setTimeout(() => {
          successEntry.classList.remove('bg-green-50', 'border-green-200');
        }, 2000);
      }
    } catch (error) {
      console.error('Error updating FAQ:', error);
      alert(`Failed to update FAQ: ${error}`);
      
      // Reset updating state
      setFaqEntries(prev => 
        prev.map(e => 
          e.id === entry.id ? { ...e, isUpdating: false } : e
        )
      );
    }
  };

  const updateAllEditedFAQs = async () => {
    const editedEntries = faqEntries.filter(entry => entry.isEdited);
    
    if (editedEntries.length === 0) {
      alert('No FAQs have been edited.');
      return;
    }

    try {
      setSaving(true);
      
      // Update each edited FAQ
      for (const entry of editedEntries) {
        await faqService.updateFAQ(
          companyId,
          companyName,
          entry.id,
          entry.question,
          entry.answer
        );
      }

      // Update all entries to mark as not edited and update originals
      setFaqEntries(prev => 
        prev.map(entry => ({
          ...entry,
          isEdited: false,
          originalQuestion: entry.question,
          originalAnswer: entry.answer,
          isUpdating: false
        }))
      );

      alert(`Successfully updated ${editedEntries.length} FAQ${editedEntries.length !== 1 ? 's' : ''}`);
      
      // Call the callback to refresh parent component
      if (onFAQsUpdated) {
        onFAQsUpdated();
      }
    } catch (error) {
      console.error('Error updating FAQs:', error);
      alert(`Failed to update FAQs: ${error}`);
    } finally {
      setSaving(false);
    }
  };

  const editedCount = faqEntries.filter(entry => entry.isEdited).length;
  const totalCount = faqEntries.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/75 dark:bg-black/75 flex items-start justify-center z-50 p-2 mt-10 sm:p-4 overflow-y-auto" onClick={handleBackdropClick}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-6xl mx-auto my-4 sm:my-8 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                Edit FAQs - {companyName}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                Edit your existing FAQs. Changes will regenerate embeddings for better search accuracy.
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
          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin text-purple-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Loading FAQs...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <X className="h-5 w-5 text-red-500 mr-2" />
                <p className="text-red-700 dark:text-red-300">{error}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={loadFAQs}
                className="mt-2"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
            </div>
          )}

          {/* Content */}
          {!loading && !error && (
            <>
              {/* Summary and Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-sm">
                    <span className="font-medium text-blue-600">{editedCount}</span> of{' '}
                    <span className="font-medium">{totalCount}</span> FAQs edited
                  </div>
                  {editedCount > 0 && (
                    <div className="text-sm text-orange-600">
                      Embeddings will be regenerated
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={loadFAQs}
                    className="text-xs px-2 py-1 h-8"
                  >
                    <RefreshCw className="h-3 w-3 mr-1" />
                    <span className="hidden sm:inline">Refresh</span>
                    <span className="sm:hidden">Reload</span>
                  </Button>
                  {editedCount > 0 && (
                    <Button
                      onClick={updateAllEditedFAQs}
                      disabled={saving}
                      className="bg-blue-600 hover:bg-blue-700 text-xs px-2 py-1 h-8"
                    >
                      {saving ? (
                        <>
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Update All ({editedCount})
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>

              {/* FAQ Entries */}
              <div className="space-y-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
                {faqEntries.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No FAQs found for this company.</p>
                  </div>
                ) : (
                  faqEntries.map((entry, index) => (
                    <div 
                      key={entry.id}
                      id={`faq-${entry.id}`}
                      className={`border rounded-lg p-3 sm:p-4 transition-all ${
                        entry.isEdited 
                          ? 'border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20' 
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
                          {entry.isUpdating && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded flex items-center">
                              <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                              Updating
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => resetFAQ(entry.id)}
                            disabled={!entry.isEdited || entry.isUpdating}
                            className="text-gray-500 hover:text-blue-600 p-1 sm:p-2 h-8 w-8"
                            title="Reset to original"
                          >
                            <RotateCcw className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteFAQ(entry.id)}
                            disabled={entry.isUpdating}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20 p-1 sm:p-2 h-8 w-8"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                          {entry.isEdited && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateSingleFAQ(entry)}
                              disabled={entry.isUpdating}
                              className="text-xs px-2 py-1 h-8 bg-green-600 hover:bg-green-700 text-white"
                            >
                              {entry.isUpdating ? (
                                <>
                                  <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                                  Updating
                                </>
                              ) : (
                                <>
                                  <Check className="h-3 w-3 mr-1" />
                                  Update
                                </>
                              )}
                            </Button>
                          )}
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
                            disabled={entry.isUpdating}
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
                            disabled={entry.isUpdating}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">
                  {editedCount > 0 ? (
                    `${editedCount} FAQ${editedCount !== 1 ? 's' : ''} ready to update`
                  ) : (
                    'No changes made'
                  )}
                </div>
                <div className="flex space-x-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    disabled={saving}
                    className="flex-1 sm:flex-none"
                  >
                    Close
                  </Button>
                  {editedCount > 0 && (
                    <Button
                      onClick={updateAllEditedFAQs}
                      disabled={saving}
                      className="bg-blue-600 hover:bg-blue-700 flex-1 sm:flex-none"
                    >
                      {saving ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        `Update ${editedCount} FAQ${editedCount !== 1 ? 's' : ''}`
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 