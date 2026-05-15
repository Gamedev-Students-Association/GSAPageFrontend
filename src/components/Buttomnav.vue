<script setup lang="ts">
import { getLocationLocale } from '@/modules/getLocale';
import { ref, type Ref } from 'vue';

interface Translation {
    [index: string]: string
}

const locale = ref(getLocationLocale(window.location))
const translation: Ref<{[index: string]: Translation}> = ref({
    eventsText: {
        pl: 'Wydarzenia',
        en: 'Events'
    },
    sectionsText: {
        pl: 'Sekcje',
        en: 'Sections'
    },
    contactText: {
        pl: 'Kontakt',
        en: 'Contact us'
    },
    historyText: {
        pl: 'Historia',
        en: 'History'
    },
    projectsText: {
        pl: 'Projekty',
        en: 'Projects'
    },
    joinText: {
        pl: 'Dołącz do nas',
        en: 'Join us'
    }
})

</script>

<template>
    <footer>
        <nav aria-label="Podstrony" class="subpages">
            <a href="./">
                <figure>
                    <img alt="GSA Logo" src="/src/images/Logo Białe.svg" height="48px"></img>
                    <figcaption>Gamedev Student Association</figcaption>
                </figure>
            </a>
            <ul class="subpages-links">
                <li class="subpages-links-element"><a href="./wydarzenia.html">{{ translation.eventsText[locale] }}</a></li>
                <li class="subpages-links-element"><a href="./sekcje.html">{{ translation.sectionsText[locale] }}</a></li>
                <li class="subpages-links-element"><a href="./projekty.html">{{ translation.projectsText[locale] }}</a></li>
                <li class="subpages-links-element"><a href="./historia.html">{{ translation.historyText[locale] }}</a></li>
                <li class="subpages-links-element"><a href="./kontakt.html">{{ translation.contactText[locale] }}</a></li>
                <li class="subpages-links-element"><a target="_blank" href="https://forms.gle/bF7fYinzHXs6Gaud8">{{ translation.joinText[locale] }}</a></li>
            </ul>
        </nav>
        <hr/>
        <nav aria-label="Media społecznościowe" class="social-media">
            <ul class="social-media-links">
                <li><a href="https://www.youtube.com/@gamedevstudentsassociation" target="_blank"><iconify-icon icon="simple-icons:youtube"></iconify-icon></a></li>
                <li><a href="https://www.linkedin.com/company/gamedev-students-association/" target="_blank"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a></li>
                <li><a href="https://discord.gg/ZZ7uCkD6ZC" target="_blank"><iconify-icon icon="simple-icons:discord"></iconify-icon></a></li>
                <li><a href="https://www.facebook.com/GamedevStudents/" target="_blank"><iconify-icon icon="simple-icons:facebook"></iconify-icon></a></li>
                <li><a href="https://www.instagram.com/gsa_uj" target="_blank"><iconify-icon icon="simple-icons:instagram"></iconify-icon></a></li>
            </ul>
        </nav> 
    </footer>
</template>

<style lang="css" scoped>
    footer{
        font-family: 'Inter', 'Arial', 'sans-serif';
        background-color: rgba(0,0,0,0.3);
        backdrop-filter: 17px;
        position: relative;
        z-index: 4;
        margin: 0;
        padding: 10px;
        top: 0;
        left: 0;
        box-sizing: border-box;
        z-index: 98
    }

    figure{
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        margin: 0;
        width: 100%;
        padding: 0 5px;
    }

    .subpages{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    .subpages-links{
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        list-style-type: none;
        padding: 10px 10px;
    }

    .social-media{
        margin: 0;
        display:flex;
        justify-content: right;
        align-items: center;
        flex-direction: row;
        
    }

    @media screen and (max-width: 1008px) {
        .subpages-links{
            flex-direction: column;
        }
    }

    @media screen and (max-width: 780px){
        

        .subpages{
            flex-direction: column;
        }

        .social-media{
            justify-content: center;
        }
    }

    hr{
        padding: 0;
        color: white;
    }

    .social-media-links{
        margin: 0;
        color: white;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    figcaption{
        padding: 0px 5px;
        list-style-type: none;
    }

    iconify-icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        padding: 0.5em
    }

    .subpages-links{
        padding: 5px, 5px;
    }
</style>