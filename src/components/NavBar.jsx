import { useState } from "react";
import { BiSearch, BiCart, BiMenuAltRight, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    window.location.href = "http://localhost:3000";
    localStorage.clear();
  };

  return (
    <div className="px-5 md:px-10 py-4 border-b border-slate-300 h-16">
      <nav className="flex items-center justify-between mx-auto max-w-screen-xl">
        <div className="flex-1 flex items-center">
          <span className="hidden md:block mr-3 cursor-pointer">EN</span>
          <div className="flex items-center px-3 py-1 rounded-md border border-slate-300">
            <input
              className="outline-none border-none bg-transparent w-full"
              placeholder="Search"
            />
            <BiSearch className="cursor-pointer" />
          </div>
        </div>
        <div className="flex-1">
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold text-center">
              BODOI.
            </h1>
          </Link>
        </div>
        <div className="hidden flex-1 md:flex items-center justify-center md:justify-end cursor-pointer gap-5">
          {user ? (
            <button onClick={handleLogout}>
              <BiLogOut className="text-2xl" />
            </button>
          ) : (
            <div>
              <Link to="/register" className="mr-5">
                <button>REGISTER</button>
              </Link>
              <Link to="/login">
                <button>SIGN IN</button>
              </Link>
            </div>
          )}
          <Link to="/cart">
            <div className="relative">
              <BiCart className="text-2xl" />
              <div className="px-1 rounded-full w-4 text-center font-medium bg-primary absolute -top-2 -right-2 text-xs">
                {quantity}
              </div>
            </div>
          </Link>
        </div>
        <div className="md:hidden flex-1 relative">
          <div className="w-full flex">
            <button onClick={handleClick} className="ml-auto px-4">
              <BiMenuAltRight className="text-2xl" />
            </button>
          </div>
          {showMenu && (
            <div className="overflow-hidden bg-white absolute top-full right-0 z-20 flex flex-col items-end rounded-md shadow-lg menu-mobile">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-8 py-2 hover:bg-secondary-100 w-full text-lg min-w-[160px]"
                >
                  <BiLogOut className="text-2xl text-center w-full" />
                </button>
              ) : (
                <div className="w-full">
                  <Link className="w-full mb-5" to="/register">
                    <button className="px-8 py-2 hover:bg-secondary-100 w-full text-lg">
                      Register
                    </button>
                  </Link>
                  <Link className="w-full" to="/login">
                    <button className="px-8 py-2 hover:bg-secondary-100 w-full text-lg">
                      Sign in
                    </button>
                  </Link>
                </div>
              )}
              <Link className="w-full" to="/cart">
                <button className="px-8 py-2 hover:bg-secondary-100 w-full relative min-w-[160px]">
                  <BiCart className="text-2xl text-center w-full" />
                  <div className="px-1 rounded-full w-4 text-center font-medium bg-primary absolute top-1 right-16 text-xs">
                    {quantity}
                  </div>
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
