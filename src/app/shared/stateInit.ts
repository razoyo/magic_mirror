export interface CustomerPhoto {
  name: string,
  directory: string
  }

enum syncStatuses {
  'unpaired',
  'pairing',
  'paired'
  }

interface stateStore {
  customer_present: boolean;
  product_available: boolean;
  endpoint: { get_product: string };  
  sync_status: syncStatuses;
  socket_url: string;
  socketId?: string;
  }

export const stateInit = {
  customer_present: false,
  product_available: false,
  endpoint: {
	  get_product: 'ec2-54-221-218-6.compute-1.amazonaws.com:3000/api/product' 
	},
  sync_status: 'unpaired',
  socket_url: 'ec2-54-221-218-6.compute-1.amazonaws.com:4000',
  }

