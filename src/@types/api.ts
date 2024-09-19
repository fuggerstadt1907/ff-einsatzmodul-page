import { EinsatzKategorie } from "./common"

export type ApiEinsatzResponse = {
  NR: string
  KAT: EinsatzKategorie | string
  ART: string
  TYP: string
  VON: string
  BIS: string
  STW: string
  ORT: string
  DESCR: string
  LAGE: string
  FZG?: string
}

