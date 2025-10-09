import robotImg from "@/assets/images/robot.jpg";
import LoaderSVG from "@/assets/images/loader.svg";
import Button from "@/components/Button";
import Image from "next/image";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";

export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto px-4 lg:px-8">
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[650px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[950px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1250px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[1550px]" />
              </div>
            </div>

            <div className="max-w-[250px] md:max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
                Unlock the Future of AI Conversations with{" "}
                <span className="relative">
                  <span>Sphereal</span>
                  <span
                    className="absolute w-full h-4 left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                    style={{
                      maskImage: "url(/underline.svg)",
                      maskSize: "contain",
                      maskPosition: "center",
                      maskRepeat: "no-repeat",
                    }}
                  ></span>
                </span>
              </h1>
            </div>

            <p className="max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto text-center text-lg md:text-xl mt-8">
              Harness the power of AI with Sphereal. Elvevate you productivity
              and streamlien you workflow with our cutting-edge chat platform.
            </p>

            <div className="flex justify-center mt-10">
              <Button variant="secondary">Start Chatting</Button>
            </div>

            <div className="relative isolate lg:max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[320px] -translate-y-[83px] rotate-[135deg]"
                />
              </div>

              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-y-[155px] translate-x-[310px] rotate-[135deg]"
                />
              </div>

              <div className="absolute left-1/2 top-0">
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-y-[370px] -translate-x-[500px] rotate-[135deg]"
                />
              </div>

              <div className="absolute left-1/2 top-0">
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-y-[370px] translate-x-[500px] -rotate-[135deg]"
                />
              </div>

              <div className="hidden lg:block absolute top-[30%] -translate-x-10 z-10">
                <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 w-72">
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute right-0 top-[50%] translate-x-10 z-10">
                <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-4 w-72">
                  <div>
                    <strong>Brainwave:</strong> I created a video tutorial
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </div>
              </div>

              <div className="mt-20 relative flex rounded-2xl border-2 overflow-hidden border-gradient">
                <Image src={robotImg} alt="robot" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
                  <div className="bg-gray-950 flex items-center gap-4 px-4 py-2 rounded-xl w-[320px] max-w-full">
                    <LoaderSVG className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating <span>|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
