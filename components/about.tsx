"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Globe, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Figma, Framer Motion, GSAP, Responsive Design",
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Backend",
    description: "Node.js, PostgreSQL, Prisma, Serverless",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Deployment",
    description: "Vercel, AWS, Docker, CI/CD",
  },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I bridge the gap between design and engineering. With a strong
              foundation in computer science and a keen eye for aesthetics, I
              build digital products that look great and work perfectly.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
            >
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="text-center text-sm text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
