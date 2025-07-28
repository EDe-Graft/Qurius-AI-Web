import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FAQ_TEMPLATES, INDUSTRY_DISPLAY_NAMES, type IndustryType } from '@/lib/constants';

interface FAQImportProps {
  onImport: (faqs: Array<{ question: string; answer: string }>) => void;
}

export default function FAQImport({ onImport }: FAQImportProps) {
  const [importType, setImportType] = useState<'json' | 'csv' | 'text' | 'template'>('template');
  const [importData, setImportData] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTemplateSelect = (industry: IndustryType) => {
    const templateFAQs = FAQ_TEMPLATES[industry];
    setImportData(JSON.stringify(templateFAQs, null, 2));
    setImportType('json');
  };

  const handleImport = async () => {
    setLoading(true);
    try {
      let faqs: Array<{ question: string; answer: string }> = [];

      switch (importType) {
        case 'json':
          faqs = JSON.parse(importData);
          break;
        case 'csv':
          // Parse CSV format: "question,answer"
          faqs = importData.split('\n')
            .filter(line => line.trim())
            .map(line => {
              const [question, answer] = line.split(',').map(s => s.trim());
              return { question, answer };
            });
          break;
        case 'text':
          // Simple Q&A format: "Q: question\nA: answer"
          const lines = importData.split('\n');
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('Q:')) {
              const question = lines[i].substring(2).trim();
              const answer = lines[i + 1]?.startsWith('A:') ? lines[i + 1].substring(2).trim() : '';
              if (question && answer) {
                faqs.push({ question, answer });
              }
            }
          }
          break;
        case 'template':
          // Use selected template
          break;
      }

      if (faqs.length > 0) {
        onImport(faqs);
      }
    } catch (error) {
      console.error('Import error:', error);
      alert('Error importing FAQs. Please check your data format.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Import FAQs</h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose how you'd like to add FAQs to your widget
        </p>
      </div>

      {/* Template Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Quick Start Templates</label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {Object.entries(INDUSTRY_DISPLAY_NAMES).map(([key, displayName]) => (
            <Button
              key={key}
              variant="outline"
              size="sm"
              onClick={() => handleTemplateSelect(key as IndustryType)}
            >
              {displayName}
            </Button>
          ))}
        </div>
      </div>

      {/* Import Type Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Import Format</label>
        <div className="flex gap-2">
          <Button
            variant={importType === 'json' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setImportType('json')}
          >
            JSON
          </Button>
          <Button
            variant={importType === 'csv' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setImportType('csv')}
          >
            CSV
          </Button>
          <Button
            variant={importType === 'text' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setImportType('text')}
          >
            Q&A Text
          </Button>
        </div>
      </div>

      {/* Data Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          {importType === 'json' && 'JSON Data'}
          {importType === 'csv' && 'CSV Data (question,answer format)'}
          {importType === 'text' && 'Q&A Text (Q: question\nA: answer format)'}
        </label>
        <Textarea
          value={importData}
          onChange={(e) => setImportData(e.target.value)}
          placeholder={
            importType === 'json' 
              ? '[{"question": "Your question?", "answer": "Your answer"}]'
              : importType === 'csv'
              ? 'What are your hours?,We are open 9am-5pm\nHow do I contact you?,Call us at 555-1234'
              : 'Q: What are your hours?\nA: We are open 9am-5pm\nQ: How do I contact you?\nA: Call us at 555-1234'
          }
          rows={8}
        />
      </div>

      <Button 
        onClick={handleImport} 
        disabled={loading || !importData.trim()}
        className="w-full"
      >
        {loading ? 'Importing...' : 'Import FAQs'}
      </Button>
    </div>
  );
} 