import { data } from "../../public/data";
import { IoHeartSharp } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { useState } from "react";

const ProductList = () => {
  const [items, setItems] = useState(data);

  const filterItem = (categItem: string) => {
    const updateItem = data.filter((curItem) => {
      return curItem.categories === categItem;
    });
    setItems(updateItem);
  };

  const handleItemClick = (productId: number) => {
    window.location.href = `/product/${productId}`;
  };

  return (
    <>
      <div className="w-screen">
        <div className="flex justify-center text-xl text-white m-0 mt-9 w-screen">
          <button
            className="w-32 py-2 mr-11 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]"
            onClick={() => setItems(data)}
          >
            All
          </button>
          <button
            className="w-32 mr-11 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]"
            onClick={() => filterItem("desert")}
          >
            Desert
          </button>
          <button
            className="w-32 mr-11 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]"
            onClick={() => filterItem("clothes")}
          >
            Clothes
          </button>
          <button
            className="w-32 mr-11 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]"
            onClick={() => filterItem("stationery")}
          >
            Stationery
          </button>
          <button
            className="w-32 mr-11 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]"
            onClick={() => filterItem("book")}
          >
            Book
          </button>
          <button
            className="w-32 bg-[#F56362] rounded-2xl active:bg-[#F7C4AD]"
            onClick={() => filterItem("other")}
          >
            Other
          </button>
        </div>

        <div className="flex items-center justify-center mt-8 w-screen">
          <div className="grid grid-cols-4 gap-x-7 gap-y-3">
            {items.map((elem) => {
              const { id, productName, img, price, rate, numRate, saleAmount } =
                elem;
              return (
                <>
                  <div
                    key={id}
                    onClick={() => handleItemClick(id)}
                    className="w-[300px] h-fit bg-white inline-block p-3 m-3 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-300"
                  >
                    <img
                      className=" rounded-xl"
                      src={String(img)}
                      alt="Product Image"
                    />
                    <div className="mt-3">
                      <div className="flex w-full justify-between items-center">
                        <h4 className=" text-gray-500 items-center">
                          {" "}
                          ขายแล้ว: {saleAmount}
                        </h4>
                        <button>
                          <IoHeartSharp
                            size={20}
                            className="fill-[#F7C4AD] stroke-red-600 hover:fill-red-600"
                          />
                        </button>
                      </div>
                      <h1 className="mb-5 mt-2 text-xl font-bold">
                        {productName}
                      </h1>
                      <hr className="w-[95%] m-auto" />
                      <div className="flex items-center justify-between mt-5">
                        <h3 className="font-bold flex items-center gap-1">
                          <MdOutlineStar className="fill-yellow-400" />
                          {rate}{" "}
                          <span className="text-gray-500 text-xs font-light">
                            ({numRate})
                          </span>
                        </h3>
                        <h3 className="font-bold">฿{price}</h3>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
