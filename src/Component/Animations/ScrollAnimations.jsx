import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-10 text-center ">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600 text-transparent bg-clip-text pb-4">
              Products that Elevate Your <br />
              <span className="text-3xl md:text-[6rem]  font-bold mt-1 leading-none">
                Data Center Uptime
              </span>
            </h1>
          </div>
        }
      >
        {/* https://datumcenter.com/media/1633/datacentergif.gif */}
        <img
          src="https://datumcenter.com/media/1633/datacentergif.gif"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto object-cover rounded-2xl  h-full "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
