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
  ChevronUp
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
}

interface LeadsTableProps {
  companyId: string;
  companyName: string;
}

export function LeadsTable({ companyId, companyName }: LeadsTableProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [updatingLead, setUpdatingLead] = useState<string | null>(null);
  const [expandedLead, setExpandedLead] = useState<string | null>(null);

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
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${companyName}-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Generate CSV content
  const generateCSV = (leads: Lead[]) => {
    const headers = [
      'Name',
      'Email',
      'Phone',
      'Status',
      'Question',
      'AI Response',
      'Created At',
      'Updated At'
    ];

    const rows = leads.map(lead => [
      lead.name || '',
      lead.email || '',
      lead.phone || '',
      lead.lead_status,
      lead.user_question || '',
      lead.ai_response || '',
      new Date(lead.created_at).toLocaleString(),
      new Date(lead.updated_at).toLocaleString()
    ]);

    return [headers, ...rows].map(row => 
      row.map(field => `"${field.replace(/"/g, '""')}"`).join(',')
    ).join('\n');
  };

  // Filter leads
  const getFilteredLeads = () => {
    return leads.filter(lead => {
      const matchesSearch = searchTerm === '' || 
        (lead.name && lead.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (lead.phone && lead.phone.includes(searchTerm)) ||
        (lead.user_question && lead.user_question.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = statusFilter === 'all' || lead.lead_status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  };

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
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2">Loading leads...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Leads ({filteredLeads.length})
          </CardTitle>
          <Button onClick={exportLeads} variant="outline" size="sm" className="w-full sm:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
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
            {leads.length === 0 ? 'No leads found for this company.' : 'No leads match your search criteria.'}
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
                        <div className="max-w-xs">
                          <div className="text-sm font-medium mb-1">User Question:</div>
                          <div className="text-sm text-gray-600 truncate">
                            {lead.user_question || 'N/A'}
                          </div>
                          {lead.conversation_context && (
                            <details className="mt-2">
                              <summary className="text-xs text-blue-600 cursor-pointer hover:underline">
                                View conversation context
                              </summary>
                              <div className="mt-1 text-xs text-gray-500 whitespace-pre-wrap max-h-20 overflow-y-auto">
                                {lead.conversation_context}
                              </div>
                            </details>
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
                          <div className="text-sm font-medium mb-1">User Question:</div>
                          <div className="text-sm text-gray-600">
                            {lead.user_question || 'N/A'}
                          </div>
                        </div>

                        {/* Conversation Context */}
                        {lead.conversation_context && (
                          <div>
                            <div className="text-sm font-medium mb-1">Conversation Context:</div>
                            <div className="text-sm text-gray-600 whitespace-pre-wrap max-h-32 overflow-y-auto">
                              {lead.conversation_context}
                            </div>
                          </div>
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
  );
} 