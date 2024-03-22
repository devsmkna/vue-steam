import type { Message } from './types'

type Hero = {
  [key in keyof Message['languages']]: string
}

export const hero: Hero = {
  en: 'https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/61659a43d1112e6b9eae891e/webm_page_bg_english.webm?t=1710802977',
  it: 'https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/61659a43d1112e6b9eae891e/webm_page_bg_italian.webm?t=1710802977'
}
