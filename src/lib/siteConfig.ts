export const siteConfig = {
  name: "Study Park Education Network",
  shortName: "Study Park",
  tagline: "Your Trusted Pathway to Global Education",
  subTagline: "We Care Your Future.",
  established: 2018,
  url: import.meta.env.VITE_SITE_URL || "https://studypark.edu.np",
  phone: "+977 9801418681",
  phoneHref: "tel:+9779801418681",
  email: "birtamode@studypark.edu.np",
  whatsappNumber: "9779801418681",
  address: {
    line1: "Athiti Sadan",
    line2: "Birtamode, Jhapa, Nepal",
  },
  branches: {
    birtamode: {
      name: "Birtamode Branch",
      phone: "+977 9801418681",
      phoneHref: "tel:+9779801418681",
      email: "birtamode@studypark.edu.np",
      whatsappNumber: "9779801418681",
      address: {
        line1: "Athiti Sadan",
        line2: "Birtamode, Jhapa, Nepal",
      },
      mapUrl: "https://www.google.com/maps?q=Athiti%20Sadan,Birtamode,Jhapa,Nepal&output=embed",
    },
  },
  social: {
    facebook: "https://www.facebook.com/studyparkeducation/",
    instagram: "https://www.instagram.com/birtamodestudypark/",
    linkedin: "https://linkedin.com/company/studyparkedu",
    tiktok: "https://www.tiktok.com/@studyparkbirtamode",
  },
  openingHours: "Sunday–Friday, 9:30 AM–5:30 PM",
} as const;
