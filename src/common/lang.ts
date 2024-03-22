import { en } from '@/common/lang.en'
import { it } from '@/common/lang.it'
import type { Message } from '@/common/types'

type LangType = {
  [key: string]: Message
}

export const lang: LangType = {
  en: en,
  it: it
}
