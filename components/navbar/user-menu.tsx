"use client";

// import ThemeToggle from "../theme-toggle";
import { Button } from "../ui/button";

const UserMenu = () => {
  return (
    <div className="md:flex items-center gap-5 hidden">
      <div className="rounded-full border p-2 md:flex items-center border-gray-300 ">
      <Button variant="link" className="border-r border-gray-300 hover:no-underline ml-2 hover:text-blue-800 font-medium">
        Login
      </Button>
      <Button variant="link" className="hover:no-underline hover:text-blue-800 font-medium">
          Register
        </Button>
      </div>
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default UserMenu;
