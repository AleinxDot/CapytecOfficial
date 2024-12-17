$(document).ready(function() {
    $(".navbar-brand").click(function (e) { 
        e.preventDefault();
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").show();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-presentation").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".nav-link[href='#div-contacto']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-contacto").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".button-contactar").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-contacto").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".nav-link.active[href='#div-History']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").show();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-History").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".nav-link.active[href='#div-Planes']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").show();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-Planes").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(document).ready(function () {
        function navigateToSection(target) {
            const sections = [
                "#div-Estructura-Financiera",
                "#div-Estudio-Economico",
                "#div-contacto",
                ".home",
                "#div-catalogo",
            ];
    
            sections.forEach(section => {
                if (section === target) {
                    $(section).show();
                } else {
                    $(section).hide();
                }
            });
    
            if (target) {
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 100);
            }
        }
    
        $(".dropdown-item[href='#div-Estructura-Financiera']").click(function (e) {
            e.preventDefault();
            navigateToSection("#div-Estructura-Financiera");
        });
    
        $(".dropdown-item[href='#div-Estudio-Economico']").click(function (e) {
            e.preventDefault();
            navigateToSection("#div-Estudio-Economico");
        });
    });
    

    $(".nav-link.active[href='#div-catalogo']").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").hide();
        $("#div-catalogo").show();
        $('html, body').animate({
            scrollTop: $("#div-catalogo").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".btn-comprar").click(function (e) { 
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $("#div-catalogo").hide();
        e.preventDefault();
    });

    $(".footer-contacto").click(function (e) { 
        e.preventDefault();
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-contacto").offset().top 
        }, 100);
    });

    $(".footer-planes").click(function (e) { 
        e.preventDefault();
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-Planes").offset().top 
        }, 100);
    });

    // mostrar a detalle los integrantes
    $("#toggle-integrantes").click(function () {
        const fichas = $("#fichas-integrantes");
        fichas.toggleClass("d-none");

        if (fichas.hasClass("d-none")) {
            $(this).text("Mostrar Integrantes");
        } else {
            $(this).text("Ocultar Integrantes");
        }
    });

    $(".nav-link.active[href='#div-Estructura-Financiera']").click(function (e) {
        $("#div-Estructura-Financiera").show();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").hide();
        $(".home").hide();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-Estructura-Financiera").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".nav-link.active[href='#div-Estudio-Economico']").click(function (e) {
        $("#div-Estudio-Economico").show();
        $("#div-Estructura-Financiera").hide();
        $(".home").hide();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-Estudio-Economico").offset().top 
        }, 100);
        e.preventDefault();
    });

    $(".nav-link.active[href='#div-organigrama']").click(function (e) {
        $("#div-Estudio-Economico").hide();
        $("#div-Estructura-Financiera").hide();
        $(".home").show();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-organigrama").offset().top 
        }, 100);
        e.preventDefault();
    });

    $("#boton-contactar-cata").click(function (e) {
        $("#div-Estructura-Financiera").hide();
        $("#div-Estudio-Economico").hide();
        $("#div-contacto").show();
        $(".home").hide();
        $("#div-catalogo").hide();
        $('html, body').animate({
            scrollTop: $("#div-contacto").offset().top 
        }, 100);
        e.preventDefault();
    });

    $("#contact-form").submit(function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)
        
        var formData = {
            nombre: $("#nombre").val(),
            email: $("#email").val(),
            plan: $("#plan").val(),
            mensaje: $("#mensaje").val()
        };

        $.ajax({
            type: "POST",
            url: "php/enviar_contacto.php", // Ruta del archivo PHP en la carpeta /php
            data: formData,
            success: function(response) {
                $("#response-message").html("<p class='text-center'>Gracias por tu mensaje, te contactaremos pronto.</p>");
                $("#contact-form")[0].reset(); // Resetea el formulario
            },
            error: function() {
                $("#response-message").html("<p class='text-center'>Hubo un error al enviar el mensaje. Inténtalo nuevamente.</p>");
            }
        });
    });
});