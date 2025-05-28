import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import repositories from './Component/repositories';
import './App.css'

function App() {

  const queryClient = new QueryClient();
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Repositories />
      </QueryClientProvider>
    </>
  )
}

export default App