import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ChefCard from "../Shared/ChefCard";

const RecommendsChef = () => {

    const [chefs, setChefs] = useState([]);
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const salad = data.filter(chef => chef.category === 'salad');
            setChefs(salad)
        })
    }, []);

    return (
        <section className="max-w-6xl mx-auto mb-20">
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try" ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    chefs.map(chef => <ChefCard key={chef._id} chef={chef}></ChefCard>)
                }
            </div>
        </section>
    );
};

export default RecommendsChef;