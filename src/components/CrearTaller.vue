<template>
<div>
    <div class="cardeo">
        <div class="cardeo-header">
            Agregar nuevo empleado
        </div>
        <div class="cardeo-body">
           <form v-on:submit.prevent="agregarRegistro">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" class="form-control" required name="nombre" v-model="empleado.nombre" id="nombre" aria-describedby="helpId" placeholder="Escribe el nombre del empleado">
                </div>

                <div class="form-group">
                    <label for="correo">Correo:</label>
                    <input type="email" class="form-control" required name="correo" v-model="empleado.correo" id="correo" aria-describedby="helpId" placeholder="Escribe el correo electrónico">
                </div>
                
                <div class="btn-group" role="group" arial-label="">
                    <button type="submit" class="btn btn-success">Agregar</button>
                    <router-link to="Listar" class="btn btn-warning">Cancelar</router-link>                   
                </div>

           </form>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                empleado:{}
            }
        },
        methods: {
            agregarRegistro() {
                console.log(this.empleado);

                var datosEnviar={nombre:this.empleado.nombre,correo:this.empleado.correo}
                fetch('http://localhost/index.php/?insertar=1',{
                    method:"POST",
                    body:JSON.stringify(datosEnviar)
                })
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta=>{
                    console.log(datosRespuesta);
                    window.location.href='listar'
                }))
            }
        }
    }
</script>

<style>
div .cardeo {
    width:1000px;
    float: center;
}
div .cardeo-header{
    text-align:center;
    font-size:20px;
}
</style>