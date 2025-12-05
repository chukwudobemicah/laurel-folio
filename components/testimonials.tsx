"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechFlow",
    content:
      "Laurel is an exceptional developer who brings both technical expertise and creative flair to every project. The attention to detail and user experience is outstanding.",
    avatar: "/avatars/01.png",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder of StartUp Inc",
    content:
      "Working with Laurel was a game-changer for our MVP. They understood our vision immediately and delivered a high-quality product ahead of schedule.",
    avatar: "/avatars/02.png",
    initials: "MC",
  },
  {
    name: "Emily Davis",
    role: "Creative Director",
    content:
      "I've worked with many developers, but Laurel stands out for their ability to translate complex design concepts into smooth, responsive code.",
    avatar: "/avatars/03.png",
    initials: "ED",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 md:py-24 lg:py-32 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Client Testimonials
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take my word for it. Here's what people I've worked
              with have to say.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="w-[350px] md:w-[450px] shrink-0">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="mb-2 h-5 w-5 text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
