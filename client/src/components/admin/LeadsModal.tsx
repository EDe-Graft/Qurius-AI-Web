import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Search, 
  Download, 
  Phone, 
  Mail, 
  User,
  Calendar,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  X,
  Bot,
  MessagesSquare
} from 'lucide-react';
// import { leadService } from '@/services/leadService';
import axios from 'axios';
import { config } from '@/lib/config';

export interface Lead {
  id: string;
  company_id: string;
  company_name: string;
  name?: string;
  email?: string;
  phone?: string;
  conversation_context?: string;
  lead_status: 'new' | 'contacted' | 'converted' | 'lost';
  source_session_id?: string;
  user_question?: string;
  ai_response?: string;
  created_at: string;
  updated_at: string;
  type?: 'lead' | 'support_request';
}

interface LeadsTableProps {
  companyId: string;
  companyName: string;
}

// ─── Conversation Modal ───────────────────────────────────────────────────────

interface ConversationMessage {
  role: 'user' | 'ai';
  content: string;
}

function parseConversationContext(raw: string): ConversationMessage[] {
  const lines = raw.split('\n').filter(l => l.trim());
  const messages: ConversationMessage[] = [];
  let current: ConversationMessage | null = null;

  for (const line of lines) {
    if (line.startsWith('User: ')) {
      if (current) messages.push(current);
      current = { role: 'user', content: line.slice(6).trim() };
    } else if (line.startsWith('AI: ')) {
      if (current) messages.push(current);
      current = { role: 'ai', content: line.slice(4).trim() };
    } else if (current) {
      // continuation line
      current.content += '\n' + line.trim();
    }
  }
  if (current) messages.push(current);
  return messages;
}

interface ConversationModalProps {
  lead: Lead;
  onClose: () => void;
}

