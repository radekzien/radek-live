import { NavBar } from "@/components/NavBar";
import { ProjectMapper } from "@/components/ProjectMapper";
import { Overview } from "@/components/Overview";
import { QualiMapper } from "@/components/QualiMapper";
import { Contact } from "@/components/Contact";

export default function Home() {
  return ( 
    <div id = 'root' className="p-2">

    <div id= 'nav'>
      <NavBar/>
    </div>
      
      <section id = 'Overview' className="pt-16">
        <Overview />
      </section>
      
      <section id = 'Projects' className="pt-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">My Projects</h1>
          <p className="mb-4 text-lg leading-relaxed">Here you can find some of my projects. To see my older or smaller projects please visit my github.</p>
          <div className="flex flex-wrap gap-4 justify-center">
          <ProjectMapper />
          </div>
        </div>
      </section>
      
      <section id = 'Education' className="pt-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">Education and Qualifications</h1>
          <div className="grid gap-4 justify-center">
            <QualiMapper />
          </div>
        </div>
      </section>
      
      <section id = 'Contact' className="pt-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">Contact me</h1>
          <Contact />
        </div>
      </section>
    </div>
  );
}
