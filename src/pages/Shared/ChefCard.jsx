import image from '../../assets/menu/salad-bg.jpg'


const ChefCard = ({ chef }) => {

    const { name, recipe } = chef;

    return (
        <div className="card bg-[#F3F3F3]">
            <img src={image} alt="Shoes" />

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="mt-4">
                    <button className="bg-[#E8E8E8] hover:bg-black uppercase text-xl text-orange-600 border-b-4 px-7 py-5 rounded-lg border-orange-600">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;