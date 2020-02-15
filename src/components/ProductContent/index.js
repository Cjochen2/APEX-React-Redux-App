import React from 'react';
import ProductCard from '../ProductCard/'
import { connect } from 'react-redux';

// For something this small I didn't need this component but felt like it better simulated real life scenario
// of having a body component that houses the page content vs for example a navBar or jumbotron

const productContent = (props) => {

    return (
        <div className='pageContent'>
            {props.state.purchase.map(products => {
                return (
                    <ProductCard
                        key={products.number}
                        name={products.name}
                        number={products.number}
                        price={products.pricing}
                        img={products.img}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(productContent)