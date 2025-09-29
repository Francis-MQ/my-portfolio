"use client";

export default function Projects() {
  const projects = [
    {
      title: "Mobile App To Do List",
      subtitle: "Mobile Development Project",
      tech: ".NET MAUI, C#, XAML, SQLite, MVVM, RESTful API",
      desc: "Built a To-Do list app with .NET MAUI that includes user authentication and CRUD task management via RESTful API.",
    },
    {
      title: "Appointment Schedule System App",
      subtitle: "Object-Oriented Programming Project",
      tech: "Java, NetBeans, OOP (Classes & Inheritance, File Handling, Polymorphism)",
      desc: "Developed a scheduling system allowing users to log in as admin, client, or manager with role-based access, appointment management, and time organization.",
    },
    {
      title: "Relay – Social Media Platform Prototype",
      subtitle: "Systems Integration and Architecture Project",
      tech: ".NET MAUI, Firebase Authentication, Firebase Cloud Messaging, Content Moderation API, Figma",
      desc: "Designed a streamlined web-based social media platform with unique features such as ping (like) and address (comment). Integrated secure login, real-time notifications, and content moderation for safe engagement.",
    },
    {
      title: "FitTrack Pro Website",
      subtitle: "Information Management 2 Project",
      tech: "HTML, CSS, JavaScript, SQLite, Firebase, Information Management Concepts",
      desc: "Created an integrated health and fitness management platform to track activities, monitor progress, and provide personalized recommendations through analytics and data-driven insights.",
    },
    {
      title: "The Fisherman’s Cafe Website",
      subtitle: "Web Development Project",
      tech: "PHP, HTML, CSS, JavaScript, MySQL, XAMPP",
      desc: "Built a restaurant website that allows customers to browse menus, reserve tables, place food orders, and provide feedback, enhancing online visibility and customer engagement.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-8 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-10">
          University Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="italic text-indigo-300">{project.subtitle}</p>
              <p className="mt-2 text-sm text-gray-400">
                <span className="font-semibold">Tech:</span> {project.tech}
              </p>
              <p className="mt-2 text-gray-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
