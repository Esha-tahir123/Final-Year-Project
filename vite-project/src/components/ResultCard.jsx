import React, { useState } from 'react';
import { Award, ChevronRight, BookOpen, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

const ResultCard = ({ userName = "John Doe", totalScore, badge, onViewDetails }) => {
    const getAwardColor = (score) => {
      if (score >= 180) return "text-yellow-500";
      if (score >= 140) return "text-blue-500";
      return "text-gray-500";
    };
  
    return (
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-center border-b pb-6 p-6">
          <div className="w-20 h-20 mx-auto mb-4">
            <img 
              src="/api/placeholder/80/80" 
              alt="Company Logo" 
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Assessment Completion Certificate
          </h2>
        </div>
        
        <div className="p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{userName}</h2>
            <p className="text-gray-600">has successfully completed the HTML/CSS Assessment</p>
          </div>
          
          <div className="flex justify-around items-center mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Score</h3>
              <p className="text-3xl font-bold text-blue-600">{totalScore}/200</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Badge Earned</h3>
              <div className="flex flex-col items-center">
                <Award className={`w-12 h-12 ${getAwardColor(totalScore)}`} />
                <p className="mt-2 font-semibold text-gray-800">{badge}</p>
              </div>
            </div>
          </div>
  
          <div className="text-center">
            <Button onClick={onViewDetails}>
              View Detailed Report
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  };
  
  const DetailedReport = ({ results, onBack }) => {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Button 
          onClick={onBack} 
          variant="outline" 
          className="mb-4"
        >
          Back to Certificate
        </Button>
  
        <h2 className="text-2xl font-bold mb-6">Detailed Assessment Report</h2>
  
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Task: {result.task}</span>
                  <span className="text-lg">Score: {result.score}/10</span>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Error section */}
                {result.errors?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2 text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      Errors
                    </h4>
                    <ul className="list-disc list-inside text-red-600 pl-4">
                      {result.errors.map((error, i) => (
                        <li key={i}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
  
                {/* Suggestions section */}
                {result.suggestions?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      Suggestions for Improvement
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 pl-4">
                      {result.suggestions.map((suggestion, i) => (
                        <li key={i}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
  
                {/* Resources section */}
                {result.resources?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2 text-blue-600">
                      <BookOpen className="w-4 h-4" />
                      Learning Resources
                    </h4>
                    <ul className="space-y-2 pl-4">
                      {result.resources.map((resource, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-blue-500" />
                          <a
                            href={resource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {resource}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const AssessmentComplete = ({ results, totalScore, badge, skippedTasks, onRetrySkipped }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    if (showDetails) {
      return <DetailedReport results={results} onBack={() => setShowDetails(false)} />;
    }
  
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <ResultCard 
            totalScore={totalScore}
            badge={badge}
            onViewDetails={() => setShowDetails(true)}
          />
  
          {skippedTasks.length > 0 && (
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 text-center">
                <p className="mb-4">
                  You have {skippedTasks.length} skipped tasks. Would you like to attempt them?
                </p>
                <Button 
                  onClick={onRetrySkipped}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Attempt Skipped Questions
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
export { AssessmentComplete, ResultCard, DetailedReport };