// source https://github.com/Erlendms/karabiner-actions
import { map, mapSimultaneous, rule, toKey } from 'karabiner.ts'

const mods = ['⌃', '⌥', '⌘', '⇧'] as const

const TranslatedMods = {
  '⇧': 'shift',
  '⌃': 'control',
  '⌥': 'option',
  '⌘': 'command',
} as const

export const getHomeRowMods = (threshold = 80) => {
  const title = `Home row mods - ${TranslatedMods[mods[0]]}, ${
    TranslatedMods[mods[1]]
  }, ${TranslatedMods[mods[2]]}, ${TranslatedMods[mods[3]]}`
  const options = {
    'basic.to_if_held_down_threshold_milliseconds': threshold,
  }
  const rules = rule(title).manipulators([
    //
    // Four - left hand
    mapSimultaneous(['a', 's', 'd', 'f']).toIfHeldDown('l⇧', ['l⌘⌥⌃']),
    //
    // Three - left hand
    mapSimultaneous(['a', 's', 'd']).toIfHeldDown(`l${mods[0]}`, [
      `l${mods[2]}${mods[1]}`,
    ]),
    mapSimultaneous(['a', 'd', 'f']).toIfHeldDown(`l${mods[0]}`, [
      `l${mods[2]}${mods[3]}`,
    ]),
    mapSimultaneous(['s', 'd', 'f']).toIfHeldDown(`l${mods[1]}`, [
      `l${mods[2]}${mods[3]}`,
    ]),
    //
    // Two - left hand
    mapSimultaneous(['a', 's'], { key_down_order: 'strict' })
      .toIfAlone('a')
      .toIfAlone('s')
      .toIfHeldDown(`l${mods[0]}`, `l${mods[1]}`),
    mapSimultaneous(['s', 'a'], { key_down_order: 'strict' })
      .toIfAlone('s')
      .toIfAlone('a')
      .toIfHeldDown(`l${mods[0]}`, `l${mods[1]}`),
    mapSimultaneous(['a', 'd'], { key_down_order: 'strict' })
      .toIfAlone('a')
      .toIfAlone('d')
      .toIfHeldDown(`l${mods[0]}`, `l${mods[2]}`),
    mapSimultaneous(['d', 'a'], { key_down_order: 'strict' })
      .toIfAlone('d')
      .toIfAlone('a')
      .toIfHeldDown(`l${mods[0]}`, `l${mods[2]}`),
    mapSimultaneous(['a', 'f'], { key_down_order: 'strict' })
      .toIfAlone('a')
      .toIfAlone('f')
      .toIfHeldDown(`l${mods[0]}`, `l${mods[3]}`),
    mapSimultaneous(['f', 'a'], { key_down_order: 'strict' })
      .toIfAlone('f')
      .toIfAlone('a')
      .toIfHeldDown(`l${mods[0]}`, `l${mods[3]}`),
    mapSimultaneous(['s', 'd'], { key_down_order: 'strict' })
      .toIfAlone('s')
      .toIfAlone('d')
      .toIfHeldDown(`l${mods[1]}`, `l${mods[2]}`),
    mapSimultaneous(['d', 's'], { key_down_order: 'strict' })
      .toIfAlone('d')
      .toIfAlone('s')
      .toIfHeldDown(`l${mods[1]}`, `l${mods[2]}`),
    mapSimultaneous(['s', 'f'], { key_down_order: 'strict' })
      .toIfAlone('s')
      .toIfAlone('f')
      .toIfHeldDown(`l${mods[1]}`, `l${mods[3]}`),
    mapSimultaneous(['f', 's'], { key_down_order: 'strict' })
      .toIfAlone('f')
      .toIfAlone('s')
      .toIfHeldDown(`l${mods[1]}`, `l${mods[3]}`),
    mapSimultaneous(['d', 'f'], { key_down_order: 'strict' })
      .toIfAlone('d')
      .toIfAlone('f')
      .toIfHeldDown(`l${mods[2]}`, `l${mods[3]}`),
    mapSimultaneous(['f', 'd'], { key_down_order: 'strict' })
      .toIfAlone('f')
      .toIfAlone('d')
      .toIfHeldDown(`l${mods[2]}`, `l${mods[3]}`),
    //
    // One - left hand
    map('a')
      .toIfAlone('a', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('a'))
      .toIfHeldDown(`l${mods[0]}`, {}, { halt: true }),
    map('s')
      .toIfAlone('s', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('s'))
      .toIfHeldDown(`l${mods[1]}`, {}, { halt: true }),
    map('d')
      .toIfAlone('d', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('d'))
      .toIfHeldDown(`l${mods[2]}`, {}, { halt: true }),
    map('f')
      .toIfAlone('f', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('f', {}, { halt: true }))
      .toIfHeldDown(`l${mods[3]}`, {}, { halt: true }),
    //
    //
    // Four - right hand
    mapSimultaneous(['j', 'k', 'l', ';']).toIfHeldDown('r⇧', ['r⌘⌥⌃']),
    //
    // Three - right hand
    mapSimultaneous([';', 'l', 'k']).toIfHeldDown(`r${mods[0]}`, [
      `r${mods[2]}${mods[1]}`,
    ]),
    mapSimultaneous([';', 'k', 'j']).toIfHeldDown(`r${mods[0]}`, [
      `r${mods[2]}${mods[3]}`,
    ]),
    mapSimultaneous(['l', 'k', 'j']).toIfHeldDown(`r${mods[1]}`, [
      `r${mods[2]}${mods[3]}`,
    ]),
    //
    // Two - right hand
    mapSimultaneous([';', 'l'], { key_down_order: 'strict' })
      .toIfAlone(';')
      .toIfAlone('l')
      .toIfHeldDown(`r${mods[0]}`, `r${mods[1]}`),
    mapSimultaneous(['l', ';'], { key_down_order: 'strict' })
      .toIfAlone('l')
      .toIfAlone(';')
      .toIfHeldDown(`r${mods[0]}`, `r${mods[1]}`),
    mapSimultaneous([';', 'k'], { key_down_order: 'strict' })
      .toIfAlone(';')
      .toIfAlone('k')
      .toIfHeldDown(`r${mods[0]}`, `r${mods[2]}`),
    mapSimultaneous(['k', ';'], { key_down_order: 'strict' })
      .toIfAlone('k')
      .toIfAlone(';')
      .toIfHeldDown(`r${mods[0]}`, `r${mods[2]}`),
    mapSimultaneous([';', 'j'], { key_down_order: 'strict' })
      .toIfAlone(';')
      .toIfAlone('j')
      .toIfHeldDown(`r${mods[0]}`, `r${mods[3]}`),
    mapSimultaneous(['j', ';'], { key_down_order: 'strict' })
      .toIfAlone('j')
      .toIfAlone(';')
      .toIfHeldDown(`r${mods[0]}`, `r${mods[3]}`),
    mapSimultaneous(['l', 'k'], { key_down_order: 'strict' })
      .toIfAlone('l')
      .toIfAlone('k')
      .toIfHeldDown(`r${mods[1]}`, `r${mods[2]}`),
    mapSimultaneous(['k', 'l'], { key_down_order: 'strict' })
      .toIfAlone('k')
      .toIfAlone('l')
      .toIfHeldDown(`r${mods[1]}`, `r${mods[2]}`),
    mapSimultaneous(['l', 'j'], { key_down_order: 'strict' })
      .toIfAlone('l')
      .toIfAlone('j')
      .toIfHeldDown(`r${mods[1]}`, `r${mods[3]}`),
    mapSimultaneous(['j', 'l'], { key_down_order: 'strict' })
      .toIfAlone('j')
      .toIfAlone('l')
      .toIfHeldDown(`r${mods[1]}`, `r${mods[3]}`),
    mapSimultaneous(['k', 'j'], { key_down_order: 'strict' })
      .toIfAlone('k')
      .toIfAlone('j')
      .toIfHeldDown(`r${mods[2]}`, `r${mods[3]}`),
    mapSimultaneous(['j', 'k'], { key_down_order: 'strict' })
      .toIfAlone('j')
      .toIfAlone('k')
      .toIfHeldDown(`r${mods[2]}`, `r${mods[3]}`),
    //
    // One - right hand
    map(';')
      .toIfAlone(';', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey(';'))
      .toIfHeldDown(`r${mods[0]}`, {}, { halt: true }),
    map('l')
      .toIfAlone('l', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('l'))
      .toIfHeldDown(`r${mods[1]}`, {}, { halt: true }),
    map('k')
      .toIfAlone('k', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('k'))
      .toIfHeldDown(`r${mods[2]}`, {}, { halt: true }),
    map('j')
      .toIfAlone('j', {}, { halt: true })
      .toDelayedAction(toKey('vk_none'), toKey('j'))
      .toIfHeldDown(`r${mods[3]}`, {}, { halt: true }),
  ])
  return { rules, options }
}
