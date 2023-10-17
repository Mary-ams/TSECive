import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Property1Default12 from "../components/property1-default12";
import Property1Default11 from "../components/property1-default11";
import Property1Default10 from "../components/property1-default10";
import Property1Default9 from "../components/property1-default9";
import Property1Default8 from "../components/property1-default8";
import Property1Variant2 from "../components/property1-variant2";

const Subjects1 = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/content1");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/content1");
  }, [router]);

  const onGroupContainer2Click = useCallback(() => {
    router.push("/content1");
  }, [router]);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/content1");
  }, [router]);

  const onGroupContainer4Click = useCallback(() => {
    router.push("/content1");
  }, [router]);

  const onForwardIconClick = useCallback(() => {
    router.push("/content1");
  }, [router]);

  const onForwardIcon1Click = useCallback(() => {
    router.push("/semesters1");
  }, [router]);

  const onTseciveLowResolutionColorLImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative [background:linear-gradient(189.41deg,_#f3fffd,_#f6f6f6)] w-full h-[909px] overflow-hidden text-left text-xl text-gray-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-white w-[1512px] h-[99px]" />
      <Property1Default12
        stackframeFill="/stackframe-fill1.svg"
        property1DefaultWidth="31.48%"
        property1DefaultHeight="14.41%"
        property1DefaultPosition="absolute"
        property1DefaultTop="20.02%"
        property1DefaultRight="55.75%"
        property1DefaultBottom="65.57%"
        property1DefaultLeft="12.76%"
        property1DefaultCursor="pointer"
        onGroupContainerClick={onGroupContainerClick}
      />
      <Property1Default11
        stackframeFill="/stackframe-fill2.svg"
        property1DefaultWidth="31.48%"
        property1DefaultHeight="14.41%"
        property1DefaultPosition="absolute"
        property1DefaultTop="20.13%"
        property1DefaultRight="12.9%"
        property1DefaultBottom="65.46%"
        property1DefaultLeft="55.62%"
        property1DefaultCursor="pointer"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <Property1Default10
        stackframeFill="/stackframe-fill3.svg"
        property1DefaultWidth="31.48%"
        property1DefaultHeight="14.63%"
        property1DefaultPosition="absolute"
        property1DefaultTop="42.79%"
        property1DefaultRight="55.75%"
        property1DefaultBottom="42.57%"
        property1DefaultLeft="12.76%"
        property1DefaultCursor="pointer"
        onGroupContainer2Click={onGroupContainer2Click}
      />
      <Property1Default9
        stackframeFill="/stackframe-fill4.svg"
        property1DefaultWidth="31.48%"
        property1DefaultHeight="14.63%"
        property1DefaultPosition="absolute"
        property1DefaultTop="43.01%"
        property1DefaultRight="12.83%"
        property1DefaultBottom="42.35%"
        property1DefaultLeft="55.69%"
        property1DefaultCursor="pointer"
        onGroupContainer3Click={onGroupContainer3Click}
      />
      <Property1Default8
        stackframeFill="/stackframe-fill2.svg"
        property1DefaultWidth="31.48%"
        property1DefaultHeight="14.41%"
        property1DefaultPosition="absolute"
        property1DefaultTop="66.23%"
        property1DefaultRight="34.33%"
        property1DefaultBottom="19.36%"
        property1DefaultLeft="34.19%"
        property1DefaultCursor="pointer"
        onGroupContainer4Click={onGroupContainer4Click}
      />
      <Property1Variant2
        property1Variant2Property1="POST"
        property1Variant2Display="unset"
        property1Variant2FlexDirection="unset"
        property1Variant2AlignItems="unset"
        property1Variant2JustifyContent="unset"
        property1Variant2Position="absolute"
        property1Variant2Top="28px"
        property1Variant2Left="1311px"
      />
      <div className="absolute w-[8.13%] top-[42px] left-[21.83%] capitalize flex items-center h-[21px]">
        Subjects
      </div>
      <div className="absolute top-[41px] left-[250px] w-[64.48px] h-[22px]">
        <img
          className="absolute w-[32.94%] top-[0px] right-[0%] left-[67.06%] max-w-full overflow-hidden h-[22px] object-cover cursor-pointer"
          alt=""
          src="/forward@2x.png"
          onClick={onForwardIconClick}
        />
        <img
          className="absolute w-[34.12%] top-[0px] right-[65.88%] left-[0%] max-w-full overflow-hidden h-[22px] object-cover cursor-pointer"
          alt=""
          src="/forward1@2x.png"
          onClick={onForwardIcon1Click}
        />
      </div>
      <div className="absolute top-[31px] left-[560px] w-[649px] h-[41px]">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-7xl box-border h-[41px] border-[1px] border-solid border-lightgray" />
        <input
          className="[border:none] font-poppins text-sm bg-[transparent] absolute w-[89.21%] top-[10px] left-[7.24%] capitalize text-gray-100 text-left inline-block h-[21px] [outline:none]"
          placeholder="Search..."
          type="text"
        />
        <img
          className="absolute w-[3.7%] top-[8px] right-[94.76%] left-[1.54%] max-w-full overflow-hidden h-6"
          alt=""
          src="/search-light.svg"
        />
      </div>
      <img
        className="absolute w-[8%] top-[4px] right-[85.38%] left-[6.61%] max-w-full overflow-hidden h-[103px] object-cover cursor-pointer"
        alt=""
        src="/tsecivelowresolutioncolorlogoremovebgpreview-1@2x.png"
        onClick={onTseciveLowResolutionColorLImageClick}
      />
    </div>
  );
};

export default Subjects1;
