import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
export const SendIcon = (props: SvgProps) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <Path
      d="M6.99994 11L9.27275 16.3032C9.58557 17.0331 10.5585 17.1103 10.9486 16.4185C11.7182 15.0535 12.8591 12.8522 13.9999 10C15.9999 5 16.9999 1 16.9999 1M6.99994 11L1.69672 8.72719C0.966804 8.41437 0.889685 7.4414 1.58143 7.05136C2.9464 6.28173 5.14778 5.14086 7.99994 4C12.9999 2 16.9999 1 16.9999 1M6.99994 11L16.9999 1"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const VideoIcon = (props: SvgProps) => (
  <Svg width={16} height={17} viewBox="0 0 16 17" fill="none" {...props}>
    <Path
      d="M0 4.59603V10.4557C0.0053125 11.7807 1.0875 12.847 2.40719 12.8417H10.9481C11.1909 12.8417 11.3862 12.6463 11.3862 12.4088V6.54947C11.3809 5.22447 10.2991 4.1579 8.97906 4.16322H0.438125C0.195313 4.16322 0 4.35853 0 4.59603ZM11.93 6.88197L15.4563 4.30572C15.7625 4.05259 16 4.11572 16 4.57509V12.4298C16 12.9526 15.7097 12.8892 15.4563 12.6992L11.93 10.1282V6.88197Z"
      fill="#4A8CFF"
    />
  </Svg>
);
export default VideoIcon;
