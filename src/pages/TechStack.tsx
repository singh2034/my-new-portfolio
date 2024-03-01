import { TechStackList } from "@/components/shared/TechList";

const TechStack = () => {
  return (
    <main>
      <div id="tech-stack">
        <div className="container py-10 md:py-20 sapce-y-5">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center underline underline-offset-4">
              My Tech Stack
            </h1>
            <h2 className="text-lg font-medium text-center">
              Including Programming Languages, Frameworks, DataBases, front-end
              and back-end tools and APIs.{" "}
              <span className="text-red-500">*In Learning Phase</span>
            </h2>
          </div>
          <div>
            <div className="mt-10">
              {/* tech stack lists card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 w-full h-full">
                {TechStackList.map((tech) => (
                  <div
                    className="flex items-center justify-center gap-2 p-4 shadow-md bg-slate-100 hover:bg-slate-300 duration-200 cursor-pointer"
                    key={tech._id}
                  >
                    <div>
                      <tech.icon size={30} />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium">{tech.name}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TechStack;
