import chefService from '../../assets/home/chef-service.jpg'


const AboutBistro = () => {
    return (
        <div className='max-w-6xl mx-auto mb-20'>
            <div className='relative'>
                <img src={chefService} alt="" />
                <div className='absolute inset-0 h-56 md:w-3/4 mx-auto my-auto text-center bg-white px-40 py-10'>
                    <h3 className='text-5xl mb-2 uppercase'>Bistro Boss</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit placeat minus debitis fugiat a ea esse est nulla in, doloremque deserunt vitae sit provident ipsum molestiae explicabo non numquam!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBistro;