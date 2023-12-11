<template>
<div>
    <div class="cardeo">
        <div class="cardeo-header">
            Empleados
        </div>
        <div class="cardeo-body">
           <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="empleado in empleados" :key="empleado.id">
                    <td>{{empleado.id}}</td>
                    <td>{{empleado.nombre}}</td>
                    <td>{{empleado.correo}}</td>
                    <td>
                    <div class="btn-group" role="group" arial-label="">
                        <router-link to="Editar" params:id:empleado.id class="btn btn-info">Editar</router-link> 
                        <button type="button" v-on:click="borrarEmpleado(empleado.id)" class="btn btn-danger">Borrar</button>
                </div>
                    </td>
                </tr>
            </tbody>
           </table>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                empleados: []
            }
        },
        created:function() {
            this.consultarEmpleados();
        },
        methods: {
            consultarEmpleados() {
                fetch('http://localhost/index.php')
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.log(datosRespuesta)
                    this.empleados=[]
                    if(typeof datosRespuesta[0].success==='undefined') {
                        this.empleados=datosRespuesta;
                    }
                })
                .catch(console.log)
            },
            borrarEmpleado(id) {
                console.log(id);

                fetch('http://localhost/index.php/?borrar='+id)
                .then(respuesta=>respuesta.json())
                .then((datosRespuesta)=>{
                    console.log(datosRespuesta)
                    window.location.href="listar"
                })
                .catch(console.log)
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