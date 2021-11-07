import React, { useState } from 'react'
import Card from '../Card'
import Notification from '../Notification'
import './CardsList.css'

const dummyData = [
    {
        title: 'Card 1',
        text: 'some content 1',
        image: 'http://source.unsplash.com/400x300?city',
        url: '/page1',
    },
    {
        title: 'Card 2',
        text: 'some content 2',
        image: 'http://source.unsplash.com/400x300?food',
        url: '/page2',
    },
    {
        title: 'Card 3',
        text: 'some content 3',
        image: 'http://source.unsplash.com/400x300?coffee',
        url: '/page3',
    },
    {
        title: 'Card 4',
        text: 'some content 4',
        image: 'http://source.unsplash.com/400x300?travel',
        url: '/page4',
    },
    {
        title: 'Card 5',
        text: 'some content 5',
        image: 'http://source.unsplash.com/400x300?art',
        url: '/page5',
    },
    {
        title: 'Card 6',
        text: 'some content 6',
        image: 'http://source.unsplash.com/400x300?mountain',
        url: '/page6',
    },
]

export default function CardsList() {
    const [notificationMessage, toggleNotification] = useState('')

    return (
        <div className="container">
            <h3 style={{ marginBottom: 35 }}>List of cards</h3>
            <div className="cards-list">
                {dummyData.map((cardItem) => (
                    <Card
                        {...cardItem}
                        message={notificationMessage}
                        toggleNotification={toggleNotification}
                    />
                ))}
            </div>
            <Notification message={notificationMessage} />
        </div>
    )
}
