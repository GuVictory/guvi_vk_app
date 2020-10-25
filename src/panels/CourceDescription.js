import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import {
    faCss3Alt,
    faHtml5,
    faBootstrap,
    faJsSquare,
    faPython,
} from '@fortawesome/free-brands-svg-icons';

import {
    Panel,
    PanelHeader,
    PanelHeaderButton,
    Group,
    CardGrid,
    Card,
    Text,
    Headline,
    List,
    Cell,
} from '@vkontakte/vkui';
import './CourceDescription.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const CourceDescription = ({ id, go, route }) => {
    return (
        <Panel id={id}>
            <PanelHeader
                left={
                    <PanelHeaderButton
                        onClick={() => {
                            go(route);
                        }}>
                        <Icon24Back />
                    </PanelHeaderButton>
                }>
                Описание курса
            </PanelHeader>
            <Headline weight='semibold' className='desc_header'>
                Покупая подписку, ты узнаешь различные области IT:
            </Headline>

            <Group separator='hide'>
                <CardGrid>
                    <Card size='m'>
                        <div
                            className='desc__card'
                            style={{ backgroundColor: '#81E5B0' }}>
                            <FontAwesomeIcon
                                className='desc__card__icon'
                                icon={faHtml5}
                            />
                            <span>HTML5</span>
                        </div>
                    </Card>
                    <Card size='m'>
                        <div
                            className='desc__card'
                            style={{ backgroundColor: '#879AFF' }}>
                            <FontAwesomeIcon
                                className='desc__card__icon'
                                icon={faCss3Alt}
                            />
                            <span>CSS3</span>
                        </div>
                    </Card>
                    <Card size='s'>
                        <div
                            className='desc__card'
                            style={{ backgroundColor: '#FBB475' }}>
                            <FontAwesomeIcon
                                className='desc__card__icon'
                                icon={faJsSquare}
                            />
                            <span>JavaScript</span>
                        </div>
                    </Card>
                    <Card size='s'>
                        <div
                            className='desc__card'
                            style={{ backgroundColor: '#F09277' }}>
                            <FontAwesomeIcon
                                className='desc__card__icon'
                                icon={faBootstrap}
                            />
                            <span>Bootstrap5</span>
                        </div>
                    </Card>
                    <Card size='s'>
                        <div
                            className='desc__card'
                            style={{ backgroundColor: '#63C7E3' }}>
                            <FontAwesomeIcon
                                className='desc__card__icon'
                                icon={faPython}
                            />
                            <span>Python3</span>
                        </div>
                    </Card>
                </CardGrid>
            </Group>

            <Headline weight='semibold' className='desc_header'>
                А так же получишь:
            </Headline>
            <List>
                <Cell before={<Icon24Education />} className='desc_point'>
                    <Text weight='medium'>советы по программе обучения</Text>
                </Cell>
                <Cell before={<Icon24Flash />} className='desc_point'>
                    <Text weight='medium'>советы по трудоустройству</Text>
                </Cell>
                <Cell before={<Icon24Notification />} className='desc_point'>
                    <Text weight='medium'>доступ к рассылке</Text>
                </Cell>
            </List>
        </Panel>
    );
};

export default CourceDescription;
