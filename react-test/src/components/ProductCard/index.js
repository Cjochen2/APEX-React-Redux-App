import React from 'react';
import { purchasePart } from '../../utils/actions'
import { connect } from 'react-redux';
import './style.css'

// Added some bootstrap for some quick short hand styling as well as some basic CSS to make it resemble the PDF image
// not an exact match but.... maybe close enough?

const ProductCard = (props) => {
    return (
        <div className="row productCard">

            <div className="col-12 col-md-4">
                <img src={props.img} alt={props.name} />
            </div>

            <div className="col-12 col-md-8">
                <h5 className="prodName">{props.name}</h5>
                <p className="partNo mb-1">PartNo: <strong>{props.number}</strong></p>
                <p className="priceInfo mb-1"><strong>{props.price}</strong></p>
                <button className='addCart mb-2' onClick={() => props.addToCart()}>Add to Cart</button>
            </div>

        </div>
    )
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: () => dispatch(purchasePart({ partNo: ownProps.number, price: ownProps.price }))
    }
}


export default connect(null, mapDispatchToProps)(ProductCard);