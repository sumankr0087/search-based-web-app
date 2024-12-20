import React from "react";

const UserList = ({ filteredUsers, searchTerm, setSelectedUser }) => (
    <div className="mt-2 grid grid-cols-1 w-full max-w-[800px] md:grid-cols-2 gap-5 mb-8">
        {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
                <div
                    key={index}
                    className="w-full md:max-w-[388.57px] h-[312.57px] bg-white shadow-lg rounded-[18.29px] p-[27.43px] gap-[11.43px] flex flex-col justify-between"
                >
                    <div className="flex flex-col gap-4">
                        <div className="w-20 h-20 border border-[#F3F3F3] rounded-full p-2 flex items-center justify-center">
                            <img
                                src="/Ellipse 2.png"
                                alt="User"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-inter text-4xl font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
                            <div className="flex w-11 h-3.5 mt-2 mb-8 font-inter font-medium text-xs gap-2">
                                <img src="/Vector.png" className="h-4" />
                                <p className="text-[#425763]">{user.city}</p>
                            </div>
                            <hr className="text-[#F3F3F3]" />
                            <div className="flex flex-row justify-between mt-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <img src="/phone.png" className="w-4 h-4" />
                                        <p>{user.contact_number}</p>
                                    </div>
                                    <p className="text-xs text-[#AFAFAF]">Available on phone</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => setSelectedUser(user)}
                                        className="w-[136px] h-[45px] text-white bg-[#18181B] px-4 py-2 rounded-md"
                                    >
                                        Fetch Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))
        ) : searchTerm ? (
            <div className="flex items-center justify-center w-full col-span-full h-[312px]">
                <div className="text-center">
                    <img src="noresult.png" alt="No results" className="mx-auto" />
                    <p className="text-lg font-medium text-[#999999] mt-4">No results found.</p>
                </div>
            </div>
        ) : null}
    </div>
);

export default UserList;
