import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div> 
      <h1>This is my main portfolio page</h1><br></br>
      <Link href={'/projects'}>To Projects</Link>
    </div>
  );
}
