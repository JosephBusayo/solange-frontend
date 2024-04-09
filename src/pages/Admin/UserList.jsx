import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../redux/api/usersApislice";
import { toast } from "react-toastify";

const UserList = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();

  const [editableUserId, setEditableUserId] = useState(null);
  const [editableUserName, setEditableUserName] = useState("");
  const [editableUserEmail, setEditableUserEmail] = useState("");

  const [updateUser] = useUpdateUserMutation();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteUser(id);
        refetch();
        toast.success("User deleted successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const toggleEdit = (id, username, email) => {
    setEditableUserId(id);
    setEditableUserName(username);
    setEditableUserEmail(email);
  };

  const updateHandler = async (id) => {
    try {
      await updateUser({
        userId: id,
        username: editableUserName,
        email: editableUserEmail,
      });
      setEditableUserId(null);
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="p-4 bg-[#fff] min-h-[100vh]">
      <h1 className="text-2xl font-semibold mb-8 text-center uppercase text-[#000]">
        All Users
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="grid gap-4">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-gray-100 text-gray-800 p-4 rounded-md shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">ID: {user._id}</p>
                  <p className="font-semibold">Name: {user.username}</p>
                  <p className="font-semibold">Email: {user.email}</p>
                  <p className="font-semibold">
                    Admin: {user.isAdmin ? "Yes" : "No"}
                  </p>
                </div>
                {!user.isAdmin && (
                  <div>
                    {editableUserId === user._id ? (
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={editableUserName}
                          onChange={(e) => setEditableUserName(e.target.value)}
                          className="w-full p-2 border rounded-md bg-gray-200 text-gray-800 outline-none focus:border-blue-500"
                        />
                        <button
                          onClick={() => updateHandler(user._id)}
                          className="ml-2 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                        >
                          <FaCheck />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() =>
                            toggleEdit(user._id, user.username, user.email)
                          }
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <FaEdit className="ml-1" />
                        </button>
                        <button
                          onClick={() => deleteHandler(user._id)}
                          className="ml-2 bg-red-500 text-white p-3 rounded-md hover:bg-red-600"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UserList;
