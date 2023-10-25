const ViewRequests = ({ requests }) => {
  return (
    <div>
      {requests.map((request) => (
        <div key={request._id} className="harbor">
          {request.approve? "no": <h5>Approve : "yes"</h5>}
          <h5>User : {request.User.name}</h5>
          <h5>Boat : {request.Boat.name}</h5>
          <h5>Harbor : {request.Harbor.name}</h5>
          <h5>License Type : {request.Boat.license_type}</h5>
          {request.approve? null: (<>
            <h5>Slip Number : {request.boatSlip.number}</h5>
            <h5>Starting Date : {request.StartDate}</h5>
            <h5>Expiry Date : {request.ExpiryDate}</h5>
          </>
          )}

        </div>
      ))}
    </div>
  )
}

export default ViewRequests
