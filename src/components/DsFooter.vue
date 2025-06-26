<template>
    <footer class="footer-wrapper">
        <div class="container">
            <div class="footer-wrapp">
                <div class="footer-top">
                    <RouterLink to="/" class="foo-top-logo">
                        <a href="index.html"><img src="@/assets/img/logo-footer.svg" alt="img" class="foot-log-img"></a>
                        <a href="index.html"><img src="@/assets/img/logo-name.svg" alt="DiveSea" class="foot-log-name"></a>
                    </RouterLink>
                    <div class="foo-top-menu">
                        <ul>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Term & Conditions</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bot">
                    <p class="rights">© 2023 DiveSea All Rights Reserved.</p>
                    <div class="icons">         
                        <svg class="icon-f" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7721 0C12.1916 0.0506994 13.6618 0.0506994 15.0812 0.101392C16.3486 0.152085 17.5146 0.354867 18.6299 1.0139C20.0494 1.87572 20.9112 3.14309 21.2154 4.76533C21.3674 5.72853 21.4181 6.74243 21.4688 7.70564C21.5195 9.83483 21.4688 11.964 21.4688 14.0932C21.4688 15.2085 21.4181 16.3238 21.0633 17.3884C20.3535 19.4669 18.8834 20.7342 16.7542 21.1398C15.791 21.3426 14.7771 21.3426 13.8139 21.3933C11.6846 21.444 9.60615 21.3933 7.47694 21.3933C6.36165 21.3933 5.24635 21.3426 4.18176 20.9877C2.10325 20.278 0.835867 18.8078 0.430303 16.6786C0.227525 15.7154 0.227525 14.7015 0.176829 13.7383C0.126131 11.6091 0.176829 9.47996 0.176829 7.35077C0.176829 6.23549 0.227525 5.1202 0.582391 4.05559C1.29213 1.9771 2.76229 0.709734 4.89148 0.304173C5.8547 0.101399 6.8686 0.101399 7.83181 0.0506994C8.79502 0 9.75823 0 10.7721 0ZM19.5426 10.4939C19.4919 10.4939 19.5426 10.4939 19.5426 10.4939C19.4919 9.6321 19.4919 8.82097 19.4919 7.95916C19.4919 7.14805 19.4412 6.33692 19.3398 5.52581C19.137 3.70078 18.0724 2.4841 16.2981 2.12924C15.3855 1.92646 14.3716 1.92646 13.4591 1.92646C11.6341 1.87577 9.85976 1.87577 8.03473 1.92646C7.12222 1.92646 6.2097 1.97715 5.34788 2.12924C3.82702 2.38271 2.76243 3.24453 2.30617 4.76538C2.15408 5.27233 2.10339 5.77928 2.05269 6.28623C2.002 8.21264 2.002 10.139 2.002 12.0655C2.002 13.2821 2.05269 14.5495 2.15408 15.7662C2.30617 17.5912 3.42146 18.8586 5.2465 19.1627C6.159 19.3148 7.12222 19.3655 8.08543 19.3655C9.85976 19.4162 11.6341 19.3655 13.4591 19.3655C14.2703 19.3655 15.0814 19.3148 15.8925 19.2134C16.6529 19.1627 17.3627 18.9093 17.971 18.4023C18.9849 17.5912 19.3398 16.5266 19.3905 15.3099C19.4919 13.7891 19.4919 12.1668 19.5426 10.4939Z" fill="#535353"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2471 10.6962C16.2471 13.7379 13.8137 16.1712 10.772 16.1712C7.73025 16.1712 5.29688 13.7379 5.29688 10.6455C5.29688 7.65453 7.78094 5.22119 10.8227 5.22119C13.8137 5.22119 16.2471 7.65453 16.2471 10.6962ZM10.7719 14.2448C12.6983 14.2448 14.3205 12.6226 14.3205 10.6962C14.3205 8.76976 12.6983 7.14752 10.7719 7.14752C8.79474 7.14752 7.22318 8.76976 7.22318 10.6962C7.17248 12.6226 8.79474 14.2448 10.7719 14.2448Z" fill="#535353"/>
                            <path d="M17.7184 4.96758C17.7184 5.67731 17.1607 6.28566 16.451 6.28566C15.7413 6.28566 15.1329 5.67731 15.1836 4.96758C15.1836 4.25785 15.7413 3.7002 16.451 3.7002C17.1607 3.7002 17.7184 4.25784 17.7184 4.96758Z" fill="#535353"/>
                        </svg>
                        <svg class="icon-f" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.633 12.4811V20.3602H17.032V12.9987C17.032 11.1583 16.3994 9.89304 14.7315 9.89304C13.4663 9.89304 12.7186 10.7557 12.3735 11.5609C12.2585 11.8484 12.201 12.251 12.201 12.6536V20.3602H7.60001C7.60001 20.3602 7.65752 7.88013 7.60001 6.61487H12.201V8.57027C12.201 8.57027 12.201 8.62777 12.1435 8.62777H12.201V8.57027C12.8336 7.65008 13.8689 6.26979 16.3419 6.26979C19.3325 6.26979 21.633 8.28271 21.633 12.4811ZM2.88347 0.000976562C1.33063 0.000976562 0.29541 1.03619 0.29541 2.35897C0.29541 3.68174 1.27312 4.71697 2.82595 4.71697H2.88347C4.49381 4.71697 5.47152 3.68175 5.47152 2.35897C5.41401 1.03619 4.4363 0.000976562 2.88347 0.000976562ZM0.526056 20.3602H5.06954V6.61489H0.526056V20.3602Z" fill="#535353"/>
                        </svg>
                        <svg class="icon-f" width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95256 10.6695H6.97166V21.338H2.52644V12.415V10.6695H0.43457V6.90414H2.52644V4.4462C2.52644 2.72041 3.36319 0.000976562 6.97166 0.000976562H10.2663V3.66174H7.913C7.54692 3.66174 6.97166 3.87094 6.97166 4.70768V6.90414H10.3186L9.95256 10.6695Z" fill="#535353"/>
                        </svg>
                        <svg class="icon-f" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6159 2.82596C20.8126 3.1774 20.0093 3.42842 19.1056 3.52883C20.0093 2.97658 20.7122 2.1231 21.0134 1.11901C20.1599 1.62106 19.2061 1.97249 18.2522 2.1733C17.4489 1.31982 16.2942 0.767578 15.039 0.767578C12.6292 0.767578 10.6712 2.72555 10.6712 5.13537C10.6712 5.48681 10.7214 5.83823 10.7716 6.13947C7.10668 5.93865 3.89356 4.23169 1.73475 1.57085C1.33311 2.22351 1.13229 2.97658 1.13229 3.77985C1.13229 5.28599 1.88536 6.64151 3.09028 7.44478C2.38741 7.44478 1.68455 7.24397 1.08208 6.89253V6.94273C1.08208 9.05133 2.58823 10.8587 4.59643 11.2603C4.24499 11.3607 3.84336 11.4109 3.44171 11.4109C3.14049 11.4109 2.88946 11.3607 2.63844 11.3105C3.19069 13.0677 4.79725 14.3228 6.75524 14.373C5.24909 15.5277 3.39151 16.2306 1.33311 16.2306C0.981677 16.2306 0.630245 16.2306 0.278809 16.1804C2.2368 17.4355 4.49602 18.1383 7.00626 18.1383C15.0893 18.1383 19.4571 11.4611 19.4571 5.68762C19.4571 5.48681 19.4571 5.28599 19.4571 5.13537C20.3106 4.48272 21.0636 3.67944 21.6159 2.82596Z" fill="#535353"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
