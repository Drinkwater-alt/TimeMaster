<template>
    <div class="container">
        <div class="spherical">
            <span>+</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
}
.spherical {
    border-radius: 50%;
    background-color: rgb(56, 87, 245);
    width: 7rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);

}
span {
    color: #fff;
    font-size: 6rem;
    font-weight: 300;
}
</style>