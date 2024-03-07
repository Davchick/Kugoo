import { Link } from 'react-router-dom';

const Telegram = ({ w, h }: { w?: number | string; h?: number | string }) => {
  return (
     <Link to="https://web.telegram.org" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={w ||"15"}
          height={h ||"16"}
          fill="none"
          viewBox="0 0 12 13"
        >
          <g clipPath="url(#clip0_2505_2365)">
            <path
              fill="#5D6C7B"
              d="M4.709 8.09l-.199 2.793c.284 0 .407-.122.555-.269l1.331-1.272 2.76 2.02c.505.282.862.134.998-.465l1.811-8.486c.161-.749-.27-1.041-.763-.858L.557 5.63c-.726.282-.715.687-.123.87l2.721.847L9.477 3.39c.297-.197.568-.088.345.11L4.71 8.09z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2505_2365">
              <path
                fill="#fff"
                d="M0 0H12V12H0z"
                transform="translate(0 .5)"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </Link>
  )
}

export default Telegram