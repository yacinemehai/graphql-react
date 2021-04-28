import "./App.css";
import { gql, useQuery } from "@apollo/client";

const LAUNCHES = gql`
  {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map((launch) => (
    <div key={launch.details}>
      <card>
        <p>{launch.launch_date_utc}</p>
        <p>{launch.launch_success}</p>
        <p>{launch.rocket.rocket_name}</p>
        <p>{launch.links.video_link}</p>
        <p>{launch.details}</p>
      </card>
    </div>
  ));
}

export default App;
