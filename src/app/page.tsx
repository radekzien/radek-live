import { NavBar } from "@/components/NavBar";
import { ProjectMapper } from "@/components/ProjectMapper";
import { Overview } from "@/components/Overview";
import { QualiMapper } from "@/components/QualiMapper";
import { Contact } from "@/components/Contact";

export default function Home() {
  return ( 
    <div id = 'root'>

    <div id= 'nav'>
      <NavBar/>
    </div>
      
      <section id = 'Overview' className="pt-16">
        <Overview />
      </section>
      
      <section id = 'Projects'>
        <div>
          <h1>My Projects</h1>
          <ProjectMapper />
        </div>
      </section>
      
      <section id = 'Education'>
        <div>
          <h1>Education and Qualifications</h1>
          <QualiMapper />
        </div>
      </section>
      
      <section id = 'Contact'>
        <div>
          <h1>Contact me</h1>
          <Contact />
        </div>
      </section>
    </div>
  );
}
