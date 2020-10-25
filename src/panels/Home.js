import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './Home.css';

const Home = ({ id, snackbarError, fetchedState }) => {
    return (
        <Panel id={id}>
            <PanelHeader>Войти в IT</PanelHeader>
        </Panel>
    );
};

export default Home;
