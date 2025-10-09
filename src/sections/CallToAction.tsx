import Button from "@/components/Button";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";
import SectionBorder from "@/components/SectionBorder";
import SectionContent from "@/components/SectionContent";

export const CallToAction = () => {
  return (
    <section>
      <div className="container mx-auto px-4 lg:px-8">
        <SectionBorder borderTop>
          <SectionContent className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="absolute-center">
                <Orbit className="size-[200px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[50px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[650px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[800px]" />
              </div>
            </div>

            <div className="absolute-center -z-10">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[200px] translate-y-[200px] rotate-45"
                />
              </div>
            </div>

            <div className="absolute-center -z-10">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-x-[200px] -translate-y-[200px] -rotate-[135deg]"
                />
              </div>
            </div>

            <div className="absolute-center -z-10">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="md"
                  color="teal"
                  className="-translate-x-[500px] rotate-90"
                />
              </div>
            </div>

            <div className="absolute-center -z-10">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="md"
                  color="teal"
                  className="translate-x-[500px] -translate-y-[100px] -rotate-[135deg]"
                />
              </div>
            </div>

            <div className="absolute-center -z-10">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[400px] -translate-y-[250px] rotate-[135deg]"
                />
              </div>
            </div>

            <div className="absolute-center -z-10">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="translate-x-[400px] translate-y-[150px] -rotate-45"
                />
              </div>
            </div>

            <h2 className="text-gray-200 font-semibold max-w-[250px] md:max-w-full lg:max-w-3xl mx-auto text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
              Join the AI Revolution with{" "}
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
            </h2>

            <p className="text-center text-lg md:text-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-8">
              Experience the transformation power of AI with Sphereal. Boost
              your productivity and streamline your workflow with our innovative
              AI chat platform.
            </p>

            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
