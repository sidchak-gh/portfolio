import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "MoltMerch — Full-stack Marketplace",
      subtitle: "Type-safe merchandise platform with 94% TypeScript coverage",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sgalYHImHBBB4pu88R2611Xe9jpe4Y.png",
      tags: ["TanStack Start", "TypeScript", "PostgreSQL"],
      href: "https://sidchak.now.sh/moltmerch",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "VisionFlow — AI Traffic Monitoring",
      subtitle: "Real-time vehicle tracking with 90%+ accuracy",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g4pzpwbwCeOtuwruqXFDxhBiHudycl.png",
      tags: ["SAM2", "Computer Vision", "OpenCV"],
      href: "https://sidchak.now.sh/visionflow",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Earthquake Wave Analysis",
      subtitle: "Seismic data visualization across Indian states",
      imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uPJw3gOqoiQP814HVTxiw6Ynb8OeBs.png",
      tags: ["Python", "Flask", "Leaflet"],
      href: "https://sidchak.now.sh/earthquake-wave-analysis",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">sidchak</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["Build scalable", "full-stack solutions"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Full-stack developer and AI engineer based in Dehradun. Crafting production-ready applications with modern tech stacks, computer vision, and AI agents.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:siddharthchakraborty@gmail.me">
                      Get in touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Tech stack */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">TECH STACK</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-white/60 sm:grid-cols-2">
                    <li>React & TypeScript</li>
                    <li>TanStack Ecosystem</li>
                    <li>Python & FastAPI</li>
                    <li>PostgreSQL</li>
                    <li>Computer Vision</li>
                    <li>AI Agents (n8n)</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: projects and experience */}
          <div className="space-y-4">
            {/* Featured Projects */}
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName={idx === 0 ? "lg:h-[calc(100svh-2rem)]" : "lg:h-[45vh]"}
                revealDelay={idx * 0.06}
              />
            ))}

            {/* Experience & Education Section */}
            <RevealOnView
              delay={0.3}
              className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
            >
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Experience */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-white/90">AI Intern</p>
                      <p className="text-xs text-white/60">Quality Software Technologies</p>
                      <p className="text-xs text-white/50">Aug 2025 - Dec 2025 (Remote)</p>
                      <p className="mt-2 text-xs text-white/70">n8n AI agents, Workflow optimization, EDA with Pandas & NumPy</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-white/90">B.Tech in Computer Science</p>
                      <p className="text-xs text-white/60">Graphic Era Hill University</p>
                      <p className="text-xs text-white/50">2023 - 2027 • CGPA: 8.0/10</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
                <Link
                  href="https://github.com/sidchak-gh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/sidchak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href="mailto:siddharthchakraborty@gmail.me"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </div>
            </RevealOnView>
          </div>
        </div>
      </section>
    </main>
  )
}
