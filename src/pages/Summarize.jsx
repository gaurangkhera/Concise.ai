import { useState, useEffect } from 'react';

const Summarize = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6cf1dd4aaamsha5f144d04b376b5p1c0b1djsnf33f189a35d5',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
    },
  };

  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading
  const [summary, setSummary] = useState(''); // State to store the API result
  const fetchUrl = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${url}&length=3`;

  useEffect(() => {
    if (loading) {
      fetchSummary();
    }
  }, [loading]);

  const fetchSummary = async () => {
    try {
      const response = await fetch(fetchUrl, options);
      const result = await response.json();
      console.log(result.summary)
      setSummary(result.summary);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Summarize</h1>
        <p className="mt-4 text-gray-500">Enter a URL from which an article is to be summarized</p>
      </div>
      <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <div className="relative">
            <input
              className="w-full rounded-lg border-2 border-green-400 focus:outline-none p-2 pe-6 text-sm"
              type="url"
              placeholder="Article URL"
              autoFocus
              onChange={(e) => setUrl(e.target.value)}
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">It may take 1-2 minutes to summarize your content.</p>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
          >
            Summarize!
          </button>
        </div>
      </form>

      <div className="mt-8">
        {/* Skeleton loader while loading */}
        {loading ? (
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        ) : (
          <div>{summary}</div>
        )}
      </div>
    </div>
  );
};

export default Summarize;
