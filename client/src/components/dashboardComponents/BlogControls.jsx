import React from "react";
import useBlogStore from "../../stores/BlogStore";
import "../../assets/css/dashboardStyles/BlogControls.css";

const BlogControls = ({onAddNew }) => {
  const { setSearchQuery, setFilter, applyFilterAndSearch } = useBlogStore();

  const handleSearch = (e) => {
    const selectedQuery = e.target.value;
    setSearchQuery(selectedQuery); // Update the search query state
    applyFilterAndSearch(); // Apply the filter and search
  };

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter); // Update the filter state
    applyFilterAndSearch(); // Trigger fetching based on the new filter
  };

  const searchId = `search-${Math.random()}`;
  const filterId = `filter-${Math.random()}`;

  return (
    <div className="blog-controls">
      <div className="d-flex justify-content-between align-items-center">
        {/* Left Side: Search and Filters */}
        <div className="d-flex align-items-center">
          {/* Search Field */}
          <div className="me-3">
            <input
              id={searchId}  // Unique ID
              name="search"
              type="text"
              className="form-control blog-search"
              placeholder="Search blogs..."
              onChange={handleSearch}
            />
          </div>

          {/* Filters Dropdown */}
          <div>
            <select
              className="form-select blog-filter"
              onChange={handleFilterChange}
              id={filterId}  // Unique ID
              name="select"
            >
              <option value="">All</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Right Side: Add New Button */}
        <button
          className="btn btn-primary blog-add-btn"
          onClick={onAddNew} // Trigger Add New Modal
        >
          + Add New
        </button>
      </div>
    </div>
  );
};

export default BlogControls;

