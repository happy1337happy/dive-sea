<script setup>
import DsContainerForm from '@/components/DsContainerForm.vue';
import MyButton from '@/components/MyButton.vue';
import { ref } from 'vue';
import DsTextFields from '@/components/form/DsTextFields.vue';
import DsSelect from '@/components/form/DsSelect.vue';
import DsSwitch from '@/components/form/DsSwitch.vue';

const royalty = ref(0);
const royaltiOptions = [
    {label: '0%', value: '0' },
    {label: '5%', value: '5' },
    {label: '10%', value: '10' },
];

const saleType = ref('auction');

const previewUrl = ref(null);
const fileInput = ref(null);

function handleFileUpload(event) {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Only images can be uploaded (PNG, JPG, GIF и др.)');
        return;
    }

    previewUrl.value = URL.createObjectURL(file);
}

</script>

<template>
    <div class="creating-wrapper">
        <div class="container">
            <div class="creating-wrapp">
                <h2 class="form-title">Create Your NFT</h2>
                <div class="form-wrapper">
                    <form class="form-main">
                        <DsContainerForm labelText="Name">
                            <DsTextFields :placeholder="'ArtWork Name'" icon="ruchka.svg"></DsTextFields>
                        </DsContainerForm>
                        <DsContainerForm labelText="Description">
                            <DsTextFields tag-name="textarea" placeholder="Enter Your Description" icon="ruchka.svg"></DsTextFields>
                        </DsContainerForm>
                        <div class="double-area">
                            <DsContainerForm labelText="Royalty">
                                <DsSelect v-model="royalty" :options="royaltiOptions"></DsSelect>
                            </DsContainerForm>
                            <DsContainerForm labelText="Size">
                                <DsTextFields :placeholder="'Ex - 100 x 100'" ></DsTextFields>
                            </DsContainerForm>
                        </div>
                        <DsContainerForm labelText="Tags">
                            <DsTextFields :placeholder="'Beautiful Castle, Monkeys ETC'" icon="ruchka.svg"></DsTextFields>
                        </DsContainerForm>
                        <div class="double-area">
                            <div class="price-wrapper">
                                <DsContainerForm labelText="Price">
                                    <DsTextFields type="number" :placeholder="'0.00007 ETC'"></DsTextFields>
                                </DsContainerForm>
                            </div>
                            <div class="stock-wrapper">
                                <DsContainerForm labelText="In Stock">
                                    <DsTextFields type="number" :placeholder="'001'" ></DsTextFields>
                                </DsContainerForm>
                            </div>
                        </div>
                        <div class="form-switches">
                                <DsContainerForm labelText="Put On Sale">
                                    <DsSwitch 
                                        v-model="saleType" 
                                        name="sale-type" 
                                        value="auction"
                                        descriptionText="People Will Bids On Your NFT Project" 
                                    ></DsSwitch>
                                </DsContainerForm>
                                <DsContainerForm labelText="Direct Sale">
                                    <DsSwitch 
                                        v-model="saleType" 
                                        name="sale-type" 
                                        value="direct"
                                        descriptionText="No Bids - Only Direct Salling"
                                    ></DsSwitch>
                                </DsContainerForm>
                        </div>
                        <MyButton
                            text="Create"
                            variant="black"
                            size="md"
                            font="poppins"
                            fontWeight="500"
                            fontSize="md"
                            radius="md"
                            :isUppercase="false"
                        ></MyButton>
                    </form>
                    <div class="upload-wrapper">
                        <div class="form-upload">
                            <div class="upload-icon"><img src="@/assets/img/file.svg" alt="img"></div>
                            <p class="upload-info">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
                            <input ref="fileInput" type="file" id="fileInput" accept="image/*" hidden @change="handleFileUpload">
                            <div class="upload-preview" v-if="previewUrl" :class="{ show: previewUrl }">
                                <img :src="previewUrl" alt="prevue">
                            </div>
                        </div>
                        <div class="btn-wrapp">
                            <label for="fileInput">
                                <MyButton
                                    text="Upload"
                                    variant="black"
                                    size="upload"
                                    font="poppins"
                                    fontWeight="500"
                                    fontSize="md"
                                    radius="md"
                                    :isUppercase="false"
                                    @click="fileInput?.click()"
                                ></MyButton>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .creating-wrapp{
        padding-top: 155px;
        padding-bottom: 210px;
        .form-title{
            font-weight: 600;
            font-size: 45px;
            line-height: 100%;
            color: #141416;
            margin-bottom: 153px;
            display: flex;
            justify-content: center;
            text-align: center;
        }
        .form-wrapper{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 69px;
            .form-main{
                display: flex;
                flex-direction: column;
                width: 100%;
                // .royalty{
                //     font-weight: 500;
                //     font-size: 20px;
                //     line-height: 125%;
                //     color: #000000;
                //     display: flex;
                //     flex-direction: column;
                //     gap: 20px;
                // }
                .double-area{
                    display: flex;
                    gap: 35px;
                    .price-wrapper{
                        flex: 2;
                        margin-bottom: 40px;
                    }
                    .stock-wrapper{
                        flex: 1;
                        max-width: 171px;
                    }
                }
                .form-switches{
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 70px;
                    gap: 40px;
                    .form-wrapp{
                        gap: 12px;
                    }
                }
            }
            .upload-wrapper{
                display: flex;
                flex-direction: column;
                margin-top: 45px;
                .form-upload{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #FCFCFD;
                    border-radius: 30.7px;
                    box-shadow: 0px 81.98px 81.98px -61.49px #0F0F0F1A;
                    width: clamp(310px, 32.5vw, 468px);
                    height: 100%;
                    max-height: 413px;
                    margin-bottom: 55px;
                    position: relative;
                    overflow: hidden;
                    .upload-info{
                        font-weight: 400;
                        font-size: 15.37px;
                        line-height: 25.62px;
                        width: 44%;
                        text-align: center;
                        color: #777E90;
                        margin-top: 10px;
                    }
                    .upload-preview{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        // border-radius: 30.7px;
                        // overflow: hidden;
                        opacity: 0;
                        transform: scale(0.95);
                        transition: opacity 0.3s ease, transform 0.3s ease;
                        z-index: 1;
                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                            object-fit: cover;
                        }
                        &.show {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                }
                .btn-wrapp{
                    display: flex;
                    justify-content: center;
                }
                input[type="file"] {
                    display: none;
                }
            }
        }
    }
@media (max-width:1024px){
        .creating-wrapp{
        padding-top: 110px;
        padding-bottom: 150px;
        .form-title{
            font-weight: 600;
            font-size: 32px;
            margin-bottom: 108px;
        }
        .form-wrapper{
            gap: 49px;
            .form-main{
                .double-area{
                    gap: 25px;
                    .price-wrapper{
                        margin-bottom: 15px;
                    }
                    .stock-wrapper{
                        max-width: 121px;
                    }
                }
                .form-switches{
                    margin-bottom: 60px;
                    gap: 28px;
                    .form-wrapp{
                        gap: 8px;
                    }
                }
            }
            .upload-wrapper{
                margin-top: 30px;
                .form-upload{
                    border-radius: 21.86px;
                    max-height: 293px;
                    margin-bottom: 40px;
                    .upload-info{
                        font-size: 10.93px;
                        line-height: 18.22px;
                        margin-top: 6px;
                    }
                }
            }
        }
    }
}
@media (max-width:768px){
    .creating-wrapp{
        .form-wrapper{
            flex-direction: column-reverse;
            gap: 100px;
            .upload-wrapper{
                align-items: center;
                height: 100%;
                .form-upload{
                    height: 400px;
                }
            }
        }
    }
}
@media (max-width:376px){
    .creating-wrapp{
        padding-top: 155px;
        padding-bottom: 210px;
        .form-title{
            font-weight: 600;
            font-size: 45px;
            color: #141416;
            margin-bottom: 75px;
            display: flex;
            justify-content: center;
        }
        .form-wrapper{
            flex-direction: column-reverse;
            gap: 91px;
            .form-main{
                display: flex;
                flex-direction: column;
                width: 100%;
                .double-area{
                    display: flex;
                    gap: 35px;
                    .price-wrapper{
                        flex: 2;
                        margin-bottom: 40px;
                    }
                    .stock-wrapper{
                        flex: 1;
                        max-width: 171px;
                    }
                }
                .form-switches{
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 70px;
                    gap: 40px;
                    .form-wrapp{
                        gap: 12px;
                    }
                }
            }
            .upload-wrapper{
                display: flex;
                flex-direction: column;
                margin-top: 45px;
                height: 100%;
                .form-upload{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #FCFCFD;
                    border-radius: 30.7px;
                    box-shadow: 0px 81.98px 81.98px -61.49px #0F0F0F1A;
                    width: clamp(310px, 32.5vw, 468px);
                    height: 100%;
                    max-height: 413px;
                    margin-bottom: 55px;
                    position: relative;
                    overflow: hidden;
                    height: 375px;
                    .upload-info{
                        font-weight: 400;
                        font-size: 15.37px;
                        line-height: 25.62px;
                        width: 44%;
                        text-align: center;
                        color: #777E90;
                        margin-top: 10px;
                    }
                    .upload-preview{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                        transform: scale(0.95);
                        transition: opacity 0.3s ease, transform 0.3s ease;
                        z-index: 1;
                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                            object-fit: cover;
                        }
                        &.show {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                }
                .btn-wrapp{
                    display: flex;
                    justify-content: center;
                }
                input[type="file"] {
                    display: none;
                }
            }
        }
    }
}
</style>