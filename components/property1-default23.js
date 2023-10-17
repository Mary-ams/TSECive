import { useMemo, useState } from "react";

const Property1Default23 = ({
  artificialIntelligence, 
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultRight,
  property1DefaultBottom,
  property1DefaultLeft,
  property1DefaultCursor,
  onGroupContainer1Click,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const property1Default23Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      right: property1DefaultRight,
      bottom: property1DefaultBottom,
      left: property1DefaultLeft,
      cursor: property1DefaultCursor,
      backgroundColor: isHovered ? "#6FE4CF" : "white",
      color: isHovered ? "#f6f6f6" : "black",
      borderRadius: "20px",
      transition: "background-color 0.3s, color 0.3s",
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultRight,
    property1DefaultBottom,
    property1DefaultLeft,
    property1DefaultCursor,
    isHovered,
  ]);

  return (
    <div
      className="w-[302.11px] h-[335px] text-center text-5xl font-poppins"
      style={property1Default23Style}
      onClick={onGroupContainer1Click}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl" style={{ backgroundColor: isHovered ? "#6FE4CF" : "white", opacity: 0.7 }} />
      <div className="absolute h-[38.81%] w-[43.03%] top-[20.6%] right-[28.5%] bottom-[40.6%] left-[28.47%] rounded-[50%]" style={{ backgroundColor: isHovered ? "#f6f6f6" : "lightcyan" }} />
      <div className="absolute h-[11.34%] w-[79.11%] top-[68.96%] left-[10.26%] leading-[119.5%] capitalize font-medium inline-block" style={{ color: isHovered ? "#f6f6f6" : "black" }}>{`AI & Data Science`}</div>
      <img
        className="absolute h-1/5 w-[23.5%] top-[30.15%] right-[37.44%] bottom-[49.85%] left-[39.06%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={artificialIntelligence}
      />
    </div>
  );
};

export default Property1Default23;

