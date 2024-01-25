/* eslint-disable react/display-name */
import { Suspense } from "react"

export const withRouter = (component) => () => (
    <Suspense fallback="Loading...">{component()}</Suspense>
)