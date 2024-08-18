import * as React from 'react'
const SvgSettingsMedium = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.474.547c1.445 0 2.674.969 3.018 2.327a.847.847 0 0 1-.028 1.588 3.124 3.124 0 0 1-3.017 2.326 3.125 3.125 0 0 1-3.003-2.273H1.59a.85.85 0 0 1-.848-.847.85.85 0 0 1 .848-.848h8.88A3.125 3.125 0 0 1 13.474.547Zm0 4.546a1.418 1.418 0 0 1-1.425-1.425c0-.793.633-1.425 1.425-1.425.793 0 1.425.632 1.425 1.425 0 .792-.632 1.425-1.425 1.425ZM13.365 13.307c1.432 0 2.648.974 3.007 2.287.398.077.66.437.66.833a.85.85 0 0 1-.688.832 3.125 3.125 0 0 1-3.007 2.288 3.125 3.125 0 0 1-3.003-2.273H1.591a.85.85 0 0 1-.848-.847.85.85 0 0 1 .848-.848h8.77a3.125 3.125 0 0 1 3.004-2.272Zm-.028 4.572a1.412 1.412 0 0 1-1.425-1.397v-.055c0-.79.657-1.425 1.425-1.425.793 0 1.425.632 1.425 1.425 0 .799-.638 1.452-1.425 1.452ZM16.212 9.2H7.36a3.125 3.125 0 0 0-3.003-2.273A3.124 3.124 0 0 0 1.34 9.253a.847.847 0 0 0-.568.794.83.83 0 0 0 .569.798 3.124 3.124 0 0 0 3.016 2.322c1.427 0 2.64-.967 3.003-2.272h8.853a.85.85 0 0 0 .848-.848.85.85 0 0 0-.848-.848ZM4.33 11.471a1.418 1.418 0 0 1-1.425-1.425c0-.793.632-1.425 1.425-1.425.792 0 1.425.632 1.425 1.425s-.633 1.425-1.425 1.425Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgSettingsMedium