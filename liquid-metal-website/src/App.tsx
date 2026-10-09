
import LiquidMetalHero from "@/components/ui/liquid-metal-hero";

const projects = [
  {
    name: "NOVA AI Assistant",
    category: "PERSONAL AI",
    description:
      "A Python-based personal assistant featuring local AI chat, voice input, text-to-speech, memory, and a futuristic interface.",
    tags: ["Python", "Local AI", "Voice AI"],
    status: "Core Project",
    url: "#",
  },
  {
    name: "NOVA Color Fire Hand Tracker",
    category: "COMPUTER VISION",
    description:
      "A hand-tracking experiment using MediaPipe and OpenCV, with gesture detection, two-hand tracking, and colorful visual effects.",
    tags: ["Python", "MediaPipe", "OpenCV"],
    status: "In Development",
    url: "#",
  },
  {
    name: "AI-Tech Portfolio",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive futuristic portfolio showcasing projects, technical skills, certificates, and contact information.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Live Website",
    url: "https://rohitsolanke74-sketch.github.io/AI-Tech-Portfolio3.0-updated/",
  },
  {
    name: "AI Skincare Website",
    category: "WEB EXPERIENCE",
    description:
      "A modern skincare website concept with a login interface, interactive sections, and planned AI-powered features.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "In Progress",
    url: "#",
  },
  {
    name: "Silver Jewellery Store",
    category: "E-COMMERCE",
    description:
      "A jewellery storefront concept exploring product presentation, Shopify theme customization, and online store design.",
    tags: ["Shopify", "UI Design", "E-commerce"],
    status: "Concept",
    url: "#",
  },
];

const skills = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "OpenCV",
  "MediaPipe",
  "Flask",
  "GitHub",
  "Computer Vision",
  "AI Applications",
];

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl sm:px-8 md:px-12">
        <a href="#" className="text-xl font-bold tracking-tight">
          RS<span className="text-white/40">.</span>
        </a>

        <div className="flex gap-3 text-xs text-white/70 sm:gap-6 sm:text-sm">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </nav>

      <LiquidMetalHero
        badge="✦ AUTOMATION & ROBOTICS"
        title="Hi, I'm Rohit Solanke."
        subtitle="Automation & Robotics student exploring artificial intelligence, computer vision, robotics, and futuristic web experiences."
        primaryCtaLabel="Explore My Work ↗"
        secondaryCtaLabel="Contact Me"
        onPrimaryCtaClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
        onSecondaryCtaClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
        features={[
          "AI & Automation",
          "Computer Vision",
          "Creative Web Experiences",
        ]}
      />

      <section id="about" className="scroll-mt-24 border-t border-white/10 px-6 py-20 sm:py-24 md:px-16">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
          About Me
        </p>
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          Exploring the future through code and robotics.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
          I'm Rohit Solanke, an Automation and Robotics student passionate
          about AI assistants, computer vision, robotics, and web development.
          I enjoy experimenting with new technologies and turning ideas into
          practical projects.
        </p>
      </section>

      <section id="skills" className="scroll-mt-24 border-t border-white/10 px-6 py-20 md:px-16">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
          My Toolkit
        </p>
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white/75 transition hover:border-white/40 hover:bg-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-t border-white/10 px-6 py-20 sm:py-24 md:px-16">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
          Selected Work
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Projects & Experiments
        </h2>
        <p className="mb-10 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
          A collection of AI experiments, computer vision projects, and web
          design concepts I'm building and exploring.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-xl hover:shadow-white/[0.03] sm:p-6"
            >
              <div className="mb-8 flex items-center justify-between gap-3">
                <span className="text-xs tracking-[0.15em] text-white/40">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] tracking-wider text-white/55 sm:text-[10px]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {project.name}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-white/60">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/[0.06] px-2.5 py-1.5 text-xs text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                <span className="text-xs text-white/45">
                  {project.status}
                </span>

                {project.url !== "#" ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-sm text-white transition hover:text-white/60"
                  >
                    Visit Project ↗
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-white/30">
                    Link not added
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 px-6 py-20 text-center sm:py-24 md:px-16">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
          Get In Touch
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let's build something meaningful.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          Interested in AI, robotics, or web projects? Let's connect and
          explore ideas together.
        </p>

        <a
          href="mailto:vs3241249@gmail.com"
          className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-white/85"
        >
          Contact Me ↗
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <a
            href="https://github.com/rohitsolanke74-sketch"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://rohitsolanke74-sketch.github.io/AI-Tech-Portfolio3.0-updated/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Existing Portfolio
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/40 sm:text-sm">
        © {new Date().getFullYear()} Rohit Solanke. Built with curiosity and creativity.
      </footer>
    </main>
  );
}