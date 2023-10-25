const ViewRequests = ({ requests }) => {
  return (
    <div>
      {requests.map((request) => (
        <div key={request._id} className="harbor">
          <h3>Boat : {request.Boat.name}</h3>
          <h3>User : {request.User.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ViewRequests
