import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full py-20">
      {/* Profile Image with Glow */}
      <div className="relative flex-shrink-0">
        {/* Glow Background */}
        <div className="absolute inset-0 rounded-2xl bg-indigo-500 blur-2xl opacity-40 animate-pulse"></div>

        <Image
          src="/profile4.jpg"
          alt="About me"
          width={320}
          height={320}
          className="relative rounded-2xl object-cover border-2 border-indigo-500 shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          I am a <span className="font-bold">3rd-year IT student</span> at the
          University of San Carlos, specializing in{" "}
          <span className="text-indigo-400">networking</span> and{" "}
          <span className="text-indigo-400">cybersecurity</span>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Beyond coding, I serve as{" "}
          <span className="font-bold">Treasurer for the CISCO Council</span>,
          where I strengthen leadership and teamwork skills.
        </p>
        <p className="text-lg leading-relaxed">
          My current focus is applying my expertise through my capstone project{" "}
          <span className="text-indigo-400 font-semibold">PaintPro</span>, while
          expanding into cloud, security, and data analytics.
        </p>
      </div>
    </div>
  );
}
