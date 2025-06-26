import {ref, watchEffect } from 'vue';

const breakpoints ={
    xs: '(max-width: 375px)',
    sm: '(min-width: 375px) and (max-width: 576px)', 
    md: '(min-width: 576px) and (max-width: 1024px)', 
    lg: '(min-width: 1024px) and (max-width: 1280px)', 
    xl: '(min-width: 1440px)',
};

const breakpointKeys = Object.keys(breakpoints);


const currentBreakpoint = ref(null);

const updateBreakpoint = () => {
    for (const key of breakpointKeys){
        if(window.matchMedia(breakpoints[key]).matches){
            currentBreakpoint.value = key;
        }
    }
};

const isActiveBreakpoint = (val) =>{
    return breakpointKeys.indexOF(currentBreakpoint.value) > breakpointKeys.indexOf(val);
};

watchEffect(() =>{
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
});
export{breakpoints,currentBreakpoint,isActiveBreakpoint};
