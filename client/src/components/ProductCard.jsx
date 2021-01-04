import React from 'react';

const ProductCard = (props) => {
return (
<div className="card z-depth-2">
<div className="row">
<div className="card-image waves-block waves-light center-align" >
<img src={props.img} className="activator center-align" alt="img not found" />
</div>
</div>
<div className="card-content grey-text">
<p className="card-title truncate">{props.title}</p>
</div>
<br/>
<div>
<h5 style={{textAlign:"center"}}>${props.price} {props.currentId}</h5>
<h5 style={{textAlign:"center", color:"red"}}>stock: {props.availableQuantity} Condición: {props.condition === 'new' ? 'Nuevo' : 'Usado'}</h5>
</div>
</div>
)};

export default ProductCard;