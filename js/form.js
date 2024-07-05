$(function() {

    $('#myForm').submit(function(e) {
        e.preventDefault();
        console.log('submit ativado')
        if (formularioPreenchido()) {
            console.log('Entando no if formulario preenchido')

            var form = $('#myForm');
            form.ajaxSubmit({
                beforeSubmit: function() {
                    form.find('[type=submit]').attr('disabled', 'true');
                    form.find('[type=submit]').animate({ 'opacity': '0.6' });
                    form.find('[type=submit]').attr('value', 'Carregando');
                    form.find('[type=submit]').css('cursor', 'wait');
                },
                success: function(data) {
                    //Aqui você pode inserir uma div, por exemplo.
                    //Qualquer message de sucesso, após o formulario ter sido enviado.
                    alert('Formulário foi enviado com sucesso!');
                    form.find('[type=submit]').removeAttr('disabled');
                    form.find('[type=submit]').animate({ 'opacity': '1' });
                    form.find('[type=submit]').attr('value', 'Enviar');
                    form.find('[type=submit]').css('cursor', 'pointer');
                    form[0].reset();
                    
                }
            });
        } else {
            alert("Campos Vázios não são permitidos!");
        }

        return false;
    });
    
    function formularioPreenchido() {
        var name = $('[name=name]').val();
        var email = $('[name=email]').val();
        var phone =$('[name=phone]').val();
        var message = $('[name=message]').val();

        if (name !== '' || email !== '' || message !== '' || phone !== '') {
            // se nome for identico a vazio 
            // ou email for identico a vazio
            // ou mensagem for identico a vazio
            return true;// retorne falso
        } else {// caso contrario 
            return false;// retorne verdadeiro
        }
    }

    // Função para formatar o phone
    function formatPhone(input) {
        var value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Adiciona parênteses ao DDD
        value = value.replace(/(\d)(\d{4})$/, '$1-$2'); // Adiciona o hífen no meio do número
        input.value = value;
    }

    // Adiciona o evento input ao campo phone
    document.getElementById('phone').addEventListener('input', function(e) {
        formatPhone(e.target);
    });

});
