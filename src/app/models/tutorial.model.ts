export interface Tutorial {
	name: string;
	url: string;
}

export interface ngxsAppStateModel {
	username: string;
	orderId?: number;
	status?: 'pending' | 'confirmed' | 'declined';
  }
  