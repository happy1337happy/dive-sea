<script setup>
import{ ref } from 'vue';
import { RouterLink } from 'vue-router';
import MyButton from '@/components/MyButton.vue';

const isMenuOpen=ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <header>
        <div class="container">
            <div class="header-wrapp">
                <div class="header-left">
                    <div class="logo">
                        <RouterLink to="/" class="logo-link">
                            <img src="@/assets/img/logo.svg" alt="logo" class="logo-img">
                            <span class="logo-name">DiveSea</span>
                        </RouterLink>
                    </div>
                    <nav class="header-nav">
                        <ul>
                            <li>
                                <RouterLink to="/discover" class="link">discover</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/creators" class="link">creators</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/sell" class="link">sell</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/stats" class="link">stats</RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="header-right">
                    <div class="search">
                        <input type="text" placeholder="Search Art Work / Creator">
                        <button class="search-btn">
                            <img src="@/assets/img/search.svg" alt="img" class="search-img">
                        </button>
                    </div>
                    <MyButton class="wallet-btn" text="connect wallet" :isUppercase="true" size="sm" font="inter" radius="lg"></MyButton>
                </div>
                <button class="mob-menu">
                    <img  @click="toggleMenu" src="@/assets/img/menu.svg" alt="menu" class="menu-img">
                </button>
                <div class="mobile-menu" v-if="isMenuOpen">
                    <ul class="mobile-nav">
                        <li>
                            <RouterLink @click="toggleMenu" to="/discover" class="link">discover</RouterLink>
                        </li>
                        <li>
                            <RouterLink @click="toggleMenu" to="/creators" class="link">creators</RouterLink>
                        </li>
                        <li>
                            <RouterLink @click="toggleMenu" to="/sell" class="link">sell</RouterLink>
                        </li>
                        <li>
                            <RouterLink @click="toggleMenu" to="/stats" class="link">stats</RouterLink>
                        </li>
                    </ul>
                    <div class="mobile-actions">
                        <div class="search">
                            <input type="text" placeholder="Search Art Work / Creator">
                            <button class="search-btn">
                                <img src="@/assets/img/search.svg" alt="img" class="search-img">
                            </button>
                        </div>
                        <MyButton class="wallet-btn" text="connect wallet" :isUppercase="true" size="sm" font="inter" radius="lg"></MyButton>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
header{
    padding-top: 45px;
    z-index: 11;
    position: relative;
}
header .header-wrapp{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header .header-wrapp .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}
header .header-wrapp .logo-name{
    display: none;
    color: #000000;
    font-weight: 600;
    font-size: 21.36px;
    line-height: 130%;
    margin-left: 10.9px;
}
header .header-wrapp .header-left{
    display: flex;
    align-items: center;
    gap: 12%;
    margin-right: 7%;
}
header .header-wrapp .header-left .header-nav ul{
    display: flex;
    justify-content: space-between;
    gap: 53.5px;
    list-style: none;
}
header .header-wrapp .header-left .header-nav ul li .link{
    text-decoration: none;
    color: #606060;
    font-family: "Inter", serif;
    font-weight: 500;
    font-size: 17.8px;
    line-height: 26.7px;
    text-transform: uppercase;
}
header .header-wrapp .header-right{
    display: flex;
    align-items: center;
    gap: 30px;
}
.search{
    position: relative;
    display: inline-block;
}
.search input{
    background-color: #EDEDED;
    border: none;
    outline: none;
    height: 57px;
    max-width: 100%;
    width: 348.4px;
    text-align: center;
    border-radius: 14.8px;
    color: #606060;
    font-weight: 500;
    font-size: 15.7px;
    line-height: 18.4px; 
}
.search input::placeholder {
    color: #C2C3CB;
  }
.search .search-btn{
    position: absolute;
    left: 22.6px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
header .header-wrapp .mob-menu{
    display: none;
    cursor: pointer;
}
header .header-wrapp .mob-menu .menu-img{
    width: 100%;
}
.mobile-menu {
    position: absolute;
    right: 0;
    top: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    background-color: white;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    width: 100%;
}

.mobile-menu .mobile-nav {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mobile-menu .mobile-nav .link {
    text-decoration: none;
    color: #606060;
    font-family: "Inter", serif;
    font-weight: 500;
    font-size: 17.8px;
    text-transform: uppercase;
}

.mobile-menu .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
@media (max-width: 1280px){
    header{
        padding-top: 38px;
    
    }
    header .header-wrapp .logo-img{
        width: 42px;
    }
    header .header-wrapp .header-left .header-nav ul li .link{
        font-size: 15px;
        line-height: 150%;
    }
    header .header-wrapp .header-left .header-nav ul{
        gap: 21%;
    }
    header .header-wrapp .header-right{
        gap: 25px;
    }
    header .header-wrapp .header-right .search input{
        height: 49px;
        width: 300px;
        border-radius: 12px;
        font-size: 13.17px;
        line-height: 120%; 
    }
    header .header-wrapp .header-right .search .search-btn{
        left: 19px;
    }
    header .header-wrapp .header-right .search .search-img{
        width: 18px;
        aspect-ratio: 1/1;
    }
    
}
@media (max-width: 1024px){
    header{
        padding-top: 32px;
    
    }
    header .header-wrapp .logo-img{
        width: 37.69px;
    }
    header .header-wrapp .header-left .header-nav ul li .link{
        font-size: 12.68px;
        line-height: 19.02px;
    }
    header .header-wrapp .header-left .header-nav ul{
        gap: 38px;
    }
    header .header-wrapp .header-right{
        gap: 20px;
    }
    header .header-wrapp .header-right .search input{
        height: 40.5px;
        width: 247.8px;
        border-radius: 10.59px;
        font-size: 11.17px;
        line-height: 117%; 
    }
    header .header-wrapp .header-right .search .search-btn{
        left: 22.6px;
    }
    header .header-wrapp .header-right .search .search-img{
        width: 16px;
        aspect-ratio: 1/1;
    }
}
@media (max-width: 900px){
    header .header-wrapp .header-left .header-nav ul li .link{
        font-size: 12.68px;
        line-height: 19.02px;
    }
    header .header-wrapp .header-left .header-nav ul{
        gap: 10%;
    }
    header .header-wrapp .header-right{
        gap: 5%;
    }
    header .header-wrapp .header-right .search input{
        height: 40.5px;
        width: 210.8px;
        border-radius: 10.59px;
        font-size: 10.17px;
        line-height: 117%; 
    }
    header .header-wrapp .header-right .search .search-img{
        width: 13px;
    }
}
@media (max-width: 768px){
    header .header-wrapp .header-left .header-nav {
        display: none;
    }
    header .header-wrapp .header-right {
        display: none;
    }
    header .header-wrapp .mob-menu{
        display: block;
        margin-top: 4px;
        width: 52px;
    }
    header .header-wrapp .logo-img{
        width: 54px;
        margin-top: -2px;
    }
    header .header-wrapp .logo-name{
        display: block;
        font-size: 25.36px;
    }
}
@media (max-width: 375px){
    header .header-wrapp .mob-menu{
        margin-top: 4px;
        width: 31px;
    }
    header .header-wrapp .logo-img{
        width: 46px;
        margin-top: -2px;
    }
    .search input{
        width: 330px;
    }
}
</style>