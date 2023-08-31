import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, recipe, category, price } = data;
                    const newItem = { name, image: imgURL, recipe, category, price: parseFloat(price) }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };


    return (
        <div className="px-20 py-10">
            <Helmet>
                <title>Bistro Boss | Add Item</title>
            </Helmet>
            <SectionTitle heading="Add An Item" subHeading="What's new?"></SectionTitle>
            <div className="bg-base-200 mt-16 p-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="Type here"
                            className="input input-bordered w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Pick One</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drink</option>
                                <option>Desi</option>
                            </select>
                        </div>
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number" placeholder="Type here"
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details</span>
                        </label>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-64"
                            placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs mb-6">
                        <label className="label">
                            <span className="label-text">Recipe Image*</span>
                        </label>
                        <input type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <input className="btn" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;