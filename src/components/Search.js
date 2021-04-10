import React, { Component } from 'react';
import './Search.css';

 class Search extends Component {

  render() {
    return(
            <div className='search'>
              <>
                <i class="fa fa-search" aria-hidden="true"></i>
                <i class="fa fa-bars" aria-hidden="true"></i>
                </>
            </div>
            
    )
  }
}
export default Search;