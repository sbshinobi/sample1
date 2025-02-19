// // // // // import React, { useState } from "react";
// // // // // import Logo from "../assets/logo.svg";
// // // // // import { MdMenu } from "react-icons/md";
// // // // // import { FaCartShopping } from "react-icons/fa6";
// // // // // import { Link } from "react-router-dom";

// // // // // function Navbar() {
// // // // //   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
// // // // //   const [isProductDropdownVisible, setIsProductDropdownVisible] =
// // // // //     useState(false);

// // // // //   const toggleDropdown = () => {
// // // // //     setIsDropdownVisible(!isDropdownVisible);
// // // // //   };

// // // // //   const toggleProductDropdown = () => {
// // // // //     setIsProductDropdownVisible(!isProductDropdownVisible);
// // // // //   };

// // // // //   const handleLinkClick = () => {
// // // // //     setIsDropdownVisible(false);
// // // // //   };

// // // // //   const handleProductSelect = () => {
// // // // //     setIsProductDropdownVisible(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md">
// // // // //       <div className="navbar-start">
// // // // //         <div className="dropdown dropdown-bottom md:hidden mr-2">
// // // // //           <div
// // // // //             tabIndex={0}
// // // // //             role="button"
// // // // //             className="btn btn-ghost"
// // // // //             onClick={toggleDropdown}
// // // // //           >
// // // // //             <MdMenu className="text-6xl font-bold text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer" />
// // // // //           </div>
// // // // //           <ul
// // // // //             tabIndex={0}
// // // // //             className={`menu menu-sm dropdown-content bg-black text-white rounded-box mb-3 w-36 shadow-xl border-opacity-60 ${
// // // // //               isDropdownVisible ? "block" : "hidden"
// // // // //             } z-40`}
// // // // //           >
// // // // //             <li>
// // // // //               <Link
// // // // //                 to="/"
// // // // //                 className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //                 onClick={handleLinkClick}
// // // // //               >
// // // // //                 Home
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li>
// // // // //               <button
// // // // //                 className="w-full text-left p-2 hover:bg-gray-700"
// // // // //                 onClick={toggleProductDropdown}
// // // // //               >
// // // // //                 Products
// // // // //               </button>
// // // // //               <ul
// // // // //                 className={`p-2 ${
// // // // //                   isProductDropdownVisible ? "block" : "hidden"
// // // // //                 } `}
// // // // //               >
// // // // //                 <li>
// // // // //                   <Link
// // // // //                     to="/surfboards"
// // // // //                     className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //                     onClick={handleProductSelect}
// // // // //                   >
// // // // //                     Surfboards
// // // // //                   </Link>
// // // // //                 </li>
// // // // //                 <li>
// // // // //                   <Link
// // // // //                     to="/bagpack"
// // // // //                     className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //                     onClick={handleProductSelect}
// // // // //                   >
// // // // //                     Backpacks
// // // // //                   </Link>
// // // // //                 </li>
// // // // //               </ul>
// // // // //             </li>
// // // // //             <li className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 mt-2">
// // // // //               <Link
// // // // //                 to="/blog"
// // // // //                 className="hover:underline"
// // // // //                 onClick={handleLinkClick}
// // // // //               >
// // // // //                 Blog
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 mt-2">
// // // // //               <Link
// // // // //                 to="/about"
// // // // //                 className="hover:underline"
// // // // //                 onClick={handleLinkClick}
// // // // //               >
// // // // //                 About Us
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 mt-2">
// // // // //               <Link
// // // // //                 to="/contact"
// // // // //                 className="hover:underline"
// // // // //                 onClick={handleLinkClick}
// // // // //               >
// // // // //                 Contact
// // // // //               </Link>
// // // // //             </li>
// // // // //           </ul>
// // // // //         </div>

// // // // //         <Link to="/" className="md:mx-[5rem]">
// // // // //           <img
// // // // //             src={Logo}
// // // // //             alt="Logo"
// // // // //             className="h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
// // // // //           />
// // // // //         </Link>
// // // // //       </div>

// // // // //       <div className="navbar-center hidden md:flex">
// // // // //         <ul className="menu menu-horizontal px-1">
// // // // //           <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300">
// // // // //             <Link to="/">Home</Link>
// // // // //           </li>

// // // // //           <li className="relative">
// // // // //             <button
// // // // //               className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //               onClick={toggleProductDropdown}
// // // // //             >
// // // // //               Products
// // // // //             </button>
// // // // //             <ul
// // // // //               className={`${
// // // // //                 isProductDropdownVisible ? "block" : "hidden"
// // // // //               } p-2 absolute left-0  bg-black text-white rounded-md shadow-lg w-40 transition-all transform duration-300 ease-out mt-14`}
// // // // //             >
// // // // //               <li>
// // // // //                 <Link
// // // // //                   to="/surfboards"
// // // // //                   className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //                   onClick={handleProductSelect}
// // // // //                 >
// // // // //                   Surfboards
// // // // //                 </Link>
// // // // //               </li>
// // // // //               <li>
// // // // //                 <Link
// // // // //                   to="/bagpack"
// // // // //                   className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //                   onClick={handleProductSelect}
// // // // //                 >
// // // // //                   Backpacks
// // // // //                 </Link>
// // // // //               </li>
// // // // //             </ul>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link
// // // // //               to="/blog"
// // // // //               className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //             >
// // // // //               Blog
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link
// // // // //               to="/about"
// // // // //               className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //             >
// // // // //               About Us
// // // // //             </Link>
// // // // //           </li>

