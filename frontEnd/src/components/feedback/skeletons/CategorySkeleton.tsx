import ContentLoader from "react-content-loader";

const CategorySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="w-[24%] bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col items-center"
          style={{ minWidth: "260px", maxWidth: "260px", minHeight: "380px", maxHeight: "380px" }}
        >
          <ContentLoader
            speed={2}
            width={260}
            height={380}
            viewBox="0 0 260 380"
            backgroundColor="#f7f7f7"
            foregroundColor="#e1dfdf"
          >
            {/* Image placeholder */}
            <rect x="0" y="0" rx="10" ry="10" width="260" height="200" />

            {/* Explore button placeholder */}
            <rect x="30" y="220" rx="5" ry="5" width="200" height="40" />

            {/* Title placeholder */}
            <rect x="30" y="280" rx="5" ry="5" width="200" height="20" />
          </ContentLoader>
        </div>
      ))}
  </div>
);

export default CategorySkeleton;
