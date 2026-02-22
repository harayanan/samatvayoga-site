/**
 * EDITABLE: In-person workshops, intensives, and class schedule.
 * Source: https://www.iyengaryoga.in/schedule
 * Last updated: 2026-02-22
 */

export interface IntensiveCourse {
  dates: string;
  status: "upcoming" | "completed" | "ongoing";
}

export interface RegularClass {
  title: string;
  instructor: string;
  schedule: string;
  pricing: { sessions: string; price: string }[];
  note?: string;
}

export interface InternationalWorkshop {
  id: string;
  city: string;
  country: string;
  dates: string;
  image?: string;
  status: "upcoming" | "completed";
}

export const intensiveCourses = {
  title: "Intensive Yoga Courses",
  instructor: "Usha Devi",
  location: "Swami Swatantranand Ashram, Rishikesh",
  requirement: "At least 3 years of regular practice is required",
  pricing: "\u20B98,500 per course + \u20B92,000 registration fee",
  image: "/images/workshop-intensive.webp",
  sessions: [
    { dates: "12\u201320 Nov 2025", status: "completed" as const },
    { dates: "17\u201325 Dec 2025", status: "completed" as const },
    { dates: "14\u201322 Jan 2026", status: "completed" as const },
    { dates: "18\u201326 Feb 2026", status: "ongoing" as const },
    { dates: "18\u201326 Mar 2026", status: "upcoming" as const },
    { dates: "08\u201316 Apr 2026", status: "upcoming" as const },
  ],
};

export const regularClasses: RegularClass[] = [
  {
    title: "General Yoga Classes",
    instructor: "Usha Devi",
    schedule: "Monday\u2013Saturday, 6:00\u20137:30 PM",
    pricing: [
      { sessions: "1 class/week", price: "\u20B91,000" },
      { sessions: "2 classes/week", price: "\u20B91,400" },
      { sessions: "3 classes/week", price: "\u20B91,700" },
      { sessions: "4 classes/week", price: "\u20B91,800" },
      { sessions: "5 classes/week", price: "\u20B91,900" },
      { sessions: "6 classes/week", price: "\u20B92,000" },
    ],
    note: "Drop-in format. No registration required. Suspended during intensive courses.",
  },
  {
    title: "Beginners\u2019 Yoga Classes",
    instructor: "Ekta Ghale",
    schedule: "Monday\u2013Saturday, 4:00\u20135:30 PM",
    pricing: [
      { sessions: "1 class/week", price: "\u20B9600" },
      { sessions: "2 classes/week", price: "\u20B9800" },
      { sessions: "3 classes/week", price: "\u20B91,000" },
      { sessions: "4 classes/week", price: "\u20B91,200" },
      { sessions: "5 classes/week", price: "\u20B91,400" },
      { sessions: "6 classes/week", price: "\u20B91,500" },
    ],
    note: "Drop-in format. Continues during intensive courses.",
  },
  {
    title: "Children\u2019s Yoga Classes",
    instructor: "Ekta Ghale",
    schedule: "Sundays, 9:00\u201310:30 AM",
    pricing: [{ sessions: "All sessions", price: "Free" }],
    note: "Drop-in format.",
  },
];

export const philosophyCourse = {
  title: "Philosophy Course",
  instructor: "Siddhartha Krishna",
  topics: "Bhagavad Gita & Upanishads",
  pricing: "\u20B9800 + donation",
  status: "Dates soon to be announced",
};

export const facilityHours = {
  selfPractice: "Monday\u2013Saturday, 8:00\u201310:30 AM",
  officeMorning: "7:30\u201310:30 AM",
  officeEvening: "3:00\u20138:00 PM",
};

export const internationalWorkshops: InternationalWorkshop[] = [
  {
    id: "china-2026",
    city: "China",
    country: "China",
    dates: "1\u201317 May 2026",
    image: "/images/workshop-china.webp",
    status: "upcoming",
  },
  {
    id: "zurich-2026",
    city: "Zurich",
    country: "Switzerland",
    dates: "17\u201319 Jul 2026",
    image: "/images/workshop-zurich.webp",
    status: "upcoming",
  },
  {
    id: "budapest-2026",
    city: "Budapest",
    country: "Hungary",
    dates: "24\u201326 Jul 2026",
    image: "/images/workshop-budapest.webp",
    status: "upcoming",
  },
  {
    id: "bilbao-2026",
    city: "Bilbao",
    country: "Spain",
    dates: "31 Jul\u20132 Aug 2026",
    image: "/images/workshop-bilbao.jpg",
    status: "upcoming",
  },
  {
    id: "buenos-aires-2026",
    city: "Buenos Aires",
    country: "Argentina",
    dates: "21\u201323 Aug 2026",
    image: "/images/workshop-buenos-aires.webp",
    status: "upcoming",
  },
  {
    id: "bahia-blanca-2026",
    city: "Bah\u00EDa Blanca",
    country: "Argentina",
    dates: "27\u201330 Aug 2026",
    image: "/images/workshop-bahia-blanca.webp",
    status: "upcoming",
  },
  {
    id: "chile-2026",
    city: "Chile",
    country: "Chile",
    dates: "11\u201313 Sep 2026",
    image: "/images/workshop-chile.webp",
    status: "upcoming",
  },
  {
    id: "germany-2026",
    city: "Germany",
    country: "Germany",
    dates: "16\u201318 Oct 2026",
    image: "/images/workshop-germany.webp",
    status: "upcoming",
  },
];

export const summerClosure = {
  note: "Centre closed for summer vacations",
  dates: "3 May\u20131 Nov 2026",
};

/**
 * Home base information (used on contact page too).
 */
export const homeBase = {
  name: "Patanjala Yoga Kendra",
  address:
    "Swami Swatantranand Ashram, Next to Swami Dayananda Ashram, Sisham Jhadi, Chandreshwar Nagar, Rishikesh, Uttarakhand 249137, India",
  description:
    "The home centre where Shri Siddhartha Krishna teaches regularly. An authorized Iyengar Yoga Centre established in 1993 on the banks of the holy River Ganga.",
  schedule: [
    { day: "Monday \u2013 Saturday", time: "Regular classes and lectures" },
    { day: "Sunday", time: "Closed" },
  ],
};