// // // // //           <li>
// // // // //             <Link
// // // // //               to="/contact"
// // // // //               className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // // //             >
// // // // //               Contact
// // // // //             </Link>
// // // // //           </li>
// // // // //         </ul>
// // // // //       </div>

// // // // //       <span className="navbar-end">
// // // // //         <Link to="/cart">
// // // // //           <FaCartShopping className="text-2xl md:opacity-50 md:hover:opacity-100 cursor-pointer mr-8 md:mr-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300" />
// // // // //         </Link>
// // // // //       </span>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Navbar;


// // // // import React, { useState } from "react";
// // // // import Logo from "../assets/logo.svg"; // Logo for the site
// // // // import { MdMenu } from "react-icons/md"; // Menu icon for mobile
// // // // import { FaShoppingCart, FaCommentDots } from "react-icons/fa"; // Cart and Chat icons from react-icons
// // // // import { Link } from "react-router-dom"; // React Router for navigation

// // // // function Navbar() {
// // // //   // States for managing dropdown visibility, chat window state, and user messages
// // // //   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
// // // //   const [isProductDropdownVisible, setIsProductDropdownVisible] = useState(false);
// // // //   const [isChatOpen, setIsChatOpen] = useState(false);
// // // //   const [messages, setMessages] = useState([]); // Holds chat messages
// // // //   const [inputMessage, setInputMessage] = useState(""); // Holds input message

// // // //   // Predefined answers for common questions
// // // //   const qna = {
// // // //     "size": "Our surfboards come in various sizes ranging from 5'6\" for beginners to 9'0\" for advanced riders.",
// // // //     "material": "Our boards are made from high-quality epoxy resin and carbon fiber reinforcement.",
// // // //     "care": "Rinse with fresh water after use and store in a cool, dry place away from direct sunlight.",
// // // //     "warranty": "All boards come with a 2-year manufacturer's warranty against defects.",
// // // //     "shipping": "We offer worldwide shipping with 5-7 business days delivery time."
// // // //   };

// // // //   // Handle sending messages and generating bot responses
// // // //   const handleSendMessage = () => {
// // // //     if (!inputMessage.trim()) return; // Prevent sending empty messages
    
// // // //     // Add user message
// // // //     const newMessage = { text: inputMessage, isBot: false };
// // // //     setMessages(prev => [...prev, newMessage]);
    
// // // //     // Find bot response based on message
// // // //     const lowerMessage = inputMessage.toLowerCase();
// // // //     let response = "Thank you for your question. Our team will get back to you shortly.";
    
// // // //     // Check if the message matches predefined questions and provide answers
// // // //     Object.keys(qna).forEach(key => {
// // // //       if (lowerMessage.includes(key)) {
// // // //         response = qna[key];
// // // //       }
// // // //     });

// // // //     // Add bot's response with delay to simulate chatbot response time
// // // //     setTimeout(() => {
// // // //       setMessages(prev => [...prev, { text: response, isBot: true }]);
// // // //     }, 1000);

// // // //     // Clear input after sending message
// // // //     setInputMessage("");
// // // //   };

// // // //   // Toggle dropdown visibility for mobile view
// // // //   const toggleDropdown = () => {
// // // //     setIsDropdownVisible(!isDropdownVisible);
// // // //   };

// // // //   // Toggle product dropdown visibility
// // // //   const toggleProductDropdown = () => {
// // // //     setIsProductDropdownVisible(!isProductDropdownVisible);
// // // //   };

// // // //   // Handle link click to close dropdown after selecting
// // // //   const handleLinkClick = () => {
// // // //     setIsDropdownVisible(false);
// // // //   };

// // // //   // Handle product selection and closing product dropdown
// // // //   const handleProductSelect = () => {
// // // //     setIsProductDropdownVisible(false);
// // // //   };

// // // //   return (
// // // //     <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md">
// // // //       {/* Navbar Start */}
// // // //       <div className="navbar-start">
// // // //         {/* Mobile Menu Button */}
// // // //         <div className="dropdown dropdown-bottom md:hidden mr-2">
// // // //           <div
// // // //             tabIndex={0}
// // // //             role="button"
// // // //             className="btn btn-ghost"
// // // //             onClick={toggleDropdown} // Toggle the dropdown when clicked
// // // //           >
// // // //             <MdMenu className="text-6xl font-bold text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer" />
// // // //           </div>

