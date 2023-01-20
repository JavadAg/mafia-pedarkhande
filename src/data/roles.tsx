import _ from 'lodash'
import { arrayUnion } from '../utils/arrayUnion'
import godfather2 from '../assets/image/mafia/godfather2.jpg'
import butler from '../assets/image/mafia/butler.jpg'
import detective from '../assets/image/mafia/detective.jpg'
import diehard from '../assets/image/mafia/diehard.jpg'
import dr from '../assets/image/mafia/dr.jpg'
import dr_mafia from '../assets/image/mafia/dr_mafia.jpg'
import fadai from '../assets/image/mafia/fadai.jpg'
import framason from '../assets/image/mafia/framason.jpg'
import gunner from '../assets/image/mafia/gunner.jpg'
import hitman from '../assets/image/mafia/hitman.jpg'
import mafia_sade from '../assets/image/mafia/mafia_sade.jpg'
import mayor from '../assets/image/mafia/mayor.jpg'
import nato from '../assets/image/mafia/nato.jpg'
import psychiatric from '../assets/image/mafia/psychiatric.jpg'
import shahr_sade from '../assets/image/mafia/shahr_sade.jpg'
import blacksmith from '../assets/image/mafia/smith.jpg'
import terrorist from '../assets/image/mafia/terrorist.jpg'
import constantine from '../assets/image/godfather/constantine.jpg'
import godfather from '../assets/image/godfather/godfather.jpg'
import goodman from '../assets/image/godfather/goodman.jpg'
import kane from '../assets/image/godfather/kane.jpg'
import leon from '../assets/image/godfather/leon.jpg'
import matador from '../assets/image/godfather/matador.jpg'
import nostradamus from '../assets/image/godfather/nostradamus.jpg'
import watson from '../assets/image/godfather/watson.jpg'
import faceoff from '../assets/image/last_move/faceoff.png'
import fortune from '../assets/image/last_move/fortune.png'
import handcuff from '../assets/image/last_move/handcuff.png'
import kill from '../assets/image/last_move/kill.png'
import lamb from '../assets/image/last_move/lamb.png'
import lie from '../assets/image/last_move/lie.png'
import mind from '../assets/image/last_move/mind.png'
import nosleep from '../assets/image/last_move/nosleep.png'
import posses from '../assets/image/last_move/posses.png'
import reveal from '../assets/image/last_move/reveal.png'
import reveal2 from '../assets/image/last_move/reveal2.png'
import safe from '../assets/image/last_move/safe.png'
import truce from '../assets/image/last_move/truce.png'

export interface ScenarioRoles {
  id: string
  name: string
  player?: string
  multiple?: boolean
  img?: string
  desc?: string
}

export const mafiaRoles: ScenarioRoles[] = [
  {
    id: crypto.randomUUID(),
    name: 'پدرخوانده(مافیا)',
    img: godfather2
  },
  {
    id: crypto.randomUUID(),
    name: 'دکتر لکتر (مافیا)',
    img: dr_mafia
  },
  {
    id: crypto.randomUUID(),
    name: 'ناتو',
    img: nato
  },
  {
    id: crypto.randomUUID(),
    name: 'تروریست',
    img: terrorist
  },
  {
    id: crypto.randomUUID(),
    name: 'دکتر شهر',
    img: dr
  },
  {
    id: crypto.randomUUID(),
    name: 'کاراگاه',
    img: detective
  },
  {
    id: crypto.randomUUID(),
    name: 'حرفه ای',
    img: hitman
  },
  {
    id: crypto.randomUUID(),
    name: 'فراماسون',
    img: framason
  },
  {
    id: crypto.randomUUID(),
    name: 'جان سخت',
    img: diehard
  },
  {
    id: crypto.randomUUID(),
    name: 'تفنگدار',
    img: gunner
  },
  {
    id: crypto.randomUUID(),
    name: 'اهنگر',
    img: blacksmith
  },
  {
    id: crypto.randomUUID(),
    name: 'فدایی',
    img: fadai
  },
  {
    id: crypto.randomUUID(),
    name: 'شهردار',
    img: mayor
  },
  {
    id: crypto.randomUUID(),
    name: 'روانشناس',
    img: psychiatric
  },
  {
    id: crypto.randomUUID(),
    name: 'ساقی',
    img: butler
  },
  {
    id: crypto.randomUUID(),
    name: 'مافیا ساده',
    img: mafia_sade,
    multiple: true
  },
  {
    id: crypto.randomUUID(),
    name: 'شهروند ساده',
    img: shahr_sade,
    multiple: true
  }
]

export const godfatherRoles: ScenarioRoles[] = [
  {
    id: crypto.randomUUID(),
    name: 'پدرخوانده (پدرخوانده)',
    img: godfather
  },
  {
    id: crypto.randomUUID(),
    name: 'ماتادور',
    img: matador
  },
  {
    id: crypto.randomUUID(),
    name: 'ساول گـودمن',
    img: goodman
  },
  {
    id: crypto.randomUUID(),
    name: 'نوستراداموس',
    img: nostradamus
  },
  {
    id: crypto.randomUUID(),
    name: 'دکتر واتسون',
    img: watson
  },
  {
    id: crypto.randomUUID(),
    name: 'شهروند کین',
    img: kane
  },
  {
    id: crypto.randomUUID(),
    name: 'کنستانتین',
    img: constantine
  },
  {
    id: crypto.randomUUID(),
    name: 'لئون حرفه ای',
    img: leon
  },
  {
    id: crypto.randomUUID(),
    name: 'مافیا ساده',
    img: mafia_sade,
    multiple: true
  },
  {
    id: crypto.randomUUID(),
    name: 'شهروند ساده',
    img: shahr_sade,
    multiple: true
  }
]

export const mixedRoles: ScenarioRoles[] = arrayUnion(
  mafiaRoles,
  godfatherRoles,
  'name'
)

export const lastMoves = [
  {
    id: crypto.randomUUID(),
    name: 'تغییر جهره',
    img: faceoff
  },
  {
    id: crypto.randomUUID(),
    name: 'بخت و اقبال',
    img: fortune
  },
  {
    id: crypto.randomUUID(),
    name: 'دستبند',
    img: handcuff
  },
  {
    id: crypto.randomUUID(),
    name: 'شلیک نهایی',
    img: kill
  },
  {
    id: crypto.randomUUID(),
    name: 'سکوت بره ها',
    img: lamb
  },
  {
    id: crypto.randomUUID(),
    name: 'دروغ سیزده',
    img: lie
  },
  {
    id: crypto.randomUUID(),
    name: 'ذهن زیبا',
    img: mind
  },
  {
    id: crypto.randomUUID(),
    name: 'بی خوابی',
    img: nosleep
  },
  {
    id: crypto.randomUUID(),
    name: 'تسخیر روح',
    img: posses
  },
  {
    id: crypto.randomUUID(),
    name: 'افشای هویت',
    img: reveal
  },
  {
    id: crypto.randomUUID(),
    name: 'شهر در امان',
    img: safe
  },
  {
    id: crypto.randomUUID(),
    name: 'حذف یا حقیقت',
    img: truce
  },
  {
    id: crypto.randomUUID(),
    name: 'افشای نقش',
    img: reveal2
  }
]
