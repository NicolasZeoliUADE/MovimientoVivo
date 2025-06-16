document.addEventListener('DOMContentLoaded', function() {
  const formContainer = document.querySelector('.form-card');
  if (formContainer) {
    formContainer.style.backgroundColor = '#e2e6ea';
  }

  const emptyMessages = {
    nombre: "¡El nombre es requerido!",
    email: "¡El correo electrónico es requerido!",
    asunto: "¡Por favor ingrese un asunto!",
    mensaje: "¡El mensaje no puede estar vacío!"
  };

  const constraints = {
    nombre: {
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
      error: "Solo letras y espacios (2-50 caracteres)"
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: "Ingrese un correo válido"
    },
    asunto: {
      pattern: /^[\s\S]{5,100}$/,
      error: "Requiere 5-100 caracteres"
    },
    mensaje: {
      pattern: /^[\s\S]{10,500}$/,
      error: "Requiere 10-500 caracteres"
    }
  };

  Object.keys(constraints).forEach(fieldId => {
    const input = document.getElementById(fieldId);
    const errorElement = input.nextElementSibling;

    input.addEventListener('input', () => {
      validateField(input, errorElement, constraints[fieldId]);
    });
  });

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let isFormValid = true;

    Object.keys(constraints).forEach(fieldId => {
      const input = document.getElementById(fieldId);
      const errorElement = input.nextElementSibling;
      
      if (!validateField(input, errorElement, constraints[fieldId])) {
        isFormValid = false;
      }
    });

if (isFormValid) {
    const userName = document.getElementById('nombre').value.trim();
    const toast = document.getElementById('successToast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = `¡${userName}, muchas gracias por suscribirte a nuestro newsletter!`;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 7000);
    
    this.reset();
}
  });

  function validateField(input, errorElement, constraint) {
    let isValid;
    let errorMessage = '';
    
    if (input.value.trim() === '') {
      isValid = false;
      errorMessage = emptyMessages[input.id]; 
    } else {
      isValid = constraint.pattern.test(input.value);
      errorMessage = isValid ? '' : constraint.error;
    }

  input.style.borderColor = isValid ? '#28a745' : '#dc3545';
  errorElement.style.display = errorMessage ? 'block' : 'none';
  errorElement.textContent = errorMessage;
  return isValid;
  }
});