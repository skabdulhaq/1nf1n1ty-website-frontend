<template>
        <div class="card">
            <NuxtImg  sizes="sm:150px md:200px lg:300px" class="member-img" v-bind:src="getImage()" :alt="name" loading="lazy"/>
            <span class="name">{{name}}</span>
            <span v-if=nickname class="nickname">{{nickname}}</span>
            <div v-if="role" class="role" v-for="_role in String(role).split('&')">
                <span v-if=_role.trim()>{{_role}}</span>
            </div>
        </div>
</template>
<style>

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 1rem; */
}
.member-img{
    border-radius: 50%;
}
.name{
    margin: 0.75rem;
    font-size: 3rem;
    font-weight: bold;
}
.nickname{
    margin: 0.25rem 0 1rem 0;
    font-size: 2rem;
    font-weight:500;
}
.aka{
    margin: -0.8rem;
    font-size: 1.8rem;
    font-weight:500;
}
.role{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    font-size: 2rem;
}
</style>
<script>

    export default{
        name:"card",
        props:["name", "image_file", "role", "nickname"],
        data(){
            const getImage = () =>{
                return `/members/${this.image_file}`
            }
            return{
                getImage
            }
        }
    }
</script>