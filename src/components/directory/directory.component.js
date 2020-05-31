import React from 'react';
//import './directory.styles.css';
import { DirectoryMenuContainer } from './directory.styles';
import MenuItem from '../../components/menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectSections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect'

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {/* {this.state.sections.map(section => 
                    <MenuItem key={section.id} title={section.title} url={section.imageUrl} size={section.size}/>
                )} */}
      {sections.map(({ id, ...otherSectionprops }) =>
        <MenuItem key={id} {...otherSectionprops} />
      )}
    </DirectoryMenuContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})


export default connect(mapStateToProps)(Directory);