import './PersonCard.scss';



export default function PersonCard({name, sku, guests}) {
    return(
        <div className="card-container">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="profile-pic" className="profile-pic" />
            <div className="profile">
                <span className="name">{name}</span>
                <div className="info">
                    <span className="sku">{sku}</span>
                    <span className="point">*</span>
                    <span className="no-guests">{guests} guest{guests > 1 && 's'}</span>
                </div>
            </div>
            <div className="date-status">
                <span className="date">20.05 - 20.06</span>
                <span className="status">Paid</span>
            </div>
        </div>
    );
}