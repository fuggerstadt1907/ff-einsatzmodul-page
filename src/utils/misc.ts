import dayjs from "dayjs"

export const objectHasTruthyValuesOnly = (object: { [key: string]: any }) =>
  Object.values(object).every(value => Boolean(value))

export const mapKeyword = (keyword: string) => {
  switch (keyword) {
    case 'Brand':
      return 'B'

    case 'Technische Hilfe':
      return 'T'

    case 'Sicherheitswache':
      return 'W'

    case 'Fehlalarm':
      return 'F'

    case 'Sonstige':
      return 'S'

    case 'Alle':
      return 'Alle'
  }
}

export const mapKeywordToColorSchema = (keyword: string) => {
  switch (keyword) {
    case 'Brand':
      return 'brand'

    case 'Hilfeleistung':
      return 'thl'

    case 'Fehlalarm':
      return 'fehlalarm'

    default:
      return 'rettungsdienst-sonstige'
  }
}

export const mapKeywordToTextColor = (keyword: string) => {
  switch (keyword) {
    case 'Brand':
      return 'white'

    case 'Hilfeleistung':
      return 'white'

    case 'Fehlalarm':
      return 'white'

    default:
      return 'black'
  }
}

export const getLastYearsArray = (yearsCount: number) => {
  // Hole das aktuelle Jahr
  let currentYear = dayjs().year()

  // Erstelle ein Array mit den letzten 5 Jahren plus dem aktuellen Jahr
  let yearsArray = []
  for (let i = 0; i <= yearsCount; i++) {
    yearsArray.push((currentYear - i).toString())
  }

  return yearsArray
}