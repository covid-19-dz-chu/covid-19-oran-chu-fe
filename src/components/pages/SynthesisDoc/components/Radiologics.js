const Radiologics = (props) => {
  return (
    <div>
    <h3>Radiologies :</h3>
              <hr/>
              { synthesis && synthesis.radiologics.map((radiologic) => {
                return (
                  <div className="row"> 
                    <div className="col-4">
                      <p><strong>Date:</strong> {new Date(radiologic.date).toDateString()}</p>
                    </div>
                    <div className="col-4">
                      <p><strong>Ajouté par: </strong> - </p>
                    </div>
                    <div className="col-4">
                      <p><strong>Type radiologie: </strong> {radiologic.type}</p>
                    </div>
                    <div className="col-12">
                      <p><strong>Observation: </strong>{radiologic.observation}</p>
                    </div>
                  </div>
                )
              })}
  </div>
  )
}