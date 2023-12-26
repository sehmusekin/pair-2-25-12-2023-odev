import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Homepage() {
	const axiosGet = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		console.log(response.data);
	};


	useEffect(() => {
		axiosGet();
	}, []);


	return (
		<div>
			<Link to={"/products"}>Ürünler Sayfası</Link>
		</div>
	);
}
