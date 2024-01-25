/* eslint-disable react-refresh/only-export-components */
import { withProviders } from "./providers"
import { AppRouter } from "./router"

function App () {
    return (<AppRouter />);
}

export default withProviders(App);
