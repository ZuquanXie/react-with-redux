import React from 'react'
import { connect } from 'react-redux'

const Log = ({ logs }) => {
    return (
        <div className="page page-log">
            <p className="title">Operation log</p>
            <ul>
                {logs.map((log, index) => (
                    <li
                        key={index}
                        className={log.mark}
                    >
                        <span className="time">{log.time}</span>
                        <span>{log.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = ({ Log }) => {
    return {
        ...Log,
    }
};

export default connect(mapStateToProps)(Log)
