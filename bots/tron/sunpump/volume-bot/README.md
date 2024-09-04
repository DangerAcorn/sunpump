# Acorn Volume Bot - Setup and Usage

Acorn Volume Bot is designed for SunPump tokens on the Tron network. It automates the buying process using multiple wallets and specific transaction parameters. Below is a guide to help you set it up and run the bot.

## Setup

### 1. Open project folder in VSCode or File Explorer

```bash
cd dangeracorn-buy
```

### 2. Install Dependencies
You can install the required packages by running the following command:
```bash
yarn
```

### 3. Set ENV Variables

```
MODE=test                 # Set the mode (don't worry about this for now)
TOKEN_ADDRESS=            # SunPump token address
MAIN_WALLET_PRIVATE_KEY=  # Private key of your main wallet
NUMBER_OF_WALLETS=5       # Number of wallets to use
TARGET_VOLUME_TRX=1000    # Target trading volume in TRX
MIN_BUY_AMOUNT_TRX=20     # Minimum buy amount in TRX per transaction
MAX_BUY_AMOUNT_TRX=200    # Maximum buy amount in TRX per transaction
MIN_BUY_DELAY=1000        # Minimum delay between buys in milliseconds
MAX_BUY_DELAY=10000       # Maximum delay between buys in milliseconds
IS_BUNDLE=false           # Currently not in use
RPC= 
API_KEY= 
SELL_ON_SNIPE=false       # Whether to sell on snipes
SLIPPAGE_MIN=1            # Minimum slippage percentage
SLIPPAGE_MAX=5            # Maximum slippage percentage
MAIN_WALLET_ADDRESS=      # Your main wallet address
```

### 4. Start the bot 
You will be greeted with a CLI GUI:
```
npm start
```
or
```
node src/index.js
```
### 5. Select Volume Bot  
```
     _                                    ____            _   
    / \      ___    ___    _ __   _ __   | __ )    ___   | |_ 
   / _ \    / __|  / _ \  | '__| | '_ \  |  _ \   / _ \  | __|
  / ___ \  | (__  | (_) | | |    | | | | | |_) | | (_) | | |_ 
 /_/   \_\  \___|  \___/  |_|    |_| |_| |____/   \___/   \__|

Welcome to the Acorn Tron CLI

? Please select an option: (Use arrow keys)

❯ 📊 VOLUME BOT 
- 💥 BLAST BOT (disabled)
- 🎯 SNIPER BOT (disabled)
- ☀️  SUN BUNDLER (disabled)

  Exit
```
And you will select ``❯ 📊 VOLUME BOT ``.

### 6. Use Blockchain Test Functions for Setup  
```
 __     _____  _    _   _ __  __ _____   ____   ___ _____
 \ \   / / _ \| |  | | | |  \/  | ____| | __ ) / _ \_   _|
  \ \ / / | | | |  | | | | |\/| |  _|   |  _ \| | | || |
   \ V /| |_| | |__| |_| | |  | | |___  | |_) | |_| || |
    \_/  \___/|_____\___/|_|  |_|_____| |____/ \___/ |_|

                 Discord @ dangeracorn
             https://t.me/+-0lO77c5Yy9iZGRh

? MAIN MENU
  Start Bundling
  Withdraw Funds
  Check Status
❯ Test Blockchain Functions
  Exit
```
And you will select ``❯ Test Blockchain Functions``.


### 7. Use Blockchain Test Functions for Setup  

```
? BLOCKCHAIN TEST MENU
  Approve Tokens
  Back to Main Menu
  Check Allowance
❯ Create Wallets
  Send TRX
  Get TRX Price
  Get Token Details
```

And you will select ``❯ Create Wallets``.

Wallets works like this:  # Set 1 Wallets * # Set 2 Wallets

So if you want to add 100 holders you can use 5 set one wallets * 21 set two wallets

Set one wallets do not buy tokens

### Volume.json = Local Wallet DB
You can view your wallets in the Project Structure Location:
```
├── average_response_times.txt
├── bin
│   ├── package-exe.js
│   └── package.json
├── dangeracorn-bot-linux
├── dangeracorn-bot-macos
├── generateStructure.js
├── package.json
├── src
│   ├── bots
│   │   ├── [DISABLED]
│   │   ├── [DISABLED]
│   │   ├── [DISABLED]
│   │   └── volume
│   │       ├── backend.js
│   │       ├── bot.js
│   │       ├── tests
│   │       │   ├── data
│   │       │   │   ├── checkAllowance.js
│   │       │   │   ├── getTokenBalance.js
│   │       │   │   ├── getTokenDetails.js
│   │       │   │   ├── getTokenPrice.js
│   │       │   │   ├── getTrxBalance.js
│   │       │   │   └── getTrxPrice.js
│   │       │   ├── functions
│   │       │   │   ├── approve.js
│   │       │   │   ├── checkAndSendFromMainToSet1.js
│   │       │   │   ├── checkAndSendFromSet1ToSet2.js
│   │       │   │   ├── createWallet.js
│   │       │   │   ├── disperseTokens.js
│   │       │   │   ├── sellTokens.js
│   │       │   │   ├── sendTokens.js
│   │       │   │   ├── sendTrx.js
│   │       │   │   ├── setupWallets.js
│   │       │   │   ├── swap.js
│   │       │   │   ├── trade.js
│   │       │   │   └── withdrawFunds.js
│   │       │   ├── testMenu.js
│   │       │   └── volume.json
│   │       ├── volume copy.json
│   │       ├── volume.json ⬅️ Here is volume.json
│   │       └── volumeBot.js
│   ├── cli
│   │   ├── inputHandler.js
│   │   ├── menu.js
│   │   ├── outputHandler.js
│   │   └── pauseAndContinue.js
│   ├── config
│   │   └── config.js
│   ├── configLoader.js
│   ├── index.js
│   ├── modes
│   │   ├── production.js
│   │   └── test.js
│   ├── services
│   │   ├── blockService.js
│   │   ├── transactionService.js
│   │   └── tronService.js
│   └── utils
│       └── loading.js
├── tester
│   └── index.js
├── tests
│   ├── blockService.test.js
│   ├── transactionService.test.js
│   └── tronService.test.js
```


