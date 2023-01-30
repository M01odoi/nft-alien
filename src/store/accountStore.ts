import {defineStore} from 'pinia'
import {ref} from "vue";
import {ethers} from "ethers";
import {jsonAbi} from "@/abi/abi";
import { metamaskErrors } from "@/ts/errors/metamaskErrors";
import {contractAddress, chainId} from "@/ts/const/ethers.const";

export const useAccountStore = defineStore({
    id: 'user',
    state: () => ({
        address: ref('' as string),
        actualChainId: ref('' as string),
        balance: ref('0' as string),
        symbolToken: ref('MLD' as string),
        decimals: ref(0 as number),
        isLoading: ref(false as Boolean),
        popup: ref({
            isPopup: ref(false),
            statusPopup: ref(''),
            msgPopup: ref(''),
        }),
    }),
    actions: {
        async init () {
            try {
                const {ethereum} = window
                if (ethereum) {
                    const provider = new ethers.providers.Web3Provider(ethereum)
                    const erc20 = await new ethers.Contract(contractAddress, jsonAbi, provider)
                    this.address = ethereum.selectedAddress
                    this.actualChainId = ethereum.chainId
                    this.decimals = Math.pow(10, await erc20.functions.decimals())
                    this.symbolToken = await erc20.symbol()
                    await this.getBalance()
                }
            } catch (e: any) {
                this.isLoading = true
                this.showPopup('warning', metamaskErrors[e.code])
            }
        },
        async getBalance () {
            try {
                const {ethereum} = window
                if (ethereum) {
                    const provider = new ethers.providers.Web3Provider(ethereum)
                    const erc20 = await new ethers.Contract(contractAddress, jsonAbi, provider)
                    setInterval(async () => {
                        if (ethereum.chainId === chainId) {
                            this.address = ethereum.selectedAddress
                            this.actualChainId = ethereum.chainId
                            this.isLoading = false
                            this.balance = (await erc20.functions.balanceOf(this.address) / this.decimals).toFixed(2)
                        } else {
                            this.address = ethereum.selectedAddress
                            this.actualChainId = ethereum.chainId
                            this.isLoading=true
                        }
                    },1000)
                }
            } catch (e: any) {
                this.showPopup('error', metamaskErrors[e.code])
            }
        },
        convertToBigNumber (amount: number) {
            return (amount * this.decimals).toString()
        },
        async mint (amount: number) {
            this.isLoading = true
            try {
                const {ethereum} = window
                if (ethereum && ethereum.chainId === chainId) {
                    const provider = new ethers.providers.Web3Provider(ethereum)
                    const signer = provider.getSigner()
                    this.address = ethereum.selectedAddress
                    const erc20 = await new ethers.Contract(contractAddress, jsonAbi, signer)
                    await erc20.functions.mint(this.address, this.convertToBigNumber(amount))
                    this.showPopup('success')
                }
            } catch (e: any) {
                this.showPopup('error', metamaskErrors[e.code])
            }
            this.isLoading = false
        },
        async transferTo (address: string, amount: number) {
            this.isLoading = true
            try {
                const {ethereum} = window
                if (ethereum && ethereum.chainId === chainId) {
                    const provider = new ethers.providers.Web3Provider(ethereum)
                    const signer = provider.getSigner()
                    this.address = ethereum.selectedAddress
                    const erc20 = await new ethers.Contract(contractAddress, jsonAbi, signer)
                    await erc20.functions.transfer(address, this.convertToBigNumber(amount))
                    this.showPopup('success')
                }
            } catch (e: any) {
                this.showPopup('error', metamaskErrors[e.code])
            }
            this.isLoading = false

        },
        async connectWallet () {
            this.isLoading = true
            try {
                const {ethereum} = window
                if (ethereum) {
                    const provider = new ethers.providers.Web3Provider(ethereum)
                    await provider.send("eth_requestAccounts", [])
                    this.address = window.ethereum.selectedAddress
                    this.showPopup('success')
                }
            } catch (e: any) {
                this.showPopup('error', e.message)
            }
            this.isLoading = false
        },

        showPopup (status: string, message: string = '') {
            this.popup.isPopup = true
            this.popup.statusPopup = status
            this.popup.msgPopup = message
            this.hidePopup()
        },

        hidePopup () {
            setTimeout(() => {
                this.popup.isPopup = false
            }, 4000)
        },
    }
})
