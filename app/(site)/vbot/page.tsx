'use client';
import { useState } from 'react';
import axios from 'axios';

export default function SchoolBotBlog() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [blogId, setBlogId] = useState<string | null>(null);
  const [blogContent, setBlogContent] = useState<any>(null);
  const [message, setMessage] = useState('');

  // Create a blog job with topic and keywords
  const createBlogJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/createBlog', { topic, keywords });
      setBlogId(response.data.jobId);
      setMessage('Blog job created successfully');
    } catch (error) {
      console.error('Error creating blog job:', error);
    }
  };

  // Fetch the generated blog content
  const fetchBlogContent = async () => {
    try {
      const response = await axios.get(`/api/getBlogContent?jobId=${blogId}`);
      console.log('API response:', response.data); // Log the full response
  
      const job = response.data.job;
      
      if (job && job.status === 'COMPLETED') { // Check if job is completed
        const deliverables = job.deliverables || [];
        if (deliverables.length > 0) {
          setBlogContent(deliverables[0]);
          setMessage('Blog content fetched successfully');
        } else {
          setMessage('No deliverables found for this job');
        }
      } else {
        setMessage('Blog job is still processing, please try again later');
      }
    } catch (error) {
      console.error('Error fetching blog content:', error);
      setMessage('Error fetching blog content');
    }
  };
  

  // Post to Sanity
  const postToSanity = async () => {
    try {
      await axios.post('/api/postToSanity', { content: blogContent });
      setMessage('Blog posted to Sanity successfully');
    } catch (error) {
      console.error('Error posting to Sanity:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create Blog for SchoolBot</h1>

      <form onSubmit={createBlogJob} className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
            Blog Topic/Prompt
          </label>
          <input
            type="text"
            id="topic"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter the blog topic or prompt"
            required
          />
        </div>

        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
            Keywords
          </label>
          <input
            type="text"
            id="keywords"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Enter relevant keywords"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      {blogId && (
        <div className="mt-6">
          <button
            onClick={fetchBlogContent}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Fetch Blog Content
          </button>
        </div>
      )}

      {blogContent && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">{blogContent.title || 'No Title'}</h2>
          <p className="mt-2 text-gray-700">{blogContent.body || 'No content available'}</p>
          <button
            onClick={postToSanity}
            className="w-full bg-primary text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Post to Sanity
          </button>
        </div>
      )}

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}