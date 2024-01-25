/* eslint-disable react/display-name */
import { HelmetProvider } from 'react-helmet-async'

export const withHelmet = (component) => () => (
    <HelmetProvider>{component()}</HelmetProvider>
)