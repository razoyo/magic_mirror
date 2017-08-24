export interface CustomerPhoto {
  name: string,
  directory: string
  }

export const stateInit = {
  customer_present: false,
  product_available: false,
  paired_to_phone: false,
  endpoint: {
	  get_product: 'ec2-54-221-218-6.compute-1.amazonaws.com:3000/api/product' 
	},
  socket_url: 'ec2-54-221-218-6.compute-1.amazonaws.com:4000',
  }

