"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-232 flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm currently available for freelance work and full-time
            opportunities. If you have a project that needs some creative touch,
            I'd love to hear about it.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <a href="mailto:Chukwudobelaurel632@gmail.com">
              <Button size="lg" className="h-12 px-8 w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </a>
            <a href="tel:09016191456">
              <Button variant="outline" size="lg" className="h-12 px-8 w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Call Me
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
