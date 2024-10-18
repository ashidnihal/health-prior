import React from 'react';

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            {/* <button className="btn btn-outline-secondary" type="button">
                Search
            </button> */}
            {/* <input class="form-control" type="text" placeholder="Default input"></input> */}
        </div>
    );
};

export default SearchFilter;
