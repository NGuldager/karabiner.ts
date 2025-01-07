import {
  map,
  rule,
  writeToProfile,
  withModifier,
  modifierLayer,
  toApp,
  mapDoubleTap,
  mapSimultaneous,
} from 'karabiner.ts';
// import { getHomeRowMods } from './homerow';

const editor = 'Visual Studio Code';
const codingApp = 'IntelliJ IDEA';

// const homeRowForInternalKeyboard = getHomeRowMods();
// const homeRowForMoonlander = getHomeRowMods(90);

const leaderKey = 'f19';

const aiApplication = 'Supacode';

const shared = () => {
  return [
    rule(
      'Change caps_lock to control+option+shift (meh key) - escape if alone',
    ).manipulators([map('caps_lock').toMeh().toIfAlone('escape')]),
    rule('Hyper').manipulators([
      withModifier('Hyper')([
        map('c').to$(
          'open -g "raycast://customWindowManagementCommand?&name=Code"',
        ),
      ]),
    ]),
    rule('Leader key setup').manipulators([
      // mapDoubleTap('left_command', 300).to(leaderKey),
      mapDoubleTap('right_option', 300).to(leaderKey),
      mapSimultaneous(['left_command', 'right_command']).to(leaderKey),
    ]),
    modifierLayer('Meh', 'a', 'open-meh')
      .leaderMode()
      .description('Meh layer - Open apps')
      .notification()
      .manipulators({
        a: toApp(aiApplication),
        v: toApp('FortiClientVPN'),
        e: toApp(editor),
        c: toApp(codingApp),
        z: toApp('Zen'),
        b: toApp('Google Chrome'),
        s: toApp('Slack'),
        m: toApp('Spotify'),
        o: toApp('Microsoft Outlook'),
        l: toApp('Linear'),
        t: toApp('Ghostty'),
        f: toApp('Firefox'),
        p: toApp('Bruno'),
      }),
    rule('Symbols').manipulators([
      withModifier('Meh')([
        map('j').to('8', ['left_shift']),
        map('k').to('9', ['left_shift']),
        map('h').to('8', ['left_shift', 'left_option']),
        map('l').to('9', ['left_shift', 'left_option']),
        map('u').to('8', ['left_option']),
        map('i').to('9', ['left_option']),
        map('m').to('grave_accent_and_tilde'),
        map('comma').to('grave_accent_and_tilde', ['left_shift']),
        map('y').to('slash', ['left_shift']),
        map('o').to('non_us_backslash'),
        map('e').toApp(editor),
        map('v').toApp('FortiClientVPN'),
        map('c').toApp(codingApp),
        map('b').toApp('Google Chrome'),
        map('z').toApp('Zen'),
        map('s').toApp('Slack'),
        map('t').toApp('Ghostty'),
        map('f').toApp('Firefox'),
      ]),
      withModifier('Hyper')([map('a').toApp(aiApplication)]),
    ]),
  ];
};

// writeToProfile('Internal', shared().concat(homeRowForInternalKeyboard.rules), {
//   ...homeRowForInternalKeyboard.options,
// });

// writeToProfile('Moonlander', shared().concat(homeRowForMoonlander.rules), {
//   ...homeRowForMoonlander.options,
// });

writeToProfile('Simple', shared());

// writeToProfile('Clean', [])
