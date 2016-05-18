import React, { PropTypes } from 'react';
import style from './style.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  size: 24,
  onClick: () => {},
};

function Icon({ name, size, onClick, className }) {
  const classes = [style.icon];
  if (className) {
    classes.push(className);
  }
  const props = {
    width: size,
    height: size,
    onClick,
    className: classes.join(' '),
    xmlns: 'http://www.w3.org/2000/svg',
  };
  switch (name) {
    case 'alert-circle':
      return <svg {...props} viewBox="0 0 24 24"><path d="M13 17h-2v-2h2v2zm0-4h-2V7h2v6z"/><path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/></svg>;
    case 'heart':
      return <svg {...props} viewBox="0 0 512 512"><path d="M340.8 83C307 83 276 98.8 256 124.8c-20-26-51-41.8-84.8-41.8C112.1 83 64 131.3 64 190.7c0 27.9 10.6 54.4 29.9 74.6L245.1 418l10.9 11 10.9-11 148.3-149.8c21-20.3 32.8-47.9 32.8-77.5C448 131.3 399.9 83 340.8 83z"/></svg>;
    case 'heart-outline':
      return <svg {...props} viewBox="0 0 512 512"><path d="M340.8 98.4c50.7 0 91.9 41.3 91.9 92.3 0 26.2-10.9 49.8-28.3 66.6L256 407.1 105 254.6c-15.8-16.6-25.6-39.1-25.6-63.9 0-51 41.1-92.3 91.9-92.3 38.2 0 70.9 23.4 84.8 56.8 13.7-33.3 46.5-56.8 84.7-56.8m0-15.4C307 83 276 98.8 256 124.8c-20-26-51-41.8-84.8-41.8C112.1 83 64 131.3 64 190.7c0 27.9 10.6 54.4 29.9 74.6L245.1 418l10.9 11 10.9-11 148.3-149.8c21-20.3 32.8-47.9 32.8-77.5C448 131.3 399.9 83 340.8 83z"/></svg>;
    case 'chevron-down':
      return <svg {...props} viewBox="0 0 512 512"><path d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"/></svg>;
    case 'chevron-up':
      return <svg {...props} viewBox="0 0 512 512"><path d="M256 213.7l174.2 167.2c4.3 4.2 11.4 4.1 15.8-.2l30.6-29.9c4.4-4.3 4.5-11.3.2-15.5L264.1 131.1c-2.2-2.2-5.2-3.2-8.1-3-3-.1-5.9.9-8.1 3L35.2 335.3c-4.3 4.2-4.2 11.2.2 15.5L66 380.7c4.4 4.3 11.5 4.4 15.8.2L256 213.7z"/></svg>;
    case 'document':
      return <svg {...props} viewBox="0 0 512 512"><path d="M398.6 169.2c-.9-2.2-2-4.3-3.5-6.1l-83.8-91.7c-1.9-2.1-4.2-3.6-6.7-4.9-2.9-1.5-6.1-2.1-9.5-2.1H135.2c-12.4 0-22.7 10.6-22.7 23.9v335.2c0 13.4 10.3 24.9 22.7 24.9h243.1c12.4 0 22.2-11.5 22.2-24.9V179.4c0-3.6-.5-7.1-1.9-10.2zm-238.1 9.4c0-1.5 1.8-2.1 3.4-2.1h70.8c1.6 0 2.8.6 2.8 2.1v10.8c0 1.4-1.1 3.1-2.8 3.1h-70.8c-1.6 0-3.4-1.7-3.4-3.1v-10.8zm0 128c0-1.5 1.8-2.1 3.4-2.1h122.2c1.6 0 2.4.6 2.4 2.1v10.8c0 1.4-.7 3.1-2.4 3.1H163.9c-1.6 0-3.4-1.7-3.4-3.1v-10.8zm160 74.8c0 1.4-.7 3.1-2.4 3.1H163.9c-1.6 0-3.4-1.7-3.4-3.1v-10.8c0-1.5 1.8-2.1 3.4-2.1h154.2c1.6 0 2.4.6 2.4 2.1v10.8zm32-128c0 1.4-.7 3.1-2.4 3.1H163.9c-1.6 0-3.4-1.7-3.4-3.1v-10.8c0-1.5 1.8-2.1 3.4-2.1h186.2c1.6 0 2.4.6 2.4 2.1v10.8zm-46.9-75.9c-5.6 0-11.1-5.2-11.1-11.3v-66l71.2 77.3h-60.1z"/></svg>;
    case 'image':
      return <svg {...props} viewBox="0 0 512 512"><path d="M368 224c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z"/><path d="M452 64H60c-15.6 0-28 12.7-28 28.3v327.4c0 15.6 12.4 28.3 28 28.3h392c15.6 0 28-12.7 28-28.3V92.3c0-15.6-12.4-28.3-28-28.3zM348.9 261.7c-3-3.5-7.6-6.2-12.8-6.2-5.1 0-8.7 2.4-12.8 5.7L304.6 277c-3.9 2.8-7 4.7-11.5 4.7-4.3 0-8.2-1.6-11-4.1-1-.9-2.8-2.6-4.3-4.1L224 215.3c-4-4.6-10-7.5-16.7-7.5-6.7 0-12.9 3.3-16.8 7.8L64 368.2V107.7c1-6.8 6.3-11.7 13.1-11.7h357.7c6.9 0 12.5 5.1 12.9 12l.3 260.4-99.1-106.7z"/></svg>;
    case 'images':
      return <svg {...props} viewBox="0 0 512 512"><path d="M457.6 140.2l-82.5-4-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3l-296 24.3c-11.8 1-20.3 10.5-19.4 21.7l21.2 235.8c1 11.3 11.2 19.2 22.9 18.3l15-1.2-2.4 45.8c-.6 12.6 9.2 22.8 22.4 23.5L441.3 448c13.2.6 24.1-8.6 24.8-21.2L480 163.5c.6-12.5-9.3-22.7-22.4-23.3zm-355 5.3l-7.1 134.8L78.1 305l-16-178v-.5-.5c.5-5 4.3-9 9.5-9.4l261-21.4c5.2-.4 9.7 3 10.5 7.9 0 .2.3.2.3.4 0 .1.3.2.3.4l2.7 30.8-219-10.5c-13.2-.4-24.2 8.8-24.8 21.3zm334.1 236.9L390 327.1l-27.5-32.7c-2.4-2.9-6.3-5.3-10.6-5.5-4.3-.2-7.5 1.5-11.1 4.1l-16.4 11.9c-3.5 2.1-6.2 3.5-9.9 3.3-3.6-.2-6.8-1.6-9.1-3.8-.8-.8-2.3-2.2-3.5-3.4l-42.8-48.9c-3.1-3.9-8.2-6.4-13.8-6.7-5.7-.3-11.2 2.1-14.8 5.6L129.4 359.8l-6.8 7.4.3-6.8 6.8-128.9 3.3-62.9v-.5-.5c1.4-5.4 6.2-9.3 11.9-9l204.2 9.8 28.7 1.4 58.3 2.8c5.8.3 10.3 4.7 10.4 10.2 0 .2.3.3.3.5s.3.3.3.5l-10.4 198.6z"/><path d="M373.2 262.3c19.4 0 35.2-15.8 35.2-35.2s-15.7-35.2-35.2-35.2c-19.4 0-35.2 15.7-35.2 35.2s15.7 35.2 35.2 35.2z"/></svg>;
    case 'search':
      return <svg {...props} viewBox="0 0 512 512"><path d="M344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C132.1 64 64 132.2 64 216.3c0 84.1 68.1 152.3 152.1 152.3 30.5 0 58.9-9 82.7-24.4l6.9-4.8L414.3 448l33.7-34.3-108.5-108.6 5-7.1zm-43.1-166.8c22.7 22.7 35.2 52.9 35.2 85s-12.5 62.3-35.2 85c-22.7 22.7-52.9 35.2-85 35.2s-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-85s12.5-62.3 35.2-85c22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2z"/></svg>;
    case 'sad-outline':
      return <svg {...props} viewBox="0 0 512 512"><path d="M399.283 283.797c-5.1-16.379-14.22-29.995-33.802-37.263s-35.265-2.877-49.868 6.15c-7.615 4.707-10.029 14.019-4.214 22.123 2.049 2.854 5.019 4.717 8.376 5.963 5.059 1.876 10.584 1.678 14.965-1.036 4.778-2.957 10.644-6.526 19.607-3.199 9.01 3.343 11.103 9.839 12.752 15.161 1.551 4.952 5.62 8.724 10.693 10.606 3.357 1.246 6.816 1.774 10.236.938 8.867-2.184 13.916-10.907 11.255-19.443zM196.549 252.685c-14.603-9.027-30.286-13.418-49.868-6.15s-28.702 20.884-33.802 37.263c-2.661 8.536 2.389 17.259 11.255 19.443 3.42.837 6.878.309 10.236-.938 5.073-1.883 9.143-5.654 10.693-10.606 1.649-5.322 3.743-11.818 12.752-15.161 8.964-3.327 14.829.242 19.607 3.199 4.381 2.714 9.907 2.912 14.965 1.036 3.357-1.246 6.327-3.108 8.376-5.963 5.815-8.105 3.401-17.416-4.214-22.123z"/><path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32zm135.765 359.765C355.5 428.028 307.285 448 256 448s-99.5-19.972-135.765-56.235C83.972 355.5 64 307.285 64 256s19.972-99.5 56.235-135.765C156.5 83.972 204.715 64 256 64s99.5 19.972 135.765 56.235C428.028 156.5 448 204.715 448 256s-19.972 99.5-56.235 135.765z"/><path d="M349.119 359.176C348.013 357.59 321 320 256 320c-65.261 0-92.014 37.59-93.121 39.176-5.057 7.247-3.283 17.221 3.963 22.278a15.93 15.93 0 0 0 9.143 2.881c5.052 0 10.024-2.388 13.135-6.845.176-.251 18.9-25.49 66.88-25.49 48 0 66.703 25.239 66.879 25.49 3.11 4.457 8.081 6.845 13.134 6.845 3.161 0 6.354-.935 9.144-2.881 7.245-5.058 9.02-15.031 3.962-22.278z"/></svg>;
    default:
      return null;
  };
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
