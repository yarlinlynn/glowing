

function HeaderBtns() {
    return (
        <div className="header-actions">

            <button className="header-action-btn" aria-label="user">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            </button>

            <button className="header-action-btn" aria-label="favourite item">
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>

                <span className="btn-badge">0</span>
            </button>

            <button className="header-action-btn" aria-label="cart item">
                <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

                <span className="btn-badge">0</span>
            </button>

        </div>
    )
}

export default HeaderBtns