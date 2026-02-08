const texto = document.getElementById('textoCentro');
const btnComenzar = document.getElementById('btnComenzar');
const modal = document.getElementById('modal');
const btnSalir = document.getElementById('btnSalir');
const btnCopiar = document.getElementById('btnCopiar');
const mensajeInput = document.getElementById('mensaje');
const vistaMensaje = document.getElementById('vistaMensaje');
const mensajeFinal = document.getElementById('mensajeFinal');


const params = new URLSearchParams(window.location.search);
const key = params.get('m');

if (key) {
  const mensaje = localStorage.getItem(key);
  if (mensaje) {
    document.body.innerHTML = '';
    vistaMensaje.style.display = 'block';
    mensajeFinal.textContent = mensaje;
    document.body.appendChild(vistaMensaje);
  }
}

btnComenzar.addEventListener('click', () => {

  texto.classList.add('subir');

  btnComenzar.classList.add('oculto');

  modal.classList.add('activo');
}); 

btnSalir.addEventListener('click', () => {
  modal.classList.remove('activo');

  btnComenzar.classList.remove('oculto');
});

btnCopiar.addEventListener('click', () => {
  const mensaje = mensajeInput.value.trim();
  if (!mensaje) {
    alert('ᴇꜱᴄʀɪʙᴇ ᴜɴ ᴍᴇɴꜱᴀᴊᴇ.. ☁');
    return;
  }

  const key = 'fixx_' + Math.random().toString(36).substring(2, 10);
  localStorage.setItem(key, mensaje);

  const url = `${window.location.origin}${window.location.pathname}?m=${key}`;
  navigator.clipboard.writeText(url);

  alert(
    'ᴜʀʟ ᴄᴏᴘɪᴀᴅᴀ, ᴇɴᴠɪᴀʟᴀ ᴀ ᴇꜱᴀ ᴘᴇʀꜱᴏɴᴀ\n' +
    'ᴘᴏᴅʀᴀ ᴠᴇʀ ᴇʟ ᴍᴇɴꜱᴀᴊᴇ Qᴜᴇ ʟᴇ ᴇꜱᴄʀɪʙɪꜱᴛᴇ\n\n' +
    'ᴄᴏᴅɪɢᴏ --ꜰɪxx'
  );
});