// // // //           {/* Dropdown Menu for mobile */}
// // // //           <ul
// // // //             tabIndex={0}
// // // //             className={`menu menu-sm dropdown-content bg-black text-white rounded-box mb-3 w-36 shadow-xl border-opacity-60 ${
// // // //               isDropdownVisible ? "block" : "hidden"
// // // //             } z-40`}
// // // //           >
// // // //             {/* Menu Items */}
// // // //             <li>
// // // //               <Link
// // // //                 to="/"
// // // //                 className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // //                 onClick={handleLinkClick}
// // // //               >
// // // //                 Home
// // // //               </Link>
// // // //             </li>
// // // //             {/* Product Dropdown */}
// // // //             <li>
// // // //               <button
// // // //                 className="w-full text-left p-2 hover:bg-gray-700"
// // // //                 onClick={toggleProductDropdown} // Toggle product dropdown
// // // //               >
// // // //                 Products
// // // //               </button>
// // // //               <ul
// // // //                 className={`p-2 ${
// // // //                   isProductDropdownVisible ? "block" : "hidden"
// // // //                 } `}
// // // //               >
// // // //                 <li>
// // // //                   <Link
// // // //                     to="/surfboards"
// // // //                     className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // //                     onClick={handleProductSelect}
// // // //                   >
// // // //                     Surfboards
// // // //                   </Link>
// // // //                 </li>
// // // //                 <li>
// // // //                   <Link
// // // //                     to="/bagpack"
// // // //                     className="hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // //                     onClick={handleProductSelect}
// // // //                   >
// // // //                     Backpacks
// // // //                   </Link>
// // // //                 </li>
// // // //               </ul>
// // // //             </li>

// // // //             {/* Other Links */}
// // // //             <li>
// // // //               <Link
// // // //                 to="/blog"
// // // //                 className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // //               >
// // // //                 Blog
// // // //               </Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link
// // // //                 to="/about"
// // // //                 className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // //               >
// // // //                 About Us
// // // //               </Link>
// // // //             </li>
// // // //             <li>
// // // //               <Link
// // // //                 to="/contact"
// // // //                 className="transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
// // // //               >
// // // //                 Contact
// // // //               </Link>
// // // //             </li>
// // // //           </ul>
// // // //         </div>

// // // //         {/* Logo in Navbar */}
// // // //         <Link to="/" className="md:mx-[5rem]">
// // // //           <img
// // // //             src={Logo}
// // // //             alt="Logo"
// // // //             className="h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
// // // //           />
// // // //         </Link>
// // // //       </div>

// // // //       {/* Navbar Center for Desktop */}
// // // //       <div className="navbar-center hidden md:flex">
// // // //         <ul className="menu menu-horizontal px-1">
// // // //           {/* Desktop Navigation Links */}
// // // //           <li>
// // // //             <Link to="/">Home</Link>
// // // //           </li>
// // // //           <li className="relative">
// // // //             <button
// // // //               onClick={toggleProductDropdown} // Toggle the dropdown for products
// // // //             >
// // // //               Products
// // // //             </button>
// // // //             <ul
// // // //               className={`${
// // // //                 isProductDropdownVisible ? "block" : "hidden"
// // // //               } p-2 absolute left-0  bg-black text-white rounded-md shadow-lg w-40 transition-all transform duration-300 ease-out mt-14`}
// // // //             >
// // // //               <li>
// // // //                 <Link
// // // //                   to="/surfboards"
// // // //                   onClick={handleProductSelect}
// // // //                 >
// // // //                   Surfboards
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link
// // // //                   to="/bagpack"
// // // //                   onClick={handleProductSelect}
// // // //                 >
// // // //                   Backpacks
// // // //                 </Link>
// // // //               </li>
// // // //             </ul>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/blog">Blog</Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/about">About Us</Link>
// // // //           </li>
// // // //           <li>
// // // //             <Link to="/contact">Contact</Link>
// // // //           </li>
// // // //         </ul>
// // // //       </div>

// // // //       {/* Cart Icon */}
// // // //       <span className="navbar-end">
// // // //         <Link to="/cart">
// // // //           <FaShoppingCart className="text-2xl md:opacity-50 md:hover:opacity-100 cursor-pointer mr-8 md:mr-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300" />
// // // //         </Link>
// // // //       </span>
      
// // // //       {/* Chat Icon */}
// // // //       <span className="navbar-end flex items-center gap-4">
// // // //         <button 
// // // //           onClick={() => setIsChatOpen(!isChatOpen)}
// // // //           className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
// // // //         >
// // // //           <FaCommentDots className="text-2xl mr-4" />
// // // //           {!isChatOpen && (
// // // //             <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
// // // //               Live
// // // //             </span>
// // // //           )}
// // // //         </button>
// // // //       </span>

// // // //       {/* Chat Window */}
// // // //       {isChatOpen && (
// // // //         <div className="fixed bottom-20 right-4 md:right-20 w-80 h-96 bg-white shadow-xl rounded-t-lg flex flex-col border border-gray-200">
// // // //           <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
// // // //             <h3 className="font-bold">Surfboard Assistant</h3>
// // // //             <button 
// // // //               onClick={() => setIsChatOpen(false)}
// // // //               className="hover:text-gray-200"
// // // //             >
// // // //               ×
// // // //             </button>
// // // //           </div>
          
// // // //           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
// // // //             {messages.map((msg, index) => (
// // // //               <div 
// // // //                 key={index}
// // // //                 className={`p-3 rounded-lg ${msg.isBot ? 
// // // //                   "bg-white text-gray-800 self-start" : 
// // // //                   "bg-blue-600 text-white self-end"}`}
// // // //                 style={{ maxWidth: '90%', marginLeft: msg.isBot ? '0' : 'auto' }}
// // // //               >
// // // //                 {msg.text}
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="p-4 border-t border-gray-200 flex gap-2">
// // // //             <input
// // // //               type="text"
// // // //               value={inputMessage}
// // // //               onChange={(e) => setInputMessage(e.target.value)}
// // // //               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
// // // //               placeholder="Ask about surfboards..."
// // // //               className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //             />
// // // //             <button
// // // //               onClick={handleSendMessage}
// // // //               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
// // // //             >
// // // //               Send
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Navbar;



















