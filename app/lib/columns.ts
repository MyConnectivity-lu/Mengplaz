import type { TemplateResult } from 'lit';

// Declarative column model shared by the table components. `kind` drives default
// alignment and cell formatting; `render` overrides the cell entirely.

export type ColKind = 'text' | 'num';

export interface Column<T> {
  key: keyof T & string;
  label: string;
  kind?: ColKind;
  align?: 'left' | 'right';
  /** CSS width for the column (table-layout is fixed). */
  width?: string;
  /** Let the header sort on this column. Honoured by `mp-virtual-table`. */
  sortable?: boolean;
  render?: (row: T) => TemplateResult | string;
}

const nfmt = new Intl.NumberFormat();

export function formatCell<T>(col: Column<T>, row: T): TemplateResult | string {
  if (col.render) {
    return col.render(row);
  }
  const v = row[col.key];
  if (v == null || v === '') {
    return '-';
  }
  if (col.kind === 'num') {
    return nfmt.format(Number(v));
  }
  return String(v);
}

export function align<T>(col: Column<T>): 'left' | 'right' {
  return col.align ?? (col.kind === 'num' ? 'right' : 'left');
}

/**
 * Compare two rows on one column. `dir` (1 ascending, -1 descending) flips only
 * the comparison between two real values: empty cells always sort last, so a
 * direction toggle never parks the blanks at the top.
 */
export function compareCell<T>(col: Column<T>, a: T, b: T, dir: 1 | -1): number {
  const av = a[col.key];
  const bv = b[col.key];
  const aEmpty = av == null || av === '';
  const bEmpty = bv == null || bv === '';
  if (aEmpty || bEmpty) {
    return aEmpty && bEmpty ? 0 : aEmpty ? 1 : -1;
  }
  if (col.kind === 'num') {
    return dir * (Number(av) - Number(bv));
  }
  return dir * String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: 'base' });
}
