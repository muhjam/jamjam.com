export default function TestPDFPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          PDF Test Page
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Direct PDF Links
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">ICFICE 2025 Proceedings</h3>
              <div className="mt-2 space-x-4">
                <a 
                  href="/files/ICFICE-2025-Proceedings.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open PDF
                </a>
                <a 
                  href="/files/ICFICE-2025-Proceedings.pdf"
                  download="ICFICE-2025-Proceedings.pdf"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">CV Muhamad Jamaludin</h3>
              <div className="mt-2 space-x-4">
                <a 
                  href="/files/CV-Muhamad Jamaludin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open PDF
                </a>
                <a 
                  href="/files/CV-Muhamad Jamaludin.pdf"
                  download="CV-Muhamad-Jamaludin.pdf"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Embedded PDF Preview
          </h2>
          
          <div className="border rounded-lg overflow-hidden">
            <object
              data="/files/ICFICE-2025-Proceedings.pdf"
              type="application/pdf"
              width="100%"
              height="600px"
              className="border-0"
            >
              <embed
                src="/files/ICFICE-2025-Proceedings.pdf"
                type="application/pdf"
                width="100%"
                height="600px"
              />
              <p className="p-4 text-gray-600 dark:text-gray-300">
                This browser does not support PDFs. Please download the PDF to view it: 
                <a href="/files/ICFICE-2025-Proceedings.pdf" className="text-blue-600 hover:underline ml-1">
                  Download PDF
                </a>
              </p>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
} 