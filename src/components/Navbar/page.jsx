import Link from "next/link"


function Navbar() {
  return (
    <div className="flex w-full bg-red-700">
        <nav className="flex gap-7 w-full bg-yellow-400">

            <div className="bg-gray-600 w-full ml-2 justify-start flex ">
                <h1>Logo</h1>
            </div>

            <div>
                <ul className="flex bg-orange-300 gap-7 justify-end mr-2">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul> 
            </div>  

        </nav>
    </div>
  )
}

export default Navbar