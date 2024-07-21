import { useAppSelector } from "@store/hook";

const AccountInfo = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col gap-4 mt-6 m-auto p-20 py-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Account Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-lg text-gray-700 font-semibold">First Name:</p>
          <p className="text-gray-600">{accountInfo?.firstName}</p>
        </div>
        <div>
          <p className="text-lg text-gray-700 font-semibold">Last Name:</p>
          <p className="text-gray-600">{accountInfo?.lastName}</p>
        </div>
        <div>
          <p className="text-lg text-gray-700 font-semibold">Email:</p>
          <p className="text-gray-600">{accountInfo?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
