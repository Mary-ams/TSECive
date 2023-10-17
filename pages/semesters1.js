import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Property1Variant2 from "../components/property1-variant2";
import Property1Default20 from "../components/property1-default20";
import Property1Default19 from "../components/property1-default19";
import Property1Default18 from "../components/property1-default18";
import Property1Default17 from "../components/property1-default17";
import Property1Default16 from "../components/property1-default16";
import Property1Default15 from "../components/property1-default15";
import Property1Default14 from "../components/property1-default14";
import Property1Default13 from "../components/property1-default13";

const Semesters1 = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onGroupContainer2Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onGroupContainer4Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onGroupContainer5Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onGroupContainer6Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onGroupContainer7Click = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onForwardIconClick = useCallback(() => {
    router.push("/subjects1");
  }, [router]);

  const onForwardIcon1Click = useCallback(() => {
    router.push("/departments1");
  }, [router]);

  const onTseciveLowResolutionColorLImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative [background:linear-gradient(189.41deg,_#f3fffd,_#f6f6f6)] w-full h-[909px] overflow-hidden text-left text-xl text-gray-100 font-poppins">
      <section className="absolute top-[0px] left-[0px] bg-white w-[1512px] h-[99px]" />
      <div className="absolute w-[9.79%] top-[42px] left-[21.83%] capitalize flex items-center h-[21px]">
        Semester
      </div>
      <div className="absolute top-[31px] left-[560px] w-[649px] h-[41px]">
        <div className="absolute top-[0px] left-[calc(50%_-_324.5px)] rounded-7xl box-border w-[649px] h-[41px] border-[1px] border-solid border-lightgray" />
        <input
          className="[border:none] font-poppins text-sm bg-[transparent] absolute top-[10px] left-[calc(50%_-_270.5px)] capitalize text-gray-100 text-left inline-block w-[567px] h-[21px] [outline:none]"
          placeholder="Search..."
          type="text"
        />
        <img
          className="absolute top-[8px] left-[calc(50%_-_314.5px)] w-6 h-6"
          alt=""
          src="/search-light.svg"
        />
      </div>
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
      <img
        className="absolute w-[8%] top-[4px] right-[85.38%] left-[6.61%] max-w-full overflow-hidden h-[103px] object-cover cursor-pointer"
        alt=""
        src="/tsecivelowresolutioncolorlogoremovebgpreview-1@2x.png"
        onClick={onTseciveLowResolutionColorLImageClick}
      />
      <Property1Default20
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="18.92%"
        property1DefaultRight="55.89%"
        property1DefaultBottom="69.2%"
        property1DefaultLeft="11.38%"
        property1DefaultCursor="pointer"
        onGroupContainerClick={onGroupContainerClick}
      />
      <Property1Default19
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="36.41%"
        property1DefaultRight="55.89%"
        property1DefaultBottom="51.71%"
        property1DefaultLeft="11.38%"
        property1DefaultCursor="pointer"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <Property1Default18
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="53.91%"
        property1DefaultRight="55.89%"
        property1DefaultBottom="34.21%"
        property1DefaultLeft="11.38%"
        property1DefaultCursor="pointer"
        onGroupContainer2Click={onGroupContainer2Click}
      />
      <Property1Default17
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="71.4%"
        property1DefaultRight="56.02%"
        property1DefaultBottom="16.72%"
        property1DefaultLeft="11.24%"
        property1DefaultCursor="pointer"
        onGroupContainer3Click={onGroupContainer3Click}
      />
      <Property1Default16
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="18.92%"
        property1DefaultRight="11.24%"
        property1DefaultBottom="69.2%"
        property1DefaultLeft="56.02%"
        property1DefaultCursor="pointer"
        onGroupContainer4Click={onGroupContainer4Click}
      />
      <Property1Default15
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="36.41%"
        property1DefaultRight="11.24%"
        property1DefaultBottom="51.71%"
        property1DefaultLeft="56.02%"
        property1DefaultCursor="pointer"
        onGroupContainer5Click={onGroupContainer5Click}
      />
      <Property1Default14
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="53.91%"
        property1DefaultRight="11.24%"
        property1DefaultBottom="34.21%"
        property1DefaultLeft="56.02%"
        property1DefaultCursor="pointer"
        onGroupContainer6Click={onGroupContainer6Click}
      />
      <Property1Default13
        property1DefaultWidth="32.74%"
        property1DefaultHeight="11.88%"
        property1DefaultPosition="absolute"
        property1DefaultTop="71.4%"
        property1DefaultRight="11.24%"
        property1DefaultBottom="16.72%"
        property1DefaultLeft="56.02%"
        property1DefaultCursor="pointer"
        onGroupContainer7Click={onGroupContainer7Click}
      />
    </div>
  );
};

export default Semesters1;
