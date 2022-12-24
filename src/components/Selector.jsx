import React from 'react';

const Selector = () => {
  return (
    <div>
      <label
        htmlFor="small"
        className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white"
      >
        Sort by
      </label>
      <select
        id="small"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="title">Title</option>
        <option value="reating">Reating</option>
        <option value="genre">Genre</option>
        <option value="release_date">Release date</option>
      </select>
    </div>
  );
};

export default Selector;
