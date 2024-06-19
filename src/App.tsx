import OnThisDay from "./components/OnThisDay/OnThisDay.tsx";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
        <OnThisDay />
      </QueryClientProvider>
  )
}

export default App
