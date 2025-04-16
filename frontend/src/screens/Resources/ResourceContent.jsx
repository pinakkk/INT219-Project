import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ResourceContent() {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <Link to="/library" className="text-blue-600 hover:underline">&larr; Back to Library</Link>
        <h1 className="text-3xl font-bold mt-6 mb-4">Resource Content</h1>
        <p className="text-lg text-gray-700">
          Now showing the content for resource with ID: <span className="font-semibold">{id}</span>
        </p>
        <div className="mt-6 p-4 bg-white rounded shadow">
          <p className="text-gray-600">
            {/* Replace with detailed content for the resource */}
            This is the learning area where in-depth content for the selected resource will be displayed.
          </p>
        </div>
      </div>
    </div>
  );
}