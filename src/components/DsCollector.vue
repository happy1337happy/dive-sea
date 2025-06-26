<script setup >
import MyButton from '@/components/MyButton.vue';
import {ref} from 'vue';

const followStates = ref([false, false, false, false, false, false,]);

const toggleFollow = (index) => {
    followStates.value[index] = !followStates.value[index];
};

</script>

<template>
    <section class="collector-wrapper">
        <div class="container">
            <div class="collector-wrapp">
                <div class="collector-left">
                    <h2>Just Unleash - 
                        <br>
                        <span>Your Inner Collector</span>
                    </h2>
                    <ul>
                        <li>Best Seller All Around World</li>
                        <li>$2M+ Transections Every Day</li>
                        <li>Secure Transactions</li>
                        <li>Exclusive Collections From Sellers</li>
                        <li>Easy Buying and Selling</li>
                        <li>Join Our Community</li>
                    </ul>

                    <MyButton text="Explore More" fontSize="sm" :isUppercase="false" fontWeight="500" icon="arrow-right.svg" iconPosition="right"></MyButton>
                </div>
                <div class="collector-right">
                    <div class="coll-block-1">
                        <h3>Best Sellers</h3>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-1.jpeg" alt="img">
                                <div class="notification">1</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Alex Ca.</div>
                                <div class="pes">@Alexy</div>
                            </div>
                            <div class="foll-btn-wrapp">
                                <button 
                                    class="foll-btn" 
                                    :class="{following: followStates[0]}"
                                    @click="toggleFollow(0)"
                                >
                                    {{ followStates[0] ? 'Unfollow' : 'Follow' }}
                                </button>
                            </div>
                        </div>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-2.jpeg" alt="img">
                                <div class="notification">2</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Juliya Sa.</div>
                                <div class="pes">@JuliyaS</div>
                            </div>
                            <div class="foll-btn-wrapp">
                                <button 
                                    class="foll-btn" 
                                    :class="{following: followStates[1]}"
                                    @click="toggleFollow(1)"
                                >
                                    {{ followStates[1] ? 'Unfollow' : 'Follow' }}
                                </button>
                            </div>
                        </div>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-3.jpeg" alt="img">
                                <div class="notification">3</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Juliya Sa.</div>
                                <div class="pes">@JuliyaS</div>
                            </div>
                            <div class="foll-btn-wrapp">
                                <button 
                                    class="foll-btn" 
                                    :class="{following: followStates[2]}"
                                    @click="toggleFollow(2)"
                                >
                                    {{ followStates[2] ? 'Unfollow' : 'Follow' }}
                                </button>
                            </div>
                        </div>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-4.jpeg" alt="img">
                                <div class="notification">1</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Trevor Pu.</div>
                                <div class="pes">@TrevorP</div>
                            </div>
                            <div class="foll-btn-wrapp">
                                <button 
                                    class="foll-btn"
                                    :class="{following: followStates[3]}"
                                    @click="toggleFollow(3)"
                                >
                                    {{ followStates[3] ? 'Unfollow' : 'Follow' }}
                                </button>
                            </div>
                        </div>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-5.jpeg" alt="img">
                                <div class="notification">2</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Alex Ca.</div>
                                <div class="pes">@Alexy</div>
                            </div>
                            <div class="foll-btn-wrapp">
                                <button 
                                    class="foll-btn"
                                    :class="{following: followStates[4]}" 
                                    @click="toggleFollow(4)"
                                >
                                    {{ followStates[4] ? 'Unfollow' : 'Follow' }}
                                </button>
                            </div>
                        </div>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-1.jpeg" alt="img">
                                <div class="notification">3</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Alex Ca.</div>
                                <div class="pes">@Alexy</div>
                            </div>
                            <div class="foll-btn-wrapp">
                                <button 
                                    class="foll-btn"
                                    :class="{following: followStates[5]}" 
                                    @click="toggleFollow(5)"
                                >
                                    {{ followStates[5] ? 'Unfollow' : 'Follow' }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="coll-block-2">
                        <h3>Recent Viewed</h3>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-2.jpeg" alt="img">
                                <div class="notification">1</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Alex Ca.</div>
                                <div class="pes">@Alexy</div>
                            </div>
                            <div class="coll-price">
                                <div class="coll-price-top">
                                    <img src="@/assets/img/micro-money.svg" alt="img">
                                    8,456
                                </div>
                                <div class="coll-price-bot-1">+23,00%</div>
                            </div>
                        </div>
                        <div class="coll-dudes">
                            <div class="another-dudes">
                                <img src="@/assets/img/nft-img-3.jpeg" alt="img">
                                <div class="notification">2</div>
                            </div>
                            <div class="nft-name-2">
                                <div>Juliya Sa.</div>
                                <div class="pes">@JuliyaS</div>
                            </div>
                            <div class="coll-price">
                                <div class="coll-price-top">
                                    <img src="@/assets/img/micro-money.svg" alt="img">
                                    8,456
                                </div>
                                <div class="coll-price-bot-2">+23,00%</div>
                            </div>
                        </div>
                    </div>
                    <div class="coll-block-3">
                        <div class="combo">
                            <div class="b-b-d"></div>
                            <div class="img-plus">
                                <img src="@/assets/img/nft-img-3.jpeg" alt="img" class="plus-img">
                                <img src="@/assets/img/yes.svg" alt="img" class="yes">
                            </div>
                        </div>
                        <div class="block-3-info">
                            <div class="new">New bid<span>Rotation</span></div>
                            <div class="eth">0.002 ETH</div>
                            <div class="info-date">6 Oct 2022, 11:44 PM</div>
                        </div>
                        <img src="@/assets/img/nft-img-3.jpeg" alt="img" class="block-3-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="dots-2">
            <img src="@/assets/img/dots-2.svg" alt="img">
        </div>
    </section>
</template>

<style>
.collector-wrapper{
    margin-bottom: 246px;
    position: relative;
    overflow: hidden;
    padding-bottom: 110px;
}
.collector-wrapper .dots-2{
    position: absolute;
    right: 11px;
    bottom: 88px;
    z-index: -1;
    overflow: hidden;
}
.collector-wrapper .collector-wrapp{
    position: relative;
    display: flex;
    justify-content: space-between;

}
.collector-wrapper .collector-wrapp::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.75px; 
    background: #CBCBCB;
}
.collector-wrapper .collector-wrapp .collector-left{
    margin-top: 116px;
}
.collector-wrapper .collector-wrapp .collector-left h2{
    font-weight: 600;
    font-size: 45px;
    line-height: 54.4px;
    color: #949494;
    margin-bottom: 45px;
    
}
.collector-wrapper .collector-wrapp .collector-left h2 span{
    color: #18181B;
}
.collector-wrapper .collector-wrapp .collector-left ul {
    list-style: none;
    margin-bottom: 58px;
}

