import { KoreanName, mockNames } from "./names";

interface RecommendationRequest {
  gender: string | null;
  nameStyle: string | null;
}

export function getMockRecommendations({
  gender,
  nameStyle,
}: RecommendationRequest): KoreanName[] {
  let recommendations = [...mockNames];

  if (gender) {
    recommendations = recommendations.filter(
      (name) => name.gender === gender || name.gender === "Unisex"
    );
  }

  if (nameStyle) {
    recommendations = recommendations.filter((name) => name.style === nameStyle);
  }

  // Return up to 3 recommendations
  return recommendations.slice(0, 3);
}