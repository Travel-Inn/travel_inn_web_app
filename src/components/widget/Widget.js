import './Widget.scss';

const Widget = () => {
    return (
        <div style={{display: 'flex', width: '100%', marginTop: 20}}>
            <div className="widget">
                <div className="left">left</div>
                <div className="right">right</div>
            </div>
            <div className="widget">
                <div className="left">left</div>
                <div className="right">right</div>
            </div>
            <div className="widget">
                <div className="left">left</div>
                <div className="right">right</div>
            </div>
            <div className="widget">
                <div className="left">left</div>
                <div className="right">right</div>
            </div>
        </div>
    );
}

export default Widget;