// // // import React, { useState } from "react";
// // // import Logo from "../assets/logo.svg";
// // // import { MdMenu } from "react-icons/md";
// // // import { FaShoppingCart, FaCommentDots } from "react-icons/fa";
// // // import { Link } from "react-router-dom";

// // // function Navbar() {
// // //   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
// // //   const [isProductDropdownVisible, setIsProductDropdownVisible] = useState(false);
// // //   const [isChatOpen, setIsChatOpen] = useState(false);
// // //   const [messages, setMessages] = useState([]);
// // //   const [inputMessage, setInputMessage] = useState("");
// // //   const [isBotTyping, setIsBotTyping] = useState(false);

// // //   const qna = {
// // //     size: "Our surfboards come in various sizes ranging from 5'6\" for beginners to 9'0\" for advanced riders.",
// // //     material: "Our boards are made from high-quality epoxy resin and carbon fiber reinforcement.",
// // //     care: "Rinse with fresh water after use and store in a cool, dry place away from direct sunlight.",
// // //     warranty: "All boards come with a 2-year manufacturer's warranty against defects.",
// // //     shipping: "We offer worldwide shipping with 5-7 business days delivery time.",
// // //   };

// // //   const handleSendMessage = () => {
// // //     if (!inputMessage.trim()) return;

// // //     // Add user message
// // //     const newMessage = { text: inputMessage, isBot: false };
// // //     setMessages((prev) => [...prev, newMessage]);

// // //     // Find bot response
// // //     const lowerMessage = inputMessage.toLowerCase();
// // //     let response = "Thank you for your question. Our team will get back to you shortly.";

// // //     Object.keys(qna).forEach((key) => {
// // //       if (lowerMessage.includes(key)) {
// // //         response = qna[key];
// // //       }
// // //     });

// // //     // Clear input
// // //     setInputMessage("");

// // //     // Simulate bot typing
// // //     setIsBotTyping(true);
// // //     setTimeout(() => {
// // //       setMessages((prev) => [...prev, { text: response, isBot: true }]);
// // //       setIsBotTyping(false);
// // //     }, 1000);
// // //   };

// // //   const toggleDropdown = () => {
// // //     setIsDropdownVisible(!isDropdownVisible);
// // //   };

// // //   const toggleProductDropdown = () => {
// // //     setIsProductDropdownVisible(!isProductDropdownVisible);
// // //   };

// // //   const handleLinkClick = () => {
// // //     setIsDropdownVisible(false);
// // //   };

// // //   const handleProductSelect = () => {
// // //     setIsProductDropdownVisible(false);
// // //   };

// // //   return (
// // //     <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md px-4 md:px-8">
// // //       {/* Mobile Menu */}
// // //       <div className="navbar-start">
// // //         <div className="dropdown md:hidden">
// // //           <div tabIndex={0} className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
// // //             <MdMenu className="text-3xl text-black" />
// // //           </div>
// // //           <ul
// // //             tabIndex={0}
// // //             className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
// // //               isDropdownVisible ? "block" : "hidden"
// // //             }`}
// // //           >
// // //             <li>
// // //               <Link to="/" onClick={handleLinkClick}>
// // //                 Home
// // //               </Link>
// // //             </li>
// // //             <li>
// // //               <a className="justify-between" onClick={toggleProductDropdown}>
// // //                 Products
// // //                 {isProductDropdownVisible ? "▲" : "▼"}
// // //               </a>
// // //               <ul className={`pl-4 ${isProductDropdownVisible ? "block" : "hidden"}`}>
// // //                 <li>
// // //                   <Link to="/surfboards" onClick={handleProductSelect}>
// // //                     Surfboards
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link to="/bagpack" onClick={handleProductSelect}>
// // //                     Backpacks
// // //                   </Link>
// // //                 </li>
// // //               </ul>
// // //             </li>
// // //             <li>
// // //               <Link to="/blog">Blog</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/about">About Us</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/contact">Contact</Link>
// // //             </li>
// // //           </ul>
// // //         </div>

// // //         {/* Logo */}
// // //         <Link to="/" className="ml-2 md:ml-0">
// // //           <img src={Logo} alt="Logo" className="h-10 w-32" />
// // //         </Link>
// // //       </div>

