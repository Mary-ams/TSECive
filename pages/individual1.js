import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Property1Default3 from "../components/property1-default3";
import Property1Default2 from "../components/property1-default2";
import Property1Default0 from "../components/property1-default0";
import Property1Default1 from "../components/property1-default1";
import Property1Default from "../components/property1-default";
import Property1Variant2 from "../components/property1-variant2";
import { useRouter } from "next/router";

const Individual1 = () => {
  const router = useRouter();

  const onForwardIcon1Click = useCallback(() => {
    router.push("/content1");
  }, [router]);

  const onTseciveLowResolutionColorLImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative [background:linear-gradient(189.41deg,_#f3fffd,_#f6f6f6)] w-full h-[909px] overflow-hidden text-center text-5xl text-gray-100 font-poppins">
      <section className="absolute top-[0px] left-[0px] bg-white w-[1512px] h-[99px]" />
      <section className="absolute h-[11.44%] w-[76.98%] top-[27.06%] right-[11.51%] bottom-[61.5%] left-[11.51%] rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#c7fff5,_rgba(147,_236,_220,_0))]" />
      <div className="absolute h-[3.52%] w-[5.22%] top-[31.02%] left-[17.92%] leading-[119.5%] capitalize font-medium inline-block">
        Name
      </div>
      <div className="absolute h-[4.62%] w-[6.02%] top-[31.02%] left-[76.26%] leading-[119.5%] capitalize font-medium inline-block">
        File Size
      </div>
      <section className="absolute top-[350px] left-[174px] rounded-t-none rounded-b-xl bg-gray-300 w-[1164px] h-[452px]" />
      <Property1Default3
        property1DefaultWidth="70.44%"
        property1DefaultHeight="7.59%"
        property1DefaultPosition="absolute"
        property1DefaultTop="42.24%"
        property1DefaultRight="14.81%"
        property1DefaultBottom="50.17%"
        property1DefaultLeft="14.75%"
      />
      <Property1Default0
        property1DefaultWidth="70.44%"
        property1DefaultHeight="7.59%"
        property1DefaultPosition="absolute"
        property1DefaultTop="42.24%"
        property1DefaultRight="14.81%"
        property1DefaultBottom="50.17%"
        property1DefaultLeft="14.75%"
      />
      <Property1Default2
        property1DefaultWidth="70.44%"
        property1DefaultHeight="7.48%"
        property1DefaultPosition="absolute"
        property1DefaultTop="64.8%"
        property1DefaultRight="14.81%"
        property1DefaultBottom="27.72%"
        property1DefaultLeft="14.75%"
      />
      <Property1Default1
        property1DefaultWidth="70.44%"
        property1DefaultHeight="7.59%"
        property1DefaultPosition="absolute"
        property1DefaultTop="75.91%"
        property1DefaultRight="14.81%"
        property1DefaultBottom="16.5%"
        property1DefaultLeft="14.75%"
      />
      <Property1Default
        property1DefaultWidth="70.44%"
        property1DefaultHeight="7.48%"
        property1DefaultPosition="absolute"
        property1DefaultTop="53.47%"
        property1DefaultRight="14.81%"
        property1DefaultBottom="39.05%"
        property1DefaultLeft="14.75%"
      />
      <div className="absolute w-[26.72%] top-[165px] left-[11.51%] text-[28px] leading-[119.5%] capitalize font-medium text-black text-left inline-block h-6">
        Past Year Questions
      </div>
      <Property1Variant2
        property1Variant2Property1="POST"
        property1Variant2Display="unset"
        property1Variant2FlexDirection="unset"
        property1Variant2AlignItems="unset"
        property1Variant2JustifyContent="unset"
        property1Variant2Position="absolute"
        property1Variant2Top="29px"
        property1Variant2Left="1311px"
      />
      <div className="absolute w-[4.7%] top-[43px] left-[21.83%] text-xl capitalize text-left flex items-center h-[21px]">
        PYQs
      </div>
      <div className="absolute top-[42px] left-[250px] w-[64.48px] h-[22px]">
        <img
          className="absolute w-[32.94%] top-[0px] right-[0%] left-[67.06%] max-w-full overflow-hidden h-[22px] object-cover"
          alt=""
          src="/forward@2x.png"
        />
        <img
          className="absolute w-[34.12%] top-[0px] right-[65.88%] left-[0%] max-w-full overflow-hidden h-[22px] object-cover cursor-pointer"
          alt=""
          src="/forward1@2x.png"
          onClick={onForwardIcon1Click}
        />
      </div>
      <div className="absolute top-[32px] left-[560px] w-[649px] h-[41px]">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-7xl box-border h-[41px] border-[1px] border-solid border-lightgray" />
        <input
          className="[border:none] font-poppins text-sm bg-[transparent] absolute w-[88.91%] top-[10px] left-[7.4%] capitalize text-gray-100 text-left inline-block h-[21px] [outline:none]"
          type="text"
        />
        <img
          className="absolute w-[3.7%] top-[8px] right-[94.76%] left-[1.54%] max-w-full overflow-hidden h-6"
          alt=""
          src="/search-light.svg"
        />
      </div>
      <img
        className="absolute w-[8%] top-[5px] right-[85.38%] left-[6.61%] max-w-full overflow-hidden h-[103px] object-cover cursor-pointer"
        alt=""
        src="/tsecivelowresolutioncolorlogoremovebgpreview-1@2x.png"
        onClick={onTseciveLowResolutionColorLImageClick}
      />
    </div>
  );
};

export default Individual1;
