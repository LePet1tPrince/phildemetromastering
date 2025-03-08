import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-reveal/Fade';
import Paginate from './Paginate';
import ProjectCard from './DiscographyCard';
import ProjectsCards from '../data/ProjectsCards';
import YearDropdown from './YearDropdown';

// Custom toggle component for dropdowns
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
        className="btn dropdown-toggle"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        aria-haspopup="true"
        aria-expanded="false"
    >
        {children}
    </button>
));

const Discography = () => {
    // State management
    const [allCards] = useState(ProjectsCards);
    const [filteredCards, setFilteredCards] = useState(() => {
        // Sort by year descending initially
        return [...ProjectsCards].sort((a, b) => {
            // Ensure both years are treated as numbers for comparison
            const yearA = typeof a.Year === 'number' ? a.Year : parseInt(a.Year, 10) || 0;
            const yearB = typeof b.Year === 'number' ? b.Year : parseInt(b.Year, 10) || 0;

            // First sort by year (descending)
            if (yearA !== yearB) {
                return yearB - yearA; // Sort in descending order (newest first)
            }

            // If years are the same, sort by ID as a fallback
            return a.ID - b.ID;
        });
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(18);
    const [show, setShow] = useState(true);
    const [selectedYear, setSelectedYear] = useState(null);
    const [sortBy, setSortBy] = useState("Year");
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // Extract unique years for the dropdown
    const years = useMemo(() => {
        // Convert years to numbers before sorting to ensure consistent sorting
        const numericYears = allCards.map(card =>
            typeof card.Year === 'number' ? card.Year : parseInt(card.Year, 10) || 0
        );
        return [...new Set(numericYears)].sort((a, b) => b - a);
    }, [allCards]);

    // Search function
    const handleSearch = useCallback((term) => {
        setSearchTerm(term);

        if (term.trim() === "") {
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        setIsLoading(true);

        // Perform search after a short delay to avoid excessive filtering
        const searchTimeout = setTimeout(() => {
            const lowercaseTerm = term.toLowerCase();
            const results = allCards.filter(card =>
                card.Artist.toLowerCase().includes(lowercaseTerm) ||
                card.Album.toLowerCase().includes(lowercaseTerm) ||
                (card.Production && card.Production.toLowerCase().includes(lowercaseTerm)) ||
                (card.Label && card.Label.toLowerCase().includes(lowercaseTerm)) ||
                String(card.Year).includes(lowercaseTerm)
            );

            setSearchResults(results);
            setCurrentPage(1);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(searchTimeout);
    }, [allCards]);

    // Clear search
    const clearSearch = () => {
        setSearchTerm("");
        setIsSearching(false);
    };

    // Handle sorting and filtering
    useEffect(() => {
        setIsLoading(true);

        // Determine which dataset to use based on search state
        let dataToProcess = isSearching ? searchResults : allCards;

        // First filter by year if selected
        let result = [...dataToProcess];
        if (selectedYear) {
            // Convert both to numbers for comparison to ensure consistent type handling
            result = result.filter(card => {
                const cardYear = typeof card.Year === 'number' ? card.Year : parseInt(card.Year, 10) || 0;
                const filterYear = typeof selectedYear === 'number' ? selectedYear : parseInt(selectedYear, 10) || 0;
                return cardYear === filterYear;
            });
        }

        // Then sort the filtered results
        result.sort((a, b) => {
            if (sortBy === "Year") {
                // Ensure both years are treated as numbers for comparison
                const yearA = typeof a.Year === 'number' ? a.Year : parseInt(a.Year, 10) || 0;
                const yearB = typeof b.Year === 'number' ? b.Year : parseInt(b.Year, 10) || 0;

                // First sort by year (descending)
                if (yearA !== yearB) {
                    return yearB - yearA; // Sort in descending order (newest first)
                }

                // If years are the same, sort by ID as a fallback
                return a.ID - b.ID;
            } else if (sortBy === "Artist") {
                return a.Artist.localeCompare(b.Artist);
            } else if (sortBy === "Album") {
                return a.Album.localeCompare(b.Album);
            }
            return 0;
        });

        setFilteredCards(result);
        setCurrentPage(1); // Reset to first page when filter/sort changes

        // Short delay to allow for animation
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, [sortBy, selectedYear, allCards, isSearching, searchResults]);

    // Pagination logic
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    // Animation delay helper
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    // Page change handler with animation
    async function handlePageChange(newPage) {
        setShow(false);
        setCurrentPage(newPage);
        await delay(300);
        setShow(true);
    }

    // Year filter handler
    function handleYearSelect(year) {
        setSelectedYear(year);
    }

    // Sort handler
    function handleSortChange(sortType) {
        setSortBy(sortType);
    }

    return (
        <div className="fullscreen bg-light">
            <div className="text-center display-4 fw-bold py-4 bg-secondary">Discography</div>
            <div className="container py-5">
                {/* Filter and Sort Controls */}
                <div className="discography-controls mb-4">
                    {/* Search Input */}
                    <div className="search-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search by artist, album, label..."
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                            aria-label="Search discography"
                        />
                        {searchTerm && (
                            <button
                                className="clear-search"
                                onClick={clearSearch}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    <YearDropdown
                        years={years}
                        selectedYear={selectedYear}
                        onYearSelect={handleYearSelect}
                    />

                    <div className="sort-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle
                                as={CustomToggle}
                                id="dropdown-sort"
                            >
                                Sort By: {sortBy}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => handleSortChange("Year")}
                                    active={sortBy === "Year"}
                                >
                                    Year
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => handleSortChange("Artist")}
                                    active={sortBy === "Artist"}
                                >
                                    Artist
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => handleSortChange("Album")}
                                    active={sortBy === "Album"}
                                >
                                    Album
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                {/* Search status */}
                {isSearching && (
                    <div className="alert alert-light text-center mb-4">
                        {searchResults.length > 0
                            ? `Found ${searchResults.length} results for "${searchTerm}"`
                            : `No results found for "${searchTerm}"`
                        }
                    </div>
                )}

                {/* Pagination */}
                {filteredCards.length > cardsPerPage && (
                    <Paginate
                        cardsPerPage={cardsPerPage}
                        totalCards={filteredCards.length}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                )}

                {/* Loading indicator */}
                {isLoading ? (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Cards Grid */}
                        <Fade when={show} duration={500}>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-3">
                                {currentCards.map(card => (
                                    <ProjectCard key={card.ID} {...card} />
                                ))}
                            </div>
                        </Fade>

                        {/* No results message */}
                        {currentCards.length === 0 && !isLoading && (
                            <div className="alert alert-info text-center my-5">
                                No albums found matching your criteria.
                            </div>
                        )}
                    </>
                )}

                {/* Bottom Pagination */}
                {filteredCards.length > cardsPerPage && (
                    <Paginate
                        cardsPerPage={cardsPerPage}
                        totalCards={filteredCards.length}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default Discography;
