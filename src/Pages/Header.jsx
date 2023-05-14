import { Link } from "react-router-dom";

function Header() {
  return (
    // navbar
    <nav className="relative container mx-auto p-6">
      {/* flex cantainer */}
      <div className="flex item-center justify-between">
        {/* logo */}
        <div className="">
          <Link to="/home">
            <img className="w-10 h-10 " src="./logo.png" alt="logo" />
          </Link>
        </div>
        {/* menu items  */}
        <div className="hidden md:flex space-x-6 text-center">
          <Link to="/courses" className="hover:text-green-300">
            Courses
          </Link>
          <Link to="/mentorship" className="hover:text-green-300">
            Mentorship
          </Link>
          <Link to="/blogs" className="hover:text-green-300">
            Blogs
          </Link>
          <Link to="/community" className="hover:text-green-300">
            Community
          </Link>
          <Link to="/contact" className="hover:text-green-300">
            Contact
          </Link>
        </div>
        <Link
          to="/partner"
          className="hidden md:block py-3 w-24 text-center text-white bg-green-300 rounded-full hover:bg-green-600"
        >
          partner
        </Link>
      </div>
    </nav>
  );
}

export default Header;
