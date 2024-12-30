export type Item = {
  id: string;
  label: string;
  available: boolean;
  description: string;
  price: number;
  itemType: string;
  displayOrder: number;
};

export type Section = {
  id: string;
  label: string;
  available: boolean;
  description: string;
  displayOrder: number;
  items: Item[];
};

export type Modifier = {
  id: string;
  label: string;
  priceOverride: number;
  displayOrder: number;
  defaultQuantity: number;
};

export type ModifierGroup = {
  id: string;
  label: string;
  selectionRequiredMin: number;
  selectionRequiredMax: number;
  modifiers: Modifier[];
};
