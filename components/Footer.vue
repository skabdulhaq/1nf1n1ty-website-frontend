<template>
    <footer>
        <span class="logo-heading">1nf1n1ty</span>
        <span class="copyrights">&copy; 1nf1n1ty {{ currentYear }} </span>
        <ul class="quick-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </footer>
</template>

<style>
footer {
    display: flex;
    height: 6.4rem;
    background-color: #000;
    justify-content: space-between;
    align-items: center;
    padding: 0 6.4rem;
    position: relative;
}

.quick-links {
    display: flex;
    gap: 2.4rem;
    list-style: none;
    font-size: 1.2rem;
}

.copyrights {
    display: flex;
    position: absolute;
    right: 49%;
}
@media (max-width: 800px) {
    .copyrights {
    position:relative;
    right: 49%;
} 
}
</style>

<script>
export default {
    name: "Footer",
    data() {
        return {
            currentYear: 2023
        };
    },

}
</script>

