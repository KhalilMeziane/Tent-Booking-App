import { Helmet } from 'react-helmet-async'

// eslint-disable-next-line react/prop-types
export default function Head ({ children } ) {
    return (
        <Helmet>
            {children}
        </Helmet>
    )
}