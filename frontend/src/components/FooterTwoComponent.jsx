import * as React from "react";

const SvgFooter1 = (props) => (
  <svg
    width={360}
    height={480}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    {...props}
  >
    <defs>
      <path id="Footer-1_svg__a" d="M0 60h120v60H0z" />
      <path id="Footer-1_svg__c" d="M0 0h120v120H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="rotate(-90 120 120)">
        <path fill="#81B0BD" fillRule="nonzero" d="M0 0h120v120H0z" />
        <ellipse
          fill="#547A87"
          fillRule="nonzero"
          cx={60.027}
          cy={58.811}
          rx={49.227}
          ry={48.611}
        />
        <mask id="Footer-1_svg__b" fill="#fff">
          <use xlinkHref="#Footer-1_svg__a" />
        </mask>
        <use fill="#F9E200" fillRule="nonzero" xlinkHref="#Footer-1_svg__a" />
        <ellipse
          fill="#FFF"
          fillRule="nonzero"
          mask="url(#Footer-1_svg__b)"
          cx={59.971}
          cy={59.805}
          rx={49.171}
          ry={48.562}
        />
      </g>
      <g transform="matrix(1 0 0 -1 240 360)">
        <mask id="Footer-1_svg__d" fill="#fff">
          <use xlinkHref="#Footer-1_svg__c" />
        </mask>
        <use fill="#87C5B4" fillRule="nonzero" xlinkHref="#Footer-1_svg__c" />
        <circle
          fill="#547A87"
          fillRule="nonzero"
          mask="url(#Footer-1_svg__d)"
          cx={119.834}
          cy={120.166}
          r={30.663}
        />
        <circle
          fill="#547A87"
          fillRule="nonzero"
          mask="url(#Footer-1_svg__d)"
          cx={-0.166}
          cy={-0.166}
          r={30.663}
        />
      </g>
      <path d="M120 0v120h120V0z" fill="#F9E200" fillRule="nonzero" />
      <g fillRule="nonzero">
        <path fill="#97D0C0" d="M120 120v120h120V120z" />
        <path
          d="M120 120c66.274 0 120 53.726 120 120-66.274 0-120-53.726-120-120Z"
          fill="#B7E2DD"
        />
      </g>
      <path d="M240 480h120V360H240z" fill="#547A87" fillRule="nonzero" />
      <g fillRule="nonzero">
        <path fill="#97D0C0" d="M240 240h120V120H240z" />
        <path
          d="M240 240c0-66.274 53.726-120 120-120 0 66.274-53.726 120-120 120Z"
          fill="#B7E2DD"
        />
      </g>
    </g>
  </svg>
);

export default SvgFooter1;

