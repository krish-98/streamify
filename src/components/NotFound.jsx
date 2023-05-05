import { useRouteError } from "react-router-dom"

const NotFound = () => {
  const {
    status,
    statusText,
    error: { message },
  } = useRouteError()

  return (
    <div>
      <h1>{status}</h1>
      <p>{statusText}</p>
      <p>{message}</p>
    </div>
  )
}
export default NotFound