// // //       {/* Desktop Navigation */}
// // //       <div className="navbar-center hidden md:flex">
// // //         <ul className="menu menu-horizontal gap-2">
// // //           <li>
// // //             <Link to="/" className="px-4 py-2">
// // //               Home
// // //             </Link>
// // //           </li>
// // //           <li className="dropdown dropdown-hover">
// // //             <label className="px-4 py-2 cursor-pointer">Products</label>
// // //             <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
// // //               <li>
// // //                 <Link to="/surfboards">Surfboards</Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/bagpack">Backpacks</Link>
// // //               </li>
// // //             </ul>
// // //           </li>
// // //           <li>
// // //             <Link to="/blog" className="px-4 py-2">
// // //               Blog
// // //             </Link>
// // //           </li>
// // //           <li>
// // //             <Link to="/about" className="px-4 py-2">
// // //               About Us
// // //             </Link>
// // //           </li>
// // //           <li>
// // //             <Link to="/contact" className="px-4 py-2">
// // //               Contact
// // //             </Link>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Icons */}
// // //       <div className="navbar-end gap-4">
// // //         <Link to="/cart" className="btn btn-ghost btn-circle">
// // //           <FaShoppingCart className="text-xl" />
// // //         </Link>
// // //         <div className="relative">
// // //           <button onClick={() => setIsChatOpen(!isChatOpen)} className="btn btn-ghost btn-circle">
// // //             <FaCommentDots className="text-xl" />
// // //             {!isChatOpen && <span className="absolute top-0 right-0 badge badge-xs badge-primary"></span>}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Chat Window */}
// // //       {isChatOpen && (
// // //         <div className="fixed bottom-20 right-4 md:right-8 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
// // //           <div className="flex items-center justify-between p-4 border-b">
// // //             <h3 className="font-bold">Surfboard Assistant</h3>
// // //             <button onClick={() => setIsChatOpen(false)} className="btn btn-sm btn-circle btn-ghost">
// // //               ✕
// // //             </button>
// // //           </div>

// // //           <div className="flex-1 overflow-y-auto p-4 space-y-2">
// // //             {messages.map((msg, index) => (
// // //               <div key={index} className={`chat ${msg.isBot ? "chat-start" : "chat-end"}`}>
// // //                 <div className={`chat-bubble ${msg.isBot ? "" : "chat-bubble-primary"}`}>{msg.text}</div>
// // //               </div>
// // //             ))}
// // //             {isBotTyping && (
// // //               <div className="chat chat-start">
// // //                 <div className="chat-bubble flex items-center space-x-1">
// // //                   <div className="typing-dot animate-bounce"></div>
// // //                   <div className="typing-dot animate-bounce delay-100"></div>
// // //                   <div className="typing-dot animate-bounce delay-200"></div>
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           <div className="p-4 border-t">
// // //             <div className="flex gap-2">
// // //               <input
// // //                 type="text"
// // //                 value={inputMessage}
// // //                 onChange={(e) => setInputMessage(e.target.value)}
// // //                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
// // //                 placeholder="Ask about surfboards..."
// // //                 className="input input-bordered flex-1"
// // //               />
// // //               <button onClick={handleSendMessage} className="btn btn-primary">
// // //                 Send
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Navbar;




// // import React, { useState, useRef } from "react";
// // import Logo from "../assets/logo.svg";
// // import { MdMenu } from "react-icons/md";
// // import { FaShoppingCart, FaCommentDots } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
// //   const [isProductDropdownVisible, setIsProductDropdownVisible] = useState(false);
// //   const [isChatOpen, setIsChatOpen] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [inputMessage, setInputMessage] = useState("");
// //   const [isBotTyping, setIsBotTyping] = useState(false);

// //   const chatIconRef = useRef(null); // Ref to track the chat icon's position

// //   const qna = {
// //     size: "Our surfboards come in various sizes ranging from 5'6\" for beginners to 9'0\" for advanced riders.",
// //     material: "Our boards are made from high-quality epoxy resin and carbon fiber reinforcement.",
// //     care: "Rinse with fresh water after use and store in a cool, dry place away from direct sunlight.",
// //     warranty: "All boards come with a 2-year manufacturer's warranty against defects.",
// //     shipping: "We offer worldwide shipping with 5-7 business days delivery time.",
// //   };

// //   const handleSendMessage = () => {
// //     if (!inputMessage.trim()) return;

// //     // Add user message
// //     const newMessage = { text: inputMessage, isBot: false };
// //     setMessages((prev) => [...prev, newMessage]);

// //     // Find bot response
// //     const lowerMessage = inputMessage.toLowerCase();
// //     let response = "Thank you for your question. Our team will get back to you shortly.";

// //     Object.keys(qna).forEach((key) => {
// //       if (lowerMessage.includes(key)) {
// //         response = qna[key];
// //       }
// //     });

// //     // Clear input
// //     setInputMessage("");

// //     // Simulate bot typing
// //     setIsBotTyping(true);
// //     setTimeout(() => {
// //       setMessages((prev) => [...prev, { text: response, isBot: true }]);
// //       setIsBotTyping(false);
// //     }, 1000);
// //   };

// //   const toggleDropdown = () => {
// //     setIsDropdownVisible(!isDropdownVisible);
// //   };

// //   const toggleProductDropdown = () => {
// //     setIsProductDropdownVisible(!isProductDropdownVisible);
// //   };

// //   const handleLinkClick = () => {
// //     setIsDropdownVisible(false);
// //   };

// //   const handleProductSelect = () => {
// //     setIsProductDropdownVisible(false);
// //   };

