# Blockradar Node.js SDK 🚀

[![GitHub stars](https://img.shields.io/github/stars/GeekyGeeky/blockradar-sdk?style=social&color=blue)](https://github.com/GeekyGeeky/blockradar-sdk)
[![npm total downloads](https://img.shields.io/npm/dt/blockradar-sdk?color=blue)](https://www.npmjs.com/package/blockradar-sdk)
[![npm version](https://img.shields.io/npm/v/blockradar-sdk?color=blue)](https://www.npmjs.com/package/blockradar-sdk)
[![License](https://img.shields.io/npm/l/blockradar-sdk?color=blue)](LICENSE)

A powerful SDK to interact with [Blockradar](https://docs.blockradar.co/api-reference/introduction) APIs seamlessly.

## 🌟 Features

- **Wallet Management**: Manage, and interact with wallets.
- **Asset Management**: Retrieves the assets associated with a specific wallet, add assets to wallet and more.
- **Address Operations**: Retrieve addresses associated with a specific wallet, withdrawal and more.
- **Transactions Management**: Fetch transactions, initiate a sweep of assets and more.
- **AML(Anti Money Laundering) Module**: Perform an anti-money laundering (AML) lookup for a given address and blockchain.
- **Auto Settlements Module**: Add a beneficiary to a specific wallet, fetch beneficiaries, and more.
- **Asset Recovery Module**: Calculates and returns the estimated network fee and more.
- **Payment Links Module**: create a payment link, retrieve links, and more.
- **Custom Smart Contracts**: Interacting with smart contracts on the blockchain.
- **Miscellaneous Module**: Additional operations & utilities.
- **Easy-to-Use API**: Designed for Node.js developers.
- **Type Safety**: Fully typed methods for params & responses.

## 📦 Installation

```sh
npm install blockradar-sdk
```

## 🚀 Quick Start

```js
const BlockRadar = require("blockradar-sdk");

// 👇🏽 for ES6 & TS

import BlockRadar from "blockradar-sdk";

// ----- Initialize the SDK ----------

const sdk = new BlockRadar(process.env.API_KEY, "<wallet_id>");

async function main() {
  const wallet = await sdk.wallet.retrieve();
  console.log("Wallet:", wallet);

  const balance = await sdk.address.getBalance({ addressId: "<addressid>" });
  console.log("Balance:", balance);
}

main();
```

---

## 📂 **Modules Overview**

### 1️⃣ **Wallet Module**

#### Retrieve wallet information

```js
(async () => {
  const wallet = await sdk.wallet.retrieve();
  console.log("Wallet: ", wallet);
})();
```

#### Update wallet information

```js
(async () => {
  const wallet = await sdk.wallet.updateWallet({ name: "", description: "" });
  console.log("Update wallet: ", wallet);
})();
```

### 2️⃣ **Asset Module**

#### Retrieve assets associated with a specific wallet

```js
(async () => {
  const assets = await sdk.asset.getWalletAssets();
  console.log("Wallet assets: ", assets);
})();
```

---

## 📌 **Development Progress**

| Features & Tasks             | Status         | Notes                                  |
| ---------------------------------- | -------------- | -------------------------------------- |
| BlockRadar API implementation                             | ✅ Done        | Supports creating and managing wallets, address operations, payment links, etc |
| README Docs                        | 🔄 In Progress | SDK usage docs       |
| Tests                              | 🔄 In Progress | Tests for each module       |
| Types & interfaces  | 🔄 In Progress     | Types & interfaces for all function params & responses         |
| Github workflow for npm package CD | ❌ Not Done | Planned for future updates             |

---

## **👨‍💻 Contributing – We Welcome PRs! 🤝**

We love contributions! If you have **suggestions, bug reports, or improvements**, feel free to open an issue or submit a pull request (PR).

### **📌 How to Contribute**

Follow these simple steps to **fork, edit, and submit a PR**:

#### **1️⃣ Fork the Repository**

Click the **"Fork"** button at the top right of the repo to create your own copy.

#### **2️⃣ Clone Your Fork**

Once forked, clone the repo to your local machine:

```sh
git clone https://github.com/your-username/repo-name.git
cd repo-name
```

#### **3️⃣ Create a New Branch**

Before making changes, create a new branch:

```sh
git checkout -b feature-or-bugfix-name
```

#### **4️⃣ Make Your Changes & Commit**

Edit the code, then commit your changes:

```sh
git add .
git commit -m "feat: Add awesome new feature"
```

#### **5️⃣ Push to Your Fork**

```sh
git push origin feature-or-bugfix-name
```

#### **6️⃣ Open a Pull Request (PR)**

- Go to the **original repo** on GitHub.
- Click **"Compare & pull request"**.
- Add a clear **title** and **description** of your changes.
- Click **"Create pull request"**! 🎉

---

### **✅ Contribution Guidelines**

✔ Keep PRs **focused** on one feature or fix.

✔ Follow the project’s **code style** & **linting rules**.

✔ Link any **related issues** in the PR description.

✔ Be **respectful & collaborative** in discussions.

---

## 📜 License

MIT License

---
