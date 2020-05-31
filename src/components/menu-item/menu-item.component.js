import React from 'react';
//import './menu-item.styles.css';
import { withRouter } from 'react-router-dom';

import { BackgroundImage,ContentContainer,MenuItemContainer,Subtitle,Title} from './menu-item.styles';

const MenuItem = ({title,size,imageUrl,linkUrl ,history ,match}) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage className="background-image" style={{
            backgroundImage : `url(${imageUrl})`
        }} />
            <ContentContainer className="content">
                <Title>{title}</Title>
                <Subtitle>SHOP NOW</Subtitle>
            </ContentContainer>
        </MenuItemContainer>  
    );
}

export default withRouter(MenuItem);