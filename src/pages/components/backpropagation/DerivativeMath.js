import backwardsPropagation from '../backwardprop.JPG'
import {costFunction, derivativeOfCostOverWeight} from '../perceptronMath' 

function DerivativeMath(props) {
    let derivOfCostOverHiddenWeight = derivativeOfCostOverWeight(props.x, props.a, props.z, props.y);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={backwardsPropagation}></img>
                </div>
                <div className='col-md-4'>
                    <p>Cost function: {costFunction(props.x, props.y).toFixed(2)}</p>
                    <p>Derivative of cost over hidden layer weight: {derivOfCostOverHiddenWeight}</p>
                </div>
            </div>
            
        </div>
    )
}

export default DerivativeMath;