import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { useGetOrdersQuery } from "../../redux/api/orderApiSlice";
import AdminMenu from "./AdminMenu";

const OrderList = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <div className="bg-gray-100 min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="overflow-x-auto">
          {/* <AdminMenu /> */}

          <div className="grid md:hidden gap-4 grid-cols-1">
            {orders.map((order) => (
              <div key={order._id} className="bg-white shadow-md rounded-lg">
                <div className="px-4 py-7">
                  <img
                    src={order.orderItems[0].image}
                    alt={order._id}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                    ID: {order._id}
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    User: {order.user ? order.user.username : "N/A"}
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    Date:{" "}
                    {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    Total: ${order.totalPrice}
                  </p>
                  <p className="py-3">
                    <span
                      className={`px-2 py-1 text-center rounded font-semibold ${
                        order.isPaid
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {order.isPaid ? "Completed" : "Pending"}
                    </span>
                  </p>
                  <p>
                    <span
                      className={`px-2 py-1 text-center rounded font-semibold ${
                        order.isDelivered
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {order.isDelivered ? "Completed" : "Pending"}
                    </span>
                  </p>
                  <Link to={`/order/${order._id}`}>
                    <button className="mt-4 px-3 py-1 text-white bg-blue-500 rounded">
                      More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <table className="hidden md:table min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr className="text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                <th className="px-4 py-3">ITEMS</th>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">USER</th>
                <th className="px-4 py-3">DATE</th>
                <th className="px-4 py-3">TOTAL</th>
                <th className="px-4 py-3">PAID</th>
                <th className="px-4 py-3">DELIVERED</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>

            <tbody className="divide-y text-black divide-gray-200 text-sm">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-4 py-7">
                    <img
                      src={order.orderItems[0].image}
                      alt={order._id}
                      className="w-20 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2">{order._id}</td>
                  <td className="px-4 py-2">
                    {order.user ? order.user.username : "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                  </td>
                  <td className="px-4 py-2">${order.totalPrice}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 text-center rounded font-semibold ${
                        order.isPaid
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {order.isPaid ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 text-center rounded font-semibold ${
                        order.isDelivered
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {order.isDelivered ? "Completed" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <Link to={`/order/${order._id}`}>
                      <button className="px-3 py-1 text-white bg-blue-500 rounded">
                        More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderList;
