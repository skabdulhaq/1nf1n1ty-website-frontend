<template>
    <header :class="{ 'nav-white': !transparent }">
        <NuxtLink to="/" class="logo-heading unselectable">1nf1n1ty</NuxtLink>
        <ul v-show="desktop" class="nav-links ">
            <li>
                <NuxtLink to="/#about" class="unselectable">About</NuxtLink>
            </li>
            <li>
                <NuxtLink href="/blogs" class="unselectable">Blogs</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/members" class="unselectable">Members</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/join" class="unselectable">Join Us</NuxtLink>
            </li>
        </ul>
        <div v-show="desktop" class="cta">
            <NuxtLink to="/#contact">
                <button class="btn">
                    Contact
                </button>
            </NuxtLink>
        </div>
        <NuxtImg loading="lazy" @click="openNav" v-show="mobileMenuOpen && transparent && !desktop" class="toggle-icon unselectable"
            :class="{ 'toogle-icon-active': mobileMenuOpen }" id="open-menu" alt="menu" src="/images/menu.svg" />
        <NuxtImg loading="lazy" @click="closeNav" v-show="mobileMenuClose && transparent" class="toggle-icon unselectable"
            :class="{ 'toogle-icon-active': mobileMenuClose }" id="close-menu" alt="close" src="/images/close.svg" />
        <Transition name="mobile-nav">
            <div v-show="!desktop && mobileMenuClose" class="dropdownnav">
                <ul class="nav-links" id="mobile-links">
                    <li><a href="#about">About</a></li>
                    <li>
                        <NuxtLink to="/blogs" class="unselectable">Blogs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/members">Members</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/join" class="unselectable">Join Us</NuxtLink>
                    </li>
                    <div class="cta" id="btn">
                        <a href="#contact">
                            <button class="btn">
                                Contact
                            </button>
                        </a>
                    </div>
                </ul>
            </div>
        </Transition>
    </header>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        let mobileMenuOpen = false;
        let mobileMenuClose = false;
        let desktop = true
        let windowWidth = null
        let navStateClass = "nav-transparent";
        let transparent = true;
        return {
            mobileMenuOpen,
            mobileMenuClose,
            desktop,
            windowWidth,
            navStateClass,
            transparent,
        }
    },
    mounted() {
        window.addEventListener('resize', this.checkScreen);
        window.addEventListener('scroll', this.changeNavStyle);
        this.checkScreen();
        this.changeNavStyle();

    },
    unmounted() {
        if (process.browser) {
            window.removeEventListener('scroll', this.changeNavStyle);
            window.removeEventListener('resize', this.checkScreen);
        }
    },
    methods: {
        openNav() {
            this.mobileMenuClose = true;
            this.mobileMenuOpen = false;
            setTimeout(() => {
                document.querySelector("body").addEventListener("click", this.closeNav);
            }
                , 1000
            )
            document.querySelector("body").removeEventListener('click', this.closeNav);
        },
        closeNav() {
            this.mobileMenuOpen = true;
            this.mobileMenuClose = false;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.desktop = false;
                this.mobileMenuOpen = true;
                this.mobileMenuClose = false;
                return;
            }
            else {
                this.desktop = true
                this.mobileMenuOpen = false;
                this.mobileMenuClose = false;
            }

        },
        changeNavStyle() {
            if (document.body.scrollTop >= window.innerHeight * 3) {
                this.navStateClass = "nav-white"
            }
            else {
                this.navStateClass = "nav-transparent";
            }
        }
    }

}
</script>

<style>
header {
    padding: 0 6.4rem;
    height: 6.4rem;
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    justify-content: space-between;
    top: 0;
    position: sticky;
    transition: all 0.3s;
    z-index: 99;
}

.nav-white {
    background-color: rgb(255, 255, 255);
    z-index: 2;
    backdrop-filter: blur(15px);
    color: #000;
}

header.nav-white .nav-links a,
header.nav-white .nav-links a:focus,
header.nav-white .nav-links a:visited,
header.nav-white .nav-links a:target {
    color: #000;
}

header::before {
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    z-index: -1;
    right: 0;
    left: 0;
    height: 100%;
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.5);

}

.logo-heading {
    font-size: 2.4rem;
    font-weight: bold;
    letter-spacing: 1.5px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 4rem;
}

a,
a:focus,
a:visited,
a:target {
    text-decoration: none;
    color: #fff;
}

.btn {
    background: var(--white);
    border-radius: 25px;
    box-sizing: border-box;
    color: var(--text-dark);
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: bold;
    opacity: 1;
    padding: .6rem 1.8rem;
    user-select: none;
    touch-action: manipulation;
    border: 0;
    transition: all 0.3s;

}

.btn:hover {
    color: var(--white);
    background-color: var(--text-dark);
}

.toggle-icon {
    width: 3.6rem;
    height: 3.6rem;
    cursor: pointer;
    display: flex;
    transition: 0.8s ease all;
}

.toogle-icon-active {
    transform: rotate(180deg);
}

.dropdownnav {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    background-color: rgba(0, 0, 0, 0.5);
    right: 0;
    top: 6.4rem;
    padding: 6.4rem;
}

.dropdownnav::before {
    content: '';
    width: 100%;
    position: absolute;
    top: 0;
    height: 100%;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    z-index: -1;
}

#mobile-links {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.mobile-nav-leave-active {
    transition: 0.5s ease all;

}

.mobile-nav-enter-active {
    transition: 0.5s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(250px);
}

.mobile-nav-enter-to {
    transform: translateX(0);
}

@media (max-width: 500px) {
    header {
        padding: 0 4.8rem;
    }
}
</style>

