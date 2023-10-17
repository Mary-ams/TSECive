import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Property1Default7 from "../components/property1-default7";
import Property1Default6 from "../components/property1-default6";
import Property1Default5 from "../components/property1-default5";
import Property1Default4 from "../components/property1-default4";
import Property1Variant2 from "../components/property1-variant2";

const Content1 = () => {
  const router = useRouter();

  const onGroupContainer2Click = useCallback(() => {
    router.push("/individual1");
  }, [router]);

  const onForwardIconClick = useCallback(() => {
    router.push("/individual1");
  }, [router]);

  const onForwardIcon1Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onTseciveLowResolutionColorLImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative [background:linear-gradient(189.41deg,_#f3fffd,_#f6f6f6)] w-full h-[909px] overflow-hidden text-left text-xl text-gray-100 font-poppins">
      <section className="absolute top-[0px] left-[0px] bg-white w-[1512px] h-[99px]" />
      <Property1Default7
        documentsFolder="/documents-folder1@2x.png"
        property1DefaultWidth="18.06%"
        property1DefaultHeight="31.24%"
        property1DefaultPosition="absolute"
        property1DefaultTop="18.59%"
        property1DefaultRight="57.08%"
        property1DefaultBottom="50.17%"
        property1DefaultLeft="24.87%"
        rectangleDivCursor="pointer"
        rectangleDivBorder="none"
        rectangleDivPadding="0"
      />
      <Property1Default6
        uploadLinkDocument="/upload-link-document1@2x.png"
        property1DefaultWidth="18.06%"
        property1DefaultHeight="31.24%"
        property1DefaultPosition="absolute"
        property1DefaultTop="54.79%"
        property1DefaultRight="57.08%"
        property1DefaultBottom="13.97%"
        property1DefaultLeft="24.87%"
        property1DefaultCursor="pointer"
        onGroupContainer2Click={onGroupContainer2Click}
      />
      <Property1Default5
        youTube="/youtube1@2x.png"
        property1DefaultWidth="18.06%"
        property1DefaultHeight="31.24%"
        property1DefaultPosition="absolute"
        property1DefaultTop="18.59%"
        property1DefaultRight="24.87%"
        property1DefaultBottom="50.17%"
        property1DefaultLeft="57.08%"
      />
      <Property1Default4
        code="/code1@2x.png"
        property1DefaultWidth="18.06%"
        property1DefaultHeight="31.24%"
        property1DefaultPosition="absolute"
        property1DefaultTop="54.79%"
        property1DefaultRight="24.87%"
        property1DefaultBottom="13.97%"
        property1DefaultLeft="57.08%"
      />
      <Property1Variant2
        property1Variant2Property1="POST"
        property1Variant2Display="unset"
        property1Variant2FlexDirection="unset"
        property1Variant2AlignItems="unset"
        property1Variant2JustifyContent="unset"
        property1Variant2Position="absolute"
        property1Variant2Top="27px"
        property1Variant2Left="1311px"
      />
      <div className="absolute w-[7.74%] top-[41px] left-[21.83%] capitalize flex items-center h-[21px]">
        Content
      </div>
      <div className="absolute top-[40px] left-[250px] w-[64.48px] h-[22px]">
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
      <div className="absolute top-[30px] left-[560px] w-[649px] h-[41px]">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-7xl box-border h-[41px] border-[1px] border-solid border-lightgray" />
        <input
          className="[border:none] font-poppins text-sm bg-[transparent] absolute w-[89.37%] top-[10px] left-[7.24%] capitalize text-gray-100 text-left inline-block [outline:none]"
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
        className="absolute w-[8%] top-[3px] right-[85.38%] left-[6.61%] max-w-full overflow-hidden h-[103px] object-cover cursor-pointer"
        alt=""
        src="/tsecivelowresolutioncolorlogoremovebgpreview-1@2x.png"
        onClick={onTseciveLowResolutionColorLImageClick}
      />
    </div>
  );
};

export default Content1;