// //   return (
// //     <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md px-4 md:px-8">
// //       {/* Mobile Menu */}
// //       <div className="navbar-start">
// //         <div className="dropdown md:hidden">
// //           <div tabIndex={0} className="btn btn-ghost btn-circle" onClick={toggleDropdown}>
// //             <MdMenu className="text-3xl text-black" />
// //           </div>
// //           <ul
// //             tabIndex={0}
// //             className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
// //               isDropdownVisible ? "block" : "hidden"
// //             }`}
// //           >
// //             <li>
// //               <Link to="/" onClick={handleLinkClick}>
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <a className="justify-between" onClick={toggleProductDropdown}>
// //                 Products
// //                 {isProductDropdownVisible ? "▲" : "▼"}
// //               </a>
// //               <ul className={`pl-4 ${isProductDropdownVisible ? "block" : "hidden"}`}>
// //                 <li>
// //                   <Link to="/surfboards" onClick={handleProductSelect}>
// //                     Surfboards
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/bagpack" onClick={handleProductSelect}>
// //                     Backpacks
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </li>
// //             <li>
// //               <Link to="/blog">Blog</Link>
// //             </li>
// //             <li>
// //               <Link to="/about">About Us</Link>
// //             </li>
// //             <li>
// //               <Link to="/contact">Contact</Link>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Logo */}
// //         <Link to="/" className="ml-2 md:ml-0">
// //           <img src={Logo} alt="Logo" className="h-10 w-32" />
// //         </Link>
// //       </div>

// //       {/* Desktop Navigation */}
// //       <div className="navbar-center hidden md:flex">
// //         <ul className="menu menu-horizontal gap-2">
// //           <li>
// //             <Link to="/" className="px-4 py-2">
// //               Home
// //             </Link>
// //           </li>
// //           <li className="dropdown dropdown-hover">
// //             <label className="px-4 py-2 cursor-pointer">Products</label>
// //             <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
// //               <li>
// //                 <Link to="/surfboards">Surfboards</Link>
// //               </li>
// //               <li>
// //                 <Link to="/bagpack">Backpacks</Link>
// //               </li>
// //             </ul>
// //           </li>
// //           <li>
// //             <Link to="/blog" className="px-4 py-2">
// //               Blog
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/about" className="px-4 py-2">
// //               About Us
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/contact" className="px-4 py-2">
// //               Contact
// //             </Link>
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Icons */}
// //       <div className="navbar-end gap-4">
// //         <Link to="/cart" className="btn btn-ghost btn-circle">
// //           <FaShoppingCart className="text-xl" />
// //         </Link>
// //         <div className="relative" ref={chatIconRef}>
// //           <button onClick={() => setIsChatOpen(!isChatOpen)} className="btn btn-ghost btn-circle">
// //             <FaCommentDots className="text-xl" />
// //             {!isChatOpen && <span className="absolute top-0 right-0 badge badge-xs badge-primary"></span>}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Chat Window */}
// //       {isChatOpen && (
// //         <div
// //           className="fixed md:absolute md:bottom-20 md:right-8 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col"
// //           style={{
// //             top: chatIconRef.current ? chatIconRef.current.getBoundingClientRect().bottom + window.scrollY + 10 : "auto",
// //             right: "1rem", // Adjust as needed for mobile
// //           }}
// //         >
// //           <div className="flex items-center justify-between p-4 border-b">
// //             <h3 className="font-bold">Surfboard Assistant</h3>
// //             <button onClick={() => setIsChatOpen(false)} className="btn btn-sm btn-circle btn-ghost">
// //               ✕
// //             </button>
// //           </div>

// //           <div className="flex-1 overflow-y-auto p-4 space-y-2">
// //             {messages.map((msg, index) => (
// //               <div key={index} className={`chat ${msg.isBot ? "chat-start" : "chat-end"}`}>
// //                 <div className={`chat-bubble ${msg.isBot ? "" : "chat-bubble-primary"}`}>{msg.text}</div>
// //               </div>
// //             ))}
// //             {isBotTyping && (
// //               <div className="chat chat-start">
// //                 <div className="chat-bubble flex items-center space-x-1">
// //                   <div className="typing-dot animate-bounce"></div>
// //                   <div className="typing-dot animate-bounce delay-100"></div>
// //                   <div className="typing-dot animate-bounce delay-200"></div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           <div className="p-4 border-t">
// //             <div className="flex gap-2">
// //               <input
// //                 type="text"
// //                 value={inputMessage}
// //                 onChange={(e) => setInputMessage(e.target.value)}
// //                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
// //                 placeholder="Ask about surfboards..."
// //                 className="input input-bordered flex-1"
// //               />
// //               <button onClick={handleSendMessage} className="btn btn-primary">
// //                 Send
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Navbar;

// import React, { useState, useRef } from "react";
// import Logo from "../assets/logo.svg";
// import { MdMenu } from "react-icons/md";
// import { FaShoppingCart, FaCommentDots } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [isProductDropdownVisible, setIsProductDropdownVisible] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isBotTyping, setIsBotTyping] = useState(false);

//   const chatIconRef = useRef(null); // Ref to track the chat icon's position

//   const qna = {
//     size: "Our surfboards come in various sizes ranging from 5'6\" for beginners to 9'0\" for advanced riders.",
//     material: "Our boards are made from high-quality epoxy resin and carbon fiber reinforcement.",
//     care: "Rinse with fresh water after use and store in a cool, dry place away from direct sunlight.",
//     warranty: "All boards come with a 2-year manufacturer's warranty against defects.",
//     shipping: "We offer worldwide shipping with 5-7 business days delivery time.",
//   };

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return;

