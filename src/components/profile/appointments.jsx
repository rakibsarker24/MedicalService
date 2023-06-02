import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { authUser, route } from '../../config'
import { Link } from 'react-router-dom'

const Appointments = () => {
    const [items, setItems] = useState([])
    useEffect(() => {

        async function fetchAppointments() {
            let response = await route.get(`appointments?patientId=${authUser()?.id}`);
            response?.data && setItems(response?.data?.rows)
        }
        fetchAppointments();
    }, [])
    return (
        <div>
            {/* {authUser()?.id} */}
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Doctor Name</th>
                        <th>Doctor Email</th>
                        <th>Doctor Contact Number</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {items && items?.length > 0 && items?.map(item => (
                        <tr>
                            <td>1</td>
                            <td>{item?.user?.fullName}</td>
                            <td>{item?.user?.email}</td>
                            <td>{item?.user?.contactNumber}</td>
                            <td><Link to={`/profile/message/${item?.user?.id}`}>Message</Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Appointments