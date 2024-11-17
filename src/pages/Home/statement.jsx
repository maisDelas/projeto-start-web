// 'use client'

// import React, { useState } from 'react' 
// import { User } from 'lucide-react'

// const testimonials = [
//   {
//     quote: "A entrega foi rápida e o atendimento ao cliente, impecável. Vou recomendar para todas as minhas amigas!",
//     author: "Ana Costa"
//   },
//   {
//     quote: "Minhas vendas cresceram muito desde que comecei. Muito gratificante fazer parte dessa rede que fortalece o empreendedorismo feminino!",
//     author: "Carol Silva"
//   },
//   {
//     quote: "Encantada com a qualidade e o carinho dos produtos, é gratificante apoiar mulheres empreendedoras a cada compra!",
//     author: "Maria Souza"
//   }
// ]

// const NavigationButton = ({ direction, onClick }) => (
//   <button onClick={onClick} className={`nav-button ${direction}`} aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} testimonial`}>
//     <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M57 27.8092C57 22.3091 55.3285 16.9325 52.1969 12.3593C49.0653 7.78611 44.6142 4.22173 39.4065 2.11692C34.1988 0.0121155 28.4684 -0.538601 22.9399 0.534424C17.4115 1.60744 12.3333 4.25601 8.34747 8.1452C4.36167 12.0344 1.64731 16.9895 0.54763 22.3839C-0.552048 27.7784 0.0123482 33.3699 2.16945 38.4513C4.32654 43.5328 7.97946 47.876 12.6663 50.9317C17.3531 53.9874 22.8632 55.6184 28.5 55.6184C36.0587 55.6184 43.3078 52.6885 48.6525 47.4733C53.9973 42.2581 57 35.1847 57 27.8092ZM44.7857 29.7956H20.0518L31.4111 40.9332L28.5 43.7002L12.2143 27.8092L28.5 11.9183L31.4111 14.7528L20.0518 25.8229H44.7857V29.7956Z" fill="#E35D1C"/>
//     </svg>
//   </button>
// )

// export default function TestimonialCarousel() {
//   const [startIndex, setStartIndex] = useState(0)

//   const nextSlide = () => {
//     setStartIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevSlide = () => {
//     setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   const visibleTestimonials = [
//     testimonials[startIndex],
//     testimonials[(startIndex + 1) % testimonials.length],
//     testimonials[(startIndex + 2) % testimonials.length]
//   ]

