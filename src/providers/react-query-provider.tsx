
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

interface Props {
  children:React.ReactNode
}
// Create a client
const queryClient = new QueryClient()

export function ReactQueryProvider({children}:Props) {
return (<QueryClientProvider client={queryClient}>
  {children}
    </QueryClientProvider>)
}
