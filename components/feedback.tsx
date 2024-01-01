'use client';
import { useState } from 'react';

const feedbackData = [
  {
    id: 1,
    name: 'John Doe',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'Ally D',
    feedback: 'Lorem ipsum tes maet',
  },
];

const CustomerFeedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const handleNext = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbackData.length);
  };

  const handlePrev = () => {
    setCurrentFeedback(
      (prev) => (prev - 1 + feedbackData.length) % feedbackData.length,
    );
  };
  return (
    <div className="w-full p-4 border rounded-md shadow-md mb-10 bg-blue-100">
      <div className="relative p-2">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full z-10"
        >
          &gt;
        </button>
        <div className="flex justify-center items-center ">
          {feedbackData.map(
            (feedback) =>
              currentFeedback + 1 === feedback.id && (
                <div
                  key={feedback.id}
                  className="w-full flex flex-col items-center px-10"
                >
                  <p className="text-gray-700 flex-1 pr-4">
                    {feedback.feedback}
                  </p>
                  <div>
                    <p className="font-bold">{feedback.name}</p>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
