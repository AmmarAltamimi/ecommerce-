import ContentLoader from "react-content-loader";

const OrderTableSkeleton = () => (
  <div className="mx-auto max-w-[750px] flex justify-center">
    <div className='mt-6 block w-full mx-auto'>
      <h2 className="text-3xl font-bold text-gray-800 mb-4 ">Orders</h2>
      <div className="overflow-x-auto">
        <div className="shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            {/* head */}
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-6 py-3 text-left">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                  </ContentLoader>
                </th>
                <th className="px-6 py-3 text-left">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                  </ContentLoader>
                </th>
                <th className="px-6 py-3 text-left">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                  </ContentLoader>
                </th>
                <th className="px-6 py-3 text-left">
                  <ContentLoader
                    speed={2}
                    width={200}
                    height={20}
                    viewBox="0 0 200 20"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                  </ContentLoader>
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
              .fill(0)
                .map((_, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-6 py-4">
                      <ContentLoader
                        speed={2}
                        width={100}
                        height={12}
                        viewBox="0 0 100 12"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                      >
                        <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                      </ContentLoader>
                    </td>
                    <td className="px-6 py-4">
                      <ContentLoader
                        speed={2}
                        width={100}
                        height={12}
                        viewBox="0 0 100 12"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                      >
                        <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                      </ContentLoader>
                    </td>
                    <td className="px-6 py-4">
                      <ContentLoader
                        speed={2}
                        width={100}
                        height={12}
                        viewBox="0 0 100 12"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                      >
                        <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                      </ContentLoader>
                    </td>
                    <td className="px-12 py-4 cursor-pointer">
                      <ContentLoader
                        speed={2}
                        width={60}
                        height={24}
                        viewBox="0 0 60 24"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                      >
                        <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
                      </ContentLoader>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default OrderTableSkeleton;
