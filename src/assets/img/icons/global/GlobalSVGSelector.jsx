import React from 'react'

export const variables = {
    logo: {
        header_logo: "header_logo",
        change_theme: "change_theme",
        close: "close"
    },
    weather_logo: {
        sun: "sun",
        rain: "rain",
        small_rain_sun: "small_rain_sun",
        small_rain: "small_rain",
        cloudy: "cloudy",
        snow: "snow",
        fog:"fog",
        moon:"moon"
    }

}

export const GlobalSVGSelector = (props) => {
    switch (props.id) {
        case variables.logo.header_logo:
            return <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#4793FF" />
                <path d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3235 11.1622C48.3235 11.1622 46.5495 14.0707 44.5394 12.8753L41.3829 9.7971L41.1963 14.2822L8.78809 46.265L27.0688 64.5457C28.8351 64.8429 30.6492 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z" fill="#424FDD" />
                <path d="M58.3388 29.0023L59.7103 28.1252L58.2388 27.1841C56.6468 26.1659 56.217 24.03 57.2916 22.4755L58.2847 21.0386L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.5409C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4524 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4812 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1296 40.7095C31.9753 40.3038 33.7894 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4816 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.4781 42.9594 47.0326 44.0339L48.4695 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9672 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0265 58.3388 29.0023Z" fill="#FDBF2D" />
                <path d="M57.4082 33.734L58.3451 35.0644L56.6275 35.378C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4521V9.79697L42.2602 11.1681C43.2847 12.7702 45.4378 13.1942 46.9917 12.0986L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5403L54.3423 15.1645L53.9932 16.7553C53.5844 18.6113 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.165 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827" />
                <path d="M41.383 40.9704C48.4777 40.9704 54.2291 35.219 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.219 34.2883 40.9704 41.383 40.9704Z" fill="#FFE05F" />
                <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239Z" fill="#F9CB0D" />
                <path d="M42.5274 32.2419C42.1958 32.2419 41.8694 32.2632 41.5478 32.3006C41.5794 31.9404 41.5966 31.576 41.5966 31.2076C41.5966 24.3886 36.0687 18.8605 29.2495 18.8605C23.5703 18.8605 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8247 15.9491 27.8247C10.0886 27.8247 5.33777 32.5755 5.33777 38.4361C5.33777 44.2966 10.0886 49.0474 15.9491 49.0474H42.5274C47.1682 49.0474 50.9302 45.2853 50.9302 40.6447C50.9302 36.0039 47.1682 32.2419 42.5274 32.2419Z" fill="white" />
                <path d="M50.9302 40.6435C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8595 29.2498 18.8595C36.0691 18.8595 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2406 42.5272 32.2406C47.1684 32.2406 50.9302 36.0035 50.9302 40.6435Z" fill="#DAEFEC" />
            </svg>
        case variables.logo.change_theme:
            return <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z" fill="#4793FF" />
            </svg>
        case variables.logo.close:
            return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.25 8.25C16.836 8.25 16.5 8.586 16.5 9C16.5 13.1355 13.1355 16.5 9 16.5C4.8645 16.5 1.5 13.1355 1.5 9C1.5 4.8645 4.8645 1.5 9 1.5C11.0134 1.5 12.9034 2.28675 14.322 3.7155C14.6138 4.00912 15.0889 4.011 15.3825 3.71925C15.6765 3.4275 15.678 2.95238 15.3862 2.65838C13.6841 0.94425 11.4157 0 9 0C4.03725 0 0 4.03725 0 9C0 13.9628 4.03725 18 9 18C13.9624 18 18 13.9628 18 9C18 8.586 17.664 8.25 17.25 8.25Z" fill="#4793FF" />
                <path d="M10.0605 9L11.7803 7.28025C12.0731 6.98737 12.0731 6.51262 11.7803 6.21975C11.4874 5.92687 11.0126 5.92687 10.7198 6.21975L9.00003 7.9395L7.28028 6.21975C6.98778 5.92687 6.51228 5.92687 6.21978 6.21975C5.9269 6.51262 5.9269 6.98737 6.21978 7.28025L7.93953 9L6.21978 10.7198C5.9269 11.0126 5.9269 11.4874 6.21978 11.7803C6.36603 11.9269 6.55803 12 6.75003 12C6.94203 12 7.13403 11.9269 7.28028 11.7803L9.00003 10.0605L10.7198 11.7803C10.8664 11.9269 11.058 12 11.25 12C11.442 12 11.6336 11.9269 11.7803 11.7803C12.0731 11.4874 12.0731 11.0126 11.7803 10.7198L10.0605 9Z" fill="#4793FF" />
            </svg>
        case variables.weather_logo.sun:
            return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0092 35.5016C30.3584 35.5016 35.5055 30.3547 35.5055 24.0058C35.5055 17.6568 30.3584 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z" fill="url(#paint0_linear_2_547)" />
                <path d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z" fill="#FFB300" />
                <defs>
                    <linearGradient id="paint0_linear_2_547" x1="24.0092" y1="12.5099" x2="24.0092" y2="35.1951" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFC227" />
                        <stop offset="1" stopColor="#FFB300" />
                    </linearGradient>
                </defs>
            </svg>
        case variables.weather_logo.rain:
            return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.218 32.926L12.118 37.924C11.798 38.688 12.156 39.568 12.92 39.888C13.684 40.208 14.564 39.85 14.884 39.086L16.984 34.088C17.304 33.324 16.946 32.444 16.182 32.124C15.418 31.804 14.538 32.162 14.218 32.926ZM30.218 32.926L28.118 37.924C27.798 38.688 28.156 39.568 28.92 39.888C29.684 40.208 30.564 39.85 30.884 39.086L32.984 34.088C33.304 33.324 32.946 32.444 32.182 32.124C31.418 31.804 30.538 32.162 30.218 32.926ZM22.218 30.926L20.118 35.924C19.798 36.688 20.156 37.568 20.92 37.888C21.684 38.208 22.564 37.85 22.884 37.086L24.984 32.088C25.304 31.324 24.946 30.444 24.182 30.124C23.418 29.804 22.538 30.162 22.218 30.926Z" fill="#66AFEB"/>
            <path d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z" fill="url(#paint0_linear_2_525)"/>
            <path d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z" fill="url(#paint1_radial_2_525)"/>
            <defs>
            <linearGradient id="paint0_linear_2_525" x1="24" y1="6" x2="24" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9FC7FF"/>
            <stop offset="1" stopColor="#9BC1F5"/>
            </linearGradient>
            <radialGradient id="paint1_radial_2_525" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)">
            <stop stopColor="#486DA8" stopOpacity="0.4"/>
            <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
            </radialGradient>
            </defs>
            </svg>            
        case variables.weather_logo.small_rain_sun:
            return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8 32 8C27.5817 8 24 11.5817 24 16C24 20.4183 27.5817 24 32 24Z" fill="url(#paint0_linear_2_530)"/>
            <path d="M30.96 1.45999L31.48 4.41399C31.828 6.38399 28.872 6.90399 28.526 4.93399L28.006 1.97999C27.658 0.00998566 30.614 -0.510014 30.96 1.45999ZM41.546 4.98199L39.826 7.43999C38.678 9.07799 36.222 7.35799 37.368 5.71999L39.088 3.26199C40.236 1.62399 42.692 3.34399 41.546 4.98199ZM20.984 6.45399L23.442 8.17399C25.08 9.32199 23.36 11.778 21.722 10.632L19.264 8.91199C17.626 7.76399 19.346 5.30799 20.984 6.45399ZM42.282 21.366L44.74 23.086C46.378 24.234 44.658 26.69 43.02 25.544L40.562 23.824C38.924 22.676 40.644 20.22 42.282 21.366ZM46.542 14.958L43.588 15.478C41.618 15.826 41.098 12.87 43.068 12.524L46.022 12.004C47.992 11.656 48.512 14.612 46.542 14.958Z" fill="#FFB300"/>
            <path d="M14.218 38.926L12.118 43.924C11.798 44.688 12.156 45.568 12.92 45.888C13.684 46.208 14.564 45.85 14.884 45.086L16.984 40.088C17.304 39.324 16.946 38.444 16.182 38.124C15.418 37.804 14.538 38.162 14.218 38.926ZM24.218 36.926L22.118 41.924C21.798 42.688 22.156 43.568 22.92 43.888C23.684 44.208 24.564 43.85 24.884 43.086L26.984 38.088C27.304 37.324 26.946 36.444 26.182 36.124C25.418 35.804 24.538 36.162 24.218 36.926Z" fill="#66AFEB"/>
            <path d="M12 34C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C15.518 14.68 18.946 12 23 12C27.97 12 32 16.03 32 21C32 21.47 31.964 21.93 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12Z" fill="url(#paint1_linear_2_530)"/>
            <path d="M14 21C14 25.97 18.03 30 23 30C27.502 30 31.23 26.696 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C14.136 19.198 14 20.082 14 21Z" fill="url(#paint2_radial_2_530)"/>
            <defs>
            <linearGradient id="paint0_linear_2_530" x1="40" y1="8" x2="28.7832" y2="19.0723" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB301"/>
            <stop offset="1" stopColor="#FFC533"/>
            </linearGradient>
            <linearGradient id="paint1_linear_2_530" x1="22" y1="12" x2="22" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9FC7FF"/>
            <stop offset="1" stopColor="#9BC1F5"/>
            </linearGradient>
            <radialGradient id="paint2_radial_2_530" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
            <stop stopColor="#486DA8" stopOpacity="0.4"/>
            <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
            </radialGradient>
            </defs>
            </svg>
        case variables.weather_logo.small_rain:
            return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.218 32.926L14.118 37.924C13.798 38.688 14.156 39.568 14.92 39.888C15.684 40.208 16.564 39.85 16.884 39.086L18.984 34.088C19.304 33.324 18.946 32.444 18.182 32.124C17.418 31.804 16.538 32.162 16.218 32.926ZM26.218 30.926L24.118 35.924C23.798 36.688 24.156 37.568 24.92 37.888C25.684 38.208 26.564 37.85 26.884 37.086L28.984 32.088C29.304 31.324 28.946 30.444 28.182 30.124C27.418 29.804 26.538 30.162 26.218 30.926Z" fill="#66AFEB" />
                <path d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z" fill="url(#paint0_linear_2_537)" />
                <path d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z" fill="url(#paint1_radial_2_537)" />
                <defs>
                    <linearGradient id="paint0_linear_2_537" x1="24" y1="6" x2="24" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9FC7FF" />
                        <stop offset="1" stopColor="#9BC1F5" />
                    </linearGradient>
                    <radialGradient id="paint1_radial_2_537" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)">
                        <stop stopColor="#486DA8" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        case variables.weather_logo.cloudy:
            return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.32" d="M38 28C41.314 28 44 25.314 44 22C44 18.686 41.314 16 38 16H37.938C37.978 15.672 38 15.338 38 15C38 10.582 34.418 7 30 7C26.5 7 23.524 9.248 22.44 12.378C21.67 12.132 20.852 12 20 12C15.582 12 12 15.582 12 20C12 24.418 15.582 28 20 28C20.69 28 21.36 27.912 22 27.748V28H38Z" fill="#73A5E6" />
                <path d="M12 38C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C15.518 18.68 18.946 16 23 16C27.97 16 32 20.03 32 25C32 25.47 31.964 25.93 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12Z" fill="url(#paint0_linear_2_550)" />
                <path d="M14 25C14 29.97 18.03 34 23 34C27.502 34 31.23 30.696 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C14.136 23.198 14 24.082 14 25Z" fill="url(#paint1_radial_2_550)" />
                <defs>
                    <linearGradient id="paint0_linear_2_550" x1="22" y1="16" x2="22" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9FC7FF" />
                        <stop offset="1" stopColor="#9BC1F5" />
                    </linearGradient>
                    <radialGradient id="paint1_radial_2_550" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9439 -22.6966) rotate(-90) scale(20.9574 6.69705)">
                        <stop stopColor="#486DA8" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        case variables.weather_logo.snow:
            return <svg width="256" height="256" viewBox="0 0 256 256" fill="none" >
                <rect width="256" height="256" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_5_1152" transform="scale(0.00390625)" />
                    </pattern>
                    <image id="image0_5_1152" width="256" height="256" href="data:image/png;base64,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" />
                </defs>
            </svg>
        case variables.weather_logo.fog:
            return <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.32" d="M26 21C29.314 21 32 18.314 32 15C32 11.686 29.314 9 26 9H25.938C25.978 8.672 26 8.338 26 8C26 3.582 22.418 0 18 0C14.5 0 11.524 2.248 10.44 5.378C9.67 5.132 8.852 5 8 5C3.582 5 0 8.582 0 13C0 17.418 3.582 21 8 21C8.69 21 9.36 20.912 10 20.748V21H26Z" fill="#73A5E6"/>
            <path opacity="0.32" d="M42 21C45.314 21 48 18.314 48 15C48 11.686 45.314 9 42 9H41.938C41.978 8.672 42 8.338 42 8C42 3.582 38.418 0 34 0C30.5 0 27.524 2.248 26.44 5.378C25.67 5.132 24.852 5 24 5C19.582 5 16 8.582 16 13C16 17.418 19.582 21 24 21C24.69 21 25.36 20.912 26 20.748V21H42Z" fill="#73A5E6"/>
            <path opacity="0.32" d="M26 34C29.314 34 32 31.314 32 28C32 24.686 29.314 22 26 22H25.938C25.978 21.672 26 21.338 26 21C26 16.582 22.418 13 18 13C14.5 13 11.524 15.248 10.44 18.378C9.67 18.132 8.852 18 8 18C3.582 18 0 21.582 0 26C0 30.418 3.582 34 8 34C8.69 34 9.36 33.912 10 33.748V34H26Z" fill="#73A5E6"/>
            <path d="M16 31C11.582 31 8 27.418 8 23C8 18.582 11.582 15 16 15C16.834 15 17.636 15.128 18.392 15.364C19.518 11.68 22.946 9 27 9C31.97 9 36 13.03 36 18C36 18.47 35.964 18.93 35.894 19.38C36.55 19.134 37.258 19 38 19C41.314 19 44 21.686 44 25C44 28.314 41.314 31 38 31H16Z" fill="url(#paint0_linear_2_551)"/>
            <path d="M18 18C18 22.97 22.03 27 27 27C31.502 27 35.23 23.696 35.894 19.38C36.55 19.134 37.258 19 38 19C41.314 19 44 21.686 44 25C44 28.314 41.314 31 38 31H16C11.582 31 8 27.418 8 23C8 18.582 11.582 15 16 15C16.834 15 17.636 15.128 18.392 15.364C18.136 16.198 18 17.082 18 18Z" fill="url(#paint1_radial_2_551)"/>
            <defs>
            <linearGradient id="paint0_linear_2_551" x1="26" y1="9" x2="26" y2="31" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9FC7FF"/>
            <stop offset="1" stop-color="#9BC1F5"/>
            </linearGradient>
            <radialGradient id="paint1_radial_2_551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.9439 -29.6966) rotate(-90) scale(20.9574 6.69705)">
            <stop stop-color="#486DA8" stop-opacity="0.4"/>
            <stop offset="1" stop-color="#486DA8" stop-opacity="0"/>
            </radialGradient>
            </defs>
            </svg>
        case variables.weather_logo.moon:
            return <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_3221_17)">
            <circle cx="44" cy="44" r="44" fill="#C4C4C4"/>
            </g>
            <g filter="url(#filter1_i_3221_17)">
            <circle cx="37" cy="34" r="2" fill="#93A4AB"/>
            </g>
            <g filter="url(#filter2_i_3221_17)">
            <circle cx="54" cy="65" r="2" fill="#93A4AB"/>
            </g>
            <g filter="url(#filter3_i_3221_17)">
            <circle cx="12" cy="41" r="4" fill="#93A4AB"/>
            </g>
            <g filter="url(#filter4_i_3221_17)">
            <ellipse cx="25.5" cy="24" rx="6.5" ry="6" fill="#93A4AB"/>
            </g>
            <g filter="url(#filter5_i_3221_17)">
            <ellipse cx="70.5" cy="40" rx="6.5" ry="6" fill="#93A4AB"/>
            </g>
            <g filter="url(#filter6_i_3221_17)">
            <ellipse cx="35" cy="67" rx="12" ry="11" fill="#93A4AB"/>
            </g>
            <g filter="url(#filter7_i_3221_17)">
            <ellipse cx="61" cy="17.5" rx="3" ry="2.5" fill="#93A4AB"/>
            </g>
            <g filter="url(#filter8_i_3221_17)">
            <ellipse cx="77" cy="29.5" rx="3" ry="2.5" fill="#93A4AB"/>
            </g>
            <defs>
            <filter id="filter0_i_3221_17" x="0" y="0" width="88" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.79 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter1_i_3221_17" x="35" y="32" width="4" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter2_i_3221_17" x="52" y="63" width="4" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter3_i_3221_17" x="8" y="37" width="8" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter4_i_3221_17" x="19" y="18" width="13" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter5_i_3221_17" x="64" y="34" width="13" height="14" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter6_i_3221_17" x="23" y="56" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter7_i_3221_17" x="58" y="15" width="6" height="7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            <filter id="filter8_i_3221_17" x="74" y="27" width="6" height="7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3221_17"/>
            </filter>
            </defs>
            </svg>            
        default:
            return null

    }
}
