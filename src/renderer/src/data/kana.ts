import type { Kana } from '@shared/types'

const kanaData: Kana[] = [
  // ─── HIRAGANA BASIC (46) ───────────────────────────────────────────────────
  { id: 'hira-a',  script: 'hiragana', char: 'あ', romaji: 'a',   group: 'basic' },
  { id: 'hira-i',  script: 'hiragana', char: 'い', romaji: 'i',   group: 'basic' },
  { id: 'hira-u',  script: 'hiragana', char: 'う', romaji: 'u',   group: 'basic' },
  { id: 'hira-e',  script: 'hiragana', char: 'え', romaji: 'e',   group: 'basic' },
  { id: 'hira-o',  script: 'hiragana', char: 'お', romaji: 'o',   group: 'basic' },

  { id: 'hira-ka', script: 'hiragana', char: 'か', romaji: 'ka',  group: 'basic' },
  { id: 'hira-ki', script: 'hiragana', char: 'き', romaji: 'ki',  group: 'basic' },
  { id: 'hira-ku', script: 'hiragana', char: 'く', romaji: 'ku',  group: 'basic' },
  { id: 'hira-ke', script: 'hiragana', char: 'け', romaji: 'ke',  group: 'basic' },
  { id: 'hira-ko', script: 'hiragana', char: 'こ', romaji: 'ko',  group: 'basic' },

  { id: 'hira-sa', script: 'hiragana', char: 'さ', romaji: 'sa',  group: 'basic' },
  { id: 'hira-shi',script: 'hiragana', char: 'し', romaji: 'shi', altRomaji: ['si'], group: 'basic' },
  { id: 'hira-su', script: 'hiragana', char: 'す', romaji: 'su',  group: 'basic' },
  { id: 'hira-se', script: 'hiragana', char: 'せ', romaji: 'se',  group: 'basic' },
  { id: 'hira-so', script: 'hiragana', char: 'そ', romaji: 'so',  group: 'basic' },

  { id: 'hira-ta', script: 'hiragana', char: 'た', romaji: 'ta',  group: 'basic' },
  { id: 'hira-chi',script: 'hiragana', char: 'ち', romaji: 'chi', altRomaji: ['ti'], group: 'basic' },
  { id: 'hira-tsu',script: 'hiragana', char: 'つ', romaji: 'tsu', altRomaji: ['tu'], group: 'basic' },
  { id: 'hira-te', script: 'hiragana', char: 'て', romaji: 'te',  group: 'basic' },
  { id: 'hira-to', script: 'hiragana', char: 'と', romaji: 'to',  group: 'basic' },

  { id: 'hira-na', script: 'hiragana', char: 'な', romaji: 'na',  group: 'basic' },
  { id: 'hira-ni', script: 'hiragana', char: 'に', romaji: 'ni',  group: 'basic' },
  { id: 'hira-nu', script: 'hiragana', char: 'ぬ', romaji: 'nu',  group: 'basic' },
  { id: 'hira-ne', script: 'hiragana', char: 'ね', romaji: 'ne',  group: 'basic' },
  { id: 'hira-no', script: 'hiragana', char: 'の', romaji: 'no',  group: 'basic' },

  { id: 'hira-ha', script: 'hiragana', char: 'は', romaji: 'ha',  group: 'basic' },
  { id: 'hira-hi', script: 'hiragana', char: 'ひ', romaji: 'hi',  group: 'basic' },
  { id: 'hira-fu', script: 'hiragana', char: 'ふ', romaji: 'fu',  altRomaji: ['hu'], group: 'basic' },
  { id: 'hira-he', script: 'hiragana', char: 'へ', romaji: 'he',  group: 'basic' },
  { id: 'hira-ho', script: 'hiragana', char: 'ほ', romaji: 'ho',  group: 'basic' },

  { id: 'hira-ma', script: 'hiragana', char: 'ま', romaji: 'ma',  group: 'basic' },
  { id: 'hira-mi', script: 'hiragana', char: 'み', romaji: 'mi',  group: 'basic' },
  { id: 'hira-mu', script: 'hiragana', char: 'む', romaji: 'mu',  group: 'basic' },
  { id: 'hira-me', script: 'hiragana', char: 'め', romaji: 'me',  group: 'basic' },
  { id: 'hira-mo', script: 'hiragana', char: 'も', romaji: 'mo',  group: 'basic' },

  { id: 'hira-ya', script: 'hiragana', char: 'や', romaji: 'ya',  group: 'basic' },
  { id: 'hira-yu', script: 'hiragana', char: 'ゆ', romaji: 'yu',  group: 'basic' },
  { id: 'hira-yo', script: 'hiragana', char: 'よ', romaji: 'yo',  group: 'basic' },

  { id: 'hira-ra', script: 'hiragana', char: 'ら', romaji: 'ra',  group: 'basic' },
  { id: 'hira-ri', script: 'hiragana', char: 'り', romaji: 'ri',  group: 'basic' },
  { id: 'hira-ru', script: 'hiragana', char: 'る', romaji: 'ru',  group: 'basic' },
  { id: 'hira-re', script: 'hiragana', char: 'れ', romaji: 're',  group: 'basic' },
  { id: 'hira-ro', script: 'hiragana', char: 'ろ', romaji: 'ro',  group: 'basic' },

  { id: 'hira-wa', script: 'hiragana', char: 'わ', romaji: 'wa',  group: 'basic' },
  { id: 'hira-wi', script: 'hiragana', char: 'ゐ', romaji: 'wi',  group: 'basic' },
  { id: 'hira-we', script: 'hiragana', char: 'ゑ', romaji: 'we',  group: 'basic' },
  { id: 'hira-wo', script: 'hiragana', char: 'を', romaji: 'wo',  altRomaji: ['o'], group: 'basic' },
  { id: 'hira-n',  script: 'hiragana', char: 'ん', romaji: 'n',   altRomaji: ['nn', 'n\''], group: 'basic' },

  // ─── HIRAGANA DAKUTEN (20) ─────────────────────────────────────────────────
  { id: 'hira-ga', script: 'hiragana', char: 'が', romaji: 'ga',  group: 'dakuten' },
  { id: 'hira-gi', script: 'hiragana', char: 'ぎ', romaji: 'gi',  group: 'dakuten' },
  { id: 'hira-gu', script: 'hiragana', char: 'ぐ', romaji: 'gu',  group: 'dakuten' },
  { id: 'hira-ge', script: 'hiragana', char: 'げ', romaji: 'ge',  group: 'dakuten' },
  { id: 'hira-go', script: 'hiragana', char: 'ご', romaji: 'go',  group: 'dakuten' },

  { id: 'hira-za', script: 'hiragana', char: 'ざ', romaji: 'za',  group: 'dakuten' },
  { id: 'hira-ji', script: 'hiragana', char: 'じ', romaji: 'ji',  altRomaji: ['zi'], group: 'dakuten' },
  { id: 'hira-zu', script: 'hiragana', char: 'ず', romaji: 'zu',  group: 'dakuten' },
  { id: 'hira-ze', script: 'hiragana', char: 'ぜ', romaji: 'ze',  group: 'dakuten' },
  { id: 'hira-zo', script: 'hiragana', char: 'ぞ', romaji: 'zo',  group: 'dakuten' },

  { id: 'hira-da', script: 'hiragana', char: 'だ', romaji: 'da',  group: 'dakuten' },
  { id: 'hira-di', script: 'hiragana', char: 'ぢ', romaji: 'di',  altRomaji: ['ji'], group: 'dakuten' },
  { id: 'hira-du', script: 'hiragana', char: 'づ', romaji: 'du',  altRomaji: ['zu'], group: 'dakuten' },
  { id: 'hira-de', script: 'hiragana', char: 'で', romaji: 'de',  group: 'dakuten' },
  { id: 'hira-do', script: 'hiragana', char: 'ど', romaji: 'do',  group: 'dakuten' },

  { id: 'hira-ba', script: 'hiragana', char: 'ば', romaji: 'ba',  group: 'dakuten' },
  { id: 'hira-bi', script: 'hiragana', char: 'び', romaji: 'bi',  group: 'dakuten' },
  { id: 'hira-bu', script: 'hiragana', char: 'ぶ', romaji: 'bu',  group: 'dakuten' },
  { id: 'hira-be', script: 'hiragana', char: 'べ', romaji: 'be',  group: 'dakuten' },
  { id: 'hira-bo', script: 'hiragana', char: 'ぼ', romaji: 'bo',  group: 'dakuten' },

  // ─── HIRAGANA HANDAKUTEN (5) ───────────────────────────────────────────────
  { id: 'hira-pa', script: 'hiragana', char: 'ぱ', romaji: 'pa',  group: 'handakuten' },
  { id: 'hira-pi', script: 'hiragana', char: 'ぴ', romaji: 'pi',  group: 'handakuten' },
  { id: 'hira-pu', script: 'hiragana', char: 'ぷ', romaji: 'pu',  group: 'handakuten' },
  { id: 'hira-pe', script: 'hiragana', char: 'ぺ', romaji: 'pe',  group: 'handakuten' },
  { id: 'hira-po', script: 'hiragana', char: 'ぽ', romaji: 'po',  group: 'handakuten' },

  // ─── HIRAGANA COMBO / YŌON (33) ───────────────────────────────────────────
  { id: 'hira-kya', script: 'hiragana', char: 'きゃ', romaji: 'kya', group: 'combo' },
  { id: 'hira-kyu', script: 'hiragana', char: 'きゅ', romaji: 'kyu', group: 'combo' },
  { id: 'hira-kyo', script: 'hiragana', char: 'きょ', romaji: 'kyo', group: 'combo' },

  { id: 'hira-sha', script: 'hiragana', char: 'しゃ', romaji: 'sha', altRomaji: ['sya'], group: 'combo' },
  { id: 'hira-shu', script: 'hiragana', char: 'しゅ', romaji: 'shu', altRomaji: ['syu'], group: 'combo' },
  { id: 'hira-sho', script: 'hiragana', char: 'しょ', romaji: 'sho', altRomaji: ['syo'], group: 'combo' },

  { id: 'hira-cha', script: 'hiragana', char: 'ちゃ', romaji: 'cha', altRomaji: ['tya'], group: 'combo' },
  { id: 'hira-chu', script: 'hiragana', char: 'ちゅ', romaji: 'chu', altRomaji: ['tyu'], group: 'combo' },
  { id: 'hira-cho', script: 'hiragana', char: 'ちょ', romaji: 'cho', altRomaji: ['tyo'], group: 'combo' },

  { id: 'hira-nya', script: 'hiragana', char: 'にゃ', romaji: 'nya', group: 'combo' },
  { id: 'hira-nyu', script: 'hiragana', char: 'にゅ', romaji: 'nyu', group: 'combo' },
  { id: 'hira-nyo', script: 'hiragana', char: 'にょ', romaji: 'nyo', group: 'combo' },

  { id: 'hira-hya', script: 'hiragana', char: 'ひゃ', romaji: 'hya', group: 'combo' },
  { id: 'hira-hyu', script: 'hiragana', char: 'ひゅ', romaji: 'hyu', group: 'combo' },
  { id: 'hira-hyo', script: 'hiragana', char: 'ひょ', romaji: 'hyo', group: 'combo' },

  { id: 'hira-mya', script: 'hiragana', char: 'みゃ', romaji: 'mya', group: 'combo' },
  { id: 'hira-myu', script: 'hiragana', char: 'みゅ', romaji: 'myu', group: 'combo' },
  { id: 'hira-myo', script: 'hiragana', char: 'みょ', romaji: 'myo', group: 'combo' },

  { id: 'hira-rya', script: 'hiragana', char: 'りゃ', romaji: 'rya', group: 'combo' },
  { id: 'hira-ryu', script: 'hiragana', char: 'りゅ', romaji: 'ryu', group: 'combo' },
  { id: 'hira-ryo', script: 'hiragana', char: 'りょ', romaji: 'ryo', group: 'combo' },

  { id: 'hira-gya', script: 'hiragana', char: 'ぎゃ', romaji: 'gya', group: 'combo' },
  { id: 'hira-gyu', script: 'hiragana', char: 'ぎゅ', romaji: 'gyu', group: 'combo' },
  { id: 'hira-gyo', script: 'hiragana', char: 'ぎょ', romaji: 'gyo', group: 'combo' },

  { id: 'hira-ja',  script: 'hiragana', char: 'じゃ', romaji: 'ja',  altRomaji: ['zya', 'jya'], group: 'combo' },
  { id: 'hira-ju',  script: 'hiragana', char: 'じゅ', romaji: 'ju',  altRomaji: ['zyu', 'jyu'], group: 'combo' },
  { id: 'hira-jo',  script: 'hiragana', char: 'じょ', romaji: 'jo',  altRomaji: ['zyo', 'jyo'], group: 'combo' },

  { id: 'hira-bya', script: 'hiragana', char: 'びゃ', romaji: 'bya', group: 'combo' },
  { id: 'hira-byu', script: 'hiragana', char: 'びゅ', romaji: 'byu', group: 'combo' },
  { id: 'hira-byo', script: 'hiragana', char: 'びょ', romaji: 'byo', group: 'combo' },

  { id: 'hira-pya', script: 'hiragana', char: 'ぴゃ', romaji: 'pya', group: 'combo' },
  { id: 'hira-pyu', script: 'hiragana', char: 'ぴゅ', romaji: 'pyu', group: 'combo' },
  { id: 'hira-pyo', script: 'hiragana', char: 'ぴょ', romaji: 'pyo', group: 'combo' },

  // ─── KATAKANA BASIC (46) ──────────────────────────────────────────────────
  { id: 'kata-a',  script: 'katakana', char: 'ア', romaji: 'a',   group: 'basic' },
  { id: 'kata-i',  script: 'katakana', char: 'イ', romaji: 'i',   group: 'basic' },
  { id: 'kata-u',  script: 'katakana', char: 'ウ', romaji: 'u',   group: 'basic' },
  { id: 'kata-e',  script: 'katakana', char: 'エ', romaji: 'e',   group: 'basic' },
  { id: 'kata-o',  script: 'katakana', char: 'オ', romaji: 'o',   group: 'basic' },

  { id: 'kata-ka', script: 'katakana', char: 'カ', romaji: 'ka',  group: 'basic' },
  { id: 'kata-ki', script: 'katakana', char: 'キ', romaji: 'ki',  group: 'basic' },
  { id: 'kata-ku', script: 'katakana', char: 'ク', romaji: 'ku',  group: 'basic' },
  { id: 'kata-ke', script: 'katakana', char: 'ケ', romaji: 'ke',  group: 'basic' },
  { id: 'kata-ko', script: 'katakana', char: 'コ', romaji: 'ko',  group: 'basic' },

  { id: 'kata-sa', script: 'katakana', char: 'サ', romaji: 'sa',  group: 'basic' },
  { id: 'kata-shi',script: 'katakana', char: 'シ', romaji: 'shi', altRomaji: ['si'], group: 'basic' },
  { id: 'kata-su', script: 'katakana', char: 'ス', romaji: 'su',  group: 'basic' },
  { id: 'kata-se', script: 'katakana', char: 'セ', romaji: 'se',  group: 'basic' },
  { id: 'kata-so', script: 'katakana', char: 'ソ', romaji: 'so',  group: 'basic' },

  { id: 'kata-ta', script: 'katakana', char: 'タ', romaji: 'ta',  group: 'basic' },
  { id: 'kata-chi',script: 'katakana', char: 'チ', romaji: 'chi', altRomaji: ['ti'], group: 'basic' },
  { id: 'kata-tsu',script: 'katakana', char: 'ツ', romaji: 'tsu', altRomaji: ['tu'], group: 'basic' },
  { id: 'kata-te', script: 'katakana', char: 'テ', romaji: 'te',  group: 'basic' },
  { id: 'kata-to', script: 'katakana', char: 'ト', romaji: 'to',  group: 'basic' },

  { id: 'kata-na', script: 'katakana', char: 'ナ', romaji: 'na',  group: 'basic' },
  { id: 'kata-ni', script: 'katakana', char: 'ニ', romaji: 'ni',  group: 'basic' },
  { id: 'kata-nu', script: 'katakana', char: 'ヌ', romaji: 'nu',  group: 'basic' },
  { id: 'kata-ne', script: 'katakana', char: 'ネ', romaji: 'ne',  group: 'basic' },
  { id: 'kata-no', script: 'katakana', char: 'ノ', romaji: 'no',  group: 'basic' },

  { id: 'kata-ha', script: 'katakana', char: 'ハ', romaji: 'ha',  group: 'basic' },
  { id: 'kata-hi', script: 'katakana', char: 'ヒ', romaji: 'hi',  group: 'basic' },
  { id: 'kata-fu', script: 'katakana', char: 'フ', romaji: 'fu',  altRomaji: ['hu'], group: 'basic' },
  { id: 'kata-he', script: 'katakana', char: 'ヘ', romaji: 'he',  group: 'basic' },
  { id: 'kata-ho', script: 'katakana', char: 'ホ', romaji: 'ho',  group: 'basic' },

  { id: 'kata-ma', script: 'katakana', char: 'マ', romaji: 'ma',  group: 'basic' },
  { id: 'kata-mi', script: 'katakana', char: 'ミ', romaji: 'mi',  group: 'basic' },
  { id: 'kata-mu', script: 'katakana', char: 'ム', romaji: 'mu',  group: 'basic' },
  { id: 'kata-me', script: 'katakana', char: 'メ', romaji: 'me',  group: 'basic' },
  { id: 'kata-mo', script: 'katakana', char: 'モ', romaji: 'mo',  group: 'basic' },

  { id: 'kata-ya', script: 'katakana', char: 'ヤ', romaji: 'ya',  group: 'basic' },
  { id: 'kata-yu', script: 'katakana', char: 'ユ', romaji: 'yu',  group: 'basic' },
  { id: 'kata-yo', script: 'katakana', char: 'ヨ', romaji: 'yo',  group: 'basic' },

  { id: 'kata-ra', script: 'katakana', char: 'ラ', romaji: 'ra',  group: 'basic' },
  { id: 'kata-ri', script: 'katakana', char: 'リ', romaji: 'ri',  group: 'basic' },
  { id: 'kata-ru', script: 'katakana', char: 'ル', romaji: 'ru',  group: 'basic' },
  { id: 'kata-re', script: 'katakana', char: 'レ', romaji: 're',  group: 'basic' },
  { id: 'kata-ro', script: 'katakana', char: 'ロ', romaji: 'ro',  group: 'basic' },

  { id: 'kata-wa', script: 'katakana', char: 'ワ', romaji: 'wa',  group: 'basic' },
  { id: 'kata-wi', script: 'katakana', char: 'ヰ', romaji: 'wi',  group: 'basic' },
  { id: 'kata-we', script: 'katakana', char: 'ヱ', romaji: 'we',  group: 'basic' },
  { id: 'kata-wo', script: 'katakana', char: 'ヲ', romaji: 'wo',  altRomaji: ['o'], group: 'basic' },
  { id: 'kata-n',  script: 'katakana', char: 'ン', romaji: 'n',   altRomaji: ['nn', 'n\''], group: 'basic' },

  // ─── KATAKANA DAKUTEN (20) ────────────────────────────────────────────────
  { id: 'kata-ga', script: 'katakana', char: 'ガ', romaji: 'ga',  group: 'dakuten' },
  { id: 'kata-gi', script: 'katakana', char: 'ギ', romaji: 'gi',  group: 'dakuten' },
  { id: 'kata-gu', script: 'katakana', char: 'グ', romaji: 'gu',  group: 'dakuten' },
  { id: 'kata-ge', script: 'katakana', char: 'ゲ', romaji: 'ge',  group: 'dakuten' },
  { id: 'kata-go', script: 'katakana', char: 'ゴ', romaji: 'go',  group: 'dakuten' },

  { id: 'kata-za', script: 'katakana', char: 'ザ', romaji: 'za',  group: 'dakuten' },
  { id: 'kata-ji', script: 'katakana', char: 'ジ', romaji: 'ji',  altRomaji: ['zi'], group: 'dakuten' },
  { id: 'kata-zu', script: 'katakana', char: 'ズ', romaji: 'zu',  group: 'dakuten' },
  { id: 'kata-ze', script: 'katakana', char: 'ゼ', romaji: 'ze',  group: 'dakuten' },
  { id: 'kata-zo', script: 'katakana', char: 'ゾ', romaji: 'zo',  group: 'dakuten' },

  { id: 'kata-da', script: 'katakana', char: 'ダ', romaji: 'da',  group: 'dakuten' },
  { id: 'kata-di', script: 'katakana', char: 'ヂ', romaji: 'di',  altRomaji: ['ji'], group: 'dakuten' },
  { id: 'kata-du', script: 'katakana', char: 'ヅ', romaji: 'du',  altRomaji: ['zu'], group: 'dakuten' },
  { id: 'kata-de', script: 'katakana', char: 'デ', romaji: 'de',  group: 'dakuten' },
  { id: 'kata-do', script: 'katakana', char: 'ド', romaji: 'do',  group: 'dakuten' },

  { id: 'kata-ba', script: 'katakana', char: 'バ', romaji: 'ba',  group: 'dakuten' },
  { id: 'kata-bi', script: 'katakana', char: 'ビ', romaji: 'bi',  group: 'dakuten' },
  { id: 'kata-bu', script: 'katakana', char: 'ブ', romaji: 'bu',  group: 'dakuten' },
  { id: 'kata-be', script: 'katakana', char: 'ベ', romaji: 'be',  group: 'dakuten' },
  { id: 'kata-bo', script: 'katakana', char: 'ボ', romaji: 'bo',  group: 'dakuten' },

  // ─── KATAKANA HANDAKUTEN (5) ──────────────────────────────────────────────
  { id: 'kata-pa', script: 'katakana', char: 'パ', romaji: 'pa',  group: 'handakuten' },
  { id: 'kata-pi', script: 'katakana', char: 'ピ', romaji: 'pi',  group: 'handakuten' },
  { id: 'kata-pu', script: 'katakana', char: 'プ', romaji: 'pu',  group: 'handakuten' },
  { id: 'kata-pe', script: 'katakana', char: 'ペ', romaji: 'pe',  group: 'handakuten' },
  { id: 'kata-po', script: 'katakana', char: 'ポ', romaji: 'po',  group: 'handakuten' },

  // ─── KATAKANA COMBO / YŌON (33) ──────────────────────────────────────────
  { id: 'kata-kya', script: 'katakana', char: 'キャ', romaji: 'kya', group: 'combo' },
  { id: 'kata-kyu', script: 'katakana', char: 'キュ', romaji: 'kyu', group: 'combo' },
  { id: 'kata-kyo', script: 'katakana', char: 'キョ', romaji: 'kyo', group: 'combo' },

  { id: 'kata-sha', script: 'katakana', char: 'シャ', romaji: 'sha', altRomaji: ['sya'], group: 'combo' },
  { id: 'kata-shu', script: 'katakana', char: 'シュ', romaji: 'shu', altRomaji: ['syu'], group: 'combo' },
  { id: 'kata-sho', script: 'katakana', char: 'ショ', romaji: 'sho', altRomaji: ['syo'], group: 'combo' },

  { id: 'kata-cha', script: 'katakana', char: 'チャ', romaji: 'cha', altRomaji: ['tya'], group: 'combo' },
  { id: 'kata-chu', script: 'katakana', char: 'チュ', romaji: 'chu', altRomaji: ['tyu'], group: 'combo' },
  { id: 'kata-cho', script: 'katakana', char: 'チョ', romaji: 'cho', altRomaji: ['tyo'], group: 'combo' },

  { id: 'kata-nya', script: 'katakana', char: 'ニャ', romaji: 'nya', group: 'combo' },
  { id: 'kata-nyu', script: 'katakana', char: 'ニュ', romaji: 'nyu', group: 'combo' },
  { id: 'kata-nyo', script: 'katakana', char: 'ニョ', romaji: 'nyo', group: 'combo' },

  { id: 'kata-hya', script: 'katakana', char: 'ヒャ', romaji: 'hya', group: 'combo' },
  { id: 'kata-hyu', script: 'katakana', char: 'ヒュ', romaji: 'hyu', group: 'combo' },
  { id: 'kata-hyo', script: 'katakana', char: 'ヒョ', romaji: 'hyo', group: 'combo' },

  { id: 'kata-mya', script: 'katakana', char: 'ミャ', romaji: 'mya', group: 'combo' },
  { id: 'kata-myu', script: 'katakana', char: 'ミュ', romaji: 'myu', group: 'combo' },
  { id: 'kata-myo', script: 'katakana', char: 'ミョ', romaji: 'myo', group: 'combo' },

  { id: 'kata-rya', script: 'katakana', char: 'リャ', romaji: 'rya', group: 'combo' },
  { id: 'kata-ryu', script: 'katakana', char: 'リュ', romaji: 'ryu', group: 'combo' },
  { id: 'kata-ryo', script: 'katakana', char: 'リョ', romaji: 'ryo', group: 'combo' },

  { id: 'kata-gya', script: 'katakana', char: 'ギャ', romaji: 'gya', group: 'combo' },
  { id: 'kata-gyu', script: 'katakana', char: 'ギュ', romaji: 'gyu', group: 'combo' },
  { id: 'kata-gyo', script: 'katakana', char: 'ギョ', romaji: 'gyo', group: 'combo' },

  { id: 'kata-ja',  script: 'katakana', char: 'ジャ', romaji: 'ja',  altRomaji: ['zya', 'jya'], group: 'combo' },
  { id: 'kata-ju',  script: 'katakana', char: 'ジュ', romaji: 'ju',  altRomaji: ['zyu', 'jyu'], group: 'combo' },
  { id: 'kata-jo',  script: 'katakana', char: 'ジョ', romaji: 'jo',  altRomaji: ['zyo', 'jyo'], group: 'combo' },

  { id: 'kata-bya', script: 'katakana', char: 'ビャ', romaji: 'bya', group: 'combo' },
  { id: 'kata-byu', script: 'katakana', char: 'ビュ', romaji: 'byu', group: 'combo' },
  { id: 'kata-byo', script: 'katakana', char: 'ビョ', romaji: 'byo', group: 'combo' },

  { id: 'kata-pya', script: 'katakana', char: 'ピャ', romaji: 'pya', group: 'combo' },
  { id: 'kata-pyu', script: 'katakana', char: 'ピュ', romaji: 'pyu', group: 'combo' },
  { id: 'kata-pyo', script: 'katakana', char: 'ピョ', romaji: 'pyo', group: 'combo' },
]

export default kanaData
