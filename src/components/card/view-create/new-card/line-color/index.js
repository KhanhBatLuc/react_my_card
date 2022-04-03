function LineColor({ currentColor, sx }) {
  return (
    <svg
      className="card-wavestyled__Wave-app__sc-4t6hon-0 euHkZp headerstyled__Wave-app__sc-1an2aqg-1 bPtQcg"
      preserveAspectRatio="none"
      style={{
        display: 'block',
        bottom: '0px',
        left: ' 0px',
        position: 'absolute',
        width: '100%',
        zIndex: '1',
        height: '50px',
        transform: 'scaleX(-1)',
        ...sx
      }}
      viewBox="0 0 375 100"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
    >
      <path
        d="M0 32.711V100C64.5161 100 93.75 100 177.923 100C262.097 100 330.645 100 375 100V15.7947C282 -22.9496 206.5 53.6056 148 72.7049C89.5 91.8042 51.5 78.1619 0 32.711Z"
        fill="#ffffff"
      />
      <path
        d="M0 26.4033V56.4853C69.5 100.681 125 103.355 209.5 51.3608C294 -0.633482 334.5 6.12572 375 18.0844V10.2853C282 -26.6308 206.5 46.312 148 64.51C89.5 82.708 51.5 69.7096 0 26.4033Z"
        fill={currentColor}
      />
    </svg>
  );
}

export default LineColor;
