const Experience = () => {
  return (
    <>
      <main>
        <div>
          <div className="container py-10 md:py-20">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold underline underline-offset-4">
                Professional Experience
              </h1>
            </div>
            <div className="my-10">
              <div className="flex items-center justify-center">
                <div className="border-[#5f4cdd] border-4 p-5 space-y-5 rounded-lg w-full">
                  {/* work experience */}
                  <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-between gap-8">
                    {/* left side */}
                    <div className="w-full">
                      <img
                        className="rounded-xl border-[3.7px] border-[#f76325] pointer-events-none select-none"
                        src="/src/assets/internship-certificate.webp"
                        alt="moreslides-internship-certificate"
                      />
                    </div>
                    {/* right side */}
                    <div className="w-full border-[3.7px] border-[#f76325] rounded-xl p-5">
                      <div className="space-y-5">
                        <div>
                          <h1 className="text-center font-medium text-3xl underline underline-offset-2">
                            Working Description
                          </h1>
                        </div>
                        <ol className="list-decimal px-3 space-y-5">
                          <li className="text-[1.01rem] font-medium">
                            Internship showcased web development skills with 5+
                            captivating front-end sites, honing coding
                            abilities.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Projects delved into user interface and experience
                            design intricacies.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Actively contributed to diverse design projects,
                            spanning presentations (PPT) and visually engaging
                            materials.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Hands-on experience resulted in a well-rounded skill
                            set.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Technical proficiency seamlessly merged with a keen
                            eye for design aesthetics.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Building 5+ front-end websites highlighted coding
                            prowess.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Dive into user interface and experience design
                            intricacies enhanced skills.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Active contribution to design projects, including
                            presentations and engaging materials.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Hands-on experience led to a balanced skill set.
                          </li>
                          <li className="text-[1.01rem] font-medium">
                            Technical proficiency paired with a keen eye for
                            design aesthetics.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  {/* name of the company and position */}
                  <div className="space-y-5">
                    <div className="text-2xl text-center md:text-3xl font-medium underline underline-offset-4">
                      MoreSlides.com Services Pvt. Ltd.
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
