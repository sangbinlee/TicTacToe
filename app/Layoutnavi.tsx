
"use client"
import Link from 'next/link';
// import ScrollToTop from './ScrollToTop';
import Breadcrum from './Breadcrum';
// import ScrollToTop from "react-scroll-to-top";



import { usePathname } from 'next/navigation';

import { useEffect } from 'react';


import { useState } from 'react';




export default function Layoutnavi( ) {



  
  
  

  const pathname = usePathname()

  // const router = useRouter()
  // const pathname = router.asPath
  // console.log('router=',router);


  let breadScrum = 'home' + pathname
  console.log('breadScrum=',breadScrum);

  let link = 'https://google.com'


  console.log('pathname==========',pathname);
  
  
// ############################### data
  const menus = [
      {title:'home',  href: '/', isFruit: false, id: 0 },
      {title:'list',  href: '/list', isFruit: false, id: 1 },
      {title:'cart',  href: '/cart', isFruit: false, id: 2 },
      {title:'blog',  href: '/blog', isFruit: true, id: 3 },
      {title:'product',  href: '/product', isFruit: true, id: 4 },
      {title:'TicTacToe',  href: '/TicTacToe', isFruit: true, id: 5 },
      {title:'login',  href: '/login', isFruit: true, id: 6 },
  ];



  // ############################### style
// const style = {
//   marginRight: 10,
//   // color: router.asPath === href ? 'red' : 'black',
//   color: pathname === href ? 'red' : 'black',
//   // fontSize:'26px', margin:0
// }

  // ############################### html with data
  const menuHtml = menus.map(menu =>

      <Link href={menu.href} key={menu.id} 
      
      style={ 
        {
        marginRight: 10,
        // color: router.asPath === href ? 'red' : 'black',
        color: pathname === menu.href ? 'red' : 'black',
        // fontSize:'26px', margin:0
        }
    }
      >{menu.title}</Link>


      
      // <Link href={home}>home</Link>
      // <Link href={list}>list</Link>
      // <Link href={cart}>cart</Link>
      // <Link href={blog}>blog</Link>
      // <Link href={product}>product</Link>
      // <Link href={TicTacToe}>TicTacToe</Link>
  );
 


  const [count, setCount] = useState(0)

    // ############################### useEffect

    const useUser = () => ({ user: null, loading: false })

    console.log('useUser=================',useUser);
    const { user, loading } = useUser()
    useEffect(() => {
      console.log("test............... useEffect ");
      if (!(user || loading)) {
        // router.push('/login')
        console.log("test............... useEffect ");
      }
    }, [user, loading])



    // ############################### return
  return (
    <>
      <div className="navbar">
        
        {menuHtml}

      </div>
      <Breadcrum breadScrum={breadScrum}/>
      <div className="black-nav">
        <h4
        >{pathname}</h4>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div> 
    </>
  )
}
