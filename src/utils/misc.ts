import dayjs from "dayjs"

export const objectHasTruthyValuesOnly = (object: { [key: string]: any }) =>
  Object.values(object).every(value => Boolean(value))

export const mapKeyword = (keyword: string) => {
  switch (keyword) {
    case 'Brand':
      return 'Brand'

    case 'Hilfeleistung':
      return 'THL'

    case 'Sicherheitsdienst':
      return 'Brandwache'

    case 'Fehlalarm':
      return 'Fehlalarm'

    case 'Sonstige':
      return 'S'

    case 'Rettungsdienst':
      return 'RD'

    default:
      return keyword
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

export const formatDuration = (start: string, end: string) => {
  const time1 = dayjs(start)
  const time2 = dayjs(end)

  // Differenz in Minuten berechnen
  const diffInMinutes = time2.diff(time1, "minute")

  if (diffInMinutes <= 45) {
    // Auf 15-Minuten-Schritte runden
    const roundedMinutes = Math.ceil(diffInMinutes / 15) * 15
    return `${roundedMinutes} Minuten`
  } else if (diffInMinutes <= 60) {
    return `1 Stunde` // Alles über 45 Minuten wird auf 1 Stunde gerundet
  } else {
    // In 30-Minuten-Schritten runden
    const roundedHours = Math.round(diffInMinutes / 60) // Mathematische Rundung
    return `${roundedHours} Stunden`
  }
}