# Wordana - Web Application Game

## Overview

Wordana is a web3-based application that combines word guessing and blockchain technology. Users can enjoy a word guessing game to win WRD tokens. The game offers both single-player and multiplayer modes.

Smart contract repo: (https://github.com/Havorahq/wordana-smart-contract)

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building web applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [BigNumber.js](https://github.com/MikeMcl/bignumber.js/): Handles large blockchain-related numbers with ease and precision.
- [rainbow-me/rainbowkit](https://github.com/rainbow-me/rainbowkit): Simplifies integration with popular wallets like MetaMask, Rainbow, and WalletConnect.
- [wagmi](https://github.com/example/wagmi): Offers a clean and abstracted API for interacting with smart contracts.
- [ethers.js](https://docs.ethers.io/v5/): Used for specific low-level interactions with the Ethereum blockchain.
- [API3 QRNG](https://api3.org/qrng/): Random number generator that provides dapps with truly random numbers based on quantum mechanics.
- [lightlink](https://www.lightlink.io/): Gasless blockchain network for enterprises and dapps.

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14+)
- npm or yarn

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/example/wordana.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. Configure environment:

    Create a `.env` file with the following content:

    ```env
    REACT_APP_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY
    CONTRACT_ADDRESS=0x... # replace with your smart contract address
    ```

4. Start development server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

## Deployment

The application can be deployed to Vercel or Netlify using their respective deployment commands. Refer to their documentation for specific instructions.

## Contributing

We welcome contributions! Please ensure your code adheres to our style guide and submit pull requests for review.

## Game Flow

### Home Page

- Users are prompted to connect their wallet.

### Single Player Mode

- Select a new game or daily word.
- Have 5 chances to guess the correct 5-letter word.
- Hints provided: Green tile (correct letter and place), Yellow tile (correct letter but wrong place), White tile (incorrect letter).

### Multiplayer Mode

- Input a valid wallet address and stake a WRD token.
- Both players start the game together.
- The first to guess the right word wins the staked token.
- If no one guesses the right word, there is no winner.

## Images

Below are images illustrating different aspects of the Wordana web application.

### Home Page

![Home Page](/public/images/home_page.png)

### Game Mode

![Game Mode](/public/images/game_mode.png)

### Single Player Mode

![Single Player Mode](/public/images/single_player.png)

### Multiplayer Mode - Invite

![Multiplayer Mode - Invite](/public/images/multi_player.png)

### Multiplayer Mode - Join Game

![Multiplayer Mode - Join Game](/public/images/join_game.png)


### Game Hints

![Game Hints](/public/images/game_hints.png)

###  Game Interface

<img width="1440" alt="game_interface" src="https://github.com/Havorahq/wordana/assets/36278808/c51c5df5-293b-41cf-a426-ab24ad0af86e">

###  Game Play

<img width="1440" alt="game_play" src="https://github.com/Havorahq/wordana/assets/36278808/aaeee462-1ec5-4e19-9508-bfb427e09697">

### Multiplayer Mode - Game Play

![Multiplayer Mode - Game Play](/public/images/multi_game_play.png)

###  Mode - Guess Right
<img width="1438" alt="Screenshot 2024-02-01 at 10 18 08 PM" src="https://github.com/Havorahq/wordana/assets/36278808/b9c1a64d-2d8b-4cf9-ba42-f6fe4137e8c3">

### Multiplayer Mode - You Win

<img width="1440" alt="multi_win" src="https://github.com/Havorahq/wordana/assets/36278808/3eda752f-9798-4a3d-8a6a-46854904c547">

### Player Wait
<img width="1440" alt="opp_wait" src="https://github.com/Havorahq/wordana/assets/36278808/a7485357-a92e-43ec-86db-87bce260ce27">



### Single Game Play - You Won
<img width="1440" alt="you_won" src="https://github.com/Havorahq/wordana/assets/36278808/c882ed80-c9dc-4c52-9109-3dfeb1dc3035">

### Single Game Play - You Lost

<img width="1440" alt="you_lost" src="https://github.com/Havorahq/wordana/assets/36278808/55f852e5-e01c-4a53-8d66-b652cfda423e">



## License

This project is licensed under the [MIT License](LICENSE).
