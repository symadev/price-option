import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';



const PriceOption = ({option}) => {
    //now we distructure here the price option
    //here we use each price-option in priceoptions that is the parent of this div

    const {name,price, features} = option;
    return (
        <div className='bg-yellow-200 rounded-lg text-black p-10'>
<h2>
    <span className='text-7xl'>{price}</span>
    <span className='text-4xl'>/mon</span>
</h2>
<h4 className='text-3xl font-bold'>{name}</h4>
{
    features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
}
<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-slate-800">Buy Now</button>          
        </div>
    );
};

PriceOption.propTypes= {

    option: PropTypes.object
}

export default PriceOption;