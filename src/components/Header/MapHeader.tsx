import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import userState from '../../recoil/userState';

const MapHeader = () => {
  const user = useRecoilValue(userState);
  return (
    <Container>
      <div className="upper">
        <h2>
          {user?.nickname ? user.nickname : '방문객'}님, 제주도에
          <svg
            width="17"
            height="28"
            viewBox="0 0 17 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6479 25.2471C13.6401 25.2567 13.6017 25.2445 13.538 25.2131C13.476 25.1791 13.3792 25.1372 13.2588 25.0805C13.0136 24.9731 12.6454 24.851 12.176 24.7454C11.2372 24.5334 9.90135 24.4025 8.42157 24.3598C7.79947 24.3414 7.19743 24.3371 6.64513 24.3476L6.67392 24.3441C6.16699 24.4496 5.7002 24.5683 5.29535 24.7053C4.89138 24.8449 4.55022 25.0046 4.28934 25.1686C4.02846 25.3326 3.84872 25.501 3.75013 25.6336C3.64892 25.7663 3.621 25.8535 3.6018 25.8509C3.58173 25.8509 3.57388 25.7418 3.65415 25.5752C3.7318 25.4077 3.90543 25.1974 4.16893 24.9958C4.43156 24.7943 4.78144 24.6015 5.19501 24.4348C5.60946 24.2708 6.08585 24.1312 6.60412 24.0108L6.61634 24.0081H6.63292C7.19918 23.9837 7.80208 23.9811 8.43291 23.9985C9.92927 24.0422 11.2878 24.2149 12.2406 24.4976C12.7161 24.6381 13.0887 24.803 13.3251 24.9548C13.442 25.0333 13.5293 25.097 13.5807 25.152C13.634 25.2044 13.6567 25.2358 13.6488 25.2454L13.6479 25.2471Z"
              fill="black"
            />
            <path
              d="M6.26221 26.2547C6.27705 26.253 6.2945 26.2835 6.34248 26.3298C6.39135 26.3751 6.47511 26.4301 6.59639 26.4807C6.83982 26.5811 7.22547 26.6631 7.70797 26.718C7.82838 26.732 7.95576 26.7433 8.08751 26.7529C8.12067 26.7547 8.15382 26.7573 8.18698 26.7591C8.21577 26.7599 8.25329 26.7591 8.28645 26.7591C8.35538 26.7591 8.42518 26.7591 8.49672 26.7591C8.78116 26.7591 9.08567 26.739 9.40239 26.7041C9.71737 26.6605 10.0446 26.5968 10.3639 26.4842C10.5244 26.4301 10.6798 26.3577 10.8272 26.2748C10.9005 26.2321 10.9712 26.1858 11.0366 26.1343C11.0689 26.1082 11.1012 26.082 11.13 26.0541C11.1457 26.0401 11.1579 26.0261 11.171 26.0122C11.178 26.0052 11.1841 25.9982 11.1884 25.9921L11.1998 25.9782L11.1692 26.0794C11.1649 26.0672 11.1692 26.0532 11.1631 26.0427C11.1535 26.0052 11.1178 25.9598 11.0593 25.918C11.0017 25.8761 10.9284 25.8403 10.8516 25.8098C10.6946 25.7496 10.5236 25.7085 10.3534 25.678C10.0114 25.6169 9.66851 25.5899 9.34306 25.5768C9.18165 25.5707 9.01849 25.5707 8.86318 25.5663C8.78465 25.5646 8.70787 25.5628 8.63196 25.5611C8.55693 25.5611 8.48276 25.5637 8.41034 25.5646C8.33793 25.5663 8.26638 25.5672 8.1957 25.5689C8.1259 25.5707 8.05785 25.5777 7.99066 25.5812C7.92348 25.5855 7.85804 25.5899 7.79348 25.5942C7.72978 25.6021 7.66783 25.6091 7.60676 25.6169C7.36245 25.6431 7.14869 25.6937 6.96371 25.7443C6.78223 25.8037 6.6339 25.8717 6.52571 25.9459C6.41927 26.0209 6.35557 26.1003 6.32067 26.1588C6.2849 26.2181 6.2753 26.2539 6.26309 26.2556C6.25087 26.2582 6.23517 26.212 6.25349 26.1335C6.27094 26.0549 6.32765 25.9441 6.43759 25.8386C6.5484 25.7356 6.70458 25.6396 6.89653 25.5559C7.08936 25.4817 7.31534 25.4093 7.56837 25.3656C7.63206 25.3543 7.69663 25.3421 7.76294 25.3299C7.82925 25.322 7.89731 25.3133 7.96711 25.3054C8.03691 25.2976 8.10758 25.2871 8.18 25.2819C8.25242 25.2775 8.32571 25.2723 8.40075 25.2679C8.47578 25.2636 8.55169 25.2575 8.62934 25.2548C8.70613 25.254 8.78378 25.2522 8.86318 25.2514C9.02198 25.2496 9.18339 25.2452 9.35353 25.247C9.69207 25.2522 10.0463 25.2714 10.4163 25.3325C10.6012 25.3639 10.7906 25.4058 10.9834 25.4773C11.0794 25.5157 11.1771 25.5602 11.2739 25.6291C11.3673 25.6963 11.4694 25.7984 11.5121 25.9467C11.5278 25.9904 11.5278 26.0366 11.5322 26.082L11.5374 26.1317L11.5017 26.1832C11.4877 26.2033 11.479 26.2129 11.4694 26.2251C11.4598 26.2373 11.4502 26.2478 11.4406 26.2582C11.4214 26.2792 11.4022 26.2992 11.3821 26.3167C11.3437 26.3542 11.3027 26.3874 11.2617 26.4196C11.1797 26.4833 11.0951 26.5383 11.0096 26.5872C10.8368 26.6831 10.6606 26.7625 10.4826 26.8193C10.1275 26.9388 9.77583 26.9981 9.44253 27.0348C9.10748 27.0618 8.79163 27.0723 8.49498 27.0583C8.42081 27.0548 8.3484 27.0513 8.27685 27.0487C8.2402 27.047 8.20879 27.0461 8.16866 27.0426C8.13376 27.0383 8.09886 27.0348 8.06483 27.0304C7.92872 27.013 7.79871 26.9929 7.67569 26.9711C7.18272 26.8812 6.78747 26.7591 6.53793 26.6072C6.41403 26.5313 6.32852 26.4476 6.29013 26.3769C6.25262 26.3053 6.25611 26.2574 6.26658 26.2582L6.26221 26.2547Z"
              fill="black"
            />
            <path
              d="M1.56453 2.20751C1.56976 2.20751 1.57587 2.22932 1.58372 2.26684C1.58721 2.28603 1.59157 2.30959 1.59506 2.33664C1.59943 2.36369 1.6099 2.39597 1.61775 2.43262C1.65614 2.57484 1.7303 2.78773 1.92487 2.99364C2.11159 3.20392 2.41086 3.39674 2.78605 3.55816C3.16472 3.71696 3.62104 3.84435 4.13757 3.94207C5.17237 4.13577 6.4445 4.2204 7.87542 4.21953C9.30547 4.21604 10.9013 4.13838 12.587 3.96301L12.5652 3.9665C13.0756 3.83998 13.593 3.68904 14.0781 3.46567C14.3198 3.35399 14.5528 3.22224 14.7517 3.05821C14.9498 2.89592 15.1051 2.69175 15.1435 2.47101C15.1609 2.36282 15.1513 2.25288 15.1164 2.14556C15.0998 2.09146 15.0745 2.03998 15.0466 1.98938C15.0327 1.96408 15.017 1.93965 15.0004 1.91696C14.9855 1.89515 14.9637 1.8681 14.9533 1.85676L14.9917 1.8873C14.859 1.81488 14.7273 1.74246 14.5955 1.67091C14.5292 1.63514 14.4647 1.59849 14.3983 1.56359C14.3303 1.53218 14.2631 1.50077 14.1959 1.46849C14.0607 1.40654 13.9281 1.34023 13.7928 1.28177C13.6558 1.2268 13.5197 1.17271 13.3836 1.11861C12.8365 0.914441 12.2877 0.741684 11.7398 0.625639C11.1927 0.50436 10.6518 0.419726 10.123 0.370865C9.85865 0.347307 9.59777 0.330729 9.34037 0.324622C9.08473 0.315896 8.82821 0.319387 8.58914 0.334219H8.57605H8.5682C7.43742 0.287976 6.39651 0.308916 5.48299 0.414491C4.56947 0.517447 3.78682 0.716381 3.17955 0.970282C2.56966 1.21982 2.14911 1.53567 1.90393 1.78608C1.65614 2.03737 1.57849 2.21536 1.56365 2.20838C1.54708 2.20489 1.59768 2.00508 1.83239 1.72152C2.06448 1.4397 2.48677 1.08633 3.10539 0.803632C3.72138 0.516575 4.51973 0.287976 5.44896 0.161461C6.37906 0.0305842 7.43568 -0.010424 8.58216 0.0218591H8.56209C8.82559 0.00266377 9.08211 -0.00344384 9.34735 0.00179125C9.61173 0.00528131 9.87959 0.0192415 10.1518 0.0410544C10.6954 0.0855526 11.2512 0.167569 11.814 0.287976C12.3785 0.40402 12.9447 0.578523 13.5101 0.786182C13.6506 0.842023 13.7911 0.896991 13.9333 0.953705C14.0738 1.01304 14.2108 1.08109 14.3504 1.14479C14.4202 1.17707 14.49 1.20935 14.5598 1.24251C14.6287 1.27741 14.6959 1.3158 14.7639 1.35244C14.9 1.42661 15.037 1.50164 15.1749 1.57668L15.1958 1.58802L15.2133 1.60722C15.249 1.64648 15.27 1.6744 15.2944 1.70843C15.318 1.74159 15.3398 1.77561 15.359 1.81051C15.3982 1.88031 15.4331 1.95448 15.4584 2.033C15.5099 2.18831 15.5265 2.36282 15.4986 2.53034C15.4689 2.70135 15.3965 2.8584 15.304 2.9919C15.2124 3.12714 15.099 3.2362 14.9829 3.3348C14.7473 3.52849 14.4891 3.67071 14.2291 3.79112C13.7073 4.02932 13.1733 4.18201 12.6481 4.3094L12.6367 4.31201H12.6263C10.9188 4.48128 9.31769 4.54323 7.87368 4.52578C6.43054 4.50571 5.14445 4.39403 4.09307 4.16543C3.56782 4.04939 3.1019 3.9028 2.7145 3.72132C2.32972 3.53635 2.01998 3.31647 1.83239 3.07479C1.78178 3.01807 1.74688 2.95438 1.70936 2.89854C1.6797 2.83746 1.64567 2.78424 1.62822 2.7284C1.60728 2.6743 1.58896 2.6237 1.57936 2.57571C1.56714 2.52859 1.55842 2.48497 1.5558 2.4457C1.55231 2.40644 1.54708 2.37329 1.54795 2.34275C1.54882 2.31221 1.55057 2.28691 1.55144 2.26684C1.55493 2.2267 1.55842 2.20751 1.56453 2.20838V2.20751Z"
              fill="black"
            />
            <path
              d="M2.89056 2.36977C2.90452 2.37064 2.86002 2.44219 2.90016 2.56085C2.94116 2.67951 3.08426 2.81824 3.30239 2.94737C3.51964 3.07738 3.80932 3.20738 4.15919 3.32692L4.19235 3.33739C4.19846 3.33913 4.20282 3.34088 4.20631 3.34175L4.22376 3.34524C4.24732 3.35048 4.27 3.35484 4.29356 3.36007C4.34068 3.36967 4.38867 3.38014 4.43753 3.39061C4.53525 3.41155 4.63559 3.43336 4.73942 3.45518C4.84412 3.47524 4.94882 3.50491 5.06137 3.51974C5.17306 3.53632 5.28823 3.5529 5.40689 3.57035C6.35095 3.7117 7.51401 3.77277 8.83849 3.69774C9.49986 3.65411 10.2022 3.58518 10.936 3.47175C11.6681 3.35746 12.4385 3.20651 13.215 2.99623L13.2019 3.0006C13.3738 2.93341 13.5431 2.8575 13.7019 2.76764C13.8607 2.67864 14.0099 2.57132 14.1163 2.44568C14.1678 2.38286 14.2071 2.31567 14.2219 2.25111C14.2367 2.18654 14.2324 2.12721 14.2036 2.06962C14.1765 2.01291 14.1259 1.95881 14.064 1.92217C14.0029 1.88378 13.9287 1.86458 13.8755 1.86982L13.8572 1.87244L13.8336 1.87854C13.8232 1.88029 13.8127 1.89163 13.8371 1.87069C13.8467 1.86197 13.8511 1.85411 13.8589 1.84015C13.8668 1.82532 13.8694 1.80874 13.8712 1.79565C13.8712 1.78955 13.8712 1.78082 13.8703 1.77559C13.8703 1.7721 13.8703 1.76773 13.8685 1.76424C13.865 1.75465 13.8659 1.75552 13.865 1.7529C13.8624 1.74941 13.8729 1.76512 13.8851 1.77995C13.9122 1.8131 13.9497 1.85324 13.9889 1.90472C14.0256 1.9562 14.0744 2.02338 14.0832 2.13506C14.0875 2.1909 14.0718 2.25023 14.0483 2.29735C14.0238 2.34272 13.9924 2.37937 13.9636 2.40467C13.9043 2.45702 13.8459 2.4893 13.79 2.51548C13.735 2.54078 13.6827 2.55823 13.6295 2.58004L13.4733 2.63065C13.0597 2.75455 12.6444 2.84529 12.2204 2.93603C11.374 3.11315 10.505 3.27108 9.61241 3.41155C9.39079 3.44558 9.16132 3.48135 8.92923 3.50055C8.69801 3.52236 8.4668 3.53283 8.23384 3.53807C7.76879 3.54766 7.30112 3.5337 6.83171 3.49706C6.48357 3.47001 6.13806 3.43249 5.79341 3.37229C5.62066 3.34001 5.45139 3.3147 5.26205 3.24054C5.21494 3.22134 5.1652 3.19953 5.10849 3.15678C5.0797 3.13235 5.04829 3.10704 5.01775 3.05382C4.98721 3.00321 4.97587 2.91684 4.99768 2.85576C5.01775 2.79381 5.04829 2.75804 5.07446 2.73012C5.10151 2.7022 5.12681 2.683 5.15124 2.66642C5.20185 2.63327 5.24286 2.61146 5.29957 2.58877L5.32226 2.58004L5.35018 2.57743C6.79244 2.46051 8.19196 2.3401 9.53388 2.21446C10.204 2.15077 10.8601 2.08707 11.4988 2.0164C11.8181 1.98063 12.1331 1.94485 12.442 1.90385C12.5964 1.88291 12.7491 1.86109 12.8992 1.83666C12.9733 1.82357 13.0484 1.81136 13.119 1.79565C13.1557 1.78867 13.1906 1.78082 13.2211 1.7721C13.236 1.76773 13.2569 1.76337 13.2656 1.75988C13.2726 1.75639 13.2805 1.75377 13.2883 1.75203L13.2386 1.80002C13.2386 1.80002 13.2386 1.7974 13.2395 1.79827C13.236 1.80176 13.2395 1.80351 13.2368 1.80961C13.2368 1.81572 13.2386 1.82096 13.2386 1.82357C13.2412 1.82794 13.2403 1.82794 13.2403 1.82706C13.2386 1.82183 13.2098 1.79653 13.1766 1.77733C13.1068 1.7372 13.017 1.70317 12.9262 1.67525C12.743 1.61853 12.5502 1.57753 12.3582 1.54175C11.9743 1.47108 11.5913 1.42309 11.217 1.38208C10.4675 1.30094 9.75114 1.25033 9.07669 1.2102C8.7399 1.19013 8.4127 1.17355 8.09685 1.15959C8.01833 1.1561 7.9398 1.15348 7.86215 1.14999C7.78536 1.14999 7.70946 1.14999 7.63355 1.14999C7.48173 1.14999 7.3334 1.15087 7.18682 1.15087C7.04111 1.14912 6.89802 1.15436 6.75842 1.16134C6.61881 1.16744 6.48183 1.17268 6.34746 1.17791C6.0796 1.19187 5.82657 1.21892 5.58401 1.23899C5.10413 1.30094 4.67398 1.36376 4.31363 1.46846C4.26826 1.48068 4.22376 1.49202 4.18014 1.50336C4.13651 1.51558 4.0955 1.53128 4.05449 1.54524C3.97335 1.57404 3.89308 1.59847 3.81891 1.62726C3.7465 1.65954 3.67757 1.69008 3.61126 1.71887C3.54407 1.74592 3.4891 1.78518 3.43152 1.81485C3.20903 1.94398 3.06593 2.08271 2.99003 2.19003C2.91324 2.29822 2.90016 2.3689 2.89143 2.36715C2.88271 2.36715 2.87922 2.28863 2.9464 2.16386C3.01271 2.03996 3.15406 1.87942 3.37829 1.73109C3.43588 1.69706 3.49259 1.65256 3.55978 1.62028C3.62696 1.58712 3.69676 1.55135 3.77005 1.5147C3.84509 1.48155 3.92536 1.45276 4.00825 1.4196C4.05013 1.4039 4.09201 1.38557 4.13651 1.37161C4.18101 1.35852 4.22638 1.34456 4.27175 1.3306C4.63821 1.20845 5.07272 1.1308 5.55958 1.05402C5.80388 1.02697 6.06128 0.993814 6.33176 0.972001C6.467 0.963276 6.60573 0.95455 6.74707 0.944953C6.88842 0.935355 7.03326 0.92663 7.18071 0.924885C7.32817 0.921395 7.47911 0.917905 7.63268 0.914415C7.71033 0.91267 7.78798 0.910925 7.86651 0.90918C7.94416 0.910925 8.02356 0.91267 8.10296 0.914415C8.42056 0.922267 8.74862 0.93361 9.08803 0.948443C9.76597 0.978108 10.4867 1.01912 11.2449 1.09154C11.6244 1.12905 12.0127 1.17268 12.4106 1.24161C12.6095 1.27651 12.811 1.31664 13.0161 1.37772C13.119 1.40913 13.2229 1.4449 13.3319 1.50511C13.386 1.53826 13.4454 1.57229 13.5021 1.65256C13.5291 1.69183 13.5536 1.75203 13.5509 1.81572C13.5518 1.84801 13.5431 1.87418 13.5352 1.90297C13.5256 1.9274 13.5143 1.94834 13.5021 1.97103L13.4838 2.00419L13.4532 2.01989C13.4262 2.03298 13.3982 2.04519 13.3703 2.05654C13.3442 2.06613 13.3276 2.06962 13.3049 2.07573C13.2621 2.08882 13.2229 2.09754 13.1836 2.1054C13.1042 2.12372 13.0274 2.13593 12.9498 2.15077C12.7945 2.17694 12.6392 2.2005 12.483 2.22319C12.1706 2.26768 11.8539 2.30608 11.5337 2.34359C10.8924 2.41863 10.2354 2.48669 9.56442 2.55387C8.22162 2.68649 6.82124 2.81213 5.37635 2.9308L5.42609 2.91945C5.40427 2.92818 5.37024 2.94563 5.35105 2.95959C5.34058 2.96657 5.33273 2.97355 5.33011 2.97617C5.32836 2.97617 5.33011 2.97878 5.32749 2.97617L5.29783 2.95348C5.28823 2.94737 5.27776 2.94214 5.27252 2.93865C5.26467 2.93516 5.25595 2.93167 5.25246 2.9308C5.22977 2.92382 5.23501 2.93341 5.26205 2.91858C5.27078 2.91422 5.27427 2.91073 5.28299 2.90375C5.29346 2.89677 5.30219 2.88892 5.31004 2.88106C5.31266 2.87757 5.31964 2.87059 5.32313 2.86797C5.32313 2.86797 5.32313 2.86885 5.32487 2.87059C5.33534 2.87845 5.36326 2.89415 5.39468 2.90549C5.52119 2.9561 5.69046 2.98664 5.85275 3.01543C6.17994 3.07214 6.5176 3.10879 6.85701 3.13496C7.31508 3.17074 7.77228 3.1847 8.22424 3.17597C8.44935 3.17161 8.67358 3.16114 8.8952 3.1402C9.11595 3.12275 9.33321 3.08872 9.55657 3.05557C10.4413 2.91858 11.3086 2.76415 12.1479 2.59226C12.5659 2.50414 12.9821 2.41514 13.3721 2.30084L13.5152 2.25547C13.5579 2.23802 13.605 2.22231 13.6452 2.20486C13.6844 2.18741 13.7167 2.16647 13.735 2.15077C13.7481 2.14379 13.742 2.13506 13.7525 2.1403C13.7726 2.15251 13.7883 2.14902 13.7638 2.1499C13.7638 2.1499 13.7481 2.15077 13.7455 2.15164C13.7455 2.15164 13.7455 2.15164 13.7455 2.15077C13.7455 2.14902 13.7438 2.14553 13.742 2.14117C13.7368 2.13157 13.7298 2.11761 13.7176 2.10278C13.6949 2.07137 13.6626 2.03647 13.6251 1.99023C13.6059 1.96492 13.5841 1.94049 13.5597 1.88989C13.5536 1.87505 13.5483 1.86458 13.5431 1.84277C13.5405 1.83317 13.5387 1.8227 13.537 1.8131C13.5352 1.80176 13.5352 1.78693 13.537 1.77471C13.537 1.74941 13.5457 1.71975 13.5579 1.69357C13.5701 1.66739 13.585 1.65082 13.6015 1.63162C13.6164 1.61766 13.6295 1.60806 13.6443 1.59759C13.6583 1.58887 13.6679 1.58451 13.6801 1.5784C13.7054 1.56618 13.7202 1.56357 13.7403 1.55571L13.7909 1.5435C13.8092 1.54001 13.8293 1.53826 13.8476 1.53565C13.9985 1.52605 14.1268 1.57055 14.2376 1.63773C14.3475 1.70579 14.4426 1.80263 14.502 1.92653C14.5631 2.04956 14.5735 2.2005 14.5404 2.32876C14.5081 2.45877 14.44 2.56434 14.3667 2.65246C14.2158 2.82697 14.0387 2.94563 13.8598 3.0451C13.6809 3.14456 13.4977 3.22309 13.3145 3.29289L13.3066 3.29551H13.3014C10.0949 4.10258 7.2828 4.09124 5.37723 3.75009C5.25769 3.72915 5.14165 3.70821 5.02909 3.68814C4.91566 3.66982 4.80835 3.63579 4.70277 3.61223C4.59807 3.58605 4.49599 3.56075 4.39739 3.53545C4.34853 3.52323 4.29967 3.51102 4.25255 3.4988C4.229 3.49269 4.20544 3.48659 4.18188 3.48135L4.16443 3.47699C4.15658 3.47524 4.15047 3.47175 4.14523 3.47001L4.11121 3.45779C3.75697 3.32168 3.46816 3.1751 3.25003 3.0259C3.03278 2.87844 2.88532 2.71616 2.85304 2.57132C2.83559 2.49977 2.8513 2.44393 2.86177 2.41165C2.87747 2.38111 2.88707 2.36541 2.89143 2.36628L2.89056 2.36977Z"
              fill="black"
            />
            <path
              d="M15.3326 2.13661C15.3553 2.13487 15.3893 2.35125 15.4329 2.7465C15.4766 3.14175 15.5298 3.71674 15.5891 4.43482L15.5943 4.49764L15.5429 4.53516C15.4521 4.6006 15.3596 4.66865 15.2637 4.73845C15.1668 4.80651 15.0717 4.88416 14.9626 4.94437C14.8553 5.00893 14.7454 5.07437 14.6328 5.14155C14.5779 5.17733 14.5177 5.20525 14.4575 5.23404C14.3973 5.26371 14.3362 5.29337 14.2751 5.32304C14.2132 5.3527 14.1512 5.38324 14.0884 5.41378C14.0256 5.44432 13.9584 5.46613 13.8921 5.49405C13.7594 5.54466 13.6251 5.60224 13.4855 5.64936C13.3441 5.69298 13.201 5.73661 13.0553 5.78198C12.9096 5.82648 12.7569 5.85527 12.6051 5.89366C11.9917 6.02977 11.333 6.11354 10.6463 6.15542C9.95964 6.19293 9.2468 6.19468 8.51738 6.18072C7.85339 6.1685 7.2086 6.1432 6.58563 6.12226C6.27414 6.11092 5.97051 6.10481 5.666 6.08562C5.51418 6.07689 5.36498 6.07078 5.21665 6.05944C5.06833 6.04373 4.92262 6.0289 4.77778 6.01407C4.20105 5.94252 3.65398 5.84044 3.15665 5.67204C2.6628 5.50278 2.21259 5.27418 1.87929 4.95396C1.70915 4.79953 1.57652 4.61543 1.48753 4.42348C1.47618 4.39904 1.46571 4.37549 1.45437 4.35193C1.44477 4.3275 1.43779 4.3022 1.42994 4.27689C1.42209 4.25246 1.41424 4.22716 1.40726 4.20273C1.40028 4.1783 1.39766 4.15212 1.39242 4.12682C1.38806 4.10152 1.3837 4.07709 1.37934 4.05178C1.37846 4.02648 1.37672 4.00118 1.37585 3.97588C1.37236 3.92352 1.37672 3.88339 1.37759 3.83802C1.39417 3.48988 1.42209 3.19497 1.44565 2.95329C1.49538 2.46992 1.53901 2.2038 1.56344 2.20554C1.58874 2.20729 1.59223 2.47602 1.58525 2.96114C1.58263 3.20283 1.57565 3.50035 1.57827 3.84151C1.58001 3.88252 1.57827 3.9305 1.5835 3.96628C1.58525 3.98547 1.58699 4.00467 1.58874 4.02474C1.5931 4.0448 1.59746 4.064 1.6027 4.08407C1.60793 4.10414 1.61055 4.1242 1.61753 4.14427C1.62451 4.16434 1.63236 4.18441 1.64022 4.20447C1.64807 4.22454 1.65418 4.24461 1.6629 4.26468L1.69344 4.32314C1.77546 4.48019 1.89412 4.63462 2.05117 4.7655C2.35481 5.03773 2.77623 5.23928 3.24826 5.38673C3.72204 5.53419 4.25253 5.62231 4.81268 5.68339C4.95315 5.6956 5.09625 5.70869 5.24021 5.72178C5.38505 5.73137 5.53163 5.73486 5.67996 5.74184C5.974 5.75668 6.28374 5.76017 6.59523 5.76889C7.21907 5.7846 7.86474 5.80816 8.52348 5.8195C9.24854 5.83346 9.95266 5.83433 10.6262 5.80292C11.299 5.76715 11.9411 5.69473 12.5353 5.57345C12.6828 5.53942 12.8311 5.51412 12.9724 5.47398C13.1138 5.43385 13.2525 5.39458 13.3895 5.35532C13.5247 5.31257 13.6539 5.26109 13.783 5.21572C13.8467 5.19129 13.9121 5.17209 13.9732 5.14417C14.0343 5.11625 14.0945 5.0892 14.1547 5.06216C14.2149 5.03511 14.2742 5.00806 14.3327 4.98188C14.3911 4.95571 14.4505 4.93041 14.5037 4.89812C14.6136 4.83705 14.7218 4.77772 14.8265 4.71926C14.9338 4.66516 15.0281 4.59449 15.1241 4.53254C15.2192 4.46885 15.3116 4.40777 15.4015 4.34757L15.3553 4.44791C15.3274 3.72895 15.3108 3.15135 15.3064 2.75348C15.302 2.35562 15.3108 2.13749 15.3326 2.13574V2.13661Z"
              fill="black"
            />
            <path
              d="M15.3781 2.87689C15.3755 2.86991 15.4138 2.84286 15.4994 2.81581C15.5421 2.80185 15.5971 2.78877 15.6651 2.78702C15.7332 2.78266 15.8143 2.794 15.899 2.8289C16.0717 2.89696 16.2305 3.07582 16.3326 3.3053C16.4382 3.53651 16.5071 3.81135 16.5376 4.13331L16.5359 4.11848C16.5647 4.24238 16.6031 4.37064 16.6615 4.49017C16.6903 4.5495 16.7261 4.60621 16.7662 4.65682C16.7863 4.68212 16.809 4.70394 16.8317 4.72488C16.843 4.73447 16.8552 4.7432 16.8666 4.75105C16.8727 4.75541 16.8779 4.75803 16.8832 4.76065C16.8867 4.76239 16.8971 4.76676 16.8901 4.76414L16.966 4.84965C16.9983 4.99361 17.0088 5.14805 16.9922 5.30597C16.9826 5.3845 16.9669 5.4639 16.9425 5.54242C16.9163 5.62269 16.8901 5.69424 16.8369 5.78062L16.8308 5.79109L16.8186 5.80243C16.3972 6.18983 15.851 6.48648 15.2481 6.71944C14.6452 6.95677 13.9812 7.13825 13.2779 7.28832C11.8706 7.5876 10.3061 7.76035 8.6632 7.84673C8.24352 7.86855 7.82908 7.88338 7.41987 7.89123C7.31778 7.89298 7.2157 7.89385 7.11361 7.89559H6.96092C6.90247 7.89734 6.85709 7.89123 6.80474 7.88861C6.60232 7.87553 6.40164 7.86331 6.20271 7.85022C6.10324 7.84324 6.00378 7.83801 5.90605 7.83015C5.80833 7.81968 5.71061 7.80921 5.61376 7.79874C5.42006 7.7778 5.22724 7.75686 5.03703 7.7368C4.84769 7.70713 4.6601 7.67834 4.47513 7.64954C4.38264 7.63384 4.29016 7.62337 4.19942 7.60417C4.10867 7.58498 4.01793 7.56666 3.92806 7.54833C3.20998 7.40175 2.53379 7.20805 1.93175 6.93757C1.7843 6.86428 1.63597 6.79884 1.49637 6.72119C1.35851 6.64005 1.21978 6.56763 1.09414 6.47689C0.836744 6.30849 0.608145 6.11392 0.41183 5.91237C0.363841 5.86264 0.316726 5.81377 0.270482 5.76491L0.204171 5.69686L0.145713 5.64712C0.104705 5.62008 0.066314 5.58169 0.0401386 5.53544C0.0157081 5.48833 0.00349294 5.43947 0.000875396 5.39497C-0.00435969 5.30597 0.0148356 5.2353 0.0331584 5.16899C0.0732941 5.03811 0.125645 4.92817 0.174506 4.82173C0.224239 4.71528 0.272227 4.61494 0.314981 4.51722C0.402232 4.32177 0.469416 4.1368 0.507806 3.96317C0.518277 3.91867 0.523512 3.87854 0.532237 3.83317C0.542707 3.78605 0.552305 3.74068 0.561902 3.69618C0.577608 3.65256 0.59244 3.61068 0.607273 3.56967C0.627341 3.53128 0.647409 3.49289 0.666604 3.45624C0.754728 3.31402 0.8699 3.21717 0.976347 3.15435C1.08367 3.09066 1.18226 3.05663 1.26253 3.03482C1.42395 2.99468 1.51294 3.00428 1.51382 3.01562C1.51556 3.02871 1.43093 3.04354 1.28522 3.10374C1.2128 3.13428 1.12555 3.17704 1.03568 3.24335C0.945809 3.30966 0.854195 3.40127 0.788756 3.52604C0.774796 3.55832 0.759963 3.59148 0.74513 3.62551C0.73466 3.66128 0.72419 3.69793 0.712847 3.73544C0.70674 3.77471 0.700632 3.81397 0.694524 3.85498C0.688417 3.89861 0.684054 3.94834 0.676202 3.99545C0.644791 4.18828 0.58197 4.38896 0.500826 4.59487C0.460691 4.69783 0.416192 4.80253 0.371694 4.90898C0.328068 5.01542 0.281825 5.12449 0.253905 5.23181C0.239944 5.28416 0.231219 5.33825 0.235582 5.37664C0.241689 5.41591 0.249542 5.42725 0.27659 5.4447C0.303638 5.46477 0.342029 5.49356 0.371694 5.51886C0.396997 5.54329 0.421427 5.56685 0.44673 5.59128C0.493846 5.63753 0.541834 5.68464 0.590695 5.73263C0.782648 5.91848 0.99816 6.09298 1.24595 6.24567C1.36549 6.32769 1.49898 6.394 1.63161 6.46729C1.7651 6.53796 1.90906 6.59729 2.05041 6.66448C2.63063 6.9114 3.28938 7.08939 3.99263 7.22376C4.08075 7.24121 4.16888 7.25779 4.25787 7.27524C4.34687 7.29269 4.43761 7.30228 4.52835 7.31624C4.70984 7.34242 4.89394 7.3686 5.07978 7.39564C5.26737 7.41397 5.45584 7.43316 5.64692 7.45148C5.74202 7.46108 5.838 7.47068 5.93485 7.48028C6.0317 7.48726 6.12855 7.49162 6.22539 7.49773C6.41997 7.50907 6.61628 7.52041 6.81434 7.53176C6.86233 7.5335 6.9173 7.53961 6.95918 7.53874H7.10925C7.20959 7.53612 7.3108 7.53437 7.41201 7.53263C7.81686 7.52303 8.22869 7.5082 8.644 7.48638C10.273 7.40088 11.8234 7.23859 13.2099 6.962C13.9026 6.82327 14.5544 6.65488 15.1407 6.43762C15.728 6.22473 16.2497 5.95338 16.6423 5.61222L16.6231 5.63404C16.6345 5.61659 16.6528 5.58343 16.6659 5.55464C16.6799 5.52497 16.6921 5.49443 16.7025 5.46302C16.7235 5.40108 16.7392 5.33738 16.7488 5.27282C16.7662 5.14456 16.7628 5.0163 16.7401 4.89502L16.816 4.98052C16.7741 4.96395 16.761 4.9526 16.7374 4.9369C16.7165 4.92206 16.6991 4.90723 16.6807 4.89153C16.6476 4.85924 16.617 4.82609 16.5917 4.79119C16.5403 4.72226 16.5001 4.64984 16.4687 4.57829C16.405 4.43433 16.3701 4.29124 16.3448 4.15512L16.3431 4.14727V4.14029C16.3282 3.84713 16.2759 3.5749 16.1939 3.36201C16.1136 3.1465 15.9906 2.99032 15.8562 2.92052C15.7218 2.84897 15.5927 2.8577 15.5107 2.86555C15.4269 2.87515 15.3824 2.88474 15.3789 2.87515L15.3781 2.87689Z"
              fill="black"
            />
            <path
              d="M6.92598 7.71741C6.92598 7.7113 6.98269 7.70519 7.09263 7.69821C7.20344 7.6921 7.36747 7.68338 7.58124 7.67204C8.01051 7.64935 8.64396 7.61619 9.45802 7.54814C10.2712 7.47747 11.2667 7.37713 12.4089 7.17994C12.9795 7.08047 13.5859 6.95308 14.2167 6.77596C14.5308 6.68522 14.8528 6.58575 15.1721 6.45837C15.4915 6.33273 15.8125 6.18702 16.1179 6.00204L16.3395 5.86768L16.3081 6.12507C15.6756 11.2685 14.81 18.1544 13.8258 25.8517L13.8188 25.9085L13.7805 25.9495C13.298 26.466 12.6802 26.8133 12.0441 27.0785C11.4037 27.3403 10.7336 27.5226 10.0522 27.657C9.74769 27.7163 9.44318 27.766 9.1378 27.8053C8.98511 27.8254 8.83242 27.842 8.67886 27.8568C8.60208 27.8638 8.5253 27.8707 8.44764 27.8751C8.42234 27.8777 8.40227 27.876 8.38395 27.8751L8.32636 27.8734L8.21119 27.8707C8.05763 27.8673 7.90494 27.8629 7.75138 27.8594C7.6746 27.8568 7.59869 27.8577 7.52278 27.8515L7.29505 27.8332C7.14323 27.821 6.99229 27.8097 6.84134 27.7975C6.6904 27.7809 6.54033 27.7564 6.39025 27.7364C5.79258 27.6439 5.19578 27.5139 4.64086 27.2469C4.50562 27.1727 4.36428 27.1125 4.23863 27.0183L4.14178 26.9529C4.1095 26.931 4.07722 26.9101 4.04843 26.8822L3.87043 26.7269L3.71164 26.5471C3.66539 26.4808 3.6174 26.4154 3.57727 26.3438C3.53975 26.2706 3.50136 26.1981 3.47606 26.1161C3.46035 26.0777 3.45075 26.035 3.44203 25.9922C3.43679 25.9713 3.43243 25.9495 3.42981 25.9259C3.4272 25.9032 3.42371 25.8823 3.42371 25.8474L3.42545 25.8744C2.29816 17.8255 1.34014 10.8663 0.71193 6.17393L0.6875 5.98808L0.859385 6.06137C0.906501 6.08144 0.953617 6.10151 0.99986 6.12158L1.01208 6.12681L1.02167 6.13379C1.40558 6.41998 1.81741 6.62764 2.21702 6.79341C2.6175 6.95832 3.00926 7.07698 3.37833 7.17557C4.11735 7.36578 4.76563 7.46612 5.2935 7.53592C5.42525 7.5525 5.55002 7.56821 5.66694 7.58304C5.78386 7.59525 5.89379 7.6066 5.99501 7.61619C6.09622 7.62666 6.18958 7.63626 6.27508 7.64586C6.36059 7.65284 6.43824 7.65982 6.50717 7.66593C6.78376 7.69036 6.92772 7.70781 6.92772 7.71741C6.92772 7.727 6.78289 7.72875 6.50455 7.72351C6.43475 7.72177 6.3571 7.72002 6.27072 7.71741C6.18434 7.71304 6.09011 7.70781 5.98803 7.7017C5.88594 7.69559 5.77513 7.68861 5.65734 7.68163C5.53955 7.67116 5.41391 7.65982 5.28042 7.64761C4.74818 7.59438 4.09205 7.51149 3.33907 7.3335C2.96302 7.24189 2.56253 7.12846 2.14809 6.96704C1.73539 6.80476 1.30524 6.59797 0.896903 6.30219L0.918716 6.3144C0.871601 6.29521 0.823612 6.27514 0.775624 6.25507L0.922206 6.14339C1.61935 10.8262 2.62797 17.7784 3.77533 25.8264L3.77707 25.8535L3.78056 25.8823C3.78144 25.8945 3.78405 25.9076 3.78842 25.9224C3.79452 25.9503 3.80063 25.9783 3.81197 26.0062C3.82855 26.0629 3.85909 26.1179 3.88701 26.1728C3.91755 26.2269 3.95681 26.2784 3.99171 26.3308L4.12084 26.4765L4.27092 26.6073C4.29447 26.6309 4.32327 26.6492 4.35119 26.6675L4.43582 26.7243C4.54314 26.8063 4.67402 26.8604 4.79443 26.9276C5.29787 27.1692 5.86849 27.2958 6.44348 27.3839C6.58832 27.4031 6.73228 27.4266 6.87886 27.4423C7.02544 27.4537 7.1729 27.465 7.32035 27.4764L7.54197 27.4938C7.61614 27.4991 7.68943 27.4982 7.76359 27.5008C7.91192 27.5043 8.05937 27.5078 8.2077 27.5113L8.31938 27.5139L8.37523 27.5156C8.39442 27.5156 8.41274 27.5174 8.42496 27.5156L8.6457 27.4973C8.79403 27.4833 8.94323 27.4668 9.09156 27.4476C9.38909 27.4092 9.68661 27.3603 9.98327 27.3027C10.6464 27.1719 11.2964 26.9947 11.9072 26.7452C12.5136 26.4939 13.0894 26.1641 13.517 25.706L13.4716 25.8038C14.4662 18.1082 15.3702 11.2267 16.0595 6.09104L16.2488 6.21494C15.9242 6.40689 15.5892 6.55347 15.2585 6.67911C14.9278 6.80563 14.5989 6.90335 14.2778 6.99147C13.6347 7.16249 13.0196 7.28202 12.4429 7.37364C11.2886 7.55337 10.2869 7.63452 9.46849 7.68425C8.65007 7.73137 8.014 7.74271 7.58385 7.74184C7.36834 7.74184 7.20431 7.73835 7.0935 7.73311C6.98356 7.72788 6.92685 7.72177 6.92685 7.71566L6.92598 7.71741Z"
              fill="black"
            />
          </svg>
          놔뒁
        </h2>
      </div>
      <div className="lower">
        <div className="cup-type">
          <div className="circle reusable" />
          <p>다회용컵</p>
        </div>
        <div className="cup-type">
          <div className="circle disposable" />
          <p>일회용컵</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .upper {
    border-bottom: 1px solid #858899;

    h2 {
      padding: 34px 0 24px 0;
      margin-left: 20px;
      font-weight: 700;
      font-size: 24px;

      svg {
        position: relative;
        top: 8px;
        margin: 0 10px;
        padding-bottom: 4px;
        border-bottom: 1px solid #000;
      }
    }
  }
  .lower {
    display: flex;
    align-items: center;
    height: 48px;

    .cup-type {
      margin-left: 20px;
      display: flex;
      gap: 4px;

      .circle {
        width: 14px;
        height: 14px;
        border-radius: 50%;

        &.reusable {
          background-color: #36bf9f;
        }
        &.disposable {
          background-color: #08785e;
        }
      }
    }
  }
`;

export default MapHeader;
