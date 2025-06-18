import { useParams } from "react-router";

function Event() {
    const {id} = useParams ();
  return <div>Event: with id: {id}</div>;
}
export default Event