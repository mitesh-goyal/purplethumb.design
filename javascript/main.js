import { price_plans_data } from './data.js';
import { accordian_faqs } from './data.js';

const navList = document.querySelector(".nav-list");
const navToggle = document.querySelector(".nav-toggle svg");
const navItems = document.querySelectorAll(".nav-item:not(:last-child)");
const logo = document.querySelector('.logo');

navToggle.addEventListener('click', () => {
    navList.classList.toggle("top-full");
});

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navList.classList.add("top-full");
        navItems.forEach((navItem) => {
            navItem.classList.remove("primary-btn");
        })
        item.classList.add("primary-btn");
    })
})

logo.addEventListener('click', () => {
    navList.classList.add("top-full");
    navItems.forEach((navItem) => {
        navItem.classList.remove("primary-btn");
    })
});

const createPlanFeatures = (features) => {
    const div = document.createElement('div');
    div.classList.add("plan-features", "flex", "flex-column", "flex-start");
    features.forEach(feature => {
        div.innerHTML += `
            <p class="plan-feature flex">
                <img src="./assets/tick.png" alt="" width="15">
                ${feature}
            </p>
            `;
    })
    return div;
}
const createPricePlanCards = (price_plans_data) => {
    const pricing_plans = document.querySelector('.pricing-plans');
    price_plans_data.forEach(plan_data => {
        const div = document.createElement('div');

        div.innerHTML = `
        <div class="pricing-plan container flex flex-start flex-column gap-1-25 light-theme" style="--bg:var(--color-primary);">
            <div class="plan-image">
                <img src="./assets/${plan_data.plan_img}" alt="" width="60">
            </div>
            <h2 class="plan-name">${plan_data.plan_name}</h2>
            <p class="plan-description">${plan_data.plan_description}</p>
            <h1 class="plan-price">${plan_data.plan_price}<span>/mo</span></h1>
            <div class="plan-features flex flex-column flex-start">
                <h4 class="plan-features-title">${plan_data.plan_features_title}</h4>
            </div>
            <a href="#book-a-call" class="primary-btn section-btn plan-btn">
                Book discovery call
            </a>
        </div>     
        `;

        const planFeatures = createPlanFeatures(plan_data.plan_features);
        div.querySelector('.plan-features').appendChild(planFeatures);
        pricing_plans.appendChild(div);
    })

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="pricing-plan container flex flex-start flex-column gap-1-25 light-theme" style="--bg:var(--sky-blue);">
        <div class="plan-image">
            <img src="./assets/custom-asks.svg" alt="" width="60">
        </div>
        <h1 class="plan-price">Custom Asks</h1>
        <p class="plan-description">Have a new idea, or one-off project? We're flexible and love new challenges, so we'll do our best to work something out.</p>
        <a href="#book-a-call" class="primary-btn plan-btn flex flex-row light-theme">
            Contact Us
            <img src="./assets/up-right-arrow.png" alt="" class="btn-icon">
        </a>

    </div>
    `;
    pricing_plans.appendChild(div);
}

createPricePlanCards(price_plans_data);

const createFaqs = (accordian_faqs) => {
    const faqs_accordian = document.querySelector('.faqs-accordian');

    accordian_faqs.forEach(faq => {
        const article = document.createElement('article');
        article.classList.add("faq");

        article.innerHTML = `
            <h4 class="faq-q">${faq.ques}
                <img src="./assets/plus-icon.svg" alt="" class="faq-icon" width="30">
            </h4>
            <p class="faq-a">
                ${faq.ans}
            </p>
        `;
        faqs_accordian.appendChild(article);
    })
}
createFaqs(accordian_faqs);

const accordians = document.querySelectorAll('.faq');
accordians.forEach(faq => {

    const icon = faq.querySelector('.faq-icon');
    const answer = faq.querySelector('.faq-a');
    faq.addEventListener('click', () => {
        if (faq.classList.contains('active')) {
            faq.classList.remove('active');
            answer.style.paddingBottom = '0rem';
            answer.style.maxHeight = null;
            icon.classList.remove('active');
        }
        else {
            accordians.forEach((faq) => {
                const icon = faq.querySelector('.faq-icon');
                const answer = faq.querySelector('.faq-a');
                faq.classList.remove('active');
                answer.style.paddingBottom = '0rem';
                answer.style.maxHeight = null;
                icon.classList.remove('active');
            });
            faq.classList.add('active');
            answer.style.paddingBottom = '1rem';
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.add('active');
        }
    }) &&
        icon.addEventListener('click', () => {
            if (faq.classList.contains('active')) {
                faq.classList.remove('active');
                answer.style.paddingBottom = '0rem';
                answer.style.maxHeight = null;
                icon.classList.remove('active');
            }
            else {
                faq.classList.add('active');
                answer.style.paddingBottom = '1rem';
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.add('active');
            }
        })
})