//     // Add user message
//     const newMessage = { text: inputMessage, isBot: false };
//     setMessages((prev) => [...prev, newMessage]);

//     // Find bot response
//     const lowerMessage = inputMessage.toLowerCase();
//     let response = "Thank you for your question. Our team will get back to you shortly.";

//     Object.keys(qna).forEach((key) => {
//       if (lowerMessage.includes(key)) {
//         response = qna[key];
//       }
//     });

//     // Clear input
//     setInputMessage("");

//     // Simulate bot typing
//     setIsBotTyping(true);
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { text: response, isBot: true }]);
//       setIsBotTyping(false);
//     }, 1000);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   const toggleProductDropdown = () => {
//     setIsProductDropdownVisible(!isProductDropdownVisible);
//   };

//   const handleLinkClick = () => {
//     setIsDropdownVisible(false);
//   };

//   const handleProductSelect = () => {
//     setIsProductDropdownVisible(false);
//   };

//   return (
//     <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md px-4 md:px-8">
//       {/* Mobile Menu */}
//       <div className="navbar-start">
//         <div className="dropdown md:hidden">
//           <div
//             tabIndex={0}
//             className="btn btn-ghost btn-circle"
//             onClick={toggleDropdown}
//             onKeyDown={(e) => e.key === "Enter" && toggleDropdown()}
//           >
//             <MdMenu className="text-3xl text-black" />
//           </div>
//           <ul
//             tabIndex={0}
//             className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 transition-all ease-in-out duration-300 transform ${isDropdownVisible ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-2"}`}
//           >
//             <li>
//               <NavLink
//                 to="/"
//                 onClick={handleLinkClick}
//                 className="px-4 py-2"
//                 activeClassName="font-bold text-primary"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <a className="justify-between" onClick={toggleProductDropdown}>
//                 Products
//                 {isProductDropdownVisible ? "▲" : "▼"}
//               </a>
//               <ul className={`pl-4 ${isProductDropdownVisible ? "block" : "hidden"}`}>
//                 <li>
//                   <NavLink
//                     to="/surfboards"
//                     onClick={handleProductSelect}
//                     activeClassName="font-bold text-primary"
//                   >
//                     Surfboards
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/bagpack"
//                     onClick={handleProductSelect}
//                     activeClassName="font-bold text-primary"
//                   >
//                     Backpacks
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <NavLink
//                 to="/blog"
//                 className="px-4 py-2"
//                 activeClassName="font-bold text-primary"
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className="px-4 py-2"
//                 activeClassName="font-bold text-primary"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className="px-4 py-2"
//                 activeClassName="font-bold text-primary"
//               >
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Logo */}
//         <Link to="/" className="ml-2 md:ml-0">
//           <img src={Logo} alt="Logo" className="h-10 w-32" />
//         </Link>
//       </div>

//       {/* Desktop Navigation */}
//       <div className="navbar-center hidden md:flex">
//         <ul className="menu menu-horizontal gap-2">
//           <li>
//             <NavLink
//               to="/"
//               className="px-4 py-2"
//               activeClassName="font-bold text-primary"
//             >
//               Home
//             </NavLink>
//           </li>
//           <li className="dropdown dropdown-hover">
//             <label className="px-4 py-2 cursor-pointer">Products</label>
//             <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
//               <li>
//                 <NavLink
//                   to="/surfboards"
//                   activeClassName="font-bold text-primary"
//                 >
//                   Surfboards
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/bagpack"
//                   activeClassName="font-bold text-primary"
//                 >
//                   Backpacks
//                 </NavLink>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <NavLink
//               to="/blog"
//               className="px-4 py-2"
//               activeClassName="font-bold text-primary"
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="px-4 py-2"
//               activeClassName="font-bold text-primary"
//             >
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="px-4 py-2"
//               activeClassName="font-bold text-primary"
//             >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Icons */}
//       <div className="navbar-end gap-4">
//         <Link to="/cart" className="btn btn-ghost btn-circle">
//           <FaShoppingCart className="text-xl" />
//         </Link>
//         <div className="relative" ref={chatIconRef}>
//           <button onClick={() => setIsChatOpen(!isChatOpen)} className="btn btn-ghost btn-circle">
//             <FaCommentDots className="text-xl" />
//             {!isChatOpen && <span className="absolute top-0 right-0 badge badge-xs badge-primary"></span>}
//           </button>
//         </div>
//       </div>

//       {/* Chat Window */}
//       {isChatOpen && (
//         <div
//           className="fixed md:absolute md:bottom-20 md:right-8 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col"
//           style={{
//             top: chatIconRef.current ? chatIconRef.current.getBoundingClientRect().bottom + window.scrollY + 10 : "auto",
//             right: "1rem", // Adjust as needed for mobile
//           }}
//         >
//           <div className="flex items-center justify-between p-4 border-b">
//             <h3 className="font-bold">Surfboard Assistant</h3>
//             <button onClick={() => setIsChatOpen(false)} className="btn btn-sm btn-circle btn-ghost">
//               ✕
//             </button>
//           </div>

