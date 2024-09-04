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
