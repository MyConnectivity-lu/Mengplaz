import { GuiValue } from '@greycat/web';

import './mengplaz-pagination.css';

export class MengplazPagination extends HTMLElement {
  private _total = 0;
  private _index = 0;
  private _currentId = '';
  private _indexDisplay = new GuiValue();
  private _idInput: HTMLInputElement | null = null;
  onNavigate: ((index: number) => void) | null = null;
  onIdSearch: ((id: string) => void) | null = null;

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
    this.render();
  }

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
    this._indexDisplay.value = value + 1;
  }

  get currentId(): string {
    return this._currentId;
  }

  set currentId(value: string) {
    this._currentId = value;
    if (this._idInput) {
      this._idInput.value = value;
    }
  }

  connectedCallback() {
    this.render();
  }

  private navigate(direction: -1 | 1) {
    this._index = (this._total + (this._index + direction)) % this._total;
    this._indexDisplay.value = this._index + 1;
    this.onNavigate?.(this._index);
  }

  private handleIdKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const input = e.target as HTMLInputElement;
      const id = input.value.trim();
      if (id && this.onIdSearch) {
        this.onIdSearch(id);
      }
    }
  }

  render() {
    this._indexDisplay.value = this._index + 1;

    this._idInput = (
      <input
        type="text"
        className="pagination-id-input"
        value={this._currentId}
        placeholder="ID"
        onkeydown={(e: KeyboardEvent) => this.handleIdKeyDown(e)}
      />
    ) as HTMLInputElement;

    this.replaceChildren(
      <>
        <sl-icon-button name="chevron-left" label="Previous" onclick={() => this.navigate(-1)} />
        <span className="pagination-info">
          {this._indexDisplay} of {this._total}
        </span>
        <span className="pagination-id-container">
          <span className="pagination-id-label">ID:</span>
          {this._idInput}
        </span>
        <sl-icon-button name="chevron-right" label="Next" onclick={() => this.navigate(1)} />
      </>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-pagination': MengplazPagination;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-pagination': GreyCat.Element<MengplazPagination>;
      }
    }
  }
}

if (!customElements.get('mengplaz-pagination')) {
  customElements.define('mengplaz-pagination', MengplazPagination);
}
