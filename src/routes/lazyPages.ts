import { lazy } from "react";

// Route-based code splitting: each page is only downloaded when visited.
export const Home = lazy(() => import("@/pages/Home"));
export const About = lazy(() => import("@/pages/About"));
export const Services = lazy(() => import("@/pages/Services"));
export const Destinations = lazy(() => import("@/pages/Destinations"));
export const TestPreparation = lazy(() => import("@/pages/TestPreparation"));
export const SuccessStories = lazy(() => import("@/pages/SuccessStories"));
export const Contact = lazy(() => import("@/pages/Contact"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
