export interface TravelEvent {
  id: string;
  title: string;
  location: string;
  country: string;
  date: string;
  endDate?: string;
  description: string;
  type: "workshop" | "retreat" | "lecture-series" | "intensive";
  status: "upcoming" | "ongoing" | "completed";
  registrationUrl?: string;
  contactEmail?: string;
}

/**
 * EDITABLE: Update this array to add/remove/modify travel events and workshops.
 * Set status to "upcoming" for future events, "ongoing" for current, "completed" for past.
 * Changes here will automatically reflect on the website.
 */
export const travelEvents: TravelEvent[] = [
  {
    id: "rishikesh-intensive-2026",
    title: "Bhagavad Gita Intensive",
    location: "Patanjala Yoga Kendra, Rishikesh",
    country: "India",
    date: "March 2026",
    endDate: "March 2026",
    description:
      "An immersive week-long intensive on the Bhagavad Gita at the home centre in Rishikesh, combining philosophy lectures with daily yoga practice.",
    type: "intensive",
    status: "upcoming",
    contactEmail: "info@iyengaryoga.in",
  },
  {
    id: "europe-tour-2026",
    title: "Vedanta & Yoga Philosophy Workshop",
    location: "Various Cities",
    country: "Europe",
    date: "Summer 2026",
    description:
      "A series of workshops across European cities exploring the core teachings of Vedanta through the lens of the Bhagavad Gita and Upanishads.",
    type: "workshop",
    status: "upcoming",
    contactEmail: "info@iyengaryoga.in",
  },
];

/**
 * EDITABLE: The home base information.
 */
export const homeBase = {
  name: "Patanjala Yoga Kendra",
  address: "Swami Swatantranand Ashram, Rishikesh, Uttarakhand 249137, India",
  description:
    "The home centre where Shri Siddhartha Krishna teaches regularly. An authorized Iyengar Yoga Centre established in 1993 on the banks of the holy River Ganga.",
  schedule: [
    { day: "Monday – Saturday", time: "Regular classes and lectures" },
    { day: "Sunday", time: "Closed" },
  ],
};