.collector-wrapper .collector-wrapp .collector-left ul li {
    background-image: url(@/assets/img/ul-icon.svg);
    background-repeat: no-repeat;
    background-position: 0 center; 
    padding-left: 32px; 
    margin-bottom: 12px;
    display: flex;
    align-items: center; 
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
}
.collector-wrapper .collector-wrapp .collector-right{
    padding-top: 113.21px;
    position: relative;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-1{
    width: auto;
    padding: 26.47px 20.8px 25.72px 17.31px;
    border: 0.88px solid #EDF2F7;
    background-color: #FFFFFF;
    border-radius: 14.12px;
    margin-right: 180px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    box-shadow: 9px 9px 44px 0px rgba(20, 22, 26, 0.2);
}
.collector-wrapper .collector-wrapp .collector-right h3{
    font-weight: 600;
    font-size: 18.53px;
    line-height: 135%;
    color: #1A202C;
    margin-left: 4.13px;
    margin-bottom: 8.54px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes{
    display: flex;
    align-items: center;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes{
    position: relative;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes .notification{
    position: absolute;
    color: #FCFCFD;
    background-color: black;
    border-radius: 50%;
    font-weight: 600;
    font-size: 10.45px;
    line-height: 17.41px;
    z-index: 2;
    width: 17.41px;
    height: 17.41px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.7px;
    right: 8px;
    top: 0;

}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes img{
    object-fit: cover;
    width: 48.76px;
    height: 48.76px;
    border-radius: 50%;
    margin-right: 13.93px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2{
    margin-right: 55.1px;
    font-weight: 500;
    font-size: 12.19px;
    line-height: 20.9px;
    color: #23262F;
    width: 97.5px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2 .pes{
    font-weight: 400;
    font-size: 10.45px;
    line-height: 17.41px;
    color: #777E90;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn-wrapp{
    min-width: 83px;
    display: flex;
    justify-content: flex-end;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn{
    outline: none;
    border: 1.74px solid #E6E8EC;
    border-radius: 6.97px;
    background-color: white;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 12.19px;
    line-height: 13.93px;
    padding: 7px 14px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn.following {
    background-color: #E6E8EC;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-2{
    width: auto;
    padding: 26.47px 20.8px 25.72px 17.31px;
    border: 0.88px solid #EDF2F7;
    background-color: #FFFFFF;
    border-radius: 14.12px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    position: absolute;
    bottom: -52px;
    right: 359px;
    z-index: 3;
    box-shadow: 9px 9px 44px 0px rgba(20, 22, 26, 0.2);
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .nft-name-2{
    margin-right: 107px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .another-dudes .notification{
    position: absolute;
    color: #141416;
    background-color: white;
    border-radius: 50%;
    font-weight: 600;
    font-size: 10.45px;
    line-height: 17.41px;
    z-index: 5;
    width: 17.41px;
    height: 17.41px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.7px;
    right: 9px;
    top: 32px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top{
    font-weight: 600;
    font-size: 13.56px;
    line-height: 130%;
    display: flex;
    margin-bottom: 6.78px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top img{
    margin-right: 5.35px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-1{
    font-size: 11.86px;
    font-weight: 400;
    line-height: 150%;
    color: #10C352;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-2{
    font-size: 11.86px;
    font-weight: 400;
    line-height: 150%;
    color: #E23333;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3{
    background-color: #FCFCFD;
    border-radius: 13.29px;
    padding: 11.39px;
    width: auto;
    position: absolute;
    top: 65px;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    box-shadow: 0px 19px 60px 0px rgba(70, 70, 26, 0.2);
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .combo{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .b-b-d{
    width: 7.59px;
    height: 7.59px;
    background-color: #141416;
    border-radius: 50%;
    margin-right: 11.39px;
    
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .img-plus{
    position: relative;
    padding: 2.85px;
    margin-right: 11.39px;
    
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .img-plus .plus-img{
    object-fit: cover;
    display: block;
    width: 39.87px;
    height: 39.87px;
    border-radius: 50%;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .img-plus .yes{
    position: absolute;
    top: 0;
    right: 0;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .new{
    color: #949494;
    font-size: 13.29px;
    line-height: 22.79px;
    font-weight: 500;
    margin-right: 49.45px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .new span{
    color: #141416;
    margin-left: 5.7px;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .eth{
    color: #141416;
    font-size: 11.39px;
    line-height: 18.99px;
    font-weight: 600;
}
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .info-date{
    color: #949494;
    font-size: 11.39px;
    line-height: 18.99px;
    font-weight: 400;
} 
.collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-img{
    object-fit: cover;
    display: block;
    width: 60.76px;
    height: 60.76px;
    border-radius: 10.44px;
}
@media (max-width: 1024px){
    .collector-wrapper{
        margin-bottom: 174px;
    }
    .collector-wrapper .dots-2{
        right: -100px;
        bottom: 30px;
    }
    .collector-wrapper .collector-wrapp .collector-left{
        margin-top: 82px;
    }
    .collector-wrapper .collector-wrapp .collector-left h2{
        font-size: 32px;
        line-height: 38.69px;
        margin-bottom: 31px;
    }
    .collector-wrapper .collector-wrapp .collector-left ul {
        margin-bottom: 49px;
    }

    .collector-wrapper .collector-wrapp .collector-left ul li {
        padding-left: 29px; 
        margin-bottom: 8.2px;
        font-size: 11.38px;
        line-height: 22.76px;
    }
    .collector-wrapper .collector-wrapp .collector-right{
        padding-top: 80px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-1{
        padding: 18.83px 14.3px 12.3px 18.23px;
        border-radius: 10px;
        margin-right: 130px;
        gap: 13px;
        box-shadow: 9px 9px 44px 0px rgba(20, 22, 26, 0.2);
    }
    .collector-wrapper .collector-wrapp .collector-right h3{
        font-size: 13.18px;
        margin-left: 2.75px;
        margin-bottom: 5.5px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes .notification{
        border-radius: 50%;
        font-size: 7.44px;
        line-height: 12.4px;
        width: 14.88px;
        height: 14.88px;
        padding: 1px;
        right: 6px;
        top: -1px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes img{
        width: 34.7px;
        height: 34.7px;
        border-radius: 50%;
        margin-right: 9.9px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2{
        margin-right: 28px;
        font-size: 8.68px;
        line-height: 14.88px;
        width: 69.4px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2 .pes{
        font-size: 7.44px;
        line-height: 12.4px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn-wrapp{
        min-width: 60px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn{
        border: 1.24px solid #E6E8EC;
        border-radius: 4.96px;
        font-size: 8.68px;
        line-height: 9.92px;
        padding: 5px 10px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2{
        padding: 16.5px 15.6px 16.24px 17px;
        border-radius: 10.04px;
        gap: 12px;
        bottom: -52px;
        right: 255px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .nft-name-2{
        margin-right: 45px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .another-dudes .notification{
        font-size: 7.23px;
        line-height: 150%;
        width: 13px;
        height: 13px;
        padding: 1.7px;
        right: 3px;
        top: 22px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top{
        font-size: 9.64px;
        line-height: 140%;
        margin-bottom: 4.8px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top img{
        margin-right: 3.8px;
        width: 5.6px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-1{
        font-size: 8.44px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-2{
        font-size: 8.44px;
    }


    .collector-wrapper .collector-wrapp .collector-right .coll-block-3{
        border-radius: 9.45px;
        padding: 8.1px;
        top: 65px;
        right: 0;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .combo{
        margin-bottom: 10px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .b-b-d{
        width: 5.4px;
        height: 5.4px;
        margin-right: 8.1px;
        
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .img-plus{
        padding: 2px;
        margin-right: 8px;
        
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .img-plus .plus-img{
        width: 28.3px;
        height: 28.3px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .new{
        font-size: 9.45px;
        line-height: 16.2px;
        margin-right: 34px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .new span{
        margin-left: 4px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .eth{
        font-size: 8.1px;
        line-height: 13.5px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-info .info-date{
        font-size: 8.1px;
        line-height: 13.5px;
    } 
    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 .block-3-img{
        width: 43.2px;
        height: 43.2px;
        border-radius: 7.43px;
    }   
}
@media (max-width: 768px) {
    .collector-wrapper {
        margin-bottom: 90px;
    }

    .collector-wrapper .dots-2 {
        position: absolute;
        right: -47px;
        bottom: 314px;
        z-index: -1;
        overflow: hidden;
    }

    .collector-wrapper .collector-wrapp {
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .collector-wrapper .collector-wrapp::before {
        height: 0;
    }

    .collector-wrapper .collector-wrapp .collector-left {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .collector-wrapper .collector-wrapp .collector-left h2 {
        font-size: 46px;
        line-height: 74px;
        margin-bottom: 850px;
        text-align: center;
    }

    .collector-wrapper .collector-wrapp .collector-left ul {
        display: none;
    }

    .collector-wrapper .collector-wrapp .collector-right {
        padding-top: 0;
        position: absolute;
        top: 400px;
        left: 18%;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-1 {
        padding: 25.2px 19.2px 37.4px 20px;
        border-radius: 28.24px;
        margin-right: 96px;
        gap: 14px;
    }

    .collector-wrapper .collector-wrapp .collector-right h3 {
        font-size: 24px;
        margin-left: 3.6px;
        margin-bottom: 8px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes .notification {
        font-size: 10px;
        line-height: 16.8px;
        width: 20px;
        height: 20px;
        padding: 2px;
        right: 8px;
        top: -6px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes img {
        width: 50px;
        height: 50px;
        margin-right: 13.2px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2 {
        margin-right: 50px;
        font-size: 20px;
        line-height: 30px;
        width: 100px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2 .pes {
        font-size: 16px;
        line-height: 24px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn-wrapp {
        min-width: 98px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn {
        border-radius: 6.66px;
        font-size: 16px;
        line-height: 24px;
        padding: 6.6px 13.2px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 {
        padding: 22px;
        border-radius: 28.24px;
        gap: 16.8px;
        bottom: -66px;
        right: 146px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .nft-name-2 {
        margin-right: 100px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .another-dudes .notification {
        font-size: 14px;
        line-height: 22px;
        width: 30px;
        height: 30px;
        padding: 3.4px;
        right: 0px;
        top: 32px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top {
        font-size: 20px;
        line-height: 130%;
        margin-bottom: 7px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top img {
        margin-right: 6px;
        width: 18px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-1,
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-2 {
        font-size: 18px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-3 {
        display: none;
    }
}
@media (max-width: 524px) {
    .collector-wrapper {
        margin-bottom: 70px;
    }

    .collector-wrapper .dots-2 {
        right: -125px;
        bottom: 200px;
    }

    .collector-wrapper .collector-wrapp::before {
        height: 0;
    }

    .collector-wrapper .collector-wrapp .collector-left {
        margin-top: 84px;
    }

    .collector-wrapper .collector-wrapp .collector-left h2 {
        font-size: 34px;
        line-height: 52px;
        margin-bottom: 595px;
    }
    .collector-wrapper .collector-wrapp .collector-right {
        padding-top: 0;
        top: 280px;
        left: 24%;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-1 {
        padding: 17.6px 13.4px 26px 14px;
        border-radius: 19.7px;
        margin-right: 67px;
        gap: 9.8px;
    }

    .collector-wrapper .collector-wrapp .collector-right h3 {
        font-size: 16.8px;
        margin-left: 2.5px;
        margin-bottom: 5.6px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes .notification {
        font-size: 7px;
        line-height: 12px;
        width: 14px;
        height: 14px;
        padding: 1.4px;
        right: 5.5px;
        top: -4px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes img {
        width: 35px;
        height: 35px;
        margin-right: 9.3px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2 {
        margin-right: 35px;
        font-size: 14px;
        line-height: 21px;
        width: 70px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2 .pes {
        font-size: 11px;
        line-height: 17px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn-wrapp {
        min-width: 69px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn {
        border-radius: 4.66px;
        font-size: 11px;
        line-height: 17px;
        padding: 4.6px 9.2px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 {
        padding: 15.4px;
        border-radius: 19.7px;
        gap: 11.8px;
        bottom: -46px;
        right: 102px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .nft-name-2 {
        margin-right: 70px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .another-dudes .notification {
        font-size: 10px;
        line-height: 15.5px;
        width: 21px;
        height: 21px;
        padding: 2.4px;
        right: 0px;
        top: 22px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top {
        font-size: 14px;
        line-height: 130%;
        margin-bottom: 5px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top img {
        margin-right: 4px;
        width: 12.6px;
    }

    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-1,
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-2 {
        font-size: 12.6px;
    }
}
@media (max-width: 376px){
    .collector-wrapper{
        margin-bottom: 60px;
    }
    .collector-wrapper .dots-2{
        right: -90px;
        bottom: 152px;
    }
    .collector-wrapper .collector-wrapp .collector-left{
        margin-top: 60px;
    }
    .collector-wrapper .collector-wrapp .collector-left h2{
        font-size: 30px;
        line-height: 37px;
        margin-bottom: 425px;
    }
    .collector-wrapper .collector-wrapp .collector-right{
        padding-top: 0;
        top: 200px;
        left: 24%;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-1{
        padding: 12.6px 9.6px 18.7px 10px;
        border-radius: 14.12px;
        margin-right: 48px;
        gap: 7px;
    }
    .collector-wrapper .collector-wrapp .collector-right h3{
        font-size: 12px;
        margin-left: 1.8px;
        margin-bottom: 4px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes .notification{
        font-size: 5px;
        line-height: 8.4px;
        width: 10px;
        height: 10px;
        padding: 1px;
        right: 4px;
        top: -3;

    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .another-dudes img{
        width: 25px;
        height: 25px;
        margin-right: 6.6px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2{
        margin-right: 25px;
        font-size: 10px;
        line-height: 15px;
        width: 50px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .nft-name-2 .pes{
        font-size: 8px;
        line-height: 12px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn-wrapp{
        min-width: 49px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-dudes .foll-btn{
        border-radius: 3.33px;
        font-size: 8px;
        line-height: 12px;
        padding: 3.3px 6.6px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2{
        padding: 11px;
        border-radius: 14.12px;
        gap: 8.4px;
        bottom: -33px;
        right: 73px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .nft-name-2{
        margin-right: 50px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .another-dudes .notification{
        font-size: 7px;
        line-height: 11px;
        width: 15px;
        height: 15px;
        padding: 1.7px;
        right: 0px;
        top: 16px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top{
        font-size: 10px;
        line-height: 130%;
        margin-bottom: 3.5px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-top img{
        margin-right: 3px;
        width: 9px;
    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-1{
        font-size: 9px;

    }
    .collector-wrapper .collector-wrapp .collector-right .coll-block-2 .coll-dudes .coll-price .coll-price-bot-2{
        font-size: 9px;
    }
}
</style>