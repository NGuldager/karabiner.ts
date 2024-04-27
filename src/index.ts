import { map, rule, mapSimultaneous, writeToProfile } from 'karabiner.ts'

writeToProfile('Default profile', [
  rule(
    'Change caps_lock to control+option+shift (meh key) - escape if alone',
  ).manipulators([map('caps_lock').toMeh().toIfAlone('escape')]),
  rule('f+j = escape').manipulators([mapSimultaneous(['f', 'j']).to('escape')]),
  rule('Symbols').manipulators([
    map('j', 'Meh').to('8', ['left_shift']),
    map('k', 'Meh').to('9', ['left_shift']),
    map('h', 'Meh').to('8', ['left_shift', 'left_option']),
    map('l', 'Meh').to('9', ['left_shift', 'left_option']),
    map('u', 'Meh').to('8', ['left_option']),
    map('i', 'Meh').to('9', ['left_option']),
    map('m', 'Meh').to('grave_accent_and_tilde'),
    map('comma', 'Meh').to('grave_accent_and_tilde', ['left_shift']),
    map('y', 'Meh').to('slash', ['left_shift']),
    map('o', 'Meh').to('non_us_backslash'),
  ]),
])