//           <div className="flex-1 overflow-y-auto p-4 space-y-2">
//             {messages.map((msg, index) => (
//               <div key={index} className={`chat ${msg.isBot ? "chat-start" : "chat-end"}`}>
//                 <div className={`chat-bubble ${msg.isBot ? "" : "chat-bubble-primary"}`}>{msg.text}</div>
//               </div>
//             ))}
//             {isBotTyping && (
//               <div className="chat chat-start">
//                 <div className="chat-bubble flex items-center space-x-1">
//                   <div className="typing-dot animate-bounce"></div>
//                   <div className="typing-dot animate-bounce delay-100"></div>
//                   <div className="typing-dot animate-bounce delay-200"></div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="p-4 border-t">
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder="Ask about surfboards..."
//                 className="input input-bordered flex-1"
//               />
//               <button onClick={handleSendMessage} className="btn btn-primary">
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;



import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { MdMenu } from "react-icons/md";
import { FaShoppingCart, FaCommentDots } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isProductDropdownVisible, setIsProductDropdownVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatIconRef = useRef(null);

  const qna = {
    size: "Our surfboards come in various sizes ranging from 5'6\" for beginners to 9'0\" for advanced riders.",
    material: "Our boards are made from high-quality epoxy resin and carbon fiber reinforcement.",
    care: "Rinse with fresh water after use and store in a cool, dry place away from direct sunlight.",
    warranty: "All boards come with a 2-year manufacturer's warranty against defects.",
    shipping: "We offer worldwide shipping with 5-7 business days delivery time.",
  };

  // Reset messages when chat closes
  useEffect(() => {
    if (!isChatOpen) {
      setMessages([]);
    }
  }, [isChatOpen]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { text: inputMessage, isBot: false };
    setMessages((prev) => [...prev, newMessage]);

    const lowerMessage = inputMessage.toLowerCase();
    let response = "Thank you for your question. Our team will get back to you shortly.";

    Object.keys(qna).forEach((key) => {
      if (lowerMessage.includes(key)) {
        response = qna[key];
      }
    });

    setInputMessage("");
    setIsBotTyping(true);
    
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
      setIsBotTyping(false);
    }, 1000);
  };

  const closeAllDropdowns = () => {
    setIsDropdownVisible(false);
    setIsProductDropdownVisible(false);
  };

  return (
    <div className="navbar bg-base-100 w-full z-50 sticky top-0 shadow-md px-4 md:px-8">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          >
            <MdMenu className="text-3xl text-black" />
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
              isDropdownVisible ? "block" : "hidden"
            }`}
          >
            <li>
              <NavLink
                to="/"
                onClick={closeAllDropdowns}
                className={({ isActive }) => 
                  `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <details open={isProductDropdownVisible}>
                <summary
                  onClick={() => setIsProductDropdownVisible(!isProductDropdownVisible)}
                  className="justify-between"
                >
                  Products
                  {isProductDropdownVisible ? "▲" : "▼"}
                </summary>
                <ul>
                  <li>
                    <NavLink
                      to="/surfboards"
                      onClick={closeAllDropdowns}
                      className={({ isActive }) => 
                        `${isActive ? "font-bold text-primary" : ""}`
                      }
                    >
                      Surfboards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/bagpack"
                      onClick={closeAllDropdowns}
                      className={({ isActive }) => 
                        `${isActive ? "font-bold text-primary" : ""}`
                      }
                    >
                      Backpacks
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={closeAllDropdowns}
                className={({ isActive }) => 
                  `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeAllDropdowns}
                className={({ isActive }) => 
                  `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeAllDropdowns}
                className={({ isActive }) => 
                  `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="ml-2 md:ml-0">
          <img src={Logo} alt="Logo" className="h-10 w-32" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown dropdown-hover">
            <label className="px-4 py-2 cursor-pointer">Products</label>
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  to="/surfboards"
                  className={({ isActive }) => 
                    `${isActive ? "font-bold text-primary" : ""}`
                  }
                >
                  Surfboards
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bagpack"
                  className={({ isActive }) => 
                    `${isActive ? "font-bold text-primary" : ""}`
                  }
                >
                  Backpacks
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `px-4 py-2 ${isActive ? "font-bold text-primary" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className="navbar-end gap-4">
        <Link to="/cart" className="btn btn-ghost btn-circle">
          <FaShoppingCart className="text-xl" />
        </Link>
        <div className="relative" ref={chatIconRef}>
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)} 
            className="btn btn-ghost btn-circle"
          >
            <FaCommentDots className="text-xl" />
            {!isChatOpen && <span className="absolute top-0 right-0 badge badge-xs badge-primary"></span>}
          </button>
        </div>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 md:bottom-20 md:right-8 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-bold">Surfboard Assistant</h3>
            <button 
              onClick={() => setIsChatOpen(false)} 
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className={`chat ${msg.isBot ? "chat-start" : "chat-end"}`}>
                <div className={`chat-bubble ${msg.isBot ? "" : "chat-bubble-primary"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isBotTyping && (
              <div className="chat chat-start">
                <div className="chat-bubble flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask about surfboards..."
                className="input input-bordered flex-1"
              />
              <button onClick={handleSendMessage} className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;