import React from 'react'
import './Card.css'

export default function Card({
    image,
    title,
    text,
    url,
    message,
    toggleNotification,
}) {
    return (
        <div className="card">
            <div className="card_img-wrap">
                <img className="card_img" src={image} alt="" />
            </div>
            <div className="card_content">
                <div className="card_title" style={{ marginBottom: 16 }}>
                    {title}
                </div>
                <div className="card_text" style={{ marginBottom: 12 }}>
                    {text}
                </div>
                <button
                    className="card_btn primary-button"
                    onClick={() =>
                        toggleNotification(url === message ? '' : url)
                    }
                >
                    OPEN
                </button>
            </div>
        </div>
    )
}
