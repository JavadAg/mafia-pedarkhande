import _ from 'lodash'
import { arrayUnion } from '../utils/arrayUnion'

export interface ScenarioRoles {
  id: string
  name: string
  multiple?: boolean
}

export const mafiaRoles: ScenarioRoles[] = [
  {
    id: crypto.randomUUID(),
    name: 'پدرخوانده(مافیا)'
  },
  {
    id: crypto.randomUUID(),
    name: 'دکتر لکتر (مافیا)'
  },
  {
    id: crypto.randomUUID(),
    name: 'ناتو'
  },
  {
    id: crypto.randomUUID(),
    name: 'تروریست'
  },
  {
    id: crypto.randomUUID(),
    name: 'مذاکره کننده'
  },

  {
    id: crypto.randomUUID(),
    name: 'دکتر شهر'
  },
  {
    id: crypto.randomUUID(),
    name: 'کاراگاه'
  },
  {
    id: crypto.randomUUID(),
    name: 'حرفه ای'
  },
  {
    id: crypto.randomUUID(),
    name: 'فراماسون'
  },
  {
    id: crypto.randomUUID(),
    name: 'جان سخت'
  },
  {
    id: crypto.randomUUID(),
    name: 'تفنگدار'
  },
  {
    id: crypto.randomUUID(),
    name: 'اهنگر'
  },
  {
    id: crypto.randomUUID(),
    name: 'فدایی'
  },
  {
    id: crypto.randomUUID(),
    name: 'شهردار'
  },
  {
    id: crypto.randomUUID(),
    name: 'روانشناس'
  },
  {
    id: crypto.randomUUID(),
    name: 'ساقی'
  },
  {
    id: crypto.randomUUID(),
    name: 'مافیا ساده',
    multiple: true
  },
  {
    id: crypto.randomUUID(),
    name: 'شهروند ساده',
    multiple: true
  }
]

export const godfatherRoles: ScenarioRoles[] = [
  {
    id: crypto.randomUUID(),
    name: 'پدرخوانده (پدرخوانده)'
  },
  {
    id: crypto.randomUUID(),
    name: 'ماتادور'
  },
  {
    id: crypto.randomUUID(),
    name: 'ساول گـودمن'
  },
  {
    id: crypto.randomUUID(),
    name: 'نوستراداموس'
  },
  {
    id: crypto.randomUUID(),
    name: 'دکتر واتسون'
  },
  {
    id: crypto.randomUUID(),
    name: 'شهروند کین'
  },
  {
    id: crypto.randomUUID(),
    name: 'کنستانتین'
  },
  {
    id: crypto.randomUUID(),
    name: 'لئون حرفه ای'
  },
  {
    id: crypto.randomUUID(),
    name: 'مافیا ساده',
    multiple: true
  },
  {
    id: crypto.randomUUID(),
    name: 'شهروند ساده',
    multiple: true
  }
]

export const mixedRoles: ScenarioRoles[] = arrayUnion(
  mafiaRoles,
  godfatherRoles,
  'name'
)
