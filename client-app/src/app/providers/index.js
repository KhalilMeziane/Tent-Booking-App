import compose from "compose-function"

import { withUi } from "./withUi"
import { withRouter } from "./withRouter"
import { withHelmet } from "./withHelmet"

export const withProviders = compose(withUi, withRouter, withHelmet)