function ConversationModal({ lead, onClose }: ConversationModalProps) {
  const messages = lead.conversation_context
    ? parseConversationContext(lead.conversation_context)
    : [];

  const isSupport = lead.type === 'support_request';

  return (
    /* Backdrop — click outside to close */
    <div
      className="fixed inset-0 z-50 flex flex-col justify-end sm:items-center sm:justify-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal panel — bottom sheet on mobile, centered card on sm+ */}
      <div className="bg-white dark:bg-gray-900 w-full sm:max-w-lg sm:rounded-xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh]">

        {/* Drag handle (mobile only) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b dark:border-gray-700">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`flex-shrink-0 p-2 rounded-full ${isSupport ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-purple-100 dark:bg-purple-900/30'}`}>
              <MessagesSquare className={`h-4 w-4 ${isSupport ? 'text-orange-600 dark:text-orange-400' : 'text-purple-600 dark:text-purple-400'}`} />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                {lead.name || lead.email || lead.phone || 'Anonymous'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isSupport ? 'Support Request' : 'Lead'} · {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 ml-3 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Contact chips */}
        <div className="flex flex-wrap gap-2 px-5 py-3 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          {lead.name && (
            <span className="flex items-center gap-1.5 text-xs bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-full px-2.5 py-1 text-gray-700 dark:text-gray-300">
              <User className="h-3 w-3 flex-shrink-0 text-gray-400" />
              <span className="truncate max-w-[140px]">{lead.name}</span>
            </span>
          )}
          {lead.email && (
            <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 text-xs bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-full px-2.5 py-1 text-purple-600 dark:text-purple-400 hover:underline">
              <Mail className="h-3 w-3 flex-shrink-0" />
              <span className="truncate max-w-[160px]">{lead.email}</span>
            </a>
          )}
          {lead.phone && (
            <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 text-xs bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-full px-2.5 py-1 text-purple-600 dark:text-purple-400 hover:underline">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <span>{lead.phone}</span>
            </a>
          )}
        </div>

        {/* Chat bubbles */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-3">
          {messages.length > 0 ? (
            messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'ai' && (
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mt-0.5">
                    <Bot className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                    msg.role === 'user'
                      ? 'bg-purple-600 text-white rounded-br-sm'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mt-0.5">
                    <User className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center text-sm text-gray-400 py-8">No conversation context available.</div>
          )}

          {/* Trigger message (what the user typed when submitting their contact) */}
          {lead.user_question && (
            <div className="mt-2 pt-3 border-t dark:border-gray-700">
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 text-center">Contact submitted with this message</p>
              <div className="flex gap-2 justify-end">
                <div className="max-w-[78%] px-3.5 py-2.5 rounded-2xl rounded-br-sm text-sm bg-purple-600 text-white leading-relaxed break-words">
                  {lead.user_question}
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mt-0.5">
                  <User className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>
          )}

          {/* AI response that triggered the lead */}
          {lead.ai_response && (
            <div className="flex gap-2 justify-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mt-0.5">
                <Bot className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="max-w-[78%] px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap break-words">
                {lead.ai_response}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t dark:border-gray-700 flex justify-end">
          <Button size="sm" variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}

export function LeadsTable({ companyId, companyName }: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [updatingLead, setUpdatingLead] = useState<string | null>(null);
  const [expandedLead, setExpandedLead] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'leads' | 'support_requests'>('leads');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Fetch leads using leadService
  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`${config.backendUrl}/api/leads/${companyId}`);
      setLeads(response.data.leads || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  // Update lead status using leadService
  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      setUpdatingLead(leadId);
      
      const response = await axios.patch(`${config.backendUrl}/api/leads/${leadId}/status`, {
        status: newStatus
      });

      if (response.data.success) {
        // Update local state
        setLeads(prev => prev.map(lead => 
          lead.id === leadId 
            ? { ...lead, lead_status: newStatus as Lead['lead_status'], updated_at: new Date().toISOString() }
            : lead
        ));
      }
    } catch (err) {
      console.error('Error updating lead status:', err);
      setError(err instanceof Error ? err.message : 'Failed to update lead status');
    } finally {
      setUpdatingLead(null);
    }
  };

  // Export leads
  const exportLeads = () => {
    const filteredLeads = getFilteredLeads();
    const csvContent = generateCSV(filteredLeads);

    // Use \uFEFF BOM so Excel opens UTF-8 correctly
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);

    const safeCompanyName = companyName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const tabLabel = activeTab === 'leads' ? 'leads' : 'support_requests';
    const date = new Date().toISOString().split('T')[0];

    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeCompanyName}-${tabLabel}-${date}.csv`;

    // Must be in DOM for Firefox compatibility
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke after a tick so the download has time to start
    setTimeout(() => window.URL.revokeObjectURL(url), 100);
  };

  // Generate CSV content
  const generateCSV = (leads: Lead[]) => {
    const headers = [
      'Type',
      'Name',
      'Email',
      'Phone',
      'Status',
      'Last Message',
      'AI Response',
      'Conversation Context',
      'Created At',
      'Updated At'
    ];

    const rows = leads.map(lead => [
      lead.type === 'support_request' ? 'Support Request' : 'Lead',
      lead.name || '',
      lead.email || '',
      lead.phone || '',
      lead.lead_status,
      lead.user_question || '',
      lead.ai_response || '',
      lead.conversation_context || '',
      new Date(lead.created_at).toLocaleString(),
      new Date(lead.updated_at).toLocaleString()
    ]);

    return [headers, ...rows].map(row => 
      row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',')
    ).join('\n');
  };

  // Filter leads
  const getFilteredLeads = () => {
    return leads.filter(lead => {
      // Filter by active tab (type)
      const matchesTab = activeTab === 'leads'
        ? !lead.type || lead.type === 'lead'
        : lead.type === 'support_request';

      const matchesSearch = searchTerm === '' || 
        (lead.name && lead.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (lead.phone && lead.phone.includes(searchTerm)) ||
        (lead.user_question && lead.user_question.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === 'all' || lead.lead_status === statusFilter;
      
      return matchesTab && matchesSearch && matchesStatus;
    });
  };

  const leadsCount = leads.filter(l => !l.type || l.type === 'lead').length;
  const supportRequestsCount = leads.filter(l => l.type === 'support_request').length;

  // Get status badge color
  // const getStatusBadgeColor = (status: string) => {
  //   switch (status) {
  //     case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
  //     case 'contacted': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
  //     case 'converted': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
  //     case 'lost': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  //     default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  //   }
  // };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Toggle lead expansion
  const toggleLeadExpansion = (leadId: string) => {
    setExpandedLead(expandedLead === leadId ? null : leadId);
  };

  useEffect(() => {
    fetchLeads();
  }, [companyId]);

  const filteredLeads = getFilteredLeads();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Leads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <span className="ml-2">Loading leads...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
    {selectedLead && (
      <ConversationModal lead={selectedLead} onClose={() => setSelectedLead(null)} />
    )}
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            {activeTab === 'leads' ? `Leads (${leadsCount})` : `Support Requests (${supportRequestsCount})`}
          </CardTitle>
          <Button onClick={exportLeads} variant="outline" size="sm" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
        {/* Tabs */}
        <div className="flex gap-1 mt-3 border-b">
          <button
            onClick={() => { setActiveTab('leads'); setSearchTerm(''); setStatusFilter('all'); }}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'leads'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Leads
            {leadsCount > 0 && (
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                activeTab === 'leads' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {leadsCount}
              </span>
            )}
          </button>
          <button
            onClick={() => { setActiveTab('support_requests'); setSearchTerm(''); setStatusFilter('all'); }}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'support_requests'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Support Requests
            {supportRequestsCount > 0 && (
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                activeTab === 'support_requests' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {supportRequestsCount}
              </span>
            )}
          </button>
        </div>
      </CardHeader>
      
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
            {error}
          </div>
        )}

        {/* Filters - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Leads Display - Mobile Optimized */}
        {filteredLeads.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {activeTab === 'leads'
              ? (leadsCount === 0 ? 'No leads found yet.' : 'No leads match your search criteria.')
              : (supportRequestsCount === 0 ? 'No support requests yet.' : 'No support requests match your search criteria.')
            }
          </div>
        ) : (
          <div className="space-y-4">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact Info</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Question</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>
                        <div className="space-y-1">
                          {lead.name && (
                            <div className="flex items-center gap-2 text-sm">
                              <User className="h-3 w-3 text-gray-400" />
                              <span className="font-medium">{lead.name}</span>
                            </div>
                          )}
                          {lead.email && (
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="h-3 w-3 text-gray-400" />
                              <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                                {lead.email}
                              </a>
                            </div>
                          )}
                          {lead.phone && (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-3 w-3 text-gray-400" />
                              <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                                {lead.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={lead.lead_status}
                          onValueChange={(value) => updateLeadStatus(lead.id, value)}
                          disabled={updatingLead === lead.id}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="converted">Converted</SelectItem>
                            <SelectItem value="lost">Lost</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs space-y-1.5">
                          <div className="text-sm text-gray-700 dark:text-gray-300 truncate">
                            {lead.user_question || <span className="text-gray-400">N/A</span>}
                          </div>
                          {(lead.conversation_context || lead.ai_response) && (
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:underline"
                            >
                              <MessagesSquare className="h-3 w-3" />
                              View conversation
                            </button>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-gray-400" />
                            {formatDate(lead.created_at)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {lead.email && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={`mailto:${lead.email}`}>
                                <Mail className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                          {lead.phone && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={`tel:${lead.phone}`}>
                                <Phone className="h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {filteredLeads.map((lead) => (
                <Card key={lead.id} className="p-4">
                  <div className="space-y-3">
                    {/* Header with expand/collapse */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{lead.name || 'Unknown'}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLeadExpansion(lead.id)}
                      >
                        {expandedLead === lead.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      {lead.email && (
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                            {lead.email}
                          </a>
                        </div>
                      )}
                      {lead.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-3 w-3 text-gray-400" />
                          <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                            {lead.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Status:</span>
                      <Select
                        value={lead.lead_status}
                        onValueChange={(value) => updateLeadStatus(lead.id, value)}
                        disabled={updatingLead === lead.id}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="converted">Converted</SelectItem>
                          <SelectItem value="lost">Lost</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-3 w-3" />
                      {formatDate(lead.created_at)}
                    </div>

                    {/* Expanded Content */}
                    {expandedLead === lead.id && (
                      <div className="space-y-3 pt-3 border-t">
                        {/* Question */}
                        <div>
                          <div className="text-sm font-medium mb-1">Last message:</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {lead.user_question || 'N/A'}
                          </div>
                        </div>

                        {/* Conversation Context */}
                        {(lead.conversation_context || lead.ai_response) && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
                            onClick={() => setSelectedLead(lead)}
                          >
                            <MessagesSquare className="h-3.5 w-3.5 mr-1.5" />
                            View Full Conversation
                          </Button>
                        )}

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          {lead.email && (
                            <Button size="sm" variant="outline" asChild className="flex-1">
                              <a href={`mailto:${lead.email}`}>
                                <Mail className="h-3 w-3 mr-1" />
                                Email
                              </a>
                            </Button>
                          )}
                          {lead.phone && (
                            <Button size="sm" variant="outline" asChild className="flex-1">
                              <a href={`tel:${lead.phone}`}>
                                <Phone className="h-3 w-3 mr-1" />
                                Call
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
    </>
  );
} 