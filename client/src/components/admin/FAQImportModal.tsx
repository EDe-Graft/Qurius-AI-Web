import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FAQ_TEMPLATES, INDUSTRY_DISPLAY_NAMES, type IndustryType } from '@/lib/constants';
import { Plus, Trash2, FileText, RefreshCw } from 'lucide-react';

interface FAQImportProps {
  onImport: (faqs: Array<{ question: string; answer: string }>) => Promise<void>;
}

interface FAQEntry {
  id: string;
  question: string;
  answer: string;
}

export default function FAQImportModal({ onImport }: FAQImportProps) {
  const [faqEntries, setFaqEntries] = useState<FAQEntry[]>([
    { id: '1', question: '', answer: '' }
  ]);
  const [loading, setLoading] = useState(false);

  // Debug loading state
  console.log('🔄 FAQImportModal render - loading state:', loading);

  const handleTemplateSelect = (industry: IndustryType) => {
    const templateFAQs = FAQ_TEMPLATES[industry];
    const templateEntries = templateFAQs.map((faq, index) => ({
      id: `template-${index + 1}`,
      question: faq.question,
      answer: faq.answer
    }));
    setFaqEntries(templateEntries);
  };

  const addNewFAQ = () => {
    const newId = `faq-${Date.now()}`;
    setFaqEntries(prev => [...prev, { id: newId, question: '', answer: '' }]);
  };

  const removeFAQ = (id: string) => {
    if (faqEntries.length > 1) {
      setFaqEntries(prev => prev.filter(entry => entry.id !== id));
    }
  };

  const updateFAQ = (id: string, field: 'question' | 'answer', value: string) => {
    setFaqEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const validateQuestion = (question: string): string => {
    let cleanQuestion = question.trim();
    
    // Ensure question ends with ?
    if (cleanQuestion && !cleanQuestion.endsWith('?')) {
      cleanQuestion += '?';
    }
    
    return cleanQuestion;
  };

  const handleImport = async () => {
    console.log('🚀 Starting import process...');
    setLoading(true);
    console.log('✅ Loading state set to true');
    
    try {
      // Filter out empty entries and validate questions
      const validFAQs = faqEntries
        .filter(entry => entry.question.trim() && entry.answer.trim())
        .map(entry => ({
          question: validateQuestion(entry.question),
          answer: entry.answer.trim()
        }));

      if (validFAQs.length === 0) {
        alert('Please add at least one FAQ with both question and answer.');
        setLoading(false); // Reset loading state before returning
        return;
      }

      console.log('📤 Calling parent onImport with', validFAQs.length, 'FAQs');
      // Wait for the parent's import operation to complete
      await onImport(validFAQs);
      console.log('✅ Parent import completed successfully');
    } catch (error) {
      console.error('❌ Import error:', error);
      alert('Error importing FAQs. Please try again.');
    } finally {
      console.log('🔄 Setting loading to false');
      setLoading(false);
    }
  };

  const clearAll = () => {
    setFaqEntries([{ id: '1', question: '', answer: '' }]);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-2">Add FAQs</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          Add questions and answers for your AI chat widget. Questions will automatically end with a question mark.
        </p>
      </div>

      {/* Template Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Quick Start Templates</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {Object.entries(INDUSTRY_DISPLAY_NAMES).map(([key, displayName]) => (
            <Button
              key={key}
              variant="outline"
              size="sm"
              onClick={() => handleTemplateSelect(key as IndustryType)}
              className="text-xs px-2 py-1 h-8"
            >
              {displayName}
            </Button>
          ))}
        </div>
      </div>

      {/* FAQ Entries */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <label className="text-sm font-medium">FAQ Entries</label>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={clearAll}
              className="text-xs px-2 py-1 h-8"
            >
              Clear All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={addNewFAQ}
              className="text-xs px-2 py-1 h-8"
            >
              <Plus className="h-3 w-3 mr-1" />
              Add FAQ
            </Button>
          </div>
        </div>

        {faqEntries.map((entry, index) => (
          <div key={entry.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                FAQ #{index + 1}
              </span>
              {faqEntries.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFAQ(entry.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20 p-1 sm:p-2 h-8 w-8"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Question *
                </label>
                <Input
                  value={entry.question}
                  onChange={(e) => updateFAQ(entry.id, 'question', e.target.value)}
                  placeholder="What are your business hours?"
                  className="w-full text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Will automatically add "?" if missing
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Answer *
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

            {/* Add Another FAQ Button */}
            {index === faqEntries.length - 1 && (
              <Button
                variant="outline"
                size="sm"
                onClick={addNewFAQ}
                className="w-full mt-3"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Another FAQ
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4">
        <div className="flex items-center space-x-2 mb-2">
          <FileText className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Summary
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {faqEntries.filter(entry => entry.question.trim() && entry.answer.trim()).length} of {faqEntries.length} FAQs ready to import
        </p>
      </div>

      {/* Import Button */}
      <Button 
        onClick={handleImport} 
        disabled={loading || faqEntries.filter(entry => entry.question.trim() && entry.answer.trim()).length === 0}
        className="w-full"
      >
        {loading ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Importing...
          </>
        ) : (
          `Import ${faqEntries.filter(entry => entry.question.trim() && entry.answer.trim()).length} FAQs`
        )}
      </Button>
    </div>
  );
} 