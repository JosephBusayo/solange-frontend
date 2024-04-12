const CategoryForm = ({
  value,
  setValue,
  handleSubmit,
  buttonText = "Add Category",
  handleDelete,
}) => {
  return (
    <div className="p-3">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="mt-1 p-2 border rounded w-[70%] bg-gray-200 placeholder-gray-700 text-[#000] outline-none border-[#57575b] focus:border-[#FF2E63]"
          placeholder="Write category name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-between gap-4">
          <button className="bg-[#0e1629] hover:bg-[#060911] transition-colors text-[#5DD9C1] border-none outline-none md:w-[180px] px-4 py-2 cursor-pointer my-[1rem] text-base font-semibold rounded-sm">
            {buttonText}
          </button>

          {handleDelete && (
            <button
              onClick={handleDelete}
              className="bg-[#0e1629] hover:bg-[#060911] transition-colors text-[#5DD9C1] hover:text-[#e45050] border-none outline-none md:w-[180px] px-4 py-2 cursor-pointer my-[1rem] text-base font-semibold rounded-sm"
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
