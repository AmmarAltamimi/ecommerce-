
import ContentLoader from "react-content-loader";

const CardSkeleton = () => (
  <div className="space-y-4">
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className="flex items-start p-5 border-b border-gray-200"
          style={{ minWidth: "100%", maxWidth: "100%" }}
        >
          {/* CardSkeleton */}
          <div className="flex max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
            <ContentLoader
              speed={2}
              width={400}
              height={200}
              viewBox="0 0 400 200"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              {/* Image placeholder */}
              <rect x="0" y="0" rx="10" ry="10" width="33%" height="200" />

              {/* Text content placeholders */}
              <rect x="36%" y="10" rx="3" ry="3" width="61%" height="24" />
              <rect x="36%" y="40" rx="3" ry="3" width="61%" height="48" />
              <rect x="36%" y="100" rx="3" ry="3" width="40%" height="16" />

              {/* Button placeholder */}
              <rect x="80%" y="80" rx="3" ry="3" width="20%" height="40" />
            </ContentLoader>
          </div>

          {/* QuantitySelectorSkeleton */}
          <div className="ml-auto flex items-start">
            <div className="label form-control w-48">
              <div className="label">
                <span className="label-text">Quantity</span>
              </div>
              <div className="select select-bordered">
                <ContentLoader
                  speed={2}
                  width={48}
                  height={36}
                  viewBox="0 0 48 36"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  {/* Select box placeholder */}
                  <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                </ContentLoader>
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
);

export default CardSkeleton;
