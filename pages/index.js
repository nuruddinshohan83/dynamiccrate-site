import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className="bg-gray-400 h-screen">
            <header>
                <nav>
                    <ul className="flex flex-row  justify-evenly items-center w-5/6 mx-auto text-xl font-bold border-2 border-solid text-white ">
                        <li className="mx-0 hover:bg-purple-800 hover:px-8 hover:py-2 hover:rounded-full hover:text-3xl ">
                            <a>Home</a>
                        </li>
                        <li className="mx-0 hover:bg-purple-800 hover:px-8 hover:py-2 hover:rounded-full hover:text-3xl ">
                            <a>Updates</a>
                        </li>
                        <li className="mx-0 hover:bg-purple-800 hover:px-8 hover:py-2 hover:rounded-full hover:text-3xl ">
                            <a>Vote</a>
                        </li>
                        <li className="mx-0 hover:bg-purple-800 hover:px-8 hover:py-2 hover:rounded-full hover:text-3xl  ">
                            <a>Play</a>
                        </li>
                        <li className="mx-0 hover:bg-purple-800 hover:px-8 hover:py-2 hover:rounded-full hover:text-3xl ">
                            <a>Staffs</a>
                        </li>
                        <li className="mx-0 hover:bg-purple-800 hover:px-8 hover:py-2 hover:rounded-full hover:text-3xl ">
                            <a>Bans</a>
                        </li>
                        <li className="mx-0 hover:bg-purple-800 hover:px-8 hover:py-2 hover:rounded-full hover:text-3xl ">
                            <a>Rules</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
