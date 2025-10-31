export interface KoreanName {
  koreanName: string;
  romanizedName: string;
  meaning: string;
  connection: string;
  gender: "Male" | "Female" | "Unisex";
  style: "Modern" | "Traditional" | "Gentle" | "Strong";
}

export const mockNames: KoreanName[] = [
  {
    koreanName: "서준",
    romanizedName: "Seo-Joon",
    meaning:
      "Seo (瑞) means 'auspicious' or 'a good omen,' while Joon (俊) means 'talented' or 'handsome.' Together, it carries the beautiful meaning of an 'auspicious and talented person.'",
    connection:
      "Michael means 'who is like God,' symbolizing leadership and wisdom. The meaning of 'talented person' in 'Seo-Joon' aligns well with a leader's qualities, creating a modern yet profound impression.",
    gender: "Male",
    style: "Modern",
  },
  {
    koreanName: "하준",
    romanizedName: "Ha-Joon",
    meaning:
      "Ha (夏) means 'summer' but also implies 'great' or 'grand.' Joon (俊) means 'talented.' The name signifies a 'great and talented person,' reflecting the hope for the child to become a great figure.",
    connection:
      "The powerful meaning of Michael, 'god-like being,' resonates with the 'greatness' in 'Ha-Joon.' Its smooth and sophisticated pronunciation makes it suitable internationally.",
    gender: "Male",
    style: "Modern",
  },
  {
    koreanName: "지후",
    romanizedName: "Ji-Hoo",
    meaning:
      "Ji (智) means 'wisdom,' and Hoo (厚) means 'generous' or 'kind.' It means a 'wise and virtuous person,' emphasizing inner maturity.",
    connection:
      "The image of wisdom and leadership in the name Michael corresponds well with the meaning of 'wisdom and virtue' in 'Ji-Hoo.' Its soft pronunciation and warm feel make it a beloved name.",
    gender: "Unisex",
    style: "Gentle",
  },
  {
    koreanName: "민준",
    romanizedName: "Min-Joon",
    meaning: "Min (敏) means 'clever' and Joon (俊) means 'talented'. A name that wishes for a sharp and wise life.",
    connection: "Connects to the wisdom aspect of Michael, suggesting a sharp and insightful character.",
    gender: "Male",
    style: "Traditional",
  },
  {
    koreanName: "유나",
    romanizedName: "Yu-Na",
    meaning: "Yu (有) means 'to have' and Na (娜) means 'graceful'. A name that means to possess grace and beauty.",
    connection: "A gentle name that contrasts with the strength of Michael, offering a different but complementary virtue.",
    gender: "Female",
    style: "Gentle",
  },
  {
    koreanName: "서아",
    romanizedName: "Seo-Ah",
    meaning: "Seo (瑞) means 'auspicious' and Ah (雅) means 'elegant'. A name meaning auspicious and elegant.",
    connection: "Like Michael, a name that bestows a positive and noble quality upon a person.",
    gender: "Female",
    style: "Modern",
  },
  {
    koreanName: "강민",
    romanizedName: "Kang-Min",
    meaning: "Kang (康) means 'healthy' and Min (民) means 'people'. A name that wishes for a strong and healthy life, and to be a pillar of the community.",
    connection: "Reflects the protective and strong nature of Michael, a guardian of the people.",
    gender: "Male",
    style: "Strong",
  },
];