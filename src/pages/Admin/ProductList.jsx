import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useCreateProductMutation,
  useUploadProductImageMutation,
} from "../../redux/api/productApiSlice.js";
import { useFetchCategoriesQuery } from "../../redux/api/categoryApiSlice";
import AdminMenu from "./AdminMenu";
import ContentWrapper from "../../components/ContentWrapper.jsx";



const ProductList = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const [uploadProductImage] = useUploadProductImageMutation();
  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useFetchCategoriesQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        name,
        description,
        price,
        category,
        quantity,
        brand,
        countInStock: stock,
        image: image ? image.name : "", // Adjusted to send image name
      };
      const response = await fetch("/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create product");
      }

      const data = await response.json();
      toast.success(`${data.name} is created`);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Product create failed. Try Again.");
    }
  };


  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]); // Change to e.target.files[0]

    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(e.target.files[0]); // Set the image directly
      setImageUrl(res.image);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <div className="bg-[#fff] min-h-[100vh]">
      <ContentWrapper>
        <div className="grid place-content-center items-center text-black py-5 mx-4">
          <div className="flex flex-col justify-center items-center">
            {/* <AdminMenu /> */}
            <div className="flex flex-col ">
              <div className="mb-1">
                <h1 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-4 text-[#000]">
                  Create Product
                </h1>
              </div>

              {imageUrl && (
                <div className="text-center text-black">
                  <img
                    src={imageUrl}
                    alt="product"
                    className="block max-h-[200px] w-[320px] md:w-[460px] xl:w-[98%] max-w-full object-contain object-center rounded-lg shadow-lg mb-4"
                  />
                </div>
              )}

              <div className="mb-1 ml-2">
                <label
                  className="border rounded bg-gray-400 hover:bg-gray-600 hover:text-white border-[#444444] xl:px-4 block w-[320px] 
            md:w-[460px] xl:w-[98%] text-center cursor-pointer py-4 text-base 2xl:text-xl font-semibold mb-1 text-[#000] overflow-hidden"
                >
                  {image ? image.name : "Upload Image"}

                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={uploadFileHandler}
                    className={`${!image ? "hidden" : " "
                      } ml-6 mt-1 p-2 bg-gray-200 placeholder-[#eaeaeab9] text-[#db1143f3] outline-none border-none text-base `}
                  />
                </label>
              </div>

              <div className="p-3">
                <div className="flex flex-wrap gap-6">
                  <div className="one">
                    <label htmlFor="name">Name</label> <br />
                    <input
                      type="text"
                      className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-gray-200 placeholder-[#eaeaeab9]  text-black outline-none border-[#444444] focus:border-[#FF2E63]"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="two">
                    <label htmlFor="name block">Price</label> <br />
                    <input
                      type="number"
                      className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-gray-200 placeholder-[#eaeaeab9]  text-black outline-none border-[#444444] focus:border-[#FF2E63]"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-6">
                  <div className="one">
                    <label htmlFor="name block">Quantity</label> <br />
                    <input
                      type="number"
                      className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-gray-200 placeholder-[#eaeaeab9]  text-black outline-none border-[#444444] focus:border-[#FF2E63]"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="two">
                    <label htmlFor="name block">Brand</label> <br />
                    <input
                      type="text"
                      className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-gray-200 placeholder-[#eaeaeab9]  text-black outline-none border-[#444444] focus:border-[#FF2E63]"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="">Description</label>
                  <textarea
                    type="text"
                    className="mt-1 p-2 border rounded  mb-1 bg-gray-200 placeholder-[#eaeaeab9]  text-black outline-none border-[#444444] focus:border-[#FF2E63] w-[320px] md:w-[460px] xl:w-[100%]"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div>
                    <label htmlFor="name block">Count In Stock</label> <br />
                    <input
                      type="text"
                      className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-gray-200 placeholder-[#eaeaeab9]  text-black outline-none border-[#57575b] focus:border-[#FF2E63]"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Category</label> <br />
                    <select
                      placeholder="Choose Category"
                      //   className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                      className="mt-1 p-2 border rounded  w-[320px] md:w-[460px] 2xl:w-[520px] mb-4 bg-gray-200 placeholder-[#eaeaeab9]  text-black outline-none border-[#57575b] focus:border-[#FF2E63]"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {categories?.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="xl:flex xl:justify-center xl:items-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#0e1629] hover:bg-[#060911] transition-colors text-[#5DD9C1] border-none outline-none w-[320px] md:w-[460px] lg:w-[100%] px-4 py-2 rounded cursor-pointer my-[1rem] text-base font-semibold"
                  >
                    Create
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default ProductList;
