import React from 'react'
import { useParams } from 'react-router-dom'

export default function EmployeeEdit() {
	const { id } = useParams()
	return (
		<h2>{`This is a placeholder for editing employee: ${id}`}</h2>
	)
}