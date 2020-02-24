import React from 'react';
import styled from 'styled-components';

const Spin = styled.div`
  display: inline-block;
  margin-right: 5px;
  svg {
    position: relative;
    -webkit-animation: load 0.7s infinite linear;
    animation: load 0.7s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  @-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ white }) => {
  return (
    <>
      <Spin>
        <svg width="18" height="18" fill="#0770e3">
          <path
            d="M13.278 10.39l4.282 1.391A8.97 8.97 0 0 0 18 9h-4.5a4.5 4.5 0 0 1-.222 1.39z"
            opacity=".25"
          ></path>
          <path
            d="M6.359 12.635L3.71 16.28c.764.556 1.61.988 2.508 1.28l1.391-4.281a4.492 4.492 0 0 1-1.25-.643z"
            opacity=".6"
          ></path>
          <path
            d="M4.722 10.39L.44 11.78a8.954 8.954 0 0 0 1.28 2.508l3.645-2.648a4.472 4.472 0 0 1-.643-1.251z"
            opacity=".7"
          ></path>
          <path
            d="M7.61 13.278L6.22 17.56A8.97 8.97 0 0 0 9 18v-4.5c-.472 0-.941-.075-1.39-.222z"
            opacity=".55"
          ></path>
          <path
            d="M10.39 13.278l1.391 4.282a8.954 8.954 0 0 0 2.508-1.28l-2.648-3.645c-.38.28-.803.496-1.251.643z"
            opacity=".45"
          ></path>
          <path
            d="M13.278 10.39c-.147.448-.364.87-.643 1.25l3.644 2.649a8.994 8.994 0 0 0 1.28-2.508l-4.281-1.391z"
            opacity=".3"
          ></path>
          <path
            d="M9 13.5V18a8.97 8.97 0 0 0 2.781-.44l-1.391-4.282A4.483 4.483 0 0 1 9 13.5z"
            opacity=".5"
          ></path>
          <path
            d="M11.642 12.635l2.648 3.644a9.045 9.045 0 0 0 1.99-1.99l-3.644-2.648a4.532 4.532 0 0 1-.994.994z"
            opacity=".35"
          ></path>
          <path
            d="M4.5 9H0c0 .971.155 1.905.44 2.781l4.282-1.391A4.483 4.483 0 0 1 4.5 9z"
            opacity=".75"
          ></path>
          <path
            d="M5.365 11.642L1.72 14.29a9.045 9.045 0 0 0 1.991 1.99l2.648-3.644a4.532 4.532 0 0 1-.994-.994z"
            opacity=".65"
          ></path>
          <path
            d="M4.722 7.61L.44 6.22A8.97 8.97 0 0 0 0 9h4.5c0-.485.08-.952.222-1.39z"
            opacity=".8"
          ></path>
          <path
            d="M11.642 5.365L14.29 1.72A8.994 8.994 0 0 0 11.782.44L10.39 4.722c.449.147.87.364 1.252.643z"
            opacity=".05"
          ></path>
          <path
            d="M13.278 7.61l4.282-1.39a8.954 8.954 0 0 0-1.28-2.508L12.635 6.36c.276.378.495.798.643 1.251z"
            opacity=".15"
          ></path>
          <path
            d="M13.5 9H18a8.97 8.97 0 0 0-.44-2.781L13.278 7.61c.143.438.222.905.222 1.39z"
            opacity=".2"
          ></path>
          <path
            d="M12.635 6.359L16.28 3.71a9.045 9.045 0 0 0-1.99-1.99l-2.648 3.644c.382.278.717.614.994.995z"
            opacity=".1"
          ></path>
          <path
            d="M5.365 6.359L1.72 3.71A8.963 8.963 0 0 0 .44 6.219L4.722 7.61c.148-.454.367-.873.643-1.252z"
            opacity=".85"
          ></path>
          <path
            d="M6.359 5.365L3.71 1.72a9.053 9.053 0 0 0-1.99 1.99l3.644 2.648a4.51 4.51 0 0 1 .995-.994z"
            opacity=".9"
          ></path>
          <path d="M9 4.5V0a8.97 8.97 0 0 0-2.781.44L7.61 4.722A4.483 4.483 0 0 1 9 4.5z"></path>
          <path
            d="M7.61 4.722L6.22.44a8.963 8.963 0 0 0-2.508 1.28L6.36 5.364a4.49 4.49 0 0 1 1.251-.642z"
            opacity=".95"
          ></path>
        </svg>
      </Spin>
    </>
  );
};

export default Spinner;
