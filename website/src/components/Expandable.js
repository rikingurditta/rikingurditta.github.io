import React, {useState} from 'react';

export default function Expandable(props) {
    let [expanded, setExpanded] = useState(false);
    return (
        <div style={{...props.style, backgroundColor: expanded ? '#0000000F' : '#00000000'}}>
            <span onClick={() => setExpanded(!expanded)}
                  style={{cursor: 'pointer', textDecoration: 'underline'}}>
                {props.inside} {expanded ? '-' : '+'}
            </span>
            {expanded
                ? <>
                    {props.children}
                </>
                : null
            }
        </div>
    );
}