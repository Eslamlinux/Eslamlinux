import "server-only"

const dictionaries = {
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (locale !== "ar" && locale !== "en") {
    locale = "ar"
  }

  return dictionaries[locale]()
}

