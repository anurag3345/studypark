export const siteConfig = {
  name: "Study Park Education Network Pvt. Ltd.",
  shortName: "Study Park",
  tagline: "Your Trusted Pathway to Global Education",
  subTagline: "We Care Your Future.",
  established: 2018,
  url: import.meta.env.VITE_SITE_URL || "https://studypark.edu.np",
  phone: "+977-1-4417168",
  phoneHref: "tel:+97714417168",
  email: "info@studypark.edu.np",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "97714417168",
  address: {
    line1: "Bagbazar / Kalikasthan",
    line2: "Kathmandu, Nepal",
  },
  social: {
    facebook: "https://www.facebook.com/studyparkeducation/",
    instagram: "https://www.instagram.com/studypark_educationnetwork",
    linkedin: "https://linkedin.com/company/studyparkedu",
  },
  openingHours: "Sunday–Friday, 9:30 AM–5:30 PM",
} as const;
