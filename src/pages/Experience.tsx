import internship from "../assets/internship-certificate.webp";
import moreslides from "../assets/moreslides.webp";
import morestudios from "../assets/morestudios.webp";

const Experience = () => {
  return (
    <>
      <main>
        <div className="bg-gradient-to-br from-[#eae6ff]" id="experience">
          <div className="container py-10 md:py-20">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold underline underline-offset-4">
                Professional Experience
              </h1>
            </div>
            <div className="my-10">
              <div className="flex items-center justify-center">
                <div className="p-5 space-y-5 rounded-lg w-full">
                  <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-10">
                    {/* work experience */}
                    <div className="grid grid-cols-1 items-center">
                      <div>
                        <img
                          width={400}
                          height={400}
                          className="rounded-xl border-2 pointer-events-none select-none"
                          src={internship}
                          alt="moreslides-internship-certificate"
                        />
                      </div>
                    </div>
                    {/* moreslides and morestudios materials */}
                    <div className="grid grid-cols-1 items-center gap-5">
                      <div>
                        <img
                          width={530}
                          height={530}
                          className="rounded-xl border-2 pointer-events-none select-none"
                          src={morestudios}
                          alt="moreslides-internship-certificate"
                        />
                      </div>
                      <div>
                        <img
                          width={530}
                          height={530}
                          className="rounded-xl border-2 pointer-events-none select-none"
                          src={moreslides}
                          alt="moreslides-internship-certificate"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
