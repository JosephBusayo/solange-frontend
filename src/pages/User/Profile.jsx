import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { useProfileMutation } from "../../redux/api/usersApislice";
import { setCredentials } from "../../redux/features/auth/authSlice";

import Loader from "../../components/Loader";
const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.username]);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        if (username === userInfo.username || email === userInfo.email) {
          toast.error("Please enter unique username and email");
          return null;
        }
        const res = await updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        setPassword("");
        setConfirmPassword("");
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl"
      >
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
          Update Profile
        </h2>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="input-field p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-gray-300 placeholder-gray-700 text-black outline-none border-[#57575b] focus:border-[#FF2E63]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            className="input-field p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-gray-300 placeholder-gray-700 text-black outline-none border-[#57575b] focus:border-[#FF2E63]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="input-field p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-gray-300 placeholder-gray-700 text-black outline-none border-[#57575b] focus:border-[#FF2E63]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="input-field p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] bg-gray-300 placeholder-gray-700 text-black outline-none border-[#57575b] focus:border-[#FF2E63]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-[#0e1629] hover:bg-[#060911] transition-colors text-[#5DD9C1] border-none outline-none px-6 py-3 rounded cursor-pointer text-base font-semibold">
            <Link to="/user-orders">My Orders</Link>
          </button>
          <button
            type="submit"
            className="bg-[#0e1629] hover:bg-[#060911] transition-colors text-[#5DD9C1] border-none outline-none px-6 py-3 rounded cursor-pointer text-base font-semibold"
          >
            Update
          </button>
        </div>
        {loadingUpdateProfile && <Loader />}
      </form>
    </div>
  );
};
export default Profile;
