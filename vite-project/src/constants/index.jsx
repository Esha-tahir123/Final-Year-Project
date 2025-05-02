import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import user7 from "../assets/profile-pictures/user7.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "AboutUs" },
];
export const loginnavItems = [
  { label: "Home", href: "DeveloperHome" },

  { label: "Profile", href: "Profile" },

  { label: "Community Hub", href: "community" },
];
// src/data/developers.js
export const developers = [
  {
    id: 1,
    name: "Aiman",
    skillLevel: "Expert",
    contactDetails: "zeeshanali@example.com",
  },
  {
    id: 2,
    name: "Esha",
    skillLevel: "Advanced",
    contactDetails: "Irfankhan@example.com",
  },
  {
    id: 2,
    name: "Afaq",
    skillLevel: "Advanced",
    contactDetails: "Irfankhan@example.com",
  },

  // Add more developers as needed
];

export const testimonials = [
  {
    user: "Ahmad",
    company: "Stack Developer",
    image: user1,
    text: "The AI feedback is a game-changer. It identifies my weaknesses and suggests resources that actually help. Plus, the developer community fosters collaboration and learning. It's like having a personalized coding coach and a supportive network all in one place",
  },
  {
    user: "Ali",
    company: "Software Engineer",
    image: user7,
    text: "This platform is fantastic! It ditches the theoretical fluff and throws you into real-world coding challenges. I've honed my practical skills significantly, making me a much more valuable developer at work.",
  },
  {
    user: "Haider",
    company: "Engineering Lead",
    image: user3,
    text: "As a hiring manager, this platform is a goldmine. The badges showcase a developer's skill level in a clear and concise way. Plus, the code-sharing feature lets me assess problem-solving approaches. It's a fantastic tool for identifying strong candidates..",
  },
  {
    user: "Aiman",
    company: "Junior Developer",
    image: user2,
    text: "Learning to code shouldn't feel like a chore. This platform makes it fun! The challenges are engaging, and earning badges is super motivating. It's the perfect way to level up your skills without feeling overwhelmed.",
  },
  {
    user: "Esha",
    company: "Back-End Developer",
    image: user6,
    text: "The diverse challenges on this platform have pushed me to think outside the box and become a more efficient problem solver. I'm tackling coding tasks at work much faster now, thanks to the skills I've honed here.",
  },
  {
    user: "Junaid",
    company: "Software Engineer",
    image: user7,
    text: "This platform is like a journey of continuous improvement.  It offers challenges that grow with your skill level, keeping you engaged and learning. It's the perfect platform to stay sharp and stay ahead of the curve in the ever-evolving world of coding.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Real-World Challenges",
    description: "Tackle practical coding scenarios, hone skills used daily.",
  },
  {
    icon: <Fingerprint />,
    text: "Earn Recognition",
    description:
      "Skill badges showcase expertise, public profiles for employers.",
  },
  {
    icon: <ShieldHalf />,
    text: "AI-Powered Learning",
    description:
      "Personalized feedback & learning resources based on your needs.",
  },
  {
    icon: <BatteryCharging />,
    text: "AI-Powered Feedback",
    description:
      "Analyze user performance data to identify areas for improvement,",
  },
  {
    icon: <PlugZap />,
    text: "Sharpen Problem-Solving",
    description:
      "Continuous improvement through targeted learning & diverse challenges.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your SkillX applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Focused Challenges",
    description:
      "By tackling real-world scenario challenges, developers directly address practical skills relevant to their workflow. This targeted approach saves time compared to generic skill-building exercises.",
  },
  {
    title: "Collaborative Learning",
    description:
      "Share code, get peer feedback. Learn new techniques, solve problems more efficiently.",
  },
  {
    title: "AI-Powered Learning Recommendations",
    description:
      "Diverse challenges practice real-world coding scenarios, improving efficiency in tackling development issues.",
  },
  {
    title: "Enhanced Problem-Solving",
    description:
      "Diverse challenges refine skills, boosting efficiency in tackling real-world coding issues.",
  },
];

export const pricingOptions = [
  {
    title: "join our commounity",

    features: [
      "Instant Chatbot: Connect with developers instantly.",
      "Skill Challenges: Earn points and badges for coding skills.",
      "Networking: Expand your professional circle.",
      "Feedback: Get project reviews and improve.",
      "Custom Profiles: Showcase your skills and projects.",
    ],
  },
];
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Demo" },
  { href: "#", text: "Community" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
];

export const communityLinks = [
  { href: "#", text: "Conferences" },
  { href: "#", text: "Jobs" },
];
