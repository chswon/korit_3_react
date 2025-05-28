import { useQuery } from "@tanstack/react-query"
import axios from "axios"



export default function Repositories() {
  const getRepositories = async () => {
    const response = await axios.get('https://api.github.com/search/repositories?q=korit_3');
    return response.data.items;
  }

  const {isLoading, isError, data } = useQuery({
    queryKey: ['repositories'],
    queryFn: getRepositories
  })

  return (
    <table>
        <tbody>
            {
                data.map(repo =>
                    <tr key={repo.id}>
                        <td>{repo.full_name}</td>
                        <td>
                            <a href={repo.html_url}>{repo.full_name}</a> 
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
  );
}

