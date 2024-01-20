import { ITEMS_PER_PAGE } from "../OrderTable";

export type PaginationProps = {
  totalItems: number;
  selectedPage: number;
  onChange: (newPage: number) => void;
};

export const Pagination = ({ onChange, totalItems, selectedPage }: PaginationProps) => {
  const numberOfPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Lib like ramda could be used here for comfortable reading
  // const pages = R.range(0, numberOfPages);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <>
      {!!totalItems && (
        <div className="w-full flex items-center justify-center space-x-2">
          {pages.map((page) => (
            <button
              key={`page-${page}`}
              className={`rounded-full px-4 py-2 ${
                page === selectedPage
                  ? "text-black bg-gray-1 ring-2 ring-gray-1.5 font-bold"
                  : "text-gray-4"
              }`}
              onClick={() => {
                onChange(page);
              }}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
