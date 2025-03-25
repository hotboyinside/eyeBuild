import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const SettingIcon = ({
  className,
  filled = false,
  size = "md",
  ...props
}: IIcon) => {
  return (
    <span className={clsx(styles.icon, styles[size], className)}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        {filled ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2793 2.152C13.9093 2 13.4393 2 12.5003 2C11.5613 2 11.0923 2 10.7213 2.152C10.4772 2.25175 10.2552 2.39878 10.0682 2.58465C9.88109 2.77051 9.73263 2.99154 9.63132 3.235C9.53732 3.458 9.50132 3.719 9.48632 4.098C9.47918 4.3725 9.40238 4.64068 9.26314 4.87736C9.1239 5.11403 8.92679 5.31142 8.69032 5.451C8.44906 5.5851 8.17786 5.65615 7.90184 5.65754C7.62582 5.65894 7.35392 5.59065 7.11132 5.459C6.77332 5.281 6.52832 5.183 6.28632 5.151C5.7569 5.08192 5.22158 5.2242 4.79632 5.547C4.47832 5.789 4.24332 6.193 3.77432 7C3.30432 7.807 3.07032 8.21 3.01732 8.605C2.94732 9.131 3.09132 9.663 3.41732 10.084C3.56532 10.276 3.77432 10.437 4.09732 10.639C4.57432 10.936 4.88032 11.442 4.88032 12C4.88032 12.558 4.57432 13.064 4.09832 13.36C3.77432 13.563 3.56532 13.724 3.41632 13.916C3.25588 14.1242 3.13806 14.362 3.0696 14.6158C3.00114 14.8696 2.98337 15.1343 3.01732 15.395C3.07032 15.789 3.30432 16.193 3.77432 17C4.24432 17.807 4.47832 18.21 4.79632 18.453C5.22032 18.776 5.75632 18.918 6.28632 18.849C6.52832 18.817 6.77332 18.719 7.11132 18.541C7.35404 18.4092 7.62613 18.3408 7.90234 18.3422C8.17855 18.3436 8.44994 18.4147 8.69132 18.549C9.17732 18.829 9.46532 19.344 9.48632 19.902C9.50132 20.282 9.53732 20.542 9.63132 20.765C9.83532 21.255 10.2273 21.645 10.7213 21.848C11.0913 22 11.5613 22 12.5003 22C13.4393 22 13.9093 22 14.2793 21.848C14.5234 21.7483 14.7454 21.6012 14.9325 21.4154C15.1195 21.2295 15.268 21.0085 15.3693 20.765C15.4633 20.542 15.4993 20.282 15.5143 19.902C15.5343 19.344 15.8233 18.828 16.3103 18.549C16.5516 18.4149 16.8228 18.3439 17.0988 18.3425C17.3748 18.3411 17.6467 18.4093 17.8893 18.541C18.2273 18.719 18.4723 18.817 18.7143 18.849C19.2443 18.919 19.7803 18.776 20.2043 18.453C20.5223 18.211 20.7573 17.807 21.2263 17C21.6963 16.193 21.9303 15.79 21.9833 15.395C22.0171 15.1343 21.9992 14.8695 21.9306 14.6157C21.8619 14.3619 21.7439 14.1241 21.5833 13.916C21.4353 13.724 21.2263 13.563 20.9033 13.361C20.4263 13.064 20.1203 12.558 20.1203 12C20.1203 11.442 20.4263 10.936 20.9023 10.64C21.2263 10.437 21.4353 10.276 21.5843 10.084C21.7447 9.87579 21.8626 9.63799 21.931 9.38422C21.9995 9.13044 22.0173 8.86565 21.9833 8.605C21.9303 8.211 21.6963 7.807 21.2263 7C20.7563 6.193 20.5223 5.79 20.2043 5.547C19.779 5.2242 19.2437 5.08192 18.7143 5.151C18.4723 5.183 18.2273 5.281 17.8893 5.459C17.6466 5.59083 17.3745 5.65922 17.0983 5.65782C16.8221 5.65642 16.5507 5.58528 16.3093 5.451C16.073 5.3113 15.8761 5.11385 15.7371 4.87719C15.598 4.64052 15.5213 4.37241 15.5143 4.098C15.4993 3.718 15.4633 3.458 15.3693 3.235C15.268 2.99154 15.1195 2.77051 14.9325 2.58465C14.7454 2.39878 14.5234 2.25175 14.2793 2.152ZM12.5003 15C14.1703 15 15.5233 13.657 15.5233 12C15.5233 10.343 14.1693 9 12.5003 9C10.8313 9 9.47732 10.343 9.47732 12C9.47732 13.657 10.8313 15 12.5003 15Z"
            fill="currentColor"
          />
        ) : (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9998 8.25C11.0052 8.25 10.0514 8.64509 9.34812 9.34835C8.64486 10.0516 8.24977 11.0054 8.24977 12C8.24977 12.9946 8.64486 13.9484 9.34812 14.6517C10.0514 15.3549 11.0052 15.75 11.9998 15.75C12.9943 15.75 13.9482 15.3549 14.6514 14.6517C15.3547 13.9484 15.7498 12.9946 15.7498 12C15.7498 11.0054 15.3547 10.0516 14.6514 9.34835C13.9482 8.64509 12.9943 8.25 11.9998 8.25ZM9.74977 12C9.74977 11.4033 9.98683 10.831 10.4088 10.409C10.8307 9.98705 11.403 9.75 11.9998 9.75C12.5965 9.75 13.1688 9.98705 13.5908 10.409C14.0127 10.831 14.2498 11.4033 14.2498 12C14.2498 12.5967 14.0127 13.169 13.5908 13.591C13.1688 14.0129 12.5965 14.25 11.9998 14.25C11.403 14.25 10.8307 14.0129 10.4088 13.591C9.98683 13.169 9.74977 12.5967 9.74977 12Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9748 1.25C11.5298 1.25 11.1588 1.25 10.8548 1.27C10.544 1.28252 10.2375 1.34673 9.94777 1.46C9.61402 1.59809 9.31075 1.80057 9.05526 2.05589C8.79978 2.3112 8.59709 2.61434 8.45877 2.948C8.31377 3.298 8.27477 3.668 8.25877 4.07C8.25699 4.21698 8.21799 4.36112 8.14542 4.48895C8.07285 4.61678 7.96907 4.72414 7.84377 4.801C7.7146 4.87132 7.5697 4.90775 7.42263 4.90687C7.27556 4.906 7.1311 4.86785 7.00277 4.796C6.64677 4.608 6.30678 4.457 5.93078 4.407C5.57272 4.3599 5.20889 4.38379 4.86007 4.4773C4.51125 4.57081 4.18426 4.73212 3.89777 4.952C3.65517 5.14648 3.44665 5.38001 3.28077 5.643C3.11077 5.897 2.92477 6.218 2.70277 6.603L2.67777 6.647C2.45477 7.032 2.26977 7.353 2.13577 7.627C1.99577 7.913 1.88577 8.195 1.84577 8.507C1.75038 9.22999 1.94605 9.96127 2.38977 10.54C2.62077 10.841 2.92177 11.06 3.26177 11.274C3.38841 11.3491 3.49392 11.4551 3.56842 11.582C3.64293 11.709 3.68399 11.8528 3.68777 12C3.68399 12.1472 3.64293 12.291 3.56842 12.418C3.49392 12.5449 3.38841 12.6509 3.26177 12.726C2.92177 12.94 2.62177 13.159 2.38977 13.46C2.16989 13.7465 2.00859 14.0735 1.91508 14.4223C1.82157 14.7711 1.79768 15.1349 1.84477 15.493C1.88577 15.805 1.99477 16.087 2.13477 16.373C2.26977 16.647 2.45477 16.968 2.67777 17.353L2.70277 17.397C2.92477 17.782 3.11077 18.103 3.28077 18.357C3.45777 18.62 3.64777 18.857 3.89777 19.047C4.18418 19.2671 4.51114 19.4285 4.85996 19.5222C5.20879 19.6159 5.57265 19.64 5.93078 19.593C6.30678 19.543 6.64677 19.393 7.00277 19.204C7.13098 19.1323 7.27525 19.0943 7.42213 19.0934C7.56901 19.0925 7.71372 19.1289 7.84277 19.199C7.96909 19.2749 8.07378 19.382 8.1468 19.51C8.21982 19.638 8.25872 19.7826 8.25978 19.93C8.27478 20.332 8.31378 20.702 8.45977 21.052C8.59786 21.3857 8.80035 21.689 9.05566 21.9445C9.31098 22.2 9.61412 22.4027 9.94777 22.541C10.2378 22.661 10.5378 22.708 10.8548 22.729C11.1588 22.75 11.5298 22.75 11.9748 22.75H12.0248C12.4698 22.75 12.8408 22.75 13.1448 22.73C13.4628 22.708 13.7618 22.661 14.0518 22.54C14.3855 22.4019 14.6888 22.1994 14.9443 21.9441C15.1998 21.6888 15.4025 21.3857 15.5408 21.052C15.6858 20.702 15.7248 20.332 15.7408 19.93C15.7424 19.7828 15.7813 19.6385 15.8539 19.5105C15.9265 19.3825 16.0303 19.275 16.1558 19.198C16.285 19.1278 16.43 19.0916 16.577 19.0926C16.7241 19.0937 16.8685 19.132 16.9968 19.204C17.3528 19.392 17.6928 19.543 18.0688 19.592C18.7918 19.6874 19.523 19.4917 20.1018 19.048C20.3518 18.856 20.5418 18.62 20.7188 18.357C20.8888 18.103 21.0748 17.782 21.2968 17.397L21.3218 17.353C21.5448 16.968 21.7298 16.647 21.8638 16.373C22.0038 16.087 22.1138 15.804 22.1538 15.493C22.2492 14.77 22.0535 14.0387 21.6098 13.46C21.3788 13.159 21.0778 12.94 20.7378 12.726C20.6111 12.6509 20.5056 12.5449 20.4311 12.418C20.3566 12.291 20.3156 12.1472 20.3118 12C20.3118 11.722 20.4638 11.446 20.7378 11.274C21.0778 11.06 21.3778 10.841 21.6098 10.54C21.8297 10.2535 21.991 9.92653 22.0845 9.5777C22.178 9.22888 22.2019 8.86506 22.1548 8.507C22.1077 8.1996 22.0096 7.90219 21.8648 7.627C21.694 7.29478 21.5129 6.96795 21.3218 6.647L21.2968 6.603C21.1141 6.27708 20.9214 5.95692 20.7188 5.643C20.5528 5.38036 20.3443 5.14718 20.1018 4.953C19.8154 4.73294 19.4884 4.57146 19.1396 4.47778C18.7908 4.38409 18.4269 4.36004 18.0688 4.407C17.6928 4.457 17.3528 4.607 16.9968 4.796C16.8686 4.86767 16.7243 4.90572 16.5774 4.9066C16.4305 4.90747 16.2858 4.87114 16.1568 4.801C16.0311 4.72438 15.9269 4.61712 15.854 4.48928C15.7811 4.36143 15.7418 4.21717 15.7398 4.07C15.7248 3.668 15.6858 3.298 15.5398 2.948C15.4017 2.61425 15.1992 2.31097 14.9439 2.05549C14.6886 1.8 14.3854 1.59731 14.0518 1.459C13.7618 1.339 13.4618 1.292 13.1448 1.271C12.8408 1.25 12.4698 1.25 12.0248 1.25H11.9748ZM10.5218 2.845C10.5988 2.813 10.7158 2.784 10.9568 2.767C11.2038 2.75 11.5238 2.75 11.9998 2.75C12.4758 2.75 12.7958 2.75 13.0428 2.767C13.2838 2.784 13.4008 2.813 13.4778 2.845C13.7848 2.972 14.0278 3.215 14.1548 3.522C14.1948 3.618 14.2278 3.769 14.2408 4.126C14.2708 4.918 14.6798 5.681 15.4058 6.1C16.1318 6.519 16.9968 6.492 17.6978 6.122C18.0138 5.955 18.1608 5.908 18.2648 5.895C18.5933 5.85158 18.9257 5.94043 19.1888 6.142C19.2548 6.193 19.3388 6.28 19.4738 6.48C19.6128 6.686 19.7728 6.963 20.0108 7.375C20.2488 7.787 20.4078 8.065 20.5168 8.287C20.6238 8.504 20.6568 8.62 20.6668 8.703C20.7102 9.03157 20.6213 9.36392 20.4198 9.627C20.3558 9.71 20.2418 9.814 19.9398 10.004C19.2678 10.426 18.8118 11.162 18.8118 12C18.8118 12.838 19.2678 13.574 19.9398 13.996C20.2418 14.186 20.3558 14.29 20.4198 14.373C20.6218 14.636 20.7098 14.968 20.6668 15.297C20.6568 15.38 20.6228 15.497 20.5168 15.713C20.4078 15.936 20.2488 16.213 20.0108 16.625C19.7728 17.037 19.6118 17.314 19.4738 17.52C19.3388 17.72 19.2548 17.807 19.1888 17.858C18.9257 18.0596 18.5933 18.1484 18.2648 18.105C18.1608 18.092 18.0148 18.045 17.6978 17.878C16.9978 17.508 16.1318 17.48 15.4058 17.899C14.6798 18.318 14.2708 19.082 14.2408 19.874C14.2278 20.231 14.1948 20.382 14.1548 20.478C14.092 20.6298 13.9998 20.7677 13.8837 20.8839C13.7675 21.0001 13.6296 21.0922 13.4778 21.155C13.4008 21.187 13.2838 21.216 13.0428 21.233C12.7958 21.25 12.4758 21.25 11.9998 21.25C11.5238 21.25 11.2038 21.25 10.9568 21.233C10.7158 21.216 10.5988 21.187 10.5218 21.155C10.37 21.0922 10.2321 21.0001 10.1159 20.8839C9.99972 20.7677 9.9076 20.6298 9.84478 20.478C9.80478 20.382 9.77177 20.231 9.75877 19.874C9.72877 19.082 9.31977 18.319 8.59377 17.9C7.86777 17.481 7.00278 17.508 6.30177 17.878C5.98577 18.045 5.83878 18.092 5.73478 18.105C5.40621 18.1484 5.07385 18.0596 4.81077 17.858C4.74477 17.807 4.66077 17.72 4.52577 17.52C4.33766 17.2272 4.15857 16.9288 3.98878 16.625C3.75077 16.213 3.59177 15.935 3.48277 15.713C3.37577 15.496 3.34277 15.38 3.33277 15.297C3.28936 14.9684 3.3782 14.6361 3.57977 14.373C3.64377 14.29 3.75777 14.186 4.05977 13.996C4.73177 13.574 5.18778 12.838 5.18778 12C5.18778 11.162 4.73177 10.426 4.05977 10.004C3.75777 9.814 3.64377 9.71 3.57977 9.627C3.3782 9.36392 3.28936 9.03157 3.33277 8.703C3.34277 8.62 3.37677 8.503 3.48277 8.287C3.59177 8.064 3.75077 7.787 3.98878 7.375C4.22677 6.963 4.38777 6.686 4.52577 6.48C4.66077 6.28 4.74477 6.193 4.81077 6.142C5.07385 5.94043 5.40621 5.85158 5.73478 5.895C5.83878 5.908 5.98478 5.955 6.30177 6.122C7.00177 6.492 7.86777 6.52 8.59377 6.1C9.31977 5.681 9.72877 4.918 9.75877 4.126C9.77177 3.769 9.80478 3.618 9.84478 3.522C9.97178 3.215 10.2148 2.972 10.5218 2.845Z"
              fill="currentColor"
            />
          </>
        )}
      </svg>
    </span>
  );
};
