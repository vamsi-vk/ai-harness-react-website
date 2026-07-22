/** Append to every image-generation prompt for this site. */
export const NORTH_AMERICAN_PHOTO_PROMPT_SUFFIX =
  "United States or Canada only. Suburban or small-city North American small business. English-language context, North American architecture and lighting. Professional marketing photo, no text, no logos.";

/**
 * Client casting requirement for marketing photos:
 * North American adults who read as White American and/or Hispanic/Latino American only.
 * Do not depict Black people in generated or selected marketing imagery.
 */
export const HOME_INDUSTRY_PHOTO_CAST =
  "White American and Hispanic/Latino American adults only, in United States settings. Do not depict Black people.";

/** Shorter cast line for image-generation prompts. */
export const CLIENT_PHOTO_CAST_PROMPT =
  "Casting: White American and/or Hispanic/Latino American adults only. United States or Canada setting. Do not depict Black people. No text, no logos.";
