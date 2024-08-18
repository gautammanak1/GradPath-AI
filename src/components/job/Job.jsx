import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';

const JobListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);

  const jobsCollectionRef = collection(db, 'jobs');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const jobData = await getDocs(jobsCollectionRef);
      setJobs(jobData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchJobs();
  }, [jobsCollectionRef]);

  const toggleSelection = (selectedItems, setSelectedItems, value) => {
    setSelectedItems(
      selectedItems.includes(value)
        ? selectedItems.filter((item) => item !== value)
        : [...selectedItems, value]
    );
  };

  // Filtered jobs based on search and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesEmploymentType = selectedEmploymentTypes.length === 0 || selectedEmploymentTypes.includes(job.employmentType);
    const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.jobType);

    return matchesSearch && matchesCategory && matchesEmploymentType && matchesJobType;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleBrowseAllJobs = () => {
    navigate('/job'); // Adjust the path as per your routing setup
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Filter Section */}
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-8">
          {/* Job Category Filter */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mb-4">Job Category</h3>
            <div className="flex flex-col space-y-2">
              {['Engineering', 'Human Resource', 'Management', 'Business Development', 'Accounts', 'Marketing', 'Others'].map((category) => (
                <label key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleSelection(selectedCategories, setSelectedCategories, category)}
                  /> 
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Employment Type Filter */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mb-4">Employment Type</h3>
            <div className="flex flex-col space-y-2">
              {['Full Time', 'Part Time', 'Intern'].map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    checked={selectedEmploymentTypes.includes(type)}
                    onChange={() => toggleSelection(selectedEmploymentTypes, setSelectedEmploymentTypes, type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Job Type Filter */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Job Type</h3>
            <div className="flex flex-col space-y-2">
              {['Remote', 'On Site', 'Hybrid'].map((type) => (
                <label key={type}>
                  <input
                    type="checkbox"
                    checked={selectedJobTypes.includes(type)}
                    onChange={() => toggleSelection(selectedJobTypes, setSelectedJobTypes, type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Job Listing Section */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-8">
            <input
              type="text"
              className="border p-3 w-full md:w-1/3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={handleBrowseAllJobs}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Browse All Jobs
            </button>
          </div>

          <div className="space-y-6">
            {currentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center"
              >
                <img
                  className="h-16 w-16 rounded object-cover"
                  src={job.logo}
                  alt={`${job.company} logo`}
                />
                <div className="mt-4 md:mt-0 md:ml-6 flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold text-gray-900">{job.company}</h3>
                  <h4 className="text-xl font-semibold text-gray-900">{job.title}</h4>
                  <div className="flex flex-col md:flex-row items-center md:items-start text-gray-600 mt-2 space-y-2 md:space-y-0">
                    <span className="mr-0 md:mr-4">📍 {job.location}</span>
                    <span className="mr-0 md:mr-4">🏠 {job.jobType}</span>
                    <span className="mr-0 md:mr-4">📂 {job.jobCategory}</span>
                    <span className="mr-0 md:mr-4">📅 {job.experience} Years</span>
                  </div>
                  <div className="flex space-x-2 mt-4 justify-center md:justify-start">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{job.employmentType}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Open</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      Job Post: {job.postedAt ? job.postedAt.toDate().toLocaleDateString() : 'Unknown'}
                    </span>
                  </div>
                </div>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div>
              Rows per page: 
              <select
                className="ml-2 border rounded-md"
                value={jobsPerPage}
                onChange={(e) => {
                  setJobsPerPage(parseInt(e.target.value));
                  setCurrentPage(1); // Reset to first page on items per page change
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div>
              <span>{`${indexOfFirstJob + 1}-${Math.min(indexOfLastJob, filteredJobs.length)} of ${filteredJobs.length}`}</span>
              <button
                className="ml-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ❮
              </button>
              <button
                className="ml-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListPage;
