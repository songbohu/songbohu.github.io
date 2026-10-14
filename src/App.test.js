import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('shows the complete publication list', () => {
  render(<App />);
  const section = screen.getByRole('region', { name: 'Publications' });
  expect(within(section).getAllByRole('listitem')).toHaveLength(14);
});

test('switches the caption and photo together from either hover target, touch, or keyboard', () => {
  render(<App />);
  const photo = screen.getByRole('button', { name: 'Show cycling photo' });
  const caption = screen.getByText('Usually at my desk. Sometimes');
  const ellipsis = screen.getByText('…');
  const completedCaption = screen.getByText('on my bike.');
  const workingImage = screen.getByAltText('Songbo Hu at his desk');
  const sendPointer = (type, pointerType, target = photo) => {
    const event = new Event(type, { bubbles: true });
    Object.defineProperty(event, 'pointerType', { value: pointerType });
    fireEvent(target, event);
  };
  expect(photo).toHaveAttribute('aria-pressed', 'false');
  sendPointer('pointerover', 'mouse', caption);
  expect(photo).toHaveAttribute('aria-pressed', 'true');
  expect(completedCaption).toHaveAttribute('aria-hidden', 'false');
  expect(workingImage).toHaveAttribute('aria-hidden', 'true');
  sendPointer('pointerout', 'mouse');
  expect(photo).toHaveAttribute('aria-pressed', 'false');
  expect(ellipsis).toHaveAttribute('aria-hidden', 'false');
  sendPointer('pointerover', 'mouse', workingImage);
  expect(photo).toHaveAttribute('aria-pressed', 'true');
  sendPointer('pointerout', 'mouse');

  sendPointer('pointerover', 'touch');
  expect(photo).toHaveAttribute('aria-pressed', 'false');
  sendPointer('pointerdown', 'touch');
  fireEvent.click(photo, { detail: 1 });
  expect(photo).toHaveAttribute('aria-pressed', 'true');
  fireEvent.click(photo, { detail: 1 });
  expect(photo).toHaveAttribute('aria-pressed', 'false');

  fireEvent.click(photo, { detail: 0 });
  expect(photo).toHaveAttribute('aria-pressed', 'true');
  fireEvent.blur(photo);
  expect(photo).toHaveAttribute('aria-pressed', 'false');
});
