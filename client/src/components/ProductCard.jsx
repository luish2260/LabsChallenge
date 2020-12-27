import React from 'react';

const ProductCard = (props) => {
	
return (
<div className="card z-depth-2">
<div className="row">
<div className="card-image waves-block waves-light center-align" >
<img src={props.img} className="activator center-align" alt="" />
</div>
</div>
<div className="card-content black-text">
<p className="card-title truncate" style={{textAlign:"center",color:"red"}}>{props.title}</p> {/* */}
</div>
<br/>
<div>
<h5 style={{textAlign:"center", color:"purple"}}>$ {props.price} {props.currentId}</h5>
<h5 style={{textAlign:"center", color:"blue"}}>Stock: {props.availableQuantity}</h5>
<h5 style={{textAlign:"center", color:"blue"}}>Condición: {props.condition === 'new' ? 'Nuevo' : 'Usado'}</h5>
</div>
<br/>
<br/>
</div>
);
};

export default ProductCard;