import {
  Compass,
  GraduationCap,
  Landmark,
  BookCheck,
  FileText,
  Stamp,
  PlaneTakeoff,
  ClipboardList,
  Languages,
  Target,
  PenLine,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "study-abroad-counseling",
    title: "Study Abroad Counseling",
    shortDescription: "One-on-one guidance to map the right country, course, and timeline for you.",
    description:
      "Every student's path abroad starts with clarity. Our counselors sit down with you to understand your academic background, budget, and long-term goals, then build a personalized roadmap covering country, course, and intake — before a single application is filed.",
    icon: Compass,
    highlights: [
      "Personalized academic assessment",
      "Country and budget shortlisting",
      "Timeline planning aligned to intakes",
    ],
  },
  {
    slug: "career-counseling",
    title: "Career Counseling",
    shortDescription: "Align your degree choice with a career path that actually fits you.",
    description:
      "We go beyond “which country” and help you answer “what next”. Our career counseling sessions map your interests and strengths against real global job markets, so the course you choose abroad sets up the career you actually want.",
    icon: Target,
    highlights: [
      "Interest and aptitude mapping",
      "Global job market insights",
      "Course-to-career alignment",
    ],
  },
  {
    slug: "university-selection",
    title: "University Selection",
    shortDescription: "Shortlist universities that match your profile, ranking goals, and budget.",
    description:
      "With partnerships across reputed universities worldwide, we help you compare rankings, campus life, faculty strength, and total cost — so your final shortlist balances ambition with realistic admission chances.",
    icon: Landmark,
    highlights: [
      "Partner university matching",
      "Ranking and cost comparison",
      "Realistic reach/match/safe shortlist",
    ],
  },
  {
    slug: "course-selection",
    title: "Course Selection",
    shortDescription: "Find the exact program and specialization that fits your goals.",
    description:
      "Course names vary wildly between universities and countries. We help you decode syllabi, compare specializations, and pick the course that actually leads where you want to go professionally.",
    icon: GraduationCap,
    highlights: [
      "Syllabus and specialization review",
      "Credit transfer guidance",
      "Prerequisite gap planning",
    ],
  },
  {
    slug: "admission-assistance",
    title: "Admission Assistance",
    shortDescription: "End-to-end support through applications, SOPs, and offer negotiation.",
    description:
      "From filling out application portals to reviewing your statement of purpose and letters of recommendation, our team manages the admission process closely so nothing slips past a deadline.",
    icon: BookCheck,
    highlights: [
      "Application portal management",
      "SOP and LOR review",
      "Deadline tracking across universities",
    ],
  },
  {
    slug: "documentation",
    title: "Documentation",
    shortDescription: "Accurate, complete paperwork prepared to each university's standard.",
    description:
      "Academic transcripts, financial documents, and certificates all need to meet exact formatting and attestation requirements. Our documentation officers prepare and verify every file before submission.",
    icon: FileText,
    highlights: [
      "Transcript and certificate prep",
      "Financial document structuring",
      "Attestation and notarization support",
    ],
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    shortDescription: "Structured visa filing support for a smoother approval process.",
    description:
      "Visa refusals are usually about preparation, not eligibility. We help you build a strong financial and academic case, prepare for interviews, and file your visa application correctly the first time.",
    icon: Stamp,
    highlights: [
      "Financial proof structuring",
      "Mock visa interviews",
      "Country-specific checklist guidance",
    ],
  },
  {
    slug: "pre-departure-orientation",
    title: "Pre-departure Orientation",
    shortDescription: "Practical briefings so day one abroad feels familiar, not overwhelming.",
    description:
      "Before you fly, we walk you through accommodation booking, banking, travel insurance, packing, and what to expect in your first week — drawing on the real experiences of students who studied at your destination before you.",
    icon: PlaneTakeoff,
    highlights: [
      "Accommodation and banking setup",
      "Travel insurance guidance",
      "First-week survival briefing",
    ],
  },
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation",
    shortDescription: "Structured coaching across all four IELTS modules.",
    description:
      "Our IELTS classes combine timed practice tests, personalized feedback on writing and speaking, and strategy sessions designed to help you hit the band score your target university requires.",
    icon: Languages,
    highlights: [
      "Full-length mock tests",
      "One-on-one speaking practice",
      "Band-score focused strategy",
    ],
  },
  {
    slug: "pte-preparation",
    title: "PTE Preparation",
    shortDescription: "Computer-based test practice with real exam-format drills.",
    description:
      "PTE rewards familiarity with its exact format. Our trainers walk you through every question type on real exam software, so nothing about test day feels unfamiliar.",
    icon: ClipboardList,
    highlights: [
      "Exam-format computer drills",
      "AI-scored practice tests",
      "Time-management coaching",
    ],
  },
  {
    slug: "sat-preparation",
    title: "SAT Preparation",
    shortDescription: "Foundational math and verbal coaching for undergraduate applicants.",
    description:
      "For students applying to competitive undergraduate programs, our SAT preparation builds core math and evidence-based reading skills through structured practice and full-length timed tests.",
    icon: PenLine,
    highlights: [
      "Diagnostic baseline test",
      "Section-wise skill building",
      "Full-length timed practice",
    ],
  },
];
