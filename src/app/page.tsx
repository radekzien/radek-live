import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div id = 'root'>
      <section id = 'overview'>
        <div>
          <h1>Overview</h1>
        </div>
      </section>
      <section id = 'projects'>
        <div>
          <h1>My Projects</h1>
        </div>
      </section>
      <section id = 'education'>
        <div>
          <h1>Education and Qualifications</h1>
        </div>
      </section>
      <section id = 'contact'>
        <div>
          <h1>Contact me</h1>
        </div>
      </section>
    </div>
  );
}
