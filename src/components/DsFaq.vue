<template>
        <section class="faq-wrapper">
        <div class="container">
            <div class="faq-wrapp">
                <h2>Frequently Asked 
                    <br>
                    <span>Questions</span>
                </h2>
                <div class="accordion">
                    <div class="box" v-for="(item, index)  in faqItems" :key="index">
                        <div class="label" @click="toggleAccordion(index)">
                            {{ item.question }}
                            <span class="icon" :class="{active: activeIndex === index}"></span>
                        </div>
                        <div class="content" :class="{active: activeIndex === index}">
                            <p>{{ item.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import {ref} from 'vue';

    const activeIndex = ref(null);

    const faqItems = ref([
        {
            question: 'What is an NFT?',
            answer: 'An NFT (Non-Fungible Token) is a unique digital asset stored on a blockchain, representing ownership of items like art, music, or virtual goods.'
        },
        {
            question: 'What can I use NFTs for?',
            answer: 'NFTs can be used for digital art, collectibles, gaming assets, virtual real estate, or as proof of ownership for unique items.'
        },
        {
            question: 'What is the diff between an NFT and cryptocurrency?',
            answer: 'NFTs are unique and non-fungible, meaning each one is distinct, while cryptocurrencies like Bitcoin are fungible and interchangeable.'
        },
        {
            question: 'How much is an NFT worth?',
            answer: 'The value of an NFT depends on its rarity, demand, and market trends, ranging from a few dollars to millions.'
        },
        {
            question: 'How do I purchase an NFT on your platform?',
            answer: 'To purchase an NFT, connect a crypto wallet, browse the marketplace, and use cryptocurrency to buy the desired NFT.'
        }
    ]);

    const toggleAccordion = (index) => {
        activeIndex.value = activeIndex.value === index ? null : index;
    };

</script>

<style lang="scss">
.faq-wrapper{
    margin-top: 50px;
    margin-bottom: 214px;
    .faq-wrapp{
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{
            text-align: center;
            font-size: 48.75px;
            line-height: 140%;
            font-weight: 600;
            color: #18181B;
            margin-bottom: 78px;
            span{
                color: #D2D2D2;
            }
        }
        .accordion{
            .box{
                position: relative;
                margin-bottom: 31.14px;
                &:last-child{
                    margin-bottom: 0;
                }
                &::before{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1.15px; 
                    background: rgba(173, 173, 173, 1);
                }
                .label{
                    position: relative;
                    margin: 0 0 17px 15px;
                    color: #323142;
                    font-size: 25.37px;
                    line-height: 64.18px;
                    font-weight: 600;
                    cursor: pointer;

                    .icon{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 14.29px;
                        background-color: #141416;
                        width: 32.63px;
                        height: 32.63px;
                        border-radius: 50%;
                        color: white;
                        font-size: 15px;
                        line-height: 102%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        &::after{
                            content: "\1F7A2";
                        }
                        &.active::after {
                            content: '\2014';
                        }
                    }
                }
                .content{
                    position: relative;
                    overflow: hidden;
                    transition: 0.3s;
                    max-height: 0;
                    transition: max-height 0.3s ease-in-out;

                    &.active {
                        max-height: 200px;
                    }
                    p {
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 150%;
                        color: #12141d;
                        padding: 0 15px 15px 15px;
                    }
                }
            }
        }
    }
}
@media (max-width:1024px){
    .faq-wrapper{
        margin-bottom: 152px;
        .faq-wrapp{
            h2{
                font-size: 34.67px;
                margin-bottom: 68px;
            }
            .accordion{
                .box{
                    margin-bottom: 22px;
                    .label{
                        margin: 0 0 10.6px 12.4px;
                        font-size: 18.4px;
                        line-height: 45.64px;
                        .icon{
                            right: 10.29px;
                            width: 23.2px;
                            height: 23.2px;
                            font-size: 11px;
                            line-height: 102%;
                        }
                    }
                    .content{
                        p {
                            font-size: 14px;
                            padding: 0 12px 12px 12px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 768px) {
    .faq-wrapper {
        margin-bottom: 132px;
        .faq-wrapp {
            h2 {
                font-size: 29.16px;
                line-height: 120%;
                margin-bottom: 68px;
            }
            .accordion {
                .box {
                    margin-bottom: 18.5px;
                    .label {
                        margin: 0 0 9px 6.2px;
                        font-size: 15.35px;
                        line-height: 38.38px;
                        .icon {
                            right: 8px;
                            width: 19.5px;
                            height: 19.5px;
                            font-size: 9.5px;
                            line-height: 98%;
                        }
                    }
                    .content {
                        p {
                            font-size: 12.5px;
                            padding: 0 10px 10px 10px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 560px) {
    .faq-wrapper {
        margin-bottom: 122px;
        .faq-wrapp {
            h2 {
                font-size: 26.4px;
                line-height: 120%;
                margin-bottom: 68px;
            }
            .accordion {
                .box {
                    margin-bottom: 16.75px;
                    .label {
                        margin: 0 0 8.25px 3.1px;
                        font-size: 13px;
                        line-height: 34.75px;
                        .icon {
                            right: 6.85px;
                            width: 17.65px;
                            height: 17.65px;
                            font-size: 8.75px;
                            line-height: 96.5%;
                        }
                    }
                    .content {
                        p {
                            font-size: 11.75px;
                            padding: 0 9px 9px 9px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 376px){
    .faq-wrapper{
        margin-bottom: 112px;
        .faq-wrapp{
            h2{
                font-size: 23.64px;
                line-height: 120%;
                margin-bottom: 68px;
            }
            .accordion{
                .box{
                    margin-bottom: 15px;
                    .label{
                        margin: 0 0 7.5px 0px;
                        font-size: 12.3px;
                        line-height: 31.12px;
                        .icon{
                            right: 5.7px;
                            width: 15.8px;
                            height: 15.8px;
                            font-size: 8px;
                            line-height: 95%;
                        }
                    }
                    .content{
                        p {
                            font-size: 11px;
                            padding: 0 8px 8px 8px;
                        }
                    }
                }
            }
        }
    }
}
</style>