/**
 * Modal Component
 * Reusable modal component for displaying dialogs
 */

class Modal {
  constructor(options = {}) {
    this.title = options.title || 'Modal Title';
    this.content = options.content || 'Modal content goes here.';
    this.id = options.id || 'modal-' + Date.now();
  }

  render() {
    const modalHTML = `
      <div id="${this.id}" class="modal">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">${this.title}</h2>
            <button class="modal-close" aria-label="Close modal">&times;</button>
          </div>
          <div class="modal-body">
            ${this.content}
          </div>
          <div class="modal-footer">
            <button class="modal-btn modal-btn-secondary">Cancel</button>
            <button class="modal-btn modal-btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    `;
    return modalHTML;
  }

  open() {
    const modalElement = document.getElementById(this.id);
    if (modalElement) {
      modalElement.classList.add('active');
    }
  }

  close() {
    const modalElement = document.getElementById(this.id);
    if (modalElement) {
      modalElement.classList.remove('active');
    }
  }

  mount() {
    document.body.insertAdjacentHTML('beforeend', this.render());
  }
}

export default Modal;
