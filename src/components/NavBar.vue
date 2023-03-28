<template>
    <nav>
        <img src="../assets/logo-pause-natty.png" alt="">
        <a href="#section-concept">Notre concept</a>
        <a href="#section-valeurs">Nos valeurs</a>
        <a href="#section-calories">Compteur de calories</a>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;
    background-color: antiquewhite;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
}

nav a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    margin-right: 20px;
    transition: all 0.2s ease-in-out;
}

nav a:hover {
    color: #000;
    font-weight: bold;
    background-color: white;
    padding: 5px 10px;
    border-radius: 10px;
}

nav a:not(:hover) {
    opacity: 0.5;
}

nav img {
    width: 128px;
}
</style>