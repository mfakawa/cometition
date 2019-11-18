import React from 'react';
import './SinglePage.scss';
import { Icon } from '@iconify/react';



const SinglePage = ({ page }) => {
    return (
        <div className="single-page" >
            <div className="single-page-link">
                <a href={page.address} target="_blank" rel="noopener noreferrer"><img src={page.image} alt="page-figure" /></a>

            </div>
            <div className="single-page-content">
                <div className="single-page-content-title">{page.title}</div>
                <div className="text-style">{page.description}</div>
                <div className="single-page-content-tech">Technologie</div>
                <div className="single-page-content-icons">
                    {page.technologies && page.technologies.map(technology => <Icon icon={technology.icon} key={technology.name} />)}
                </div>
            </div>
        </div>
    )
}

export default SinglePage;