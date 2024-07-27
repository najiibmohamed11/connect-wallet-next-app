// global.d.ts
interface Ethereum {
  isMetaMask?: boolean;
  request: (args: { method: string; [key: string]: any }) => Promise<any>;
}

interface Window {
  ethereum?: Ethereum;
}
