'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

interface PDFViewerPageProps {
  searchParams: {
    file?: string;
  };
}

export default function PDFViewerPage({ searchParams }: PDFViewerPageProps) {
  const { file } = searchParams;
  const [pdfError, setPdfError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!file) {
    notFound();
  }

  const pdfUrl = `/${file}`;
  const encodedFile = encodeURIComponent(file);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              PDF Viewer
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {decodeURIComponent(file)}
            </p>
          </div>
          
          <div className="relative">
            {isLoading && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300">Loading PDF...</p>
                </div>
              </div>
            )}
            
            {!pdfError ? (
              <div className="relative">
                {/* Primary PDF viewer using object tag */}
                <object
                  data={pdfUrl}
                  type="application/pdf"
                  className="w-full h-screen border-0"
                  style={{ minHeight: '80vh' }}
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setPdfError(true);
                    setIsLoading(false);
                  }}
                >
                  {/* Fallback embed tag */}
                  <embed
                    src={pdfUrl}
                    type="application/pdf"
                    className="w-full h-screen border-0"
                    style={{ minHeight: '80vh' }}
                  />
                </object>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    PDF Preview Not Available
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Your browser doesn't support PDF preview or the file cannot be displayed directly.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a
                    href={pdfUrl}
                    download
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mr-4"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                  
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </a>
                </div>
              </div>
            )}
            
            {/* Always show download options */}
            <div className="p-6 text-center border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Alternative viewing options:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </a>
                <a
                  href={`https://docs.google.com/gview?url=${encodeURIComponent(window.location.origin + pdfUrl)}&embedded=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Google Viewer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 