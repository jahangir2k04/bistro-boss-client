
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-2/5 mb-5 text-center mx-auto">
            <p className="text-xl mb-2 text-orange-600">---{subHeading}---</p>
            <h3 className="pt-3 pb-6 text-4xl uppercase border-y-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;