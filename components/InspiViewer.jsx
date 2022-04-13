/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

// import { InspiViewerProps } from './Inspi360Types' // will want this later

/**
 * According to the Documentation for the Inspi 360 Viewer
 * The script tag needs to be loaded after the web components exists in the DOM and
 * executed in a synchronous manner.
 */

export function Inspi360Viewer() {
  const scriptContainerRef = useRef();
  const [hide, setHide] = useState(false);

  if (hide) {
    return (
      <div>
        Hidden
        <button
          onClick={() => {
            setHide(false);
          }}
        >
          Show
        </button>
      </div>
    );
  }

  return (
    <>
      <div
        style={{ position: 'relative', width: '67vw', height: '80vh' }}
        id="viewer-container"
      >
        <inspi-viewer
          cat="285"
          productref="CNF_mw_conroy_glass_coffee_table"
          hidetuto={1}
        />
      </div>

      <script src="https://d32ejwm21y7koy.cloudfront.net/city-furniture/1.3/inspi-viewer.js" />

      <button
        onClick={() => {
          setHide(true);
        }}
      >
        Hide
      </button>
    </>
  );
}
