<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Brand</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/login">Вход</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/reg">Регистрация</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
    
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
