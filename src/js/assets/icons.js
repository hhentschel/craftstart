// importing and setting up Font Awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core';

import {
  faPaperPlane as fasPaperPlane,
  faHouse as fasHouse,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fasPaperPlane,
  fasHouse
)

// convert i tags to SVG
dom.watch({
  autoReplaceSvgRoot: document,
  observeMutationsRoot: document.body
})