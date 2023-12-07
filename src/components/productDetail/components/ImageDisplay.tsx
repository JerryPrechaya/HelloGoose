import { FC, useEffect, useState } from "react";
import arrowImg from "../images/ArrowImage.png";

const ImageDisplay: FC<{ data: string | string[] }> = ({ data }) => {
  const isMultipleImage: boolean = typeof data !== "string" && data.length > 1;
  const mainStyle = { width: "264px", height: "264px", borderRadius: "10px" };
  const miniStyle = { width: "81px", height: "81px", borderRadius: "5px" };
  const leftArrowStyle = { width: "31px", height: "47px" };
  const rightArrowStyle = {
    width: "31px",
    height: "47px",
    transform: "rotate(180deg)",
  };
  const [mainImg, setMainImage] = useState<string>();
  const [imgPtr, setImgPtr] = useState<number>(0);

  useEffect(() => {
    Array.isArray(data) ? setMainImage(data[0]) : setMainImage(String(data));
  }, [data]);

  const handleImgSelect = (i: number) => {
    setMainImage(data[i]);
  };

  const handleLeftArrowClick = () => {
    setImgPtr((prevImgPtr) => (prevImgPtr > 0 ? prevImgPtr - 1 : prevImgPtr));
  };

  const handleRightArrowClick = () => {
    setImgPtr((prevImgPtr) =>
      prevImgPtr < data.length - 3 ? prevImgPtr + 1 : prevImgPtr
    );
  };

  return (
    <div className="flex flex-col justify-between items-center w-[400px] h-[375px]">
      {/* MainImg */}
      <img src={mainImg} style={mainStyle} />
      {isMultipleImage && Array.isArray(data) && (
        <div className="flex flex-row justify-between items-center w-full">
          <img
            src={arrowImg}
            style={leftArrowStyle}
            onClick={handleLeftArrowClick}
          />
          {data.slice(imgPtr, imgPtr + 3).map((img: string, index: number) => (
            <div key={index} onClick={() => handleImgSelect(imgPtr + index)}>
              <img src={img} style={miniStyle} />
            </div>
          ))}
          <img
            src={arrowImg}
            style={rightArrowStyle}
            onClick={handleRightArrowClick}
          />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
