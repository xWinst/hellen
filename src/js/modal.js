(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn2: document.querySelector('[data-modal-open2]'),
    openCertificate: document.querySelector('.about__link'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    certClose: document.querySelector('#certClose'),
    modal: document.querySelector('[data-modal]'),
    certificate: document.querySelector('#certificate'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openCertificate.addEventListener('click', toggleCert);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.certClose.addEventListener('click', toggleCert);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleCert() {
    refs.certificate.classList.toggle('is-hidden');
  }
})();
