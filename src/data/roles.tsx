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
    id: '11',
    name: 'پدرخوانده(مافیا)',
    img: godfather2
  },
  {
    id: '12',
    name: 'دکتر لکتر (مافیا)',
    img: dr_mafia
  },
  {
    id: '13',
    name: 'ناتو',
    img: nato
  },
  {
    id: '14',
    name: 'تروریست',
    img: terrorist
  },
  {
    id: '15',
    name: 'دکتر شهر',
    img: dr
  },
  {
    id: '16',
    name: 'کاراگاه',
    img: detective
  },
  {
    id: '17',
    name: 'حرفه ای',
    img: hitman
  },
  {
    id: '18',
    name: 'فراماسون',
    img: framason
  },
  {
    id: '19',
    name: 'جان سخت',
    img: diehard
  },
  {
    id: '20',
    name: 'تفنگدار',
    img: gunner
  },
  {
    id: '21',
    name: 'اهنگر',
    img: blacksmith
  },
  {
    id: '22',
    name: 'فدایی',
    img: fadai
  },
  {
    id: '23',
    name: 'شهردار',
    img: mayor
  },
  {
    id: '24',
    name: 'روانشناس',
    img: psychiatric
  },
  {
    id: '25',
    name: 'ساقی',
    img: butler
  },
  {
    id: '26',
    name: 'مافیا ساده',
    img: mafia_sade,
    multiple: true
  },
  {
    id: '27',
    name: 'شهروند ساده',
    img: shahr_sade,
    multiple: true
  }
]

export const godfatherRoles: ScenarioRoles[] = [
  {
    id: '1',
    name: 'پدرخوانده (پدرخوانده)',
    img: godfather
  },
  {
    id: '2',
    name: 'ماتادور',
    img: matador
  },
  {
    id: '3',
    name: 'ساول گـودمن',
    img: goodman
  },
  {
    id: '4',
    name: 'نوستراداموس',
    img: nostradamus
  },
  {
    id: '5',
    name: 'دکتر واتسون',
    img: watson
  },
  {
    id: '6',
    name: 'شهروند کین',
    img: kane
  },
  {
    id: '7',
    name: 'کنستانتین',
    img: constantine
  },
  {
    id: '8',
    name: 'لئون حرفه ای',
    img: leon
  },
  {
    id: '9',
    name: 'مافیا ساده',
    img: mafia_sade,
    multiple: true
  },
  {
    id: '10',
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

export type LastMoves = {
  id: string
  name: string
  number?: number
  img: string
}

export const lastMoves = [
  {
    id: '1',
    name: 'تغییر جهره',
    img: faceoff
  },
  {
    id: '2',
    name: 'بخت و اقبال',
    img: fortune
  },
  {
    id: '3',
    name: 'دستبند',
    img: handcuff
  },
  {
    id: '4',
    name: 'شلیک نهایی',
    img: kill
  },
  {
    id: '5',
    name: 'سکوت بره ها',
    img: lamb
  },
  {
    id: '6',
    name: 'دروغ سیزده',
    img: lie
  },
  {
    id: '7',
    name: 'ذهن زیبا',
    img: mind
  },
  {
    id: '8',
    name: 'بی خوابی',
    img: nosleep
  },
  {
    id: '9',
    name: 'تسخیر روح',
    img: posses
  },
  {
    id: '10',
    name: 'افشای هویت',
    img: reveal
  },
  {
    id: '11',
    name: 'شهر در امان',
    img: safe
  },
  {
    id: '12',
    name: 'حذف یا حقیقت',
    img: truce
  },
  {
    id: '13',
    name: 'افشای نقش',
    img: reveal2
  }
]
