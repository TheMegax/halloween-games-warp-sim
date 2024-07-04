import parseJSON from "./parseJSON";
export const json = new parseJSON();

const baseWeapons = [
  "pretzel-piece-1",
  "pretzel-piece-2",
  "gummy-piece-1",
  "gummy-piece-2",
  "toffee-piece-1",
  "toffee-piece-2",
  "pocky-piece-1",
  "pocky-piece-2",
  "pipebomb-piece-1",
  "pipebomb-piece-2",
];

const allChars = [
  "arlan",
  "asta",
  "bailu",
  "blade",
  "bronya",
  "clara",
  "dan-heng",
  "gepard",
  "herta",
  "himeko",
  "hook",
  "imbibitor-lunae",
  "jing-yuan",
  "kafka",
  "luka",
  "luocha",
  "march-7th",
  "natasha",
  "pela",
  "qingque",
  "sampo",
  "serval",
  "seele",
  "silver-wolf",
  "sushang",
  "tingyun",
  "welt",
  "yanqing",
  "yukong",
  "fu-xuan",
  "lynx",
  "jingliu",
  "topaz-and-numby",
  "guinaifen",
  "argenti",
  "huohuo",
  "hanya",
  "ruan-mei",
  "xueyi",
  "dr-ratio",
  "black-swan",
  "misha",
  "sparkle",
  "aventurine",
  "acheron",
  "gallagher",
  "robin",
  "boothill",
  "firefly",
  "jade",
];

const allWeapons = [
  "pretzel-piece-1",
  "pretzel-piece-2",
  "gummy-piece-1",
  "gummy-piece-2",
  "toffee-piece-1",
  "toffee-piece-2",
  "pocky-piece-1",
  "pocky-piece-2",
  "pipebomb-piece-1",
  "pipebomb-piece-2",
  "candy-bag",
  "normal-item-1",
  "normal-item-2",
  "normal-item-3",
  "legendary-item",
  "pumpkin-piece",
  "stellar-candy"
];

const BGM = {
  ooc: ["space-walk", "science-fiction", "timeline"],
  osae: ["faded-sun", "embers", "streets-abuzz"],
  ss: ["lustrous-moonlight", "cumulus-formations", "exquisite-ingenuity"],
};

const allVers = [
  "2.3.1",
];

const hidden = ["2.3.2"];

const LATESTVERS = allVers.filter((vers) => !hidden.includes(vers))[0];

const asianLang = ["zh", "ko", "ja"];

const colourMap = {
  // blue: seele, silver wolf
  1: "#387ac6",
  // jing yuan, luocha
  2: "#4b7982",
  // purple: kafka
  3: "#80466f",
  // muted red: topaz, argenti
  4: "#a64e64",
  // slate: blade
  5: "#4a718e",
  // unknown
  6: "#6748c7",
  // bright red
  7: "#bb323e",
};

export {
  allChars,
  allWeapons,
  baseWeapons,
  BGM,
  allVers,
  asianLang,
  LATESTVERS,
  hidden,
  colourMap,
};
