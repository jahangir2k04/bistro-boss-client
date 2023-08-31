

const MenuItem = ({item, coverImg}) => {

    const { name, recipe, price} = item;

    return (
        <div className="flex">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-28 h-24 border mr-6" src={coverImg} alt="" />
            <div>
                <h3 className='text-xl'>{name} -------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-xl text-orange-600'>${price}</p>
        </div>
    );
};

export default MenuItem;