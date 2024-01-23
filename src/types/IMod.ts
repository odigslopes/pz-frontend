interface ModComponent {
  id: string;
  modId: string;
  description: string;
  isEnabled: boolean;
  isRequired: boolean;
  steamModId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMod {
  id: string;
  externalId: string;
  title: string;
  description: string;
  imageUrl: string;
  workshopUrl: string;
  modCreatedAt: string;
  modUpdatedAt: string;
  createdAt: string;
  updatedAt: string;
  modComponents: ModComponent[];
}
