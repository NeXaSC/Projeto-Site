const toggleButton = document.querySelector('#toggle-imc-table');
const sidebar = document.querySelector('#imc-sidebar');

toggleButton.addEventListener('click', () => {
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    toggleButton.innerText = 'Ocultar Tabela do IMC';
  } else {
    sidebar.style.display = 'none';
    toggleButton.innerText = 'Mostrar Tabela do IMC';
  }
});