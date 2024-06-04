// importing and setting up Font Awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core';

import {
  faPaperPlane as fasPaperPlane,
  faHouse as fasHouse,
  faStar as fasStar,
  faUser as fasUser,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fasPaperPlane,
  fasHouse,
  fasStar,
  fasUser
)

// convert i tags to SVG
dom.watch({
  autoReplaceSvgRoot: document,
  observeMutationsRoot: document.body
})