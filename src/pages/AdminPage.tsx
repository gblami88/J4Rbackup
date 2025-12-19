import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Download, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/button';

interface AnalysisRequest {
  id: string;
  name: string;
  email: string;
  business_type: string;
  message: string | null;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [requests, setRequests] = useState<AnalysisRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRequests = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from('analysis_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setRequests(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const exportToCSV = () => {
    if (requests.length === 0) return;

    const headers = ['Name', 'Email', 'Business Type', 'Message', 'Status', 'Submitted Date'];
    const csvRows = [headers.join(',')];

    requests.forEach(req => {
      const row = [
        `"${req.name.replace(/"/g, '""')}"`,
        `"${req.email.replace(/"/g, '""')}"`,
        `"${req.business_type.replace(/"/g, '""')}"`,
        `"${(req.message || '').replace(/"/g, '""')}"`,
        req.status,
        new Date(req.created_at).toLocaleString()
      ];
      csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `analysis-requests-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Analysis Requests</h1>
              <p className="text-slate-600 mt-2">Manage and export your business analysis requests</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={fetchRequests}
                disabled={loading}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                onClick={exportToCSV}
                disabled={requests.length === 0}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export to CSV
              </Button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
              <p className="text-slate-600 mt-4">Loading requests...</p>
            </div>
          ) : requests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No analysis requests yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Name</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Email</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Business Type</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Message</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Status</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req) => (
                    <tr key={req.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-4 text-slate-900">{req.name}</td>
                      <td className="py-4 px-4 text-slate-600">{req.email}</td>
                      <td className="py-4 px-4 text-slate-600">{req.business_type}</td>
                      <td className="py-4 px-4 text-slate-600 max-w-xs truncate">
                        {req.message || '-'}
                      </td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {req.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-600 text-sm">
                        {new Date(req.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-6 text-sm text-slate-600">
                Total: {requests.length} request{requests.length !== 1 ? 's' : ''}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
