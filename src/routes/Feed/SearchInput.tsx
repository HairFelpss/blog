import React, { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="text-lg font-bold mb-3">
        <span role="img" aria-label="search emoji">
          🔎
        </span>{" "}
        Search
      </div>
      <input
        className="py-2 px-4 rounded-lg w-full focus:outline-none"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </div>
  )
}

export default SearchInput
