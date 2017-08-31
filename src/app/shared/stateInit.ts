export interface CustomerPhoto {
  name: string,
  directory: string
  }

enum syncStatuses {
  'unpaired',
  'pairing',
  'paired'
  }

enum postSyncActions {
  'purchase',
  'share'
  }

interface stateStore {
  customer_present: boolean;
  product: { 
    data?: any;
    error?: boolean;
    sizes?: string[];
    product_url?: string;
  };
  endpoint: { 
    get_product: string;  
    sync_to_phone: any;
  };
  sync_status: syncStatuses;
  socket_url: string;
  socketId?: string;
  post_sync_action?: postSyncActions;
  }

export const stateInit = {
  customer_present: false,
  product: {},
  endpoint: {
	  get_product: 'ec2-54-221-218-6.compute-1.amazonaws.com:3000/api/product',
	  sync_to_phone: 'ec2-54-221-218-6.compute-1.amazonaws.com:3000' 
	},
  sync_status: 'unpaired',
  socket_url: 'ec2-54-221-218-6.compute-1.amazonaws.com:4000',
  }

