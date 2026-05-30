import { SVGProps } from "react";

const DropbazLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 1080 1080"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M657.46,334.47v-58.74H363.83v528.55h293.63v-58.71h58.71V334.47H657.46z M657.46,686.8h-58.74v58.74H422.54V334.46h176.17v58.71h58.74V686.8z" />
    </svg>
  );
};

export default DropbazLogo;
