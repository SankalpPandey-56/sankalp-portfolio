import React from "react";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { TechStack } from "@/components/skills/TechStack";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Contributions } from "@/components/opensource/Contributions";
import { RoboticsTimeline } from "@/components/robotics/RoboticsTimeline";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Contributions />
      <RoboticsTimeline />
      <Contact />
    </>
  );
}