.footer-wrapper{
    background-color: #141416;
    padding-top: 92px;
    padding-bottom: 81px;
    position: relative;
    z-index: 11;
}
.footer-wrapper .footer-wrapp .footer-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-bottom: 25px;
}
.footer-wrapper .footer-wrapp .footer-top img{
    cursor: pointer;
}
.footer-wrapper .footer-wrapp .footer-top::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(129, 129, 129, 0.4);
}
.footer-wrapper .footer-wrapp .footer-top .foo-top-logo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9.88px;
}
.footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul{
    display: flex;
    gap: 70px;
}
.footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul li{
    list-style: none;
}
.footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul li a{
    text-decoration: none;
    color: #B9B9B9;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 17.83px;
    line-height: 26.74px;
}
.footer-wrapper .footer-wrapp .footer-bot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 57px;
}
.footer-wrapper .footer-wrapp .footer-bot p{
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    color: #999999;
}
.footer-wrapper .footer-wrapp .footer-bot .icons{
    display: flex;
    gap: 53px;
}
.footer-wrapper .footer-wrapp .footer-bot .icon-f{
    cursor: pointer;
}
.footer-wrapper .footer-wrapp .footer-bot .icon-f path{
    transition: fill .3s ease;
}
.footer-wrapper .footer-wrapp .footer-bot .icon-f:hover path {
    fill: #ffffff;
}
@media (max-width: 1024px){
    .footer-wrapper {
        padding-top: 75px;
        padding-bottom: 58px;
    }
    .footer-wrapper .footer-wrapp .footer-top{
    padding-bottom: 15px;
    }
    .footer-wrapper .footer-wrapp .footer-top .foo-top-logo{
    gap: 7px;
    }
    .footer-wrapper .footer-wrapp .foot-log-img{
        width: 46.2px;
    }
    .footer-wrapper .footer-wrapp .foot-log-name{
        width: 88px;
    }
    .footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul li a{
    font-size: 12.68px;
    line-height: 19.02px;
    }
    .footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul{
    gap: 48px;
    }
    .footer-wrapper .footer-wrapp .footer-bot{
    margin-top: 40px;
    }
    .footer-wrapper .footer-wrapp .footer-bot p{
    font-size: 12px;
    line-height: 17.7px;
    }
    .footer-wrapper .footer-wrapp .footer-bot .icons {
        gap: 38px;
    }
    .icons .icon-f:nth-child(1) {
        width: 15px;
        height: 15px;
    }
    .icons .icon-f:nth-child(2) {
        width: 15px;
        height: 15px;
    }
    .icons .icon-f:nth-child(3) {
        width: 7px;
        height: 15px;
    }
    .icons .icon-f:nth-child(4) {
        width: 15px;
        height: 12px;
    }
    
}
@media (max-width: 768px) {
    .footer-wrapper {
        padding-top: 120px;
        padding-bottom: 72px;
    }

    .footer-wrapper .footer-wrapp .footer-top {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 60px;
    }

    .footer-wrapper .footer-wrapp .footer-top .foo-top-logo {
        gap: 13px;
        margin-bottom: 80px;
    }

    .footer-wrapper .footer-wrapp .foot-log-img {
        width: 86px;
    }

    .footer-wrapper .footer-wrapp .foot-log-name {
        width: 166px;
    }

    .footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul {
        flex-direction: column;
        gap: 60px;
    }

    .footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul li a {
        font-size: 28px;
        line-height: 36px;
        text-transform: uppercase;
    }

    .footer-wrapper .footer-wrapp .footer-bot {
        flex-direction: column;
        margin-top: 52px;
        position: relative;
    }

    .footer-wrapper .footer-wrapp .footer-bot p {
        font-size: 23px;
        line-height: 35px;
        margin-bottom: 50px;
    }

    .footer-wrapper .footer-wrapp .footer-bot .icons {
        gap: 40px;
        align-items: center;
    }

    .footer-wrapper .footer-wrapp .footer-top::before {
        background: rgba(129, 129, 129, 1);
    }
}
@media (max-width: 500px){
.footer-wrapper .footer-wrapp .footer-bot p {
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 50px;
    }
}
@media (max-width: 376px){
        .footer-wrapper {
            padding-top: 60px;
            padding-bottom: 36px;
        }
        .footer-wrapper .footer-wrapp .footer-top {
            flex-direction: column;
            align-items: flex-start;
            padding-bottom: 30px;
        }
        .footer-wrapper .footer-wrapp .footer-top .foo-top-logo {
            gap: 6.5px;
            margin-bottom: 40px;
        }
        .footer-wrapper .footer-wrapp .foot-log-img {
            width: 43px;
        }
        .footer-wrapper .footer-wrapp .foot-log-name {
            width: 83px;
        }
        .footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul {
            flex-direction: column;
            gap: 30px;
        }
        .footer-wrapper .footer-wrapp .footer-top .foo-top-menu ul li a {
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
        }
        .footer-wrapper .footer-wrapp .footer-bot {
            flex-direction: column;
            margin-top: 26px;
            position: relative;
        }
        .footer-wrapper .footer-wrapp .footer-bot p {
            font-size: 13.54px;
            line-height: 19.91px;
        }
        .footer-wrapper .footer-wrapp .footer-bot .icons {
            position: absolute;
            top: -316px;
            right: 0; 
            gap: 20px;
            align-items: center;
        }
        .footer-wrapper .footer-wrapp .footer-top::before{
        background: rgba(129, 129, 129,1);
    }
}
</style>