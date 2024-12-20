import React from "react";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import UserList from "../UserList";
import UserDetailsModal from "../UserDetailsModal";
import userData from "../../data/user_list.json";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [searchResults, setSearchResults] = React.useState([]);
    const [isSearched, setIsSearched] = React.useState(false);

    const handleSearch = () => {
        if (searchTerm.trim()) {
            const filtered = userData.filter((user) =>
                `${user.first_name} ${user.last_name}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            );
            setSearchResults(filtered);
            setIsSearched(true);
        }
    };

    const handleClear = () => {
        setSearchResults([]);
        setIsSearched(false);
    };

    return (
        <div className="min-h-screen">
            <NavBar />
            <main className="container mx-auto px-4 pt-24">
                <div className="flex flex-col items-center max-w-6xl mx-auto">
                    {/* Logo Section */}
                    <div className={`w-full flex justify-center ${isSearched ? "mb-32" : "mb-8"}`}>
                        {!isSearched && (
                            <img
                                src="/Girman search logo.svg"
                                alt="Girman Technologies"
                                className="hidden md:block h-[250px] w-[800px] object-contain"
                            />
                        )}
                    </div>

                    {/* Search Bar */}
                    <div className="w-full flex justify-center mb-8">
                        <SearchBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            onSearch={handleSearch}
                            onClear={handleClear}
                        />
                    </div>

                    {/* User List */}
                    <div className="w-full flex justify-center mt-8">
                        {isSearched && (
                            <UserList
                                filteredUsers={searchResults}
                                searchTerm={searchTerm}
                                setSelectedUser={setSelectedUser}
                            />
                        )}
                    </div>

                    {/* User Details Modal */}
                    {selectedUser && (
                        <UserDetailsModal
                            user={selectedUser}
                            onClose={() => setSelectedUser(null)}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default HomePage;