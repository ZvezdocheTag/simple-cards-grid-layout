import React from 'react'
import './Notification.css'

export default function Notification({ message }) {
    return (
        <div className={`notification ${message.length ? 'is-active' : ''}`}>
            {message || 'hey'}
        </div>
    )
}
