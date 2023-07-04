import fs from 'fs';
import path from 'path';

import { it, vi, expect } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

it('should add an error paragraph to the id="errors" element', () => {
  showError('test');

  const errorsEl = document.getElementById('errors');
  const errorParangraph = errorsEl.firstElementChild;

  expect(errorParangraph).not.toBeNull();
})