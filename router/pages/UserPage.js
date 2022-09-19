import React from 'react';
import { useParams } from "react-router-dom";

export default function UserPage() {
	let {id} = useParams();

	return (
		<h1>Hello User {id}</h1>
	)
}
