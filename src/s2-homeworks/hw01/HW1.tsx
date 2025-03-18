import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar1.png';
import avatarFriend from './avatar.png';

type UserType = {
    avatar: string;
    name: string;
};

type TextType = {
    text: string;
    time: string;
};

export type MessageType = {
    id: number;
    user: UserType;
    message: TextType;
};

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Siamionau Uladzimir',
    },
    message: {
        text: 'Hi, what you studied this week?',
        time: '07:00',
    },
};
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatarFriend,
        name: 'Pelevin Victor',
    },
    message: {
        text: 'I studied props from React',
        time: '07:15',
    },
};

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    );
};

export default HW1;
