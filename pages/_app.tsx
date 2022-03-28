import {useState} from "react";
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";

import {GlobalStyle} from "../assets/styles/globalStyles";

function MyApp({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    }))

    return <><GlobalStyle/><QueryClientProvider client={queryClient}><Component {...pageProps} />
    </QueryClientProvider> </>
}

export default MyApp
