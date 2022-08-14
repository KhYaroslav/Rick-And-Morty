import React from 'react';

export default function ApiList({ apis }) {
  return (
    <div className="position">
      <div className="content">
        <div className="content-characters" v-for="character in filterSearch">
          <div className="character">
            <img src={apis.image} alt={apis.image} />
            <div className="info-character">
              <h2>{apis.name}</h2>
              <h4>{apis.species}</h4>
              <h4>{apis.status}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
