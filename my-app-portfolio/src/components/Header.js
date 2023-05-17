import React from "react";
// import NavTabs from './NavTabs';

export default function Header() {
    return (
        <div>

            <header className="App-header">
                <p>
                    <code>React Portfolio</code>
                </p>
                <a
                    className="App-link"
                    href="https://github.com/blairrrrwho"
                    target="_blank" rel="noopener noreferrer"
                >
                    <code>blair millet</code> <br></br><br></br>
                </a>

            </header>
            {/* <NavTabs /> */}
        </div>


    );
}


// HOW TO WRITE A COMPONENT -- WAY 1
// function Header () {
//     return (
//         <div>
//             <header className="header">
//             </header>
//         </div>
//     );
// }

// export default Header;



// HOW TO WRITE A COMPONENT -- WAY 2; ARROOW FUNCTION
// const Header = () => {
//     return (
//         <div>
//             <header className="header">
//             </header>
//         </div>
//     );
// }

// export default Header;


// HOW TO WRITE A COMPONENT -- WAY 3
// export default function Header () {
//     return (
//       <div>
//         <header className="header">
//         </header>
//       </div >
//     );
//   }