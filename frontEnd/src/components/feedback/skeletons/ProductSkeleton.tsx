import ContentLoader from "react-content-loader";

const ProductSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="w-full shadow-lg bg-white rounded-lg overflow-hidden"
          style={{ maxWidth: "100%" }}
        >
          <ContentLoader
            speed={2}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            {/* Image placeholder */}
            <rect x="0" y="0" rx="10" ry="10" width="100%" height="52%" />

            {/* Gradient overlay */}
            <rect x="0" y="0" rx="10" ry="10" width="100%" height="52%" />

            {/* Heart button placeholder */}
            <rect x="88%" y="10%" rx="50%" ry="50%" width="8%" height="8%" />

            {/* Title placeholder */}
            <rect x="20" y="60%" rx="3" ry="3" width="60%" height="12" />

            {/* Price placeholder */}
            <rect x="20" y="70%" rx="3" ry="3" width="20%" height="10" />

            {/* Quantity info placeholder */}
            <rect x="20" y="80%" rx="3" ry="3" width="80%" height="8" />

            {/* Add to cart button placeholder */}
            <rect x="20" y="90%" rx="3" ry="3" width="100%" height="12" />
          </ContentLoader>
        </div>
      ))}
  </div>
);

export default ProductSkeleton;
