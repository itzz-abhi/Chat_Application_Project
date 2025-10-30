import React, { useState } from "react";
import SideBar from "../components/SideBar";
import ChatContainer from "../components/ChatContainer";
import RightSideBar from "../components/RightSideBar";

function HomePage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#0f0f1a]">
      <div
        className={`backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl overflow-hidden h-[90%] w-[95%] sm:w-[80%] grid transition-all duration-300 ease-in-out
          ${
            selectedUser
              ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
              : "md:grid-cols-[1fr_1.2fr]"
          }`}
      >
        {/* Sidebar (user list) */}
        <SideBar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        {/* Chat container (main chat area) */}
        <ChatContainer
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        {/* Right sidebar (optional info/profile) */}
        {selectedUser && <RightSideBar selectedUser={selectedUser} />}
      </div>
    </div>
  );
}

export default HomePage;
