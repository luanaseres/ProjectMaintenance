export interface Machine {
  id: number;
  name: string;
  type: string;
  location: string;
  model: string;
  manufactureDate: string;
  serialNumber: string;
}

export interface Maintenance {
  id: number;
  machineId: number;
  maintenanceDate: string;
  comments: string;
}