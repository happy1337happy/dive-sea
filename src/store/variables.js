import {ref} from 'vue';

export const NFT_CARDS_LIST=[
    {
        title:'Sun Glass 1',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-2.jpeg',
        id: 1,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 2',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-1.jpeg',
        id: 2,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 3',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-3.jpeg',
        id: 3,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 4',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-4.jpeg',
        id: 4,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 5',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-5.jpeg',
        id: 5,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 6',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-6.jpeg',
        id: 6,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 7',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-7.jpeg',
        id: 7,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 8',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-8.jpeg',
        id: 8,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 9',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-9.jpeg',
        id: 9,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 10',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-1.jpeg',
        id: 10,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 11',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-2.jpeg',
        id: 11,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },
    {
        title:'Sun Glass 12',
        description:'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.',
        price: 1.75,
        time: '07h 09m 12s',
        image: 'nft-img-3.jpeg',
        id: 12,
        ovnerByName: 'Videz',
        ovnerByImg:'dude-1.png',
        createByName: 'Perperzon',
        createByImg:'dude-2.png',
        endIn:'Jun 17, 2023 at 05:08',
    },

];

export const NEW_ARRAY = [];

export const loadFromLocalStorage = () => {
    const saveData = localStorage.getItem('selectedCards');
    if (saveData) {
        const parsedData = JSON.parse(saveData);
        NEW_ARRAY.push(...parsedData);
    }
};

export const saveToLocalStorage = () => {
    localStorage.setItem('selectedCards',JSON.stringify(NEW_ARRAY));
};

export const addCardToNewArray = (card) => {
    if (!card || typeof card.id === 'undefined'){
        console.warn('Invalid card:', card);
        return;
    }
    const isDuplicate = NEW_ARRAY.some(existingCard => existingCard.id === card.id);
    if (!isDuplicate){
        NEW_ARRAY.unshift (card);
        saveToLocalStorage();
    }
};

export const removeCardFromNewArray = (cardId) => {
    const index = NEW_ARRAY.findIndex(card => card.id === cardId);
    if (index !== -1) {
        NEW_ARRAY.splice(index, 1);
        saveToLocalStorage();
    }
};

loadFromLocalStorage();

export const IS_OPEN_MODAL=ref(false);

export function toggleModal(value){
    console.log('value',value)
    IS_OPEN_MODAL.value = value;
}