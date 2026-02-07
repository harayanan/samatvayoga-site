export interface Talk {
  id: string;
  title: string;
  description: string;
  type: "video" | "audio" | "article";
  url?: string;
  date?: string;
  topic: string;
}

export interface TalkCategory {
  id: string;
  title: string;
  description: string;
  talks: Talk[];
}

/**
 * EDITABLE: Update this array to add/remove/modify talks and archive content.
 * Changes here will automatically reflect on the website.
 */
export const talkCategories: TalkCategory[] = [
  {
    id: "bhagavad-gita-lectures",
    title: "Bhagavad Gita Lectures",
    description:
      "Verse-by-verse discourses on the Bhagavad Gita, exploring the teachings of Lord Krishna through the lens of traditional Vedantic commentary.",
    talks: [
      {
        id: "gita-ch1",
        title: "Chapter 1: Arjuna Vishada Yoga",
        description:
          "The Yoga of Arjuna's Despondency — exploring the crisis that sets the stage for the divine teaching.",
        type: "video",
        topic: "Bhagavad Gita",
        date: "2024",
      },
      {
        id: "gita-ch2",
        title: "Chapter 2: Sankhya Yoga",
        description:
          "The Yoga of Knowledge — the foundational teaching on the immortal Self and the path of wisdom.",
        type: "video",
        topic: "Bhagavad Gita",
        date: "2024",
      },
      {
        id: "gita-ch3",
        title: "Chapter 3: Karma Yoga",
        description:
          "The Yoga of Action — understanding selfless action as a means to liberation.",
        type: "video",
        topic: "Bhagavad Gita",
        date: "2024",
      },
    ],
  },
  {
    id: "upanishad-lectures",
    title: "Upanishad Lectures",
    description:
      "Explorations of the principal Upanishads, the culmination of Vedic wisdom revealing the nature of Brahman and the Self.",
    talks: [
      {
        id: "isha-upanishad",
        title: "Isha Upanishad",
        description:
          "A complete study of the Isha Upanishad, the jewel of the Upanishads, on the unity of all existence.",
        type: "video",
        topic: "Upanishads",
        date: "2023",
      },
      {
        id: "taittiriya-archive",
        title: "Taittiriya Upanishad Series",
        description:
          "Recorded lectures from the ongoing Taittiriya Upanishad study, exploring the Pancha Kosha and the nature of Ananda.",
        type: "video",
        topic: "Upanishads",
        date: "2024",
      },
    ],
  },
  {
    id: "yoga-philosophy",
    title: "Yoga Philosophy",
    description:
      "Lectures on the Yoga Sutras of Patanjali and the deeper philosophical dimensions of Yoga as a path to Self-realization.",
    talks: [
      {
        id: "yoga-sutras-intro",
        title: "Introduction to Yoga Sutras",
        description:
          "An overview of Patanjali's systematic path of Yoga and its relevance to modern seekers.",
        type: "video",
        topic: "Yoga Philosophy",
        date: "2023",
      },
    ],
  },
  {
    id: "articles-publications",
    title: "Articles & Publications",
    description:
      "Written contributions to yoga journals and publications worldwide.",
    talks: [
      {
        id: "australian-yoga-life",
        title: "Columns in Australian Yoga Life",
        description:
          "Regular columns on Vedantic philosophy and its application in daily life, published in the Australian Yoga Life quarterly magazine.",
        type: "article",
        topic: "Publications",
      },
      {
        id: "yoga-journal-china",
        title: "Contributions to Yoga Journal China",
        description:
          "Articles exploring the intersection of traditional Indian philosophy and contemporary yoga practice.",
        type: "article",
        topic: "Publications",
      },
    ],
  },
];

export const youtubeChannelUrl = "https://www.youtube.com/@SiddarthaKrishna";
