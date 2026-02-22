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

export const featuredSpeech = {
  title: "Be A Sadhaka!",
  speaker: "Dr. B.K.S. Iyengar Guruji",
  date: "3rd January 2011",
  location: "Patanjala Yoga Kendra, Rishikesh",
  introduction:
    "A historic speech delivered by Yogacharya B.K.S. Iyengar at Patanjala Yoga Kendra, the Iyengar Yoga Centre in Rishikesh. In this address, Guruji draws the crucial distinction between a mere practitioner (abhyasi) and a true spiritual seeker (sadhaka), and outlines the four stages of inner practice.",
  paragraphs: [
    "Happy to see you all. It's a great joy. Actually it's too late, because we left (Haridwar) too late. But your affection made me come to meet you all, then proceed to the airport. I'm very, very happy to see you all full of joy, gay! It touches me. I don't know what you want me to talk about. Yoga is like an ocean. An ocean cannot be grasped in a few minutes. It is the same with yoga.",
    "As you are all sadhakas (spiritual adepts), don't be abhyasis (practitioners). There is a vast difference between a practitioner, known as abhyasi, and a sadhaka. You should be a sadhaka and not just an abhyasi. Even though Patanjali (Yoga Sutra 1.12,13) starts with the word abhyasa (practice), which is mechanical, because he wants people to get mechanically accustomed to the subject, but then he says that we cannot remain an abhyasi (practitioner) forever. You have to go further and become a sadhaka. A sadhaka needs sadhana (inner practice). Abhyasa does not need so much effort, but a sadhaka has to make a great effort to reach there, to achieve through Sadhana what it gives to us and not what we want. Therefore, let me tell you the quality of a sadhaka.",
    "When we practice yoga, we should see if whatever we perceive through our vision, have we understood that very clearly. For example, when I see my toe, I should question myself, Have I seen my toe very clearly? It means, probably you may not understand me, but even if the nail takes a tame shape from this end to that end, or if there is a crest in the nail, it means that your sadhana is wrong. That is called unattended sadhana. So to become a sadhaka he needs to do shodhana kriya (searching practice). Sadhana starts with shodhana kriya. First, you have to search what is perceivable in you, you have to see and find out whether each and every part of what you see, have you really attended it with your mind and intelligence. As long as the intelligence is not felt, I don't call that a sadhana.",
    "You know, medical science tell us that in this body there is a nervous system of 16,000 kilometres, which I do not believe, because they say that there is about 96,000 kilometres of blood circulation. Each pore of the skin is a nerve end. Therefore, if there is 96,000 kilometres of blood circulation, then there must be 96,000 kilometres of neural system as well. It cannot be shorter. If it is shorter, there is a short circuit. That is a disease. A short circuit means we get a disease.",
    "So when we practice, we have to think with a totally free mind, with an open mind; where is my attention, where it is not? Where is my mind aware, where my mind is not aware. It should be aware in its own frontier of the body. The mind has no other frontiers. Similarly, the Self's frontier is the body. Shariri (master of the body) is this soul and sharira (the body) is its temple. The soul has to penetrate each and every cell of your body, and allow this Self to rest on that cell. This is known as shodhana kriya (searching practice).",
    "If this doesn't happen, then the next step is that you have to make your intention successful by shoshana kriya (cleansing practice). What is missing for the Self, for the intelligence to return there? What am I to do? In which way, if I present the shoshana kriya, the cleansing process takes place, so that the impurities in the body are removed, so that the Self can move without interruption according to the way you present it? The Self has to follow your presentation.",
    "Then comes shobhana kriya (beautifying practice). When shoshana kriya (cleansing practice) and shodhana kriya (searching practice) get together, the mind becomes auspicious. The auspicious state is felt, but not just with the mind. Please don't think that I am peaceful. I want each and every part to be peaceful. I want even the tip of the skin to become peaceful. That is known as shobhana kriya (beautifying practice). There the entire frontier of this Self feels the auspicious state.",
    "Then after that state comes shamana kriya (pacifying practice). This shamana kriya is nothing else but what we call shavasana or samadhi. Shavasana and Samadhi are identical, provided we understand the depth of the subject. Please don't think Shavasana is just lying down. Shavasana is to see that your mind stretches like water and finds its evenness. So shavasana makes this Self to float evenly, to rest on its surface evenly, on the surface of the entire human body, even though there is so much tension in the body. This is what I call sadhana.",
    "So please watch yourselves when you practice and ask — am I penetrating all these areas? For example, you must have been doing shirshasana. How many of you ever thought that your big toe is active, but the little toe is not active? Can you tell me that all my five toes are active? See that is known as unattended sadhana (spiritual inward practice). There the intelligence has slipped. You were not able to keep the intelligence there. Watch your sarvangasana, the little toe is active, but not the big toe. Asanas are identical, all are inverted, but we don't know the difference. So, to follow the mind or to follow the dictations of the body is not spiritual sadhana. You can call it skeleto-muscular physical exercises. But if you change the avenue of your body according to the intuitive knowledge, then I say, that leads automatically to your spiritual life. For me asana is a prayer, because I have completely sunk into it. So when I am filled with the literary meaning and the literary feeling of that asana, I am in the bhavana (reflection), not in the Asana. Bhavana means to be completely engulfed in that presentation of watching, not as an actor, but as an observer. The body acts, but the Self observes. If you practice in this way, you will experience a very different transformation in yourself.",
    "Even today I practice six hours a day. Keep that in mind. I'm not at all an armchair yogi. If I stand here, I will be like fire. The mind is tejas tattva (fire element). That Tej (fire) is still simmering in me. Thank you very much. Practice regularly. Love... Labour with love and laugh in failures. Don't feel alone or dejected. Accept that failure as a light for you to make another attempt so that you will reach what you have wanted to reach. So laugh in failure, cry in success. Don't accept success too soon.",
  ],
  keyTeachings: [
    {
      sanskrit: "Shodhana Kriya",
      english: "Searching Practice",
      description:
        "Search what is perceivable in you — attend every part with mind and intelligence.",
    },
    {
      sanskrit: "Shoshana Kriya",
      english: "Cleansing Practice",
      description:
        "Remove impurities so the Self can move without interruption through the body.",
    },
    {
      sanskrit: "Shobhana Kriya",
      english: "Beautifying Practice",
      description:
        "When searching and cleansing unite, the entire frontier of the Self feels the auspicious state.",
    },
    {
      sanskrit: "Shamana Kriya",
      english: "Pacifying Practice",
      description:
        "Shavasana and Samadhi are identical — the Self floats evenly on the surface of the entire body.",
    },
  ],
  closingQuote:
    "Labour with love and laugh in failures. Don't feel alone or dejected. Accept that failure as a light for you to make another attempt so that you will reach what you have wanted to reach.",
  attribution:
    "Edited from a speech delivered by Dr. B.K.S. Iyengar \"Guruji\" at Patanjala Yoga Kendra, Iyengar Yoga Centre, Rishikesh, Uttarakhand, India",
  previewParagraphs: 3,
};

export const youtubeChannelUrl = "https://www.youtube.com/@SiddarthaKrishna";
