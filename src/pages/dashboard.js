/* eslint-disable no-undef */
import { useEffect } from "react";
import PropTypes from 'prop-types';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';
import LoggedInUserContext from "../context/logged-in-user";
import useUser from '../hooks/use-user';


export default function Dashboard({ user: loggedInUser }) {
    const { user } = useUser(loggedInUser.uid);
    
    useEffect(() => {
        document.title = 'Metaagram';
    }, []);

    return (
        <LoggedInUserContext.Provider value={{ user }}>
            <div className="bg-gray-background">
                <Header />
                <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                    <Timeline />
                    <Sidebar />
                </div>
            </div>
        </LoggedInUserContext.Provider>
    );
}

Dashboard.propTypes = {
    user: PropTypes.object.isRequired,
};