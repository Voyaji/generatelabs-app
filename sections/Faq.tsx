import React, { Fragment, FunctionComponent } from 'react'
import Accordion from '../components/Accordion'
import Padding from '../components/Padding'

const Faq: FunctionComponent = () => {
    return (
        <Padding className='!py-32' id="faq">
            <h1 className='text-center font-spaceGrotesk font-bold text-6xl'>FAQ</h1>
            <div className='space-y-2 mt-28'>
                <Accordion
                    header={<Fragment><h1>Do I need an NFT to use <span className='underline'>GenerateLabs.App</span>?</h1></Fragment>}
                    body={<Fragment><div>
                        You do not need an NFT to use <span className='underline'>GenerateLabs.App</span>.
                        <br />
                        <br />
                        Simply use your Ethereum address to create an account and start to build. Ownership of a Generate Labs and Voyaji Official NFT will entail a user to Beta Access.
                    </div></Fragment>} />

                <Accordion
                    header={<Fragment><h1>What are the fees to use the App?</h1></Fragment>}
                    body={<Fragment><div>The rates start at 0.001 ETH for 1 Token. Standard Rates will soon be announced.</div></Fragment>}
                    theme='dark' />

                <Accordion
                    header={<Fragment><h1>How to sign-up for Beta?</h1></Fragment>}
                    body={<Fragment>
                        <div>
                            An Application Process will be rolled out for the Beta Access.
                            <br />
                            <br />
                            Holders of Generate Labs NFTs and Voyaji NFTs will be eligible for Beta Access.
                        </div>
                    </Fragment>} />

                <Accordion
                    header={<Fragment><h1>What are the benefits of Generate Labs NFT Holders?</h1></Fragment>}
                    body={<Fragment>
                        <div>
                            The NFT Holders will be able to hold exclusive Beta Access to the No Code Tool Software as well as access to the early build procedures  and updates of the project.
                            <br />
                            <br />
                            Get an exclusive early access to a community of artists, creators, builders and programs specifically catered towards on-boarding creatives into the Metaverse.

                            <br />
                            The users also hold Discounts and Special Privileges from the App with the ownership of the Non-Fungible Token.
                        </div>
                    </Fragment>}
                    theme="dark" />

                <Accordion
                    header={<Fragment><h1>Is the Software Compatible on all Desktop and Mobile Devices?</h1></Fragment>}
                    body={<Fragment>
                        <div>
                            The Software Application is compatible for Desktop use only at the moment.
                        </div>
                    </Fragment>} />

                <Accordion
                    header={<Fragment><h1>What are the Smart Contracts and the Programs that we can be able to create on the App?</h1></Fragment>}
                    body={<Fragment>
                        <div>
                            Generate NFT Tokens and NFT Collections from Separated .PNG Folders. Seamlessly create your Contracts that are necessary to launch your project.
                            <br />
                            <br />
                            Build and launch Mint Pages with the Site Builders that are available on the software.
                        </div>
                    </Fragment>}
                    theme="dark" />
            </div>
        </Padding>
    )
}

export default Faq