import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");

	return axios.create({
		baseURL: "https://oer-bookr.herokuapp.com/api",
		headers: {
			Authorization: token
		}
	});
};

export default axiosWithAuth;