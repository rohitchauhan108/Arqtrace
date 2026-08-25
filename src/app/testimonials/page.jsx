"use client";

import React, { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetch("/api/google-reviews");

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error(error);
        setError("Unable to load Google reviews.");
      } finally {
        setLoading(false);
      }
    }

    getReviews();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading Google reviews...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Google Reviews
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our Customers Say
          </h1>

          {/* Rating */}
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold">
                {data?.rating}
              </span>

              <div className="flex text-yellow-500 text-2xl">
                {"★★★★★"}
              </div>
            </div>

            <p className="text-gray-500 mt-2">
              Based on {data?.totalReviews} Google reviews
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.reviews?.map((review, index) => (
            <div
              key={review.name || index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* User */}
              <div className="flex items-center gap-4 mb-4">
                {review.authorAttribution?.photoUri ? (
                  <img
                    src={review.authorAttribution.photoUri}
                    alt={review.authorAttribution.displayName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                    {review.authorAttribution?.displayName
                      ?.charAt(0)
                      ?.toUpperCase()}
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {review.authorAttribution?.displayName}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">
                      {"★".repeat(Math.round(review.rating || 5))}
                    </span>

                    <span className="text-sm text-gray-400">
                      {review.relativePublishTimeDescription}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7">
                {review.originalText?.text ||
                  review.text?.text ||
                  "No review text available."}
              </p>
            </div>
          ))}
        </div>

        {/* Google Button */}
        {data?.googleMapsUri && (
          <div className="text-center mt-12">
            <a
              href={data.googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              View All Reviews on Google
            </a>
          </div>
        )}

      </div>
    </main>
  );
}

export default Page;