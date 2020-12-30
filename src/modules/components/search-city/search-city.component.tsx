import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { findForecast } from '../../redux/actions';

type Props = {
  findForecast: (text: string) => void,
}

function SearchCity(props: Props) {
  const [searchText, setSearchText] = useState('');

  return <div className="search-group pl-1 pb-4">
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchText}
        aria-label="search-input"
        onChange={e => setSearchText(e.target.value)}
      />
      <div className="input-group-prepend">
        <button
          aria-label='find-city'
          className={`search-btn input-group-text ${searchText === '' ? 'disabled' : ''}`}
          onClick={() => props.findForecast(searchText)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="18" height="18" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0" transform="scale(0.0078125)" />
              </pattern>
              <image id="image0" width="128" height="128" xlinkHref="data:image/png;base64,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" />
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </div>
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  findForecast: (text: string) => dispatch<any>(findForecast(text))
});

const connector = connect(null, mapDispatchToProps)
export default connector(SearchCity)