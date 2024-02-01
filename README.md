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

 ### Single Player Mode - Win

![Single Player Mode - Win](/public/images/you_won.png)

### Single Player Mode - Lose

![Single Player Mode - Lose](/public/images/you_lost.png) 

 ### Single Player Mode - Game Play

![Single Player Mode - Game Play](/public/images/game_play.png) 

### Multiplayer Mode - Invite

![Multiplayer Mode - Invite](/public/images/multi_player.png)

### Multiplayer Mode - Join Game

![Multiplayer Mode - Join Game](/public/images/join_game.png)

### Multiplayer Mode - Game Play

![Multiplayer Mode - Game Play](/public/images/multi_game_play.png)

 ### Multiplayer Mode - Waiting Room

![Multiplayer Mode - Waiting Room](/public/images/opp_wait.png) 

 ### Multiplayer Mode - Result

![Multiplayer Mode - Result](/public/images/multi_win.png) 



### Game Hints

![Game Hints](/public/images/game_hints.png)

 ### Game Interface

![Game Interface](/public/images/game_interface.png) 

## License

This project is licensed under the [MIT License](LICENSE).
