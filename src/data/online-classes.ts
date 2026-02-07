export interface OnlineClass {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  schedule: string;
  time: string;
  language: string;
  recordingsAvailable: boolean;
  registrationNote?: string;
}

/**
 * EDITABLE: Update this array to add/remove/modify online classes.
 * Changes here will automatically reflect on the website.
 */
export const onlineClasses: OnlineClass[] = [
  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    subtitle: "The Song of the Divine",
    description:
      "A verse-by-verse exploration of the Bhagavad Gita, uncovering the profound wisdom of Lord Krishna's teachings to Arjuna on the battlefield of Kurukshetra. Drawing from the great commentarial traditions of Shankaracharya and other masters.",
    schedule: "Every Sunday",
    time: "7:00 – 8:30 AM IST",
    language: "English",
    recordingsAvailable: true,
  },
  {
    id: "taittiriya-upanishad",
    title: "Taittiriya Upanishad",
    subtitle: "The Teaching of Brahman",
    description:
      "A systematic study of the Taittiriya Upanishad, one of the principal Upanishads, exploring the five sheaths of the Self and the nature of ultimate reality (Brahman).",
    schedule: "Every Saturday",
    time: "3:30 – 4:30 PM IST",
    language: "English",
    recordingsAvailable: true,
  },
  {
    id: "vishnu-sahasranama",
    title: "Vishnu Sahasranama",
    subtitle: "Study Group with Sanskrit Commentary",
    description:
      "A contemplative study of the thousand names of Lord Vishnu, with detailed Sanskrit commentary exploring the deeper philosophical significance of each name.",
    schedule: "Every Wednesday",
    time: "4:00 – 5:00 PM IST",
    language: "English",
    recordingsAvailable: true,
  },
  {
    id: "yoga-sutras",
    title: "Yoga Sutras of Patanjali",
    subtitle: "Study & Chanting",
    description:
      "An in-depth study and traditional chanting of Patanjali's Yoga Sutras, the foundational text of classical Yoga philosophy, with commentary from the great masters.",
    schedule: "Mondays & Thursdays",
    time: "Mon 4:30 – 6:00 PM IST / Thu 4:30 – 6:30 AM IST",
    language: "English (with Chinese translation available)",
    recordingsAvailable: false,
  },
  {
    id: "sanskrit-grammar",
    title: "Sanskrit Grammar",
    subtitle: "Laghu Siddhanta Kaumudi",
    description:
      "A systematic study of Sanskrit grammar through the Laghu Siddhanta Kaumudi, enabling students to read and understand original Sanskrit texts independently.",
    schedule: "Thursdays (English) / Mon–Wed (Hindi)",
    time: "Thu 4:30 – 5:30 PM IST / Mon–Wed 4:00 – 5:00 PM IST",
    language: "English & Hindi",
    recordingsAvailable: false,
  },
];

export const registrationInfo = {
  whatsapp: "+91 730 0654 448",
  email: "info@iyengaryoga.in",
  note: "All online classes are donation-based. To register, please reach out via WhatsApp or email.",
};
