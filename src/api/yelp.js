import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Rl2PrPtU5t5vwkaOcv6moUJOOcO0FCr-4RKlAdIBu2i3H9tCCipZdpZr_tYRAysk88eVy777jUfFYNDFXSCtQ2fJmFq7I04BTe03JjvggH66Es_1kFZcB1U0dnXdXXYx'
  }
})