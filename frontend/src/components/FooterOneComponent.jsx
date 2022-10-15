import * as React from "react";

const SvgFooter = (props) => (
  <svg
    width={960}
    height={240}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    {...props}
  >
    <defs>
      <path id="Footer_svg__a" d="M0 59.843h120v60H0z" />
    </defs>
    <g transform="matrix(-1 0 0 1 960 0)" fill="none" fillRule="evenodd">
      <path fill="#FFF" fillRule="nonzero" d="M240 0h120v120H240z" />
      <path
        d="M359.877 13.8v73.077c0 18.226-14.774 33-33 33H253.8C253.8 61.292 301.292 13.8 359.877 13.8Z"
        fill="#547A87"
        fillRule="nonzero"
      />
      <circle
        fill="#FF7468"
        fillRule="nonzero"
        cx={339.613}
        cy={101.552}
        r={9.448}
      />
      <path fill="#B7E2DD" fillRule="nonzero" d="M360 240H240V120h120z" />
      <circle
        fill="#FFF"
        fillRule="nonzero"
        transform="rotate(180 299.834 180.497)"
        cx={299.834}
        cy={180.497}
        r={34.641}
      />
      <path
        fill="#547A87"
        fillRule="nonzero"
        d="M299.193 180.732h-8.806v-.96h8.806v-8.722h1.11v8.721h8.647v.96h-8.647v8.882h-1.11z"
      />
      <path fill="#B7E2DD" fillRule="nonzero" d="M360 0h120v120H360z" />
      <path
        d="M480 120V60c0-33.137-26.863-60-60-60h-60c0 66.274 53.726 120 120 120Z"
        fill="#87C5B4"
        fillRule="nonzero"
      />
      <path fill="#97D0C0" fillRule="nonzero" d="M240 120H120V0h120z" />
      <path
        d="M240 120C240 53.726 186.274 0 120 0c0 66.274 53.726 120 120 120Z"
        fill="#B7E2DD"
        fillRule="nonzero"
      />
      <path fill="#FFF" fillRule="nonzero" d="M480 0h120v120H480z" />
      <path
        d="M513 0h87c0 66.274-53.726 120-120 120V33c0-18.225 14.775-33 33-33Z"
        fill="#FF7468"
        fillRule="nonzero"
      />
      <path fill="#FFF" fillRule="nonzero" d="M720 0v120H600V0z" />
      <path
        d="M706.2 119.877h-73.077c-18.226 0-33-14.774-33-33V13.8c58.585 0 106.077 47.492 106.077 106.077Z"
        fill="#547A87"
        fillRule="nonzero"
      />
      <circle
        fill="#FF7468"
        fillRule="nonzero"
        transform="rotate(90 618.448 99.613)"
        cx={618.448}
        cy={99.613}
        r={9.448}
      />
      <path fill="#FFF" fillRule="nonzero" d="M120 0v120H0V0z" />
      <path fill="#B7E2DD" fillRule="nonzero" d="M840 0v120h120V0z" />
      <path
        d="M960 120h-60c-33.137 0-60-26.863-60-60V0c66.274 0 120 53.726 120 120Z"
        fill="#87C5B4"
        fillRule="nonzero"
      />
      <g transform="matrix(-1 0 0 1 840 120)">
        <path fill="#81B0BD" fillRule="nonzero" d="M0 0h120v120H0z" />
        <ellipse
          fill="#547A87"
          fillRule="nonzero"
          cx={60.027}
          cy={58.811}
          rx={49.227}
          ry={48.611}
        />
        <mask id="Footer_svg__b" fill="#fff">
          <use xlinkHref="#Footer_svg__a" />
        </mask>
        <use fill="#F9E200" fillRule="nonzero" xlinkHref="#Footer_svg__a" />
        <ellipse
          fill="#FFF"
          fillRule="nonzero"
          mask="url(#Footer_svg__b)"
          cx={59.971}
          cy={59.805}
          rx={49.171}
          ry={48.562}
        />
      </g>
    </g>
  </svg>
);

export default SvgFooter;

