"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Next.js 14, Stripe, and Sanity CMS. Features include real-time inventory, cart management, and secure checkout.",
    tags: ["Next.js", "TypeScript", "Stripe", "Sanity"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates using Socket.io. Users can create boards, lists, and cards with drag-and-drop functionality.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates blog posts and social media content using the OpenAI API. Includes a rich text editor and export options.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on recently. Each one
              represents a unique challenge and a learning opportunity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Link href={project.links.demo} className="flex-1">
                  <Button className="w-full" variant="default">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.links.github} className="flex-1">
                  <Button className="w-full" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
