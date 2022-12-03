import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  return (
    <header>
        <div className="lodge-header" id="lodge-header">
            <div className="container py-6 mx-auto">
                <div className="grid grid-cols-2">
                    <Logo size="w-6" text="text-sm uppercase text-black text-lg font-bold" />
                    <Navigation />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header