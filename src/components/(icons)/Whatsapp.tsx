import { Link } from "react-router-dom";

const Whatsapp = ({ w, h }: { w?: number | string; h?: number | string }) => {
  return (
    <Link to="https://www.whatsapp.com" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w || "15"}
        height={h || "15"}
        fill="none"
        viewBox="0 0 13 13"
      >
        <g clipPath="url(#clip0_2505_2362)">
          <path
            fill="#5D6C7B"
            d="M6.497.504A5.996 5.996 0 001.45 9.736l-.933 2.421a.25.25 0 00.317.325l2.499-.892A5.996 5.996 0 106.497.504z"
          ></path>
          <path
            fill="#e8e8e8"
            d="M9.357 7.525s-.612-.3-.995-.5c-.434-.224-.944.195-1.184.433a3.007 3.007 0 01-1.003-.637 3.004 3.004 0 01-.636-1.003c.238-.24.655-.75.433-1.183-.198-.384-.5-.996-.5-.996a.25.25 0 00-.223-.138h-.5a1.506 1.506 0 00-1.249 1.5c0 .784.939 2.291 1.572 2.925.633.633 2.14 1.572 2.925 1.572a1.506 1.506 0 001.5-1.25V7.75a.25.25 0 00-.14-.224z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_2505_2362">
            <path
              fill="#fff"
              d="M0 0H12V12H0z"
              transform="translate(.5 .5)"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default Whatsapp;
