import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/category",
    title: "category",
  },

  {
    url: "/about",
    title: "about",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full mb-10 bg-inherit">
        <div className="flex items-center justify-between gap-10 md:justify-center text-darkBlue">
          <button
            onClick={() => setOpen(!open)}
            className="block mb-3 ml-5 md:hidden group"
          >
            {!open ? (
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6665 23.1667H25.3332M6.6665 16.5H25.3332M6.6665 9.83334H25.3332"
                  stroke="#00171F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <NavLink to="/">
            <img src={logo} className="w-[115px] h-10 mt-10" alt="" />
          </NavLink>
          <ul
            className={
              !open
                ? "items-center  hidden gap-10 pr-10 font-semibold cursor-pointer md:flex mt-10"
                : "bg-white absolute top-[100%] left-0 mt-10 flex flex-col items-center w-full h-screen gap-12 pt-10 "
            }
          >
            {menuLinks.map((item) => (
              <li key={item.title}>
                <NavLink
                  className="font-bold hover:text-pink-600"
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="block mb-3 mr-5 md:hidden">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.6771 21.061L18.4131 16.8283C20.0682 14.763 20.8698 12.1416 20.6529 9.5031C20.436 6.86457 19.2172 4.40946 17.2471 2.64261C15.277 0.875762 12.7054 -0.0685392 10.0609 0.00387725C7.41647 0.0762937 4.90025 1.15992 3.02965 3.03195C1.15904 4.90398 0.0762357 7.42211 0.0038743 10.0686C-0.0684871 12.715 0.875097 15.2886 2.64061 17.2602C4.40612 19.2318 6.85935 20.4515 9.49588 20.6686C12.1324 20.8856 14.7518 20.0835 16.8155 18.4271L21.045 22.6598C21.1519 22.7676 21.279 22.8531 21.419 22.9115C21.5591 22.9699 21.7093 23 21.861 23C22.0128 23 22.163 22.9699 22.303 22.9115C22.4431 22.8531 22.5702 22.7676 22.6771 22.6598C22.8842 22.4453 23 22.1587 23 21.8604C23 21.5621 22.8842 21.2755 22.6771 21.061ZM10.3679 18.4271C8.77668 18.4271 7.22122 17.9549 5.89819 17.0702C4.57516 16.1855 3.54398 14.928 2.93506 13.4569C2.32614 11.9857 2.16681 10.3668 2.47724 8.80501C2.78767 7.24321 3.5539 5.8086 4.67904 4.6826C5.80419 3.5566 7.23771 2.78979 8.79833 2.47912C10.3589 2.16846 11.9766 2.3279 13.4466 2.93729C14.9167 3.54668 16.1732 4.57864 17.0572 5.90267C17.9412 7.2267 18.4131 8.78335 18.4131 10.3757C18.4131 12.5111 17.5655 14.559 16.0567 16.0689C14.5479 17.5788 12.5016 18.4271 10.3679 18.4271Z"
                fill="#00171F"
              />
            </svg>
          </button>
          <div className="hidden gap-5 mt-10 md:flex">
            <div className="flex items-center bg-grayLight rounded-full w-[280px] h-11 px-3 py-4 p-4">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0916 15.9083L14 12.8417C15.2001 11.3454 15.7812 9.44609 15.624 7.53443C15.4667 5.62276 14.583 3.844 13.1546 2.56388C11.7261 1.28377 9.86149 0.599604 7.94408 0.652071C6.02668 0.704538 4.20225 1.48965 2.84593 2.84596C1.48962 4.20228 0.704507 6.02671 0.65204 7.94411C0.599573 9.86152 1.28374 11.7262 2.56385 13.1546C3.84397 14.5831 5.62273 15.4668 7.5344 15.624C9.44606 15.7813 11.3453 15.2001 12.8416 14L15.9083 17.0667C15.9858 17.1448 16.078 17.2068 16.1795 17.2491C16.281 17.2914 16.39 17.3132 16.5 17.3132C16.61 17.3132 16.7189 17.2914 16.8205 17.2491C16.922 17.2068 17.0142 17.1448 17.0916 17.0667C17.2418 16.9113 17.3258 16.7036 17.3258 16.4875C17.3258 16.2714 17.2418 16.0637 17.0916 15.9083ZM8.16665 14C7.01292 14 5.88511 13.6579 4.92582 13.0169C3.96653 12.3759 3.21886 11.4649 2.77735 10.399C2.33584 9.3331 2.22032 8.16021 2.4454 7.02865C2.67048 5.8971 3.22605 4.8577 4.04186 4.04189C4.85766 3.22608 5.89707 2.67051 7.02862 2.44543C8.16018 2.22035 9.33307 2.33587 10.399 2.77738C11.4649 3.21889 12.3759 3.96657 13.0169 4.92585C13.6579 5.88514 14 7.01295 14 8.16668C14 9.71378 13.3854 11.1975 12.2914 12.2915C11.1975 13.3854 9.71374 14 8.16665 14Z"
                    fill="#667479"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="dfgh"
                className="flex-1 pl-3 pr-6 font-medium bgWhite text-darkBlue"
              />
            </div>
            <button className="flex items-center justify-center px-3 py-4 w-[200px] h-11 bg-darkBlue text-white font-normal rounded-full text-center">
              Join the community
            </button>
            <button className="flex items-center justify-center px-3 py-4 w-[100px] h-11 bg-darkBlue text-white font-normal rounded-full text-center">
              Join the
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
