import React, { useState, useEffect } from "react";

const CurrentOpenings = () => {
  // State for job openings, filters, and loading
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // State for selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    workMode: [],
    salary: [],
  });

  // Dummy filters
  const filters = {
    location: ["San Francisco", "Bois", "Alexandria", "Portland"],
    workMode: ["Hybrid", "Work from home", "On Location"],
    salary: ["$100k-$150k", "$200k-$250k", "$250k-$300k"],
  };

  // Fetch job data from an API (Dummy for now)
  const fetchJobs = async () => {
    try {
      setLoading(true);
      // Simulating API response with dummy data
      const response = [
        {
          id: 1,
          title: "Account Manager",
          type: "Full Time",
          schedule: "Flexible Schedule",
          salary: "$200-250K",
          location: "San Francisco, CA",
          date: "5 days ago",
        },
        {
          id: 1,
          title: "Account Manager",
          type: "Full Time",
          schedule: "Flexible Schedule",
          salary: "$200-250K",
          location: "San Francisco, CA",
          date: "5 days ago",
        },
        {
          id: 1,
          title: "Account Manager",
          type: "Hybrid",
          schedule: "Flexible Schedule",
          salary: "$200-250K",
          location: "San Francisco, CA",
          date: "5 days ago",
        },
        {
          id: 1,
          title: "Account Manager",
          type: "Full Time",
          schedule: "Flexible Schedule",
          salary: "$200-250K",
          location: "San Francisco, CA",
          date: "5 days ago",
        },
        {
          id: 2,
          title: "Software Engineer",
          type: "Full Time",
          schedule: "Flexible Schedule",
          salary: "$150-200K",
          location: "Bois, ID",
          date: "3 days ago",
        },
        // Add more dummy data as needed
      ];
      setJobs(response);
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter jobs based on search input and selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLocation =
      selectedFilters.location.length === 0 ||
      selectedFilters.location.includes(job.location.split(",")[0]);
    const matchesWorkMode =
      selectedFilters.workMode.length === 0 ||
      selectedFilters.workMode.includes(job.schedule);
    const matchesSalary =
      selectedFilters.salary.length === 0 ||
      selectedFilters.salary.includes(job.salary);

    return matchesSearch && matchesLocation && matchesWorkMode && matchesSalary;
  });

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const isSelected = prev[filterType].includes(value);
      return {
        ...prev,
        [filterType]: isSelected
          ? prev[filterType].filter((item) => item !== value)
          : [...prev[filterType], value],
      };
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters({
      location: [],
      workMode: [],
      salary: [],
    });
  };

  return (
    <div className="bg-gray-50 py-10 md:px-5">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
        Current Openings
      </h2>

      <div className="flex justify-center items-center mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-3/4 md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Section */}
        <div className="bg-white shadow-md rounded-lg p-4 w-full mx-2 md:w-1/4">
          <h3 className="font-bold text-lg text-gray-800 mb-4">All Filters</h3>
          {Object.entries(filters).map(([key, options]) => (
            <div key={key} className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2 capitalize">
                {key}
              </h4>
              {options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`${key}-${index}`}
                    checked={selectedFilters[key].includes(option)}
                    onChange={() => handleFilterChange(key, option)}
                    className="mr-2"
                  />
                  <label htmlFor={`${key}-${index}`} className="text-gray-600">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={clearFilters}
            className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-red-600"
          >
            Clear Filter
          </button>
        </div>

        {/* Job Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-2 gap-6 w-full">
          {loading ? (
            <p className="text-center text-gray-500">Loading jobs...</p>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-lg h-[220px] p-4 flex flex-col justify-between"
              >
                <div>
                  <div className=" ">
                    <p className="text-sm text-gray-500 mb-2">{job.date}</p>
                    <h3 className="font-bold text-lg text-gray-800">
                      {job.title}
                    </h3>
                  </div>
                  <div className="border-b-1 border-gray-400 pb-3 flex justify-center gap-3 mt-3  items-center">
                    <p className="text-sm text-black bg-gray-200 font-semibold px-5 rounded py-1 ">
                      {job.type}
                    </p>
                    <p className="text-sm text-black bg-gray-200 font-semibold px-5 rounded py-1">
                      {job.schedule}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="">
                      <p className="text-md text-black font-semibold mt-2">
                        {job.salary}
                      </p>
                      <p className="text-sm text-gray-800">{job.location}</p>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenings;
