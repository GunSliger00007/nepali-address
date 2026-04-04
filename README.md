# 🇳🇵 nepali-address
The definitive, type-safe dataset and utility library for Nepal's administrative divisions. Built with TypeScript for modern Node.js environments.

## 🚀 Installation

Install the package using your preferred package manager:

```bash
# npm
npm install nepali-address

# pnpm
pnpm add nepali-address

# yarn
yarn add nepali-address

# bun
bun add nepali-address
```

# 📖 Usage

### Provinces
Retrieve all provinces or find a specific one by its ID or ISO code.

```javascript
import { getProvinces, getProvinceByISOCode } from 'nepali-address';

// Get all provinces
const provinces = getProvinces();

// Get Lumbini Province by ISO code
const lumbini = getProvinceByISOCode('NP-P5');
console.log(lumbini.name_ne); // लुम्बिनी
```

### Districts
Filter districts by their parent province or lookup by Postcode/ID.

```javascript
import { getDistrictsByProvince, getDistrictByPostcode } from 'nepal-address';

// Get all districts in Bagmati (Province ID: 3)
const bagmatiDistricts = getDistrictsByProvince(3);

// Find a district by Postcode
const kathmandu = getDistrictByPostcode("44600");
console.log(kathmandu.name); // Kathmandu
```
