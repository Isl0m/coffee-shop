import { cva } from "class-variance-authority";

export const button = cva("font-medium rounded", {
  variants: {
    intent: {
      primary: [
        "text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300",
        "dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300",
      ],
      secondary: [
        "text-gray-900 bg-white hover:bg-gray-100 hover:text-blue-700",
        "focus:z-10 focus:ring-4 focus:ring-gray-200 disabled:bg-gray-200",
        "dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
      ],
      outline: [
        "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800",
        "focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:border-blue-300",
        "dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
      ],
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-4",
      large: "text-base py-3 px-5",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});
