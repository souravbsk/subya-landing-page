import React from 'react';
import TrackSlat from './TrackSlat/TrackSlat';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Dashboard = () => {
    return (
        <section>
            <SectionTitle title="Dashboard Overview" className="text-left"></SectionTitle>
            <TrackSlat></TrackSlat>
        </section>
    );
};

export default Dashboard;