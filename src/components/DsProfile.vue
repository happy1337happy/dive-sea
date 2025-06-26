<script setup>
import { NFT_CARDS_LIST } from '@/store/variables';
import MyButton from '@/components/MyButton.vue';
import MyCard from '@/components/MyCard.vue';
import { useRouter } from 'vue-router';
import DsTabs from '@/components/DsTabs.vue';
import {ref} from 'vue';

const isFollowing = ref(false);
const toggleFollow = () => {
    isFollowing.value = !isFollowing.value;
};

const tabs = [0,1];

const router = useRouter();
const onClickCard = (card) => {
  console.log(`Card ${card.id} clicked`);
  router.push(`/product-detail/${card.id}`);
};
</script>

<template>
        <section class="profile-wrapper">
        <div class="container">
            <div class="profile-wrapp">
                <img class="profile-banner" src="@/assets/img/nft-img-5.jpeg" alt="img">
                <div class="prof-container">
                    <div class="profile-cont-left">
                        <div class="prof-img-wrapp">
                            <img class="prof-avatar" src="@/assets/img/avatarka.jpeg" alt="img">
                            <img  class="prof-verify" src="@/assets/img/verify-1.svg" alt="img">
                        </div>
                        <div class="artist-name">
                            <div class="artist-name-left">Harry K.<span>@Harryknft</span></div>
                            <div class="btn-box">
                                <MyButton :text="isFollowing ? 'Unfollow' : 'Follow +'" @click="toggleFollow" size="sigma" fontSize="rem" fontWeight="500"></MyButton>
                            </div>
                        </div>
                        <div class="artist-nombers">
                            <div>86 ETH<span class="special-span">Total Sales</span></div>
                            <div>12K<span>Followers</span></div>
                            <div>587<span>Followings</span></div>
                        </div>
                        <div class="artist-bio">
                            <h1>Bio</h1>
                            <p>the artist who transforms the intangible into priceless assets with their incredible NFT creations. From stunning visuals to mind-bending concepts,</p>
                        </div>
                        <div class="artist-links">
                            <a href="#">                        
                                <svg class="icon-f" width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7721 0C12.1916 0.0506994 13.6618 0.0506994 15.0812 0.101392C16.3486 0.152085 17.5146 0.354867 18.6299 1.0139C20.0494 1.87572 20.9112 3.14309 21.2154 4.76533C21.3674 5.72853 21.4181 6.74243 21.4688 7.70564C21.5195 9.83483 21.4688 11.964 21.4688 14.0932C21.4688 15.2085 21.4181 16.3238 21.0633 17.3884C20.3535 19.4669 18.8834 20.7342 16.7542 21.1398C15.791 21.3426 14.7771 21.3426 13.8139 21.3933C11.6846 21.444 9.60615 21.3933 7.47694 21.3933C6.36165 21.3933 5.24635 21.3426 4.18176 20.9877C2.10325 20.278 0.835867 18.8078 0.430303 16.6786C0.227525 15.7154 0.227525 14.7015 0.176829 13.7383C0.126131 11.6091 0.176829 9.47996 0.176829 7.35077C0.176829 6.23549 0.227525 5.1202 0.582391 4.05559C1.29213 1.9771 2.76229 0.709734 4.89148 0.304173C5.8547 0.101399 6.8686 0.101399 7.83181 0.0506994C8.79502 0 9.75823 0 10.7721 0ZM19.5426 10.4939C19.4919 10.4939 19.5426 10.4939 19.5426 10.4939C19.4919 9.6321 19.4919 8.82097 19.4919 7.95916C19.4919 7.14805 19.4412 6.33692 19.3398 5.52581C19.137 3.70078 18.0724 2.4841 16.2981 2.12924C15.3855 1.92646 14.3716 1.92646 13.4591 1.92646C11.6341 1.87577 9.85976 1.87577 8.03473 1.92646C7.12222 1.92646 6.2097 1.97715 5.34788 2.12924C3.82702 2.38271 2.76243 3.24453 2.30617 4.76538C2.15408 5.27233 2.10339 5.77928 2.05269 6.28623C2.002 8.21264 2.002 10.139 2.002 12.0655C2.002 13.2821 2.05269 14.5495 2.15408 15.7662C2.30617 17.5912 3.42146 18.8586 5.2465 19.1627C6.159 19.3148 7.12222 19.3655 8.08543 19.3655C9.85976 19.4162 11.6341 19.3655 13.4591 19.3655C14.2703 19.3655 15.0814 19.3148 15.8925 19.2134C16.6529 19.1627 17.3627 18.9093 17.971 18.4023C18.9849 17.5912 19.3398 16.5266 19.3905 15.3099C19.4919 13.7891 19.4919 12.1668 19.5426 10.4939Z" fill="#000000"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2471 10.6962C16.2471 13.7379 13.8137 16.1712 10.772 16.1712C7.73025 16.1712 5.29688 13.7379 5.29688 10.6455C5.29688 7.65453 7.78094 5.22119 10.8227 5.22119C13.8137 5.22119 16.2471 7.65453 16.2471 10.6962ZM10.7719 14.2448C12.6983 14.2448 14.3205 12.6226 14.3205 10.6962C14.3205 8.76976 12.6983 7.14752 10.7719 7.14752C8.79474 7.14752 7.22318 8.76976 7.22318 10.6962C7.17248 12.6226 8.79474 14.2448 10.7719 14.2448Z" fill="#000000"/>
                                    <path d="M17.7184 4.96758C17.7184 5.67731 17.1607 6.28566 16.451 6.28566C15.7413 6.28566 15.1329 5.67731 15.1836 4.96758C15.1836 4.25785 15.7413 3.7002 16.451 3.7002C17.1607 3.7002 17.7184 4.25784 17.7184 4.96758Z" fill="#000000"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg class="icon-f" width="16" height="15.3" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.633 12.4811V20.3602H17.032V12.9987C17.032 11.1583 16.3994 9.89304 14.7315 9.89304C13.4663 9.89304 12.7186 10.7557 12.3735 11.5609C12.2585 11.8484 12.201 12.251 12.201 12.6536V20.3602H7.60001C7.60001 20.3602 7.65752 7.88013 7.60001 6.61487H12.201V8.57027C12.201 8.57027 12.201 8.62777 12.1435 8.62777H12.201V8.57027C12.8336 7.65008 13.8689 6.26979 16.3419 6.26979C19.3325 6.26979 21.633 8.28271 21.633 12.4811ZM2.88347 0.000976562C1.33063 0.000976562 0.29541 1.03619 0.29541 2.35897C0.29541 3.68174 1.27312 4.71697 2.82595 4.71697H2.88347C4.49381 4.71697 5.47152 3.68175 5.47152 2.35897C5.41401 1.03619 4.4363 0.000976562 2.88347 0.000976562ZM0.526056 20.3602H5.06954V6.61489H0.526056V20.3602Z" fill="#000000"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg class="icon-f" width="7.5" height="16" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95256 10.6695H6.97166V21.338H2.52644V12.415V10.6695H0.43457V6.90414H2.52644V4.4462C2.52644 2.72041 3.36319 0.000976562 6.97166 0.000976562H10.2663V3.66174H7.913C7.54692 3.66174 6.97166 3.87094 6.97166 4.70768V6.90414H10.3186L9.95256 10.6695Z" fill="#000000"/>
                                </svg>
                            </a>
                            <a href="#">
                                <svg class="icon-f" width="16" height="13" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6159 2.82596C20.8126 3.1774 20.0093 3.42842 19.1056 3.52883C20.0093 2.97658 20.7122 2.1231 21.0134 1.11901C20.1599 1.62106 19.2061 1.97249 18.2522 2.1733C17.4489 1.31982 16.2942 0.767578 15.039 0.767578C12.6292 0.767578 10.6712 2.72555 10.6712 5.13537C10.6712 5.48681 10.7214 5.83823 10.7716 6.13947C7.10668 5.93865 3.89356 4.23169 1.73475 1.57085C1.33311 2.22351 1.13229 2.97658 1.13229 3.77985C1.13229 5.28599 1.88536 6.64151 3.09028 7.44478C2.38741 7.44478 1.68455 7.24397 1.08208 6.89253V6.94273C1.08208 9.05133 2.58823 10.8587 4.59643 11.2603C4.24499 11.3607 3.84336 11.4109 3.44171 11.4109C3.14049 11.4109 2.88946 11.3607 2.63844 11.3105C3.19069 13.0677 4.79725 14.3228 6.75524 14.373C5.24909 15.5277 3.39151 16.2306 1.33311 16.2306C0.981677 16.2306 0.630245 16.2306 0.278809 16.1804C2.2368 17.4355 4.49602 18.1383 7.00626 18.1383C15.0893 18.1383 19.4571 11.4611 19.4571 5.68762C19.4571 5.48681 19.4571 5.28599 19.4571 5.13537C20.3106 4.48272 21.0636 3.67944 21.6159 2.82596Z" fill="#000000"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="profile-cont-right">
                        <DsTabs
                            :tabs="tabs" 
                        >
                            <template #tab-head-0>
                                <div class="cont-collection-top">
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3129 9.45733C19.3129 10.265 20.0063 10.9222 20.8585 10.9222C21.2882 10.9222 21.637 11.2528 21.637 11.6601V14.3173C21.637 16.5643 19.7084 18.3922 17.3376 18.3922H5.17739C2.8066 18.3922 0.876953 16.5643 0.876953 14.3173V11.6601C0.876953 11.2528 1.22572 10.9222 1.65545 10.9222C2.50869 10.9222 3.20208 10.265 3.20208 9.45733C3.20208 8.67029 2.53672 8.07805 1.65545 8.07805C1.44889 8.07805 1.25167 8.00033 1.10531 7.86161C0.958955 7.7229 0.876953 7.53499 0.876953 7.3402L0.879029 4.59638C0.879029 2.34939 2.80764 0.520508 5.17843 0.520508H17.3355C19.7063 0.520508 21.636 2.34939 21.636 4.59638L21.637 7.25461C21.637 7.4494 21.555 7.63829 21.4097 7.77602C21.2633 7.91474 21.0661 7.99246 20.8585 7.99246C20.0063 7.99246 19.3129 8.64963 19.3129 9.45733ZM13.5942 10.0994L14.818 8.97003C15.0308 8.77524 15.1045 8.48797 15.0122 8.22235C14.9208 7.95672 14.6821 7.76783 14.3935 7.72946L12.7026 7.49532L11.9459 6.04323C11.8161 5.79335 11.5525 5.63791 11.2587 5.63692H11.2567C10.9639 5.63692 10.7003 5.79236 10.5685 6.04225L9.81177 7.49532L8.12397 7.72848C7.8323 7.76783 7.59356 7.95672 7.50117 8.22235C7.40983 8.48797 7.48353 8.77524 7.69528 8.97003L8.91908 10.0994L8.63052 11.6961C8.5807 11.9716 8.69799 12.2451 8.93673 12.4094C9.07167 12.5009 9.22841 12.5481 9.38722 12.5481C9.50867 12.5481 9.63115 12.5196 9.74326 12.4635L11.2567 11.7099L12.767 12.4615C13.0285 12.5943 13.3389 12.5737 13.5766 12.4084C13.8164 12.2451 13.9337 11.9716 13.8838 11.6961L13.5942 10.0994Z" />
                                    </svg>
                                    <h2>Collection</h2>
                                </div>
                            </template>
                            <template #tab-panel-0>
                                <div class="cont-collection-bot">
                                    <MyCard
                                        v-for="(card,index) in NFT_CARDS_LIST.slice(0,6)"
                                        :key="index"
                                        :image="card.image"
                                        :time="card.time"
                                        :title="card.title"
                                        :price="card.price"
                                        size="small"
                                        @click="onClickCard(card)"
                                    >
                                        <MyButton text="PLACE BID" size="sigma" fontSize="rem2" radius="sm"></MyButton>
                                    </MyCard>
                                </div>
                            </template>

                            <template #tab-head-1>
                                <div class="cont-activity-top">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.712891 9.45677C0.712891 4.47436 4.74756 0.430664 9.73899 0.430664C14.7214 0.430664 18.7651 4.47436 18.7651 9.45677C18.7651 14.4482 14.7214 18.4829 9.73899 18.4829C4.74756 18.4829 0.712891 14.4482 0.712891 9.45677ZM11.7511 11.1083L13.2133 6.48699C13.3126 6.17107 13.0237 5.87321 12.7078 5.9725L8.08647 7.41667C7.89692 7.47986 7.74348 7.62427 7.68932 7.81382L6.24515 12.4442C6.14586 12.7511 6.44372 13.049 6.75061 12.9497L11.3539 11.5055C11.5435 11.4513 11.6969 11.2979 11.7511 11.1083Z"/>
                                    </svg>
                                    <h2>Activity</h2>
                                </div>
                            </template>
                            <template #tab-panel-1>
                                <div class="cont-activity-bot">
                                    <div class="activity-bot-dudes">
                                        <div class="sales">
                                            <img src="@/assets/img/telezhka.svg" alt="img" class="sales-1">
                                            Sales
                                            <img src="@/assets/img/strelka-niz.svg" alt="img" class="sales-2">
                                        </div>
                                        <div class="chains">
                                            <img src="@/assets/img/chain.svg" alt="img" class="chains-1">
                                            All Chains
                                            <img src="@/assets/img/strelka-niz.svg" alt="img" class="chains-2">
                                        </div>
                                    </div>
                                    <div class="activity-bot-info">
                                        <div class="activity-bot-info-top">
                                            <div class="top-alpha">
                                                <img src="@/assets/img/nft-img-9.jpeg" alt="img" class="alpha-img">
                                                <div class="alpha-names">
                                                    <h2>NeuVey</h2>
                                                    <div class="combo">JenifferS<img class="combo-img" src="@/assets/img/galka-mini.svg" alt="img"></div>
                                                </div>
                                            </div>
                                            <div class="top-bravo">
                                                <div class="bravo-dude">
                                                    <div class="bravo-1">Sale</div>
                                                    <div class="bravo-2"><img class="bravo-2-img" src="@/assets/img/ethereum.svg" alt="img">16,4</div>
                                                    <div class="bravo-3">6 Minutes ago</div>
                                                </div>
                                                <div class="bravo-strelka"><img src="@/assets/img/strelka-niz.svg" alt="img"></div>
                                            </div>
                                        </div>
                                        <div class="activity-bot-info-bot">
                                        <div class="bot-charlie">
                                            <p>USD Price</p>
                                            <div class="charlie-nombers">$19K</div>
                                        </div>
                                        <div class="bot-charlie">
                                            <p>Quantity</p>
                                            <div class="charlie-nombers">14.9K</div>
                                        </div>
                                        <div class="bot-charlie">
                                            <p>floor price</p>
                                            <div class="charlie-nombers"><img src="@/assets/img/ethereum.svg" alt="img">16,4</div>
                                        </div>
                                        <div class="bot-charlie">
                                            <p class="chill">traded</p>
                                            <div class="charlie-nombers"><img src="@/assets/img/ethereum.svg" alt="img">26,4</div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="activity-bot-info">
                                        <div class="activity-bot-info-top">
                                            <div class="top-alpha">
                                                <img src="@/assets/img/nft-img-8.jpeg" alt="img" class="alpha-img">
                                                <div class="alpha-names">
                                                    <h2>NeuVey</h2>
                                                    <div class="combo">JenifferS<img class="combo-img" src="@/assets/img/galka-mini.svg" alt="img"></div>
                                                </div>
                                            </div>
                                            <div class="top-bravo">
                                                <div class="bravo-dude">
                                                    <div class="bravo-1">Sale</div>
                                                    <div class="bravo-2"><img class="bravo-2-img" src="@/assets/img/ethereum.svg" alt="img">16,4</div>
                                                    <div class="bravo-3">6 Minutes ago</div>
                                                </div>
                                                <div class="bravo-strelka"><img src="@/assets/img/strelka-niz.svg" alt="img"></div>
                                            </div>
                                        </div>
                                        <div class="activity-bot-info-bot">
                                        <div class="bot-charlie">
                                            <p>USD Price</p>
                                            <div class="charlie-nombers">$19K</div>
                                        </div>
                                        <div class="bot-charlie">
                                            <p>Quantity</p>
                                            <div class="charlie-nombers">14.9K</div>
                                        </div>
                                        <div class="bot-charlie">
                                            <p>floor price</p>
                                            <div class="charlie-nombers"><img src="@/assets/img/ethereum.svg" alt="img">16,4</div>
                                        </div>
                                        <div class="bot-charlie">
                                            <p class="chill">traded</p>
                                            <div class="charlie-nombers"><img src="@/assets/img/ethereum.svg" alt="img">26,4</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </DsTabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.profile-wrapper{
    margin-top: 100px;
    padding-bottom: 300px;
    .profile-wrapp{
        .profile-banner{
            display: block;
            object-fit: cover;
            width: 100%;
            height: 100%;
            max-height: 355px;
            border-radius: 22px;
            margin-bottom: 73px;
        }
        .prof-container{
            display: flex;
            justify-content: space-between;
            gap: 10.5%;
            .profile-cont-left{
                display: flex;
                flex-direction: column;
                position: relative;
                margin-left: 75px;
                margin-top: 55px;
                flex: 1.18;
                .prof-img-wrapp{
                    position: absolute;
                    top: -195px;
                    .prof-avatar{
                        display: block;
                        object-fit: cover;
                        width: 100%;
                        max-width: 165px;
                        height: 100%;
                        aspect-ratio: 1/1;
                        border-radius: 50%;
                        border: 5px solid #F9F9F9;
                    }
                    .prof-verify{
                        position: absolute;
                        right: 18px;
                        bottom: 7px;
                    }
                }
                .artist-name{
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 40px;
                    position: relative;
                    margin-bottom: 43px;
                    &::before{
                        content: '';
                        width: 100%;
                        height: 1.06px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background-color: #D0D0D0;
                    }
                    .artist-name-left{
                        font-family: "Outfit", sans-serif;
                        font-weight: 600;
                        font-size: 35px;
                        line-height: 130%;
                        color: #010101;
                        margin-bottom: 4px;
                        span{
                            font-weight: 400;
                            font-size: 18px;
                            line-height: 130%;
                            color: #93989A;
                            display: block;  
                        }
                    }
                    .btn-box{
                        width: 100%;
                        max-width: 121px;
                    }
                }
                .artist-nombers{
                    display: flex;
                    justify-content: space-between;
                    font-family: "Public Sans", sans-serif;
                    font-weight: 600;
                    font-size: 32.15px;
                    line-height: 40.19px;
                    color: #141416;
                    margin-bottom: 116px;
                    span{
                        display: block;
                        font-family: "Inter", sans-serif;
                        font-weight: 500;
                        font-size: 10.72px;
                        line-height: 16px;
                        color: #848586;
                        margin-top: 4.4px;
                    }
                    .special-span{
                        margin-left: 3px;
                    }

                }
                .artist-bio{
                    font-family: "Public Sans", sans-serif;
                    font-weight: 700;
                    font-size: 25px;
                    line-height: 40.19px;
                    color: #949494;
                    position: relative;
                    margin-bottom: 33px;
                    &::before{
                        content: '';
                        width: 100%;
                        height: 1.06px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background-color: #D0D0D0;
                    }
                    p{
                        font-family: "Poppins", sans-serif;
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 177%;
                        margin-top: 9px;
                        margin-bottom: 85px;
                        text-transform: capitalize;
                    }
                }
                .artist-links{
                    display: flex;
                    gap: 18%;
                }
            }
            .profile-cont-right{
                flex: 2.19;
                display: flex;
                flex-direction: column;
                .cont-activity-top,
                .cont-collection-top{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7.2px;
                    padding-bottom: 18.68px;
                    h2{
                        font-weight: 700;
                        font-size: 16.25px;
                        line-height: 24.91px;
                    }
                }
                .cont-collection-bot{
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: repeat(2, auto);
                    gap: 28px;
                }
                .cont-activity-bot{
                    .activity-bot-dudes{
                        display: flex;
                        gap: 18.2px;
                        margin-bottom: 58px;
                        font-weight: 400;
                        font-size: 16.28px;
                        line-height: 20.03px;
                        color: #000000;
                        .chains,
                        .sales{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12.5px;
                            flex: 1;
                            background-color: white;
                            height: 50px;
                            border-radius: 10.02px;
                            box-shadow: 19.38px 12.92px 66.19px 0px #61616140;
                        }
                    }
                    .activity-bot-info{
                        background-color: white;
                        border-radius: 12.13px;
                        box-shadow: 18.78px 12.52px 64.15px 0px #61616140;
                        padding: 15.3px 22.8px 19.5px 14.56px;
                        margin-bottom: 43px;
                        .activity-bot-info-top{
                            display: flex;
                            justify-content: space-between;
                            padding-bottom: 17px;
                            position: relative;
                            margin-bottom: 17.82px;
                            &::before{
                                position: absolute;
                                content: '';
                                bottom: 0;
                                left: 0;
                                background-color: #D2D2D2;
                                width: 98%;
                                height: 1px;
                                margin-left: 7.25px;
                            }
                            .top-alpha{
                                display: flex;
                                gap: 12.1px;
                                .alpha-img{
                                    display: block;
                                    object-fit: cover;
                                    border-radius: 11.63px;
                                    width: 100%;
                                    height: 100%;
                                    max-width: 64.3px;
                                    max-height: 67.9px;
                                    aspect-ratio: 1/1;
                                }
                                .alpha-names{
                                    margin-top: 7.28px;
                                    h2{
                                        font-weight: 600;
                                        font-size: 16.99px;
                                        line-height: 26.7px;
                                        color: #000000;
                                    }
                                    .combo{
                                        font-weight: 400;
                                        font-size: 12.08px;
                                        line-height: 100%;
                                        color: #000000;
                                        display: flex;
                                        gap: 5.6px;
                                        margin-top: 2px;
                                    }
                                }
                            }
                            .top-bravo{
                                display: flex;
                                gap: 18.5px;
                                .bravo-1{
                                    font-weight: 400;
                                    font-size: 12.08px;
                                    line-height: 100%;
                                    color: #14A760;
                                    margin-left: 49.4px;
                                    margin-bottom: 8.2px;
                                }
                                .bravo-2{
                                    font-weight: 500;
                                    font-size: 16.04px;
                                    line-height: 100%;
                                    color: #000000;
                                    margin-left: 24.2px;
                                    display: flex;
                                    align-items: center;
                                    gap: 10px;
                                }
                                .bravo-3{
                                    font-weight: 400;
                                    font-size: 12.08px;
                                    line-height: 100%;
                                    color: #D2D2D2;
                                    margin-top: 8.2px;
                                }
                                .bravo-strelka img{
                                    width: 9px;
                                }
                            }
                        }
                        .activity-bot-info-bot{
                            display: flex;
                            justify-content: space-between;
                            margin: 0 8.4px;
                            .bot-charlie{
                                font-weight: 400;
                                font-size: 11.37px;
                                line-height: 13.99px;
                                color: #828282;
                                .charlie-nombers{
                                    font-weight: 500;
                                    font-size: 15.74px;
                                    line-height: 22.74px;
                                    color: #000000;
                                    display: flex;
                                    justify-content: center;
                                    gap: 3.6px;
                                    margin-top: 1px;
                                }
                                .chill{
                                    margin-left: 6px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
@media (max-width:1024px){
    .profile-wrapper{
        margin-top: 71px;
        padding-bottom: 220px;
        .profile-wrapp{
            .profile-banner{
                max-height: 252.4px;
                border-radius: 15.65px;
                margin-bottom: 51px;
            }
            .prof-container{
                gap: 10.5%;
                .profile-cont-left{
                    margin-left: 53px;
                    margin-top: 39px;
                    .prof-img-wrapp{
                        top: -140px;
                        .prof-avatar{
                            max-width: 117px;
                            border: 3.5px solid #F9F9F9;
                        }
                        .prof-verify{
                            max-width: 21px;
                            right: 13px;
                            bottom: 4px;
                        }
                    }
                    .artist-name{
                        padding-bottom: 27px;
                        margin-bottom: 30px;
                        .artist-name-left{
                            font-family: "Outfit", sans-serif;
                            font-size: 24.89px;
                            margin-bottom: 2.8px;
                            span{
                                font-size: 12.8px; 
                            }
                        }
                        .btn-box{
                            width: 100%;
                            max-width: 86px;
                        }
                    }
                    .artist-nombers{
                        font-size: 22.87px;
                        line-height: 28.58px;
                        margin-bottom: 82px;
                        span{
                            font-size: 7.62px;
                            line-height: 11.43px;
                            margin-top: 3.3px;
                        }
                        .special-span{
                            margin-left: 2px;
                        }

                    }
                    .artist-bio{
                        font-size: 17.78px;
                        line-height: 28.58px;
                        margin-bottom: 23px;
                        p{
                            font-size: 10px;
                            margin-top: 5.1px;
                            margin-bottom: 59px;
                        }
                    }
                }
                .profile-cont-right{
                    flex: 2.19;
                    .cont-activity-top,
                    .cont-collection-top{
                        gap: 5.2px;
                        padding-bottom: 10.6px;
                        h2{
                            font-size: 11.55px;
                            line-height: 17.72px;
                        }
                        svg{
                            width: 13px;
                        }
                    }
                    .cont-collection-bot{
                        gap: 20px;
                    }
                    .cont-activity-bot{
                        .activity-bot-dudes{
                            gap: 12px;
                            margin-bottom: 41px;
                            font-size: 11.58px;
                            line-height: 14.25px;
                            .chains,
                            .sales{
                                gap: 8.9px;
                                height: 35px;
                                border-radius: 7.12px;
                                .chains-1{
                                    width: 13.6px;
                                }
                                .chains-2{
                                    width: 9px;
                                }
                                .sales-1{
                                    width: 15.7px;
                                }
                                .sales-2{
                                    width: 9px;
                                }
                            }
                        }
                        .activity-bot-info{
                            border-radius: 8.63px;
                            padding: 10.9px 16.3px 13.9px 10.3px;
                            margin-bottom: 30px;
                            .activity-bot-info-top{
                                padding-bottom: 12.2px;
                                margin-bottom: 12.6px;
                                &::before{
                                    margin-left: 5.1px;
                                }
                                .top-alpha{
                                    gap: 8.6px;
                                    .alpha-img{
                                        border-radius: 8.63px;
                                        max-width: 45.7px;
                                        max-height: 45.7px;
                                    }
                                    .alpha-names{
                                        margin-top: 5.1px;
                                        h2{
                                            font-size: 12.08px;
                                            line-height: 18.99px;
                                        }
                                        .combo{
                                            font-size: 8.59px;
                                            gap: 4px;
                                            .combo-img{
                                                width: 7.5px;
                                            }
                                        }
                                    }
                                }
                                .top-bravo{
                                    gap: 13.1px;
                                    .bravo-1{
                                        font-size: 8.59px;
                                        margin-left: 35.1px;
                                        margin-bottom: 4px;
                                    }
                                    .bravo-2{
                                        font-size: 11.41px;
                                        margin-left: 24px;
                                        gap: 2px;
                                        .bravo-2-img{
                                            width: 6.7px;
                                        }
                                    }
                                    .bravo-3{
                                        font-size: 8.59px;
                                        margin-top: 7px;
                                    }
                                }
                            }
                            .activity-bot-info-bot{
                                margin: 0 6px;
                                .bot-charlie{
                                    font-size: 8.09px;
                                    line-height: 10px;
                                    .charlie-nombers{
                                        font-size: 11.19px;
                                        line-height: 16.17px;
                                        gap: 3.3px;
                                        margin-top: 1px;
                                        img{
                                            width: 7.6px;
                                        }
                                    }
                                    .chill{
                                        margin-left: 4px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 768px){
    .profile-wrapper{
        margin-top: 106.5px;
        padding-bottom: 330px;
        position: relative;
        overflow: hidden;
        .profile-wrapp{
            .profile-banner{
                max-height: 403.5px;
                margin-bottom: 76.5px;
                position: absolute;
                right: 0px;
                border-radius: 0px;
            }
            .prof-container{
                gap: 15.75%;
                flex-direction: column;
                padding-top: 483px;
                .profile-cont-left{
                    margin-left: 0;
                    margin-top: 58.5px;
                    .prof-img-wrapp{
                        top: -210px;
                        .prof-avatar{
                            max-width: 175.5px;
                            border: 5.25px solid #F9F9F9;
                        }
                        .prof-verify{
                            max-width: 31.5px;
                            right: 19.5px;
                            bottom: 6px;
                        }
                    }
                    .artist-name{
                        padding-bottom: 40.5px;
                        margin-bottom: 45px;
                        .artist-name-left{
                            font-family: "Outfit", sans-serif;
                            font-size: 37.34px;
                            margin-bottom: 4.2px;
                            span{
                                font-size: 19.2px;
                            }
                        }
                        .btn-box{
                            width: 100%;
                            max-width: 136.5px;
                            height: 52.5px;
                            margin-top: 10px;
                        }
                    }
                    .artist-nombers{
                        font-size: 34.3px;
                        line-height: 42.87px;
                        margin-bottom: 123px;
                        span{
                            font-size: 11.43px;
                            line-height: 17.15px;
                            margin-top: 4.95px;
                        }
                        .special-span{
                            margin-left: 3px;
                        }
                    }
                    .artist-bio{
                        font-size: 26.67px;
                        line-height: 42.87px;
                        margin-bottom: 34.5px;
                        p{
                            font-size: 15px;
                            margin-top: 7.65px;
                            margin-bottom: 88.5px;
                        }
                    }
                }
                .profile-cont-right{
                    flex: 2.19;
                    margin-top: 126px;
                    .cont-activity-top,
                    .cont-collection-top{
                        gap: 7.8px;
                        padding-bottom: 15.9px;
                        h2{
                            font-size: 17.33px;
                            line-height: 26.58px;
                        }
                        svg{
                            width: 19.5px;
                        }
                    }
                    .cont-collection-bot{
                        grid-template-columns: repeat(3, 1fr);
                        gap: 30px;
                    }
                    .cont-activity-bot{
                        .activity-bot-dudes{
                            gap: 18px;
                            margin-bottom: 61.5px;
                            font-size: 17.37px;
                            line-height: 21.375px;
                            .chains,
                            .sales{
                                gap: 10px;
                                height: 52.5px;
                                border-radius: 10.68px;
                                .chains-1{
                                    width: 16px;
                                }
                                .chains-2{
                                    width: 13.5px;
                                }
                                .sales-1{
                                    width: 21px;
                                }
                                .sales-2{
                                    width: 13.5px;
                                }
                            }
                        }
                        .activity-bot-info{
                            border-radius: 12.95px;
                            padding: 16.35px 24.45px 20.85px 15.45px;
                            margin-bottom: 45px;
                            .activity-bot-info-top{
                                padding-bottom: 18.3px;
                                margin-bottom: 18.9px;
                                &::before{
                                    margin-left: 7.65px;
                                }
                                .top-alpha{
                                    gap: 12.9px;
                                    .alpha-img{
                                        border-radius: 12.95px;
                                        max-width: 68.55px;
                                        max-height: 68.55px;
                                    }
                                    .alpha-names{
                                        margin-top: 7.65px;
                                        h2{
                                            font-size: 18.12px;
                                            line-height: 28.49px;
                                        }
                                        .combo{
                                            font-size: 12.885px;
                                            gap: 6px;
                                            .combo-img{
                                                width: 11.25px;
                                            }
                                        }
                                    }
                                }
                                .top-bravo{
                                    gap: 12px;
                                    .bravo-1{
                                        font-size: 12.885px;
                                        margin-left: 52.65px;
                                        margin-bottom: 6px;
                                    }
                                    .bravo-2{
                                        font-size: 17.115px;
                                        margin-left: 36px;
                                        gap: 3px;
                                        .bravo-2-img{
                                            width: 10.05px;
                                        }
                                    }
                                    .bravo-3{
                                        font-size: 12.885px;
                                        margin-top: 10.5px;
                                    }
                                }
                            }
                            .activity-bot-info-bot{
                                margin: 0 9px;
                                .bot-charlie{
                                    font-size: 12.135px;
                                    line-height: 15px;
                                    .charlie-nombers{
                                        font-size: 16.785px;
                                        line-height: 24.255px;
                                        gap: 4.95px;
                                        margin-top: 1.5px;
                                        img{
                                            width: 11.4px;
                                        }
                                    }
                                    .chill{
                                        margin-left: 6px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 500px) {
    .profile-wrapper .profile-wrapp .prof-container .profile-cont-right .cont-collection-bot {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}
@media (max-width: 376px){
    .profile-wrapper{
        margin-top: 71px;
        padding-bottom: 220px;
        .profile-wrapp{
            .profile-banner{
                max-height: 269px;
                margin-bottom: 51px;
            }
            .prof-container{
                gap: 10.5%;
                padding-top: 322px;
                .profile-cont-left{
                    margin-top: 39px;
                    .prof-img-wrapp{
                        top: -140px;
                        .prof-avatar{
                            max-width: 117px;
                            border: 3.5px solid #F9F9F9;
                        }
                        .prof-verify{
                            max-width: 21px;
                            right: 13px;
                            bottom: 4px;
                        }
                    }
                    .artist-name{
                        padding-bottom: 27px;
                        margin-bottom: 30px;
                        .artist-name-left{
                            font-size: 24.89px;
                            margin-bottom: 2.8px;
                            span{
                                font-size: 12.8px; 
                            }
                        }
                        .btn-box{
                            max-width: 91px;
                            height: 35px;
                        }
                    }
                    .artist-nombers{
                        font-size: 22.87px;
                        line-height: 28.58px;
                        margin-bottom: 82px;
                        span{
                            font-size: 7.62px;
                            line-height: 11.43px;
                            margin-top: 3.3px;
                        }
                        .special-span{
                            margin-left: 2px;
                        }

                    }
                    .artist-bio{
                        font-size: 17.78px;
                        line-height: 28.58px;
                        margin-bottom: 23px;
                        p{
                            font-size: 10px;
                            margin-top: 5.1px;
                            margin-bottom: 59px;
                        }
                    }
                }
                .profile-cont-right{
                    flex: 2.19;
                    margin-top: 84px;
                    .cont-activity-top,
                    .cont-collection-top{
                        gap: 5.2px;
                        padding-bottom: 10.6px;
                        h2{
                            font-size: 11.55px;
                            line-height: 17.72px;
                        }
                        svg{
                            width: 13px;
                        }
                    }
                    .cont-collection-bot{
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                    .cont-activity-bot{
                        .activity-bot-dudes{
                            gap: 12px;
                            margin-bottom: 41px;
                            font-size: 11.58px;
                            line-height: 14.25px;
                            .chains,
                            .sales{
                                gap: 8.9px;
                                height: 35px;
                                border-radius: 7.12px;
                                .chains-1{
                                    width: 13.6px;
                                }
                                .chains-2{
                                    width: 9px;
                                }
                                .sales-1{
                                    width: 15.7px;
                                }
                                .sales-2{
                                    width: 9px;
                                }
                            }
                        }
                        .activity-bot-info{
                            border-radius: 8.63px;
                            padding: 10.9px 16.3px 13.9px 10.3px;
                            margin-bottom: 30px;
                            .activity-bot-info-top{
                                padding-bottom: 12.2px;
                                margin-bottom: 12.6px;
                                &::before{
                                    margin-left: 5.1px;
                                }
                                .top-alpha{
                                    gap: 8.6px;
                                    .alpha-img{
                                        border-radius: 8.63px;
                                        max-width: 45.7px;
                                        max-height: 45.7px;
                                    }
                                    .alpha-names{
                                        margin-top: 5.1px;
                                        h2{
                                            font-size: 12.08px;
                                            line-height: 18.99px;
                                        }
                                        .combo{
                                            font-size: 8.59px;
                                            gap: 4px;
                                            .combo-img{
                                                width: 7.5px;
                                            }
                                        }
                                    }
                                }
                                .top-bravo{
                                    gap: 13.1px;
                                    .bravo-1{
                                        font-size: 8.59px;
                                        margin-left: 35.1px;
                                        margin-bottom: 4px;
                                    }
                                    .bravo-2{
                                        font-size: 11.41px;
                                        margin-left: 24px;
                                        gap: 2px;
                                        .bravo-2-img{
                                            width: 6.7px;
                                        }
                                    }
                                    .bravo-3{
                                        font-size: 8.59px;
                                        margin-top: 7px;
                                    }
                                }
                            }
                            .activity-bot-info-bot{
                                margin: 0 6px;
                                .bot-charlie{
                                    font-size: 8.09px;
                                    line-height: 10px;
                                    .charlie-nombers{
                                        font-size: 11.19px;
                                        line-height: 16.17px;
                                        gap: 3.3px;
                                        margin-top: 1px;
                                        img{
                                            width: 7.6px;
                                        }
                                    }
                                    .chill{
                                        margin-left: 4px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>