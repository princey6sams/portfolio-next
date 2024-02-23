import Image from "next/image";
import "../globals.css";
import { replaceBase } from "@/utils/utils";

export default function Contact() {
  return (
    <main>
      <div className="boxShadow">
        <Image
          src={replaceBase("${Base}/signal_hill_foggy_city.JPG")}
          alt="contact-hero"
          className="background-image"
          height="2160"
          width="3840"
          quality={100}
          priority
        />
      </div>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
      <h1 className="pt-52">Contact</h1>
    </main>
  );
}

// Make the image a Carousel
