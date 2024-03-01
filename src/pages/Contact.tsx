import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <main>
      <div id="get-in-touch">
        <div className="container py-10 md:py-20">
          <div className="space-y-3 text-center">
            <div>
              <h1 className="text-2xl md:text-4xl font-medium">Get In Touch</h1>
            </div>
            <div>
              <div>
                <h2 className="text-xl font-medium text-slate-500">
                  I would love to hear from you! Please allow me 24-48 hours for
                  a response.
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-center">
              <div className="border-[#f76245] border-2 p-3 rounded-md">
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    <Input id="name" placeholder="Your Name" />
                    <Input id="email" placeholder="Your Email" />
                  </div>
                  <Input id="subject" placeholder="Subject" />
                  <Input id="contact" placeholder="Contact Number" />
                  <Textarea id="message" placeholder="Your Message" />
                  <Button type="submit" className="hover:bg-[#f76245]">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
