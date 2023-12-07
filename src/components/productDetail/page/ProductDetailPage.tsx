import { FC, useEffect, useState } from "react";
import { data as response } from "../../../../public/data";
import ImageDisplay from "../components/ImageDisplay";
import { IData, defaultData } from "../interfaces/IData";
import InfoDisplay from "../components/InfoDisplay";
import ProductFooter from "../components/ProductFooter";
import {
  IShop,
  defaultShop,
  ShopData as shopRes,
} from "../../../../public/shopData";

const ProductDetailPage: FC = () => {
  // const id = useParams<{id: string}>();
  const mockId = 1;
  const id = mockId;
  const [data, setData] = useState<IData>(defaultData);
  const [shopData, setShopData] = useState<IShop>(defaultShop);
  const [shopProduct, setShopProductCnt] = useState<number>(0);

  const handleBuy = () => {
    console.log("Buy");
  };

  const handleAddCart = () => {
    console.log("Add to Cart");
  };

  const handleVisitShop = () => {
    console.log("Visit shop");
  };

  const handleComment = () => {
    console.log("Open Comments");
  };

  const fetchData = (id: number) => {
    const updateProductData = response.filter((curData) => {
      return curData.id === id;
    });
    setData(updateProductData[0]);

    const updateShopProductData = response.filter((curData) => {
      const updateShopData = shopRes.filter((curData) => {
        return curData.id === updateProductData[0].shopId;
      });
      setShopData(updateShopData[0]);
      return curData.shopId === updateShopData[0].id;
    });
    setShopProductCnt(updateShopProductData.length);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-9/12">
        <div className="bg-[#DCA86A] flex flex-col justify-center items-center p-10 rounded-[20px]">
          <div className="flex flex-row">
            <ImageDisplay data={data.img} />
            <InfoDisplay
              data={data}
              handleAddCart={handleAddCart}
              handleBuy={handleBuy}
            />
          </div>
          <ProductFooter
            data={data}
            shopDatas={{ shopData, shopProduct }}
            handleComment={handleComment}
            handleVisitShop={handleVisitShop}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
