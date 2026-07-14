import {
  Compass,
  BookOpen,
  Landmark,
  FileText,
  Send,
  MailCheck,
  Stamp,
  Users,
  PlaneTakeoff,
} from "lucide-react";
import type { JourneyStep } from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Career Counseling",
    description: "We map your strengths, interests, and goals to narrow down the right direction.",
    icon: Compass,
  },
  {
    step: 2,
    title: "Course Selection",
    description: "Together, we choose a course that matches your goals and admission profile.",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "University Selection",
    description: "We shortlist universities balancing ranking, cost, and admission likelihood.",
    icon: Landmark,
  },
  {
    step: 4,
    title: "Documentation",
    description: "Transcripts, certificates, and financial documents are prepared and verified.",
    icon: FileText,
  },
  {
    step: 5,
    title: "Application Submission",
    description: "Your applications are filed accurately and tracked against every deadline.",
    icon: Send,
  },
  {
    step: 6,
    title: "Offer Letter",
    description: "We review your offer, help compare multiple offers, and confirm your seat.",
    icon: MailCheck,
  },
  {
    step: 7,
    title: "Visa Processing",
    description: "We structure your financial case and prepare you for the visa interview.",
    icon: Stamp,
  },
  {
    step: 8,
    title: "Pre-departure Orientation",
    description: "A practical briefing on accommodation, banking, travel, and life abroad.",
    icon: Users,
  },
  {
    step: 9,
    title: "Study Abroad",
    description: "You land, settle in, and begin your degree — with our support still a call away.",
    icon: PlaneTakeoff,
  },
];