//   return (
//     <div className="box">
//       <div className="group">
//         <svg 
//           className="wave" 
//           viewBox="0 0 1440 200" 
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//         >
//           <path 
//             d="M0,128L80,133.3C160,139,320,149,480,144C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" 
//             fill="#fff"
//           />
//         </svg>
//         <div className="content">
//           <h2 className="text-wrapper-9">Leia o que nossos clientes dizem:</h2>
//           <div className="testimonial-container">
//             {visibleTestimonials.map((testimonial, index) => (
//               <div key={index} className={`testimonial-card ${index === 1 ? 'middle-card' : ''}`}>
//                 <div className="overlap-group">
//                   <div className="rectangle" />
//                   <div className="div" />
//                   <div className="ellipse">
//                     <User className="w-12 h-12 text-gray-400" />
//                   </div>
//                   <div className="text-wrapper">- {testimonial.author}</div>
//                   <p className="p">{testimonial.quote}</p>
//                   <span className="quote-left">"</span>
//                   <span className="quote-right">"</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <NavigationButton direction="prev" onClick={prevSlide} />
//           <NavigationButton direction="next" onClick={nextSlide} />
//         </div>
//       </div>
//       <style jsx>{`
//         .box {
//           min-height: 732px;
//           position: relative;
//           width: 100%;
//           background-color: #F4AD58;
//           overflow: hidden;
//         }
//         .group {
//           min-height: 732px;
//           left: 0;
//           position: relative;
//           top: 0;
//           width: 100%;
//         }
//         .wave {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 200px;
//         }
//         .content {
//           position: relative;
//           padding-top: 150px;
//           z-index: 1;
//         }
//         .text-wrapper-9 {
//           color: #ffffff;
//           font-family: var(--h-2-font-family);
//           font-size: 36px;
//           font-style: var(--h-2-font-style);
//           font-weight: var(--h-2-font-weight);
//           letter-spacing: var(--h-2-letter-spacing);
//           line-height: 1.2;
//           text-align: center;
//           margin-bottom: 60px;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
//         }
//         .testimonial-container {
//           display: flex;
//           justify-content: center;
//           gap: 32px;
//           width: 100%;
//           flex-wrap: wrap;
//           padding: 0 20px;
//         }
//         .testimonial-card {
//           height: 300px;
//           position: relative;
//           width: 100%;
//           max-width: 249px;
//           margin-bottom: 20px;
//           transition: all 0.3s ease;
//         }
//         .middle-card {
//           transform: scale(1.05);
//           z-index: 2;
//         }
//         .overlap-group {
//           background-color: #f6e5d3;
//           height: 100%;
//           position: relative;
//           width: 100%;
//           border-radius: 8px;
//           overflow: hidden;
//           margin: 0 auto;
//         }
//         .rectangle {
//           background-color: #e35d1c;
//           border-radius: 21px 21px 0 0;
//           height: 149px;
//           left: 0;
//           position: absolute;
//           top: 90px;
//           width: 100%;
//         }
//         .div {
//           background-color: #e35d1c;
//           height: 149px;
//           left: 0;
//           position: absolute;
//           top: 151px;
//           width: 100%;
//         }
//         .ellipse {
//           background-color: #ffffff;
//           border: 2px solid;
//           border-radius: 49px;
//           box-shadow: 0px 4px 4px #00000040;
//           height: 98px;
//           left: 50%;
//           transform: translateX(-50%);
//           position: absolute;
//           top: 17px;
//           width: 98px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .text-wrapper {
//           color: #ffffff;
//           font-family: var(--body-text-font-family);
//           font-size: var(--body-text-font-size);
//           font-style: var(--body-text-font-style);
//           font-weight: var(--body-text-font-weight);
//           height: 30px;
//           left: 50%;
//           transform: translateX(-50%);
//           letter-spacing: var(--body-text-letter-spacing);
//           line-height: var(--body-text-line-height);
//           position: absolute;
//           bottom: 10px;
//           width: 150px;
//           text-align: center;
//         }
//         .p {
//           color: #ffffff;
//           font-family: var(--body-input-font-family);
//           font-size: var(--body-input-font-size);
//           font-style: var(--body-input-font-style);
//           font-weight: var(--body-input-font-weight);
//           height: 95px;
//           left: 27px;
//           letter-spacing: var(--body-input-letter-spacing);
//           line-height: var(--body-input-line-height);
//           position: absolute;
//           top: 144px;
//           width: calc(100% - 54px);
//           overflow: hidden;
//           display: -webkit-box;
//           -webkit-line-clamp: 4;
//           -webkit-box-orient: vertical;
//           text-align: center;
//         }
//         .quote-left, .quote-right {
//           color: #ffffff;
//           font-family: var(--h-1-font-family);
//           font-size: 24px;
//           position: absolute;
//           z-index: 2;
//         }
//         .quote-left {
//           top: 110px;
//           left: 12px;
//         }
//         .quote-right {
//           bottom: 50px;
//           right: 12px;
//           transform: rotate(180deg);
//         }
//         .nav-button {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background: none;
//           border: none;
//           cursor: pointer;
//           z-index: 10;
//           transition: opacity 0.3s ease;
//         }
//         .nav-button:hover {
//           opacity: 0.8;
//         }
//         .prev {
//           left: 20px;
//         }
//         .next {
//           right: 20px;
//           transform: translateY(-50%) rotate(180deg);
//         }

//         @media (max-width: 1024px) {
//           .testimonial-container {
//             gap: 20px;
//           }
//           .testimonial-card {
//             max-width: 220px;
//           }
//           .text-wrapper-9 {
//             font-size: 32px;
//           }
//         }

//         @media (max-width: 768px) {
//           .testimonial-container {
//             flex-direction: column;
//             align-items: center;
//           }
//           .testimonial-card {
//             max-width: 300px;
//           }
//           .middle-card {
//             transform: none;
//           }
//           .nav-button {
//             top: auto;
//             bottom: 20px;
//           }
//           .prev {
//             left: calc(50% - 60px);
//           }
//           .next {
//             right: calc(50% - 60px);
//             transform: rotate(180deg);
//           }
//           .text-wrapper-9 {
//             font-size: 28px;
//             margin-bottom: 40px;
//           }
//         }

//         @media (max-width: 480px) {
//           .wave {
//             height: 100px;
//           }
//           .content {
//             padding-top: 120px;
//           }
//           .text-wrapper-9 {
//             font-size: 24px;
//             margin-bottom: 30px;
//           }
//           .testimonial-card {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }