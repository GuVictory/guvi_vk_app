import React from 'react';
import {
    Panel,
    PanelHeader,
    Group,
    Div,
    CardGrid,
    Card,
    Gallery,
    Button,
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import roll from '../img/logo.svg';

import './Shop.css';

const SHOP_STORAGE = [
    {
        title: 'Оформить подписку',
        description:
            'Сами выберите сумму, за которую вы получите доступ ко всем курсам сервиса',
        price: {
            amount: 1,
            currency: {
                name: 'руб',
            },
        },
        thumb_photo: roll,
        photo_alt: 'Логотип компании CodesFord',
    },
];

const Shop = ({ id, snackbarError, fetchedState, go, desc_panel }) => {
    const openPayForm = () => {
        bridge
            .send('VKWebAppOpenPayForm', {
                app_id: 7639992, // Введи ID приложения
                action: 'transfer-to-group',
                params: {
                    data: {},
                    group_id: 199743324, // Ввести ID группы для перевода средств
                    description: 'Цену за подписку устанавливаете вы сами!',
                },
            })
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <Panel id={id}>
            <PanelHeader>Войти в IT</PanelHeader>
            <Group>
                <CardGrid>
                    {SHOP_STORAGE.length > 0 &&
                        SHOP_STORAGE.map((item, index) => (
                            <Card key={index} size='l' mode='shadow'>
                                <Div className='shop__card'>
                                    <Gallery
                                        slideWidth='90%'
                                        align='center'
                                        style={{ height: 150 }}>
                                        <img
                                            src={item.thumb_photo}
                                            alt={item.photo_alt}></img>
                                    </Gallery>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>

                                    <Button
                                        size='l'
                                        className='shop__btn'
                                        onClick={openPayForm}>
                                        Оформить подписку
                                    </Button>

                                    <Button
                                        size='l'
                                        mode='secondary'
                                        className='shop__btn'
                                        onClick={() => {
                                            go(desc_panel);
                                        }}>
                                        А что есть в этих курсах?
                                    </Button>
                                </Div>
                            </Card>
                        ))}
                </CardGrid>
            </Group>
        </Panel>
    );
};

export default Shop;
