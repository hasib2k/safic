import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    amount,
    currency = 'BDT',
    donor_name,
    donor_email,
    donor_phone,
    donor_address,
    category,
  } = req.body;

  // SSLCommerz credentials
  const store_id = 'sulta687cd599e18fc';
  const store_passwd = 'sulta687cd599e18fc@ssl';

  // Success/Fail/Cancel URLs
  // Use dynamic base URL for local/dev/prod environments
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'safic.vercel.app';
  const baseUrl = `${protocol}://${host}`;
  const success_url = `${baseUrl}/donations/success`;
  const fail_url = `${baseUrl}/donations/fail`;
  const cancel_url = `${baseUrl}/donations/cancel`;

  // Prepare payload
  const payload = {
    store_id,
    store_passwd,
    total_amount: amount,
    currency,
    tran_id: `SAFIC-${Date.now()}`,
    success_url,
    fail_url,
    cancel_url,
    cus_name: donor_name,
    cus_email: donor_email,
    cus_add1: donor_address || '',
    cus_phone: donor_phone,
    value_a: category || '',
    product_category: 'Donation',
    product_profile: 'donation',
    product_name: 'SAFIC Donation',
  };

  try {
    // Debug: Log payload and request
    console.log('SSLCommerz payload:', payload);
    const response = await axios.post(
      'https://sandbox.sslcommerz.com/gwprocess/v3/api.php',
      payload,
      { headers: { 'Content-Type': 'application/json' } }
    );
    console.log('SSLCommerz response:', response.data);
    if (response.data && response.data.GatewayPageURL) {
      return res.status(200).json({ url: response.data.GatewayPageURL });
    } else {
      return res.status(400).json({ error: 'Failed to get payment URL', details: response.data });
    }
  } catch (error) {
    console.error('SSLCommerz error:', error);
    return res.status(500).json({ error: 'Payment initiation failed', details: error.message, stack: error.stack });
  }
}
