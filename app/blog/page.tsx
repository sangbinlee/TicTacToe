/* eslint-disable */    // 워닝 제거 문법

"use client"


// import ReactPlayer from 'react-player';
// import ReactPlayer from 'react-player/youtube'






import { useState } from "react";





export default function Blog() {

    let posts = '강남 우동 맛집';
    let [logo, setLogo] = useState('개발 blogssss');// 변경이 안된다면 비추.
    let [글제목, setTitle] = useState(
        [
            '남자 코트 추천 1',
            '강남 우동맛집 2',
            '파이썬코트 추천 3',
        ]
        );// 자주변경되는 부분만 useState 사용 권장.

        console.log('글제목=',글제목);

    let 여자글제목 = [
        '♥여자 코트 추천 1',
        '♥여자 강남 우동맛집 2',
        '♥여자 파이썬코트 추천 3',
    ]

    let [a, c] = [11,22]
    console.log(a);
    console.log(c);

    let [따봉, 셋따봉] = useState(0);

    function 함수(){
        console.log(111);
        셋따봉(따봉+1)
    }

    function 셋따봉s(i){
        console.log(i);
        // 셋따봉(따봉+1)
    }

    function setTitles(i){
        console.log(여자글제목)
        console.log(여자글제목[i])
        // let copy2 = 글제목;
        let copy = [...글제목];
        copy[i]= 여자글제목[i]

        console.log('copy===글제목', copy===글제목);
        // console.log('copy2===글제목', copy2===글제목);

        console.log('copy=',copy)
        console.log('글제목=',글제목)
        // 셋따봉(따봉+1)

        // copy.sort()
        setTitle(copy)
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>{logo}</div>
            </div>

            {
                글제목.map((p,i)=>{
                    return (
                        <div className="list" key={i}>
                            {/* <h3>{p} <span onClick={함수}>좋아요👍</span> {따봉} </h3> */}
                            {/* <h3>{p} <span onClick={function(){셋따봉(따봉+1)}}>좋아요👍</span> {따봉} </h3> */}
                            {/* <h3>{p} <span onClick={()=>{셋따봉(따봉+1)}}>좋아요👍</span> {따봉} </h3> */}
                            <h3>{p} <span onClick={ ()=>셋따봉s(i) }>좋아요👍</span> {따봉} </h3>
                            <p>2월 17일 발행</p>
                            <button onClick={ ()=>setTitles(i) }>title</button>
                        </div>
                    )
                })
            }







                        
            // Render a YouTube video player
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                config={{
                    youtube: {
                    playerVars: { showinfo: 1 }
                    },
                    facebook: {
                    appId: '12345'
                    }
                }}
            />
            
            // Lazy load the YouTube player
            <ReactPlayer url='https://www.youtube.com/watch?v=QzkMsKgqkf4'
                config={{
                    youtube: {
                    playerVars: { showinfo: 1 }
                    },
                    facebook: {
                    appId: '12345'
                    }
                }}
            />
            <ReactPlayer url='https://www.youtube.com/watch?v=OA4xWoZ6Ygo' 
                config={{
                    youtube: {
                    playerVars: { showinfo: 1 }
                    },
                    facebook: {
                    appId: '12345'
                    }
                }}
            /> */}
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=JdpeGtMX0i8' 
                config={{
                    youtube: {
                    playerVars: { showinfo: 1 }
                    },
                    facebook: {
                    appId: '12345'
                    }
                }}
            />
            <ReactPlayer url='https://www.youtube.com/watch?v=D15mn4Wn6H8' 
                config={{
                    youtube: {
                    playerVars: { showinfo: 1 }
                    },
                    facebook: {
                    appId: '12345'
                    }
                }}
            />
            <ReactPlayer url='https://www.youtube.com/watch?v=D15mn4Wn6H8' 
                config={{
                    youtube: {
                    playerVars: { showinfo: 1 }
                    },
                    facebook: {
                    appId: '12345'
                    }
                }}
            /> */}


{/* <ReactPlayer url='https://www.youtube.com/watch?v=0xhzwDXfLds' />
<ReactPlayer url='https://www.youtube.com/watch?v=ue5l_tyIjQM' />
<ReactPlayer url='https://www.youtube.com/watch?v=8pLoqRZPfjY' />
<ReactPlayer url='https://www.youtube.com/watch?v=JccC_l6ocQA' />
<ReactPlayer url='https://www.youtube.com/watch?v=RnDDQ9CY-1I' />
<ReactPlayer url='https://www.youtube.com/watch?v=CHspo7fphCI' />
<ReactPlayer url='https://www.youtube.com/watch?v=Vl7u4WwVmUo' />
<ReactPlayer url='https://www.youtube.com/watch?v=b-_X-XezEC8' />
<ReactPlayer url='https://www.youtube.com/watch?v=FuoWykVNwyI' />
<ReactPlayer url='https://www.youtube.com/watch?v=BpWgisJ--Ho' />
<ReactPlayer url='https://www.youtube.com/watch?v=c4yiZoV9-6o' />
<ReactPlayer url='https://www.youtube.com/watch?v=qr9ZdA_WRjc' />
<ReactPlayer url='https://www.youtube.com/watch?v=5Gww3bczK28' />
<ReactPlayer url='https://www.youtube.com/watch?v=orL-w2QBiN8' />
<ReactPlayer url='https://www.youtube.com/watch?v=N84ZK5Wfy3Y' />
<ReactPlayer url='https://www.youtube.com/watch?v=f_FSWEg9Wgk' />
<ReactPlayer url='https://www.youtube.com/watch?v=Tu_rmF6VpjQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=s9PQ7qPkluM' />
<ReactPlayer url='https://www.youtube.com/watch?v=szY24ODB_gQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=2tQtfQQj9s0' />
<ReactPlayer url='https://www.youtube.com/watch?v=JMNnGjTGdew' />
<ReactPlayer url='https://www.youtube.com/watch?v=fnQjJCndqf0' />
<ReactPlayer url='https://www.youtube.com/watch?v=ewaJDMY3zko' />
<ReactPlayer url='https://www.youtube.com/watch?v=02i0OosnMuw' />
<ReactPlayer url='https://www.youtube.com/watch?v=B1fcSjcqtG0' />
<ReactPlayer url='https://www.youtube.com/watch?v=qF0JV28vgLw' />
<ReactPlayer url='https://www.youtube.com/watch?v=D8yKeA9lVLw' />
<ReactPlayer url='https://www.youtube.com/watch?v=AeD-nVEjzsQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=XCIkeoO5re4' />
<ReactPlayer url='https://www.youtube.com/watch?v=pZwNzQhjcHE' />
<ReactPlayer url='https://www.youtube.com/watch?v=NARrXzLCzHA' />
<ReactPlayer url='https://www.youtube.com/watch?v=QTZmFVk29Ls' />
<ReactPlayer url='https://www.youtube.com/watch?v=H8YmWbSakO0' />
<ReactPlayer url='https://www.youtube.com/watch?v=cUEX2Aa_pGE' />
<ReactPlayer url='https://www.youtube.com/watch?v=bWTBvjhk0xk' />
<ReactPlayer url='https://www.youtube.com/watch?v=I652eipw7TA' />
<ReactPlayer url='https://www.youtube.com/watch?v=3sbI_RnHVaA' />
<ReactPlayer url='https://www.youtube.com/watch?v=P4EciwJs-v4' />
<ReactPlayer url='https://www.youtube.com/watch?v=yHR7qSzqNf8' />
<p>Air Supply - Making Love Out Of Nothing At All (HQ Audio)(SOLID GOLD)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=gQwco47UdQs' />
<ReactPlayer url='https://www.youtube.com/watch?v=t3u1CK50eco' />
<ReactPlayer url='https://www.youtube.com/watch?v=AralIRMzg0M' />
<ReactPlayer url='https://www.youtube.com/watch?v=meUpKhUKZ94' />
<ReactPlayer url='https://www.youtube.com/watch?v=dWLncKt5Z7g' />
<ReactPlayer url='https://www.youtube.com/watch?v=bUyRfMbtW2k' />
<ReactPlayer url='https://www.youtube.com/watch?v=zH-B5zeSyLQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=3JWTaaS7LdU' />
<ReactPlayer url='https://www.youtube.com/watch?v=eTcvvO6B3Io' />
<ReactPlayer url='https://www.youtube.com/watch?v=1k08yxu57NA' />
<ReactPlayer url='https://www.youtube.com/watch?v=ayQ4IQ0X-q4' />
<ReactPlayer url='https://www.youtube.com/watch?v=Ex86OdnRSp0' />
<ReactPlayer url='https://www.youtube.com/watch?v=meUpKhUKZ94' />
<ReactPlayer url='https://www.youtube.com/watch?v=AYH0ybGYkDU' />
<ReactPlayer url='https://www.youtube.com/watch?v=siqOyge0wvY' />
<ReactPlayer url='https://www.youtube.com/watch?v=xWoyMPMD2oQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=GDm82gFrxnY' />
<ReactPlayer url='https://www.youtube.com/watch?v=bPsA6U7P0-I' />
<ReactPlayer url='https://www.youtube.com/watch?v=Xealjv3Sqfs' />
<p>[playlist] 광고 없음 추억의팝송🌹한국인이좋아하는🌹감미로운 팝송모음 Oldies Songs Of All Time</p>
<ReactPlayer url='https://www.youtube.com/watch?v=UqFDL7QfF4M' />
<ReactPlayer url='https://www.youtube.com/watch?v=eodEvQj435A' />
<p>BABBA and the CSO Symphony in the Park (Full Show 1hr.50min)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=8g1Lb4916fw' />
<p>Mariah Carey - Without You (Official HD Music Video)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=Hat1Hc9SNwE' />
<p>A B B A Greatest Hits 🎵 Billboard Hot 100 🎵 Popular Music Hits Of All Time</p>
<ReactPlayer url='https://www.youtube.com/watch?v=H16mqmLYia4' />
<p>Michael jackson greatest hits da</p>
<ReactPlayer url='https://www.youtube.com/watch?v=z1fadkdxAX0' />
<p>Greatest Hits Classic Rock 70s 80s 90s - The Best Classic Rock Of All Time</p>
<ReactPlayer url='https://www.youtube.com/watch?v=Vy8guHSGRCU' />
<ReactPlayer url='https://www.youtube.com/watch?v=q3iJHZgqgNI' />
<p>Chiquitita - ABBA (by Beatrice Florea)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=ob9s050n7qE' />
<ReactPlayer url='https://www.youtube.com/watch?v=HYh-NZq2ODA' />
<p>Abba Concert Highlights 4K</p>
<ReactPlayer url='https://www.youtube.com/watch?v=qGZ3f3yJWaQ' />
<p>My Way - Frank Sinatra Cover By Vanny Vabiola</p>
<ReactPlayer url='https://www.youtube.com/watch?v=x3pcJF0iNZ4' />
<p>Dancing Queen - ABBA (by Beatrice Florea)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=6y6lXqH8zAY' />
<p>(Everything I Do) I Do It For You - Bryan Adams (Boyce Avenue ft. Connie Talbot acoustic cover)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=KUAswQNA9hE' />
<p>Chiquitita - ABBA (cover) | Ennah |</p>
<ReactPlayer url='https://www.youtube.com/watch?v=Z_yeDb1hvMg' />
<ReactPlayer url='https://www.youtube.com/watch?v=ETrbRH4F7nE' />
<p>Queen - I Want To Break Free (Cover by Enterprise)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=SN5BjkcOiVQ' />
<p>ABBA - Dancing Queen (from ABBA In Concert)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=k2bBTWvmN-8' />
<p>Eagles - Hotel California (Live 1977) (Official Video) [HD]</p>
<ReactPlayer url='https://www.youtube.com/watch?v=09839DpTctU' />
<p>America's Got Talent 2023: Top 10 BEST Auditions!</p>
<ReactPlayer url='https://www.youtube.com/watch?v=UbBAwh85n44' />
<p>ABBA - The Winner Takes It All</p>
<ReactPlayer url='https://www.youtube.com/watch?v=92cwKCU8Z5c' />
<p>SEGUI NUESTROS STREAMINGS EN VIVO / QUEEN | REMASTERIZACIÓN EXCLUSIVA HD | LIVE AID 1985 | TU LIVE</p>
<ReactPlayer url='https://www.youtube.com/watch?v=aBw-7xydYd8' />
<p>Queen_Who Wants to Live Forever/I Want to Break Free</p>
<ReactPlayer url='https://www.youtube.com/watch?v=sZj4au4VdsM' />
<p>I Want To Break Free - Freddie Mercury & Lisa Stansfield (Fan Made)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=Bc38C9vMUYY' />
<p>Queen - We Will Rock You (Live at Wembley 11.07.1986)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=FtyZSWJkFXU' />
<p>A B B A Greatest Hits ☀️ 70s 80s 90s Oldies But Goodies Music ☀️ Best Old Songs</p>
<ReactPlayer url='https://www.youtube.com/watch?v=A3O7nfyrers' />
<ReactPlayer url='https://www.youtube.com/watch?v=awj7wjWEVkM' /> */}



{/* <ReactPlayer url='https://www.youtube.com/watch?v=lEikT4xYLO8' />
<ReactPlayer url='https://www.youtube.com/watch?v=i0MzvQhl23U' />
<ReactPlayer url='https://www.youtube.com/watch?v=vbvyNnw8Qjg' />
<ReactPlayer url='https://www.youtube.com/watch?v=ER_3h03omdE' />
<ReactPlayer url='https://www.youtube.com/watch?v=NYztP0mwH6g' />
<ReactPlayer url='https://www.youtube.com/watch?v=rKXbgQ0Dleo' />
<ReactPlayer url='https://www.youtube.com/watch?v=p4QqMKe3rwY' />
<ReactPlayer url='https://www.youtube.com/watch?v=_AgT66Qe4hE' />
<ReactPlayer url='https://www.youtube.com/watch?v=s0tJ0x-opm0' />
<ReactPlayer url='https://www.youtube.com/watch?v=3hyFB6SA7b4' />
<ReactPlayer url='https://www.youtube.com/watch?v=9a_oQD0M51M' />
<ReactPlayer url='https://www.youtube.com/watch?v=1vTeqD2SUA8' />
<ReactPlayer url='https://www.youtube.com/watch?v=SwX7bO-r2iY' />
<ReactPlayer url='https://www.youtube.com/watch?v=kf719fP_Fno' />
<ReactPlayer url='https://www.youtube.com/watch?v=jmg6eymextU' />
<ReactPlayer url='https://www.youtube.com/watch?v=DL0qsts5r6k&list=PLiy0XOfUv4hGd3X610aQF3mFSZjtMuA79&index=4' />
<ReactPlayer url='https://www.youtube.com/watch?v=jmg6eymextU&list=RDjmg6eymextU&start_radio=1' />
<ReactPlayer url='https://www.youtube.com/watch?v=kf719fP_Fno' />
<ReactPlayer url='https://www.youtube.com/watch?v=jag6brVLgZk' />
<ReactPlayer url='https://www.youtube.com/watch?v=HqzYWNx4_MY' />
<ReactPlayer url='https://www.youtube.com/watch?v=jmg6eymextU' />
<ReactPlayer url='https://www.youtube.com/watch?v=6N_pYJejbHw' />
<ReactPlayer url='https://www.youtube.com/watch?v=VF2-aiQmq-0' />
<ReactPlayer url='https://www.youtube.com/watch?v=XR62fL8BjX0' />
<ReactPlayer url='https://www.youtube.com/watch?v=_864E3Ef3nU' />
<ReactPlayer url='https://www.youtube.com/watch?v=Il7qTAioY2o' />
<ReactPlayer url='https://www.youtube.com/watch?v=vcGAA60ZWdQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=1MCarkGd4Xk' />
<ReactPlayer url='https://www.youtube.com/watch?v=_tHeZwu36cE' />
<ReactPlayer url='https://www.youtube.com/watch?v=ui5x6_aI-hw' />
<ReactPlayer url='https://www.youtube.com/watch?v=7_ZQ1uT-vEw' />
<ReactPlayer url='https://www.youtube.com/watch?v=CMI7js175qU' />
<ReactPlayer url='https://www.youtube.com/watch?v=bJMhLTamqu4' />
<ReactPlayer url='https://www.youtube.com/watch?v=D9p6FU9rJ7Q' />
<ReactPlayer url='https://www.youtube.com/watch?v=ZZg2d2DnKFQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=mpJHhWtrYMM' />
<ReactPlayer url='https://www.youtube.com/watch?v=dsCl2kXJca4' />
<ReactPlayer url='https://www.youtube.com/watch?v=GCr1hyTWoDs' />
<ReactPlayer url='https://www.youtube.com/watch?v=VBZxw8DebsQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=FVsbvFkhzY4' />
<ReactPlayer url='https://www.youtube.com/watch?v=iUrzicaiRLU' />
<ReactPlayer url='https://www.youtube.com/watch?v=hAjCA7G847I&list=RDMM&start_radio=1' />
<ReactPlayer url='https://www.youtube.com/watch?v=_OaEnA4diCI' />
<ReactPlayer url='https://www.youtube.com/watch?v=aHKtYFApKXE' />
<ReactPlayer url='https://www.youtube.com/watch?v=uICA_LuenQE' />
<ReactPlayer url='https://www.youtube.com/watch?v=3Uo0JAUWijM' />
<ReactPlayer url='https://www.youtube.com/watch?v=VEi3ZHLxR2g' />
<p>Dana Winner - One Moment In Time live</p>
<ReactPlayer url='https://www.youtube.com/watch?v=RawE7mwXTa4' />
<ReactPlayer url='https://www.youtube.com/watch?v=gsBecW-pKDM' />
<ReactPlayer url='https://www.youtube.com/watch?v=Xealjv3Sqfs' />
<ReactPlayer url='https://www.youtube.com/watch?v=jyhQ6YVrdGc' />
<ReactPlayer url='https://www.youtube.com/watch?v=bq2zXYBNazg' />
<ReactPlayer url='https://www.youtube.com/watch?v=bZolfKgW5Is' />
<ReactPlayer url='https://www.youtube.com/watch?v=dQsjAbZDx-4' />
<ReactPlayer url='https://www.youtube.com/watch?v=hAjCA7G847I&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&start_radio=1' />
<ReactPlayer url='https://www.youtube.com/watch?v=qqyTLw2OTaA' />
<ReactPlayer url='https://www.youtube.com/watch?v=NZb-SVm7eLE' />
<ReactPlayer url='https://www.youtube.com/watch?v=p9Y3N_2xUsw' />
<ReactPlayer url='https://www.youtube.com/watch?v=jNmUol6sRJY' />
<ReactPlayer url='https://www.youtube.com/watch?v=KXr7BrfS-40' />
<ReactPlayer url='https://www.youtube.com/watch?v=ZvGWZm34Ct8' />
<ReactPlayer url='https://www.youtube.com/watch?v=dO-7AbKoxyA' />
<ReactPlayer url='https://www.youtube.com/watch?v=ObdX5mtK2ns' />
<ReactPlayer url='https://www.youtube.com/watch?v=RUGYe5TzPBg' />
<ReactPlayer url='https://www.youtube.com/watch?v=unfzfe8f9NI' />
<ReactPlayer url='https://www.youtube.com/watch?v=ygkcwU0SWNk' />
<ReactPlayer url='https://www.youtube.com/watch?v=cvChjHcABPA' />
<ReactPlayer url='https://www.youtube.com/watch?v=7z1Z7eDZ9Dc' />
<ReactPlayer url='https://www.youtube.com/watch?v=w46bWxS9IjY' />
<ReactPlayer url='https://www.youtube.com/watch?v=XEjLoHdbVeE' />
<ReactPlayer url='https://www.youtube.com/watch?v=MGzPlbwwnLY' />
<p>Air Supply - All Out Of Love (Live in Hong Kong)</p>
<ReactPlayer url='https://www.youtube.com/watch?v=x1EPtz1Uk4s' />
<ReactPlayer url='https://www.youtube.com/watch?v=4069PUk3aM0' />
<ReactPlayer url='https://www.youtube.com/watch?v=xFrGuyw1V8s&list=RDEMiMPRAwzvbVB9F1ixipdbgQ&start_radio=1' />
<ReactPlayer url='https://www.youtube.com/watch?v=pDNRjL7cY9w' />
<ReactPlayer url='https://www.youtube.com/watch?v=onW2nPtSm7k' />
<ReactPlayer url='https://www.youtube.com/watch?v=BEkDB3Q32lY' />
<ReactPlayer url='https://www.youtube.com/watch?v=GIjfPTqaAK8' />
<ReactPlayer url='https://www.youtube.com/watch?v=Cvw8I7R6H4s' />
<ReactPlayer url='https://www.youtube.com/watch?v=qizKODkJVdY' />
<ReactPlayer url='https://www.youtube.com/watch?v=N5RIfTn5WU0' />
<ReactPlayer url='https://www.youtube.com/watch?v=FxYw0XPEoKE' />
<ReactPlayer url='https://www.youtube.com/watch?v=VuPD0TcfeTk' />
<ReactPlayer url='https://www.youtube.com/watch?v=20Y0dMGqlWk' />
<ReactPlayer url='https://www.youtube.com/watch?v=ObdX5mtK2ns' />
<ReactPlayer url='https://www.youtube.com/watch?v=8xg3vE8Ie_E' />
<ReactPlayer url='https://www.youtube.com/watch?v=Uaac71bNFdA' />
<ReactPlayer url='https://www.youtube.com/watch?v=p1Zt47V3pPw' />
<ReactPlayer url='https://www.youtube.com/watch?v=OJV04tunziI' />
<ReactPlayer url='https://www.youtube.com/watch?v=TnD30r__LSE' />
<ReactPlayer url='https://www.youtube.com/watch?v=cqnq6AQO884' />
<ReactPlayer url='https://www.youtube.com/watch?v=8veSi3_8GTw' />
<ReactPlayer url='https://www.youtube.com/watch?v=Dk3MLRgFQPE' />
<ReactPlayer url='https://www.youtube.com/watch?v=1vPB6d1Wwjc' />
<ReactPlayer url='https://www.youtube.com/watch?v=4a7taRpquM8' />
<ReactPlayer url='https://www.youtube.com/watch?v=ELTUzU9QhLY' />
<ReactPlayer url='https://www.youtube.com/watch?v=F2RnxZnubCM' />
<ReactPlayer url='https://www.youtube.com/watch?v=ui5x6_aI-hw' />
<ReactPlayer url='https://www.youtube.com/watch?v=7WascwhF86E' />
<ReactPlayer url='https://www.youtube.com/watch?v=opbXYEUXfNM' />
<ReactPlayer url='https://www.youtube.com/watch?v=wzZp5px6fVA' />
<ReactPlayer url='https://www.youtube.com/watch?v=mhUCNryY6Rk' />
<ReactPlayer url='https://www.youtube.com/watch?v=F2RnxZnubCM' />
<ReactPlayer url='https://www.youtube.com/watch?v=75kjls790Ss' />
<ReactPlayer url='https://www.youtube.com/watch?v=9GlBshLyG7c' />
<ReactPlayer url='https://www.youtube.com/watch?v=fUis9yny_lI' />
<ReactPlayer url='https://www.youtube.com/watch?v=RnhMseK-uxY' />
<ReactPlayer url='https://www.youtube.com/watch?v=g2cYOOTAAF8' />
<ReactPlayer url='https://www.youtube.com/watch?v=Z8KQivma1hA' />
<ReactPlayer url='https://www.youtube.com/watch?v=GmtTDvNcXcU' />
<ReactPlayer url='https://www.youtube.com/watch?v=dbRKpIkob_k' />
<ReactPlayer url='https://www.youtube.com/watch?v=K3yjSSj1w7w' />
<ReactPlayer url='https://www.youtube.com/watch?v=c5uR--tRNsQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=p3_BCdc75CI' />
<ReactPlayer url='https://www.youtube.com/watch?v=I0q5LhWjkLM' />
<ReactPlayer url='https://www.youtube.com/watch?v=29--00Vv714' />
<ReactPlayer url='https://www.youtube.com/watch?v=SWFa2N_bbLQ' />
<ReactPlayer url='https://www.youtube.com/watch?v=ImOMJBo12Ts' />
<ReactPlayer url='https://www.youtube.com/watch?v=9OyRQYlg0Kw' />
<ReactPlayer url='https://www.youtube.com/watch?v=rsSAFT1AwL0' />
<ReactPlayer url='https://www.youtube.com/watch?v=OXSKe4sczag' />
<ReactPlayer url='https://www.youtube.com/watch?v=gxOQi-X5kFY' />
<ReactPlayer url='https://www.youtube.com/watch?v=olJWup_dvHg' />
<ReactPlayer url='https://www.youtube.com/watch?v=U3aiBukp_E4' />
<ReactPlayer url='https://www.youtube.com/watch?v=6IScTiSbAwg' />
<ReactPlayer url='https://www.youtube.com/watch?v=UHAXKQtaeG4' />
<ReactPlayer url='https://www.youtube.com/watch?v=0aqdvotKjhk' />
<ReactPlayer url='https://www.youtube.com/watch?v=44NlvdtQv8E' />
<ReactPlayer url='https://www.youtube.com/watch?v=nREKA3M4XSA' />
<ReactPlayer url='https://www.youtube.com/watch?v=K79KD725jyA' />
<ReactPlayer url='https://www.youtube.com/watch?v=2SHnAj0yMFE' />
<ReactPlayer url='https://www.youtube.com/watch?v=djV11Xbc914' />
<ReactPlayer url='https://www.youtube.com/watch?v=e-ZG5gTd3Jk' />
<ReactPlayer url='https://www.youtube.com/watch?v=IHDCMQjNimg' />
<ReactPlayer url='https://www.youtube.com/watch?v=vpwTl1xS3RY' />
<ReactPlayer url='https://www.youtube.com/watch?v=GdP20H-DUzg' />
<ReactPlayer url='https://www.youtube.com/watch?v=bBEQeLuNTI4' />
<ReactPlayer url='https://www.youtube.com/watch?v=AJAwh7XO9G8' />
<ReactPlayer url='https://www.youtube.com/watch?v=orlh5kGaDgk' />
<ReactPlayer url='https://www.youtube.com/watch?v=4G7SEL4zwy8' />
<ReactPlayer url='https://www.youtube.com/watch?v=eGCvcccs134' />
<ReactPlayer url='https://www.youtube.com/watch?v=ytSewHVec3I' />
<ReactPlayer url='https://www.youtube.com/watch?v=-xKM3mGt2pE' />
<ReactPlayer url='https://www.youtube.com/watch?v=_w9S7uTkTsE' />
<ReactPlayer url='https://www.youtube.com/watch?v=fRhHH4snoIA' />
<ReactPlayer url='https://www.youtube.com/watch?v=KAQWzHokZXg' />
<ReactPlayer url='https://www.youtube.com/watch?v=4r1USrd4vB0' />
<ReactPlayer url='https://www.youtube.com/watch?v=Juvdkt0JFE8' />
<ReactPlayer url='https://www.youtube.com/watch?v=dldYiP15juc' />
<ReactPlayer url='https://www.youtube.com/watch?v=vnrXClJ4oXM' />
<ReactPlayer url='https://www.youtube.com/watch?v=wrTuV4Szxzo' />
<ReactPlayer url='https://www.youtube.com/watch?v=ApCL2GomTD4' />
<ReactPlayer url='https://www.youtube.com/watch?v=TVsRM55_jsE&list=RDMM&start_radio=1' />
<ReactPlayer url='https://www.youtube.com/watch?v=BZ5CJlccy1A' />
<ReactPlayer url='https://www.youtube.com/watch?v=3o_OoF2hR24' />
<ReactPlayer url='https://www.youtube.com/watch?v=plCSQyQjCgg&list=PLy_wKxVmWb4Y-jmDYUCGBEyqoWN3K_aX4' />
<ReactPlayer url='https://www.youtube.com/watch?v=Bt9YWYFUIWE' />
<ReactPlayer url='https://www.youtube.com/watch?v=mTg9MNmSHLE' />
<ReactPlayer url='https://www.youtube.com/watch?v=kqNju018Vgo' />
<ReactPlayer url='https://www.youtube.com/watch?v=Z_q1Dj_uTuo' />
<ReactPlayer url='https://www.youtube.com/watch?v=JZlNI2xfpEI' />
<ReactPlayer url='https://www.youtube.com/watch?v=-Fo_9l-L1_8' />
<ReactPlayer url='https://www.youtube.com/watch?v=5XC4iZkBCs8' />
<ReactPlayer url='https://www.youtube.com/watch?v=RhKzWPbJ7Jw' />
<ReactPlayer url='https://www.youtube.com/watch?v=2VAW9xWgTpE' />
<ReactPlayer url='https://www.youtube.com/watch?v=BHjIR4GjyHw' />
<ReactPlayer url='https://www.youtube.com/watch?v=dD0tP6GebPk' />
<ReactPlayer url='https://www.youtube.com/watch?v=hlWiI4xVXKY' />
<ReactPlayer url='https://www.youtube.com/watch?v=CA-GmCx998E' />
<ReactPlayer url='https://www.youtube.com/watch?v=xWi_jc7G9H8' />
<ReactPlayer url='https://www.youtube.com/watch?v=PuYhAbFwXVE' />
<ReactPlayer url='https://www.youtube.com/watch?v=JdpeGtMX0i8' />
<ReactPlayer url='https://www.youtube.com/watch?v=Hxu91RYjIVE&t=476s' />
<ReactPlayer url='https://www.youtube.com/watch?v=1lhZxsMKfEw' />
<ReactPlayer url='https://www.youtube.com/watch?v=rS0zzN7bzfE' />
<ReactPlayer url='https://www.youtube.com/watch?v=J_EIOPrXBZ8' />
<ReactPlayer url='https://www.youtube.com/watch?v=kpvu4hulhT0' />
<ReactPlayer url='https://www.youtube.com/watch?v=4FuDmYEcXEA' />
<ReactPlayer url='https://www.youtube.com/watch?v=3bKOl7HWo14' />
<ReactPlayer url='https://www.youtube.com/watch?v=9HzcNN58USg&t=1455s' />
<ReactPlayer url='https://www.youtube.com/watch?v=XMgxfkwZL4k' /> */}
{/* <ReactPlayer url='https://www.youtube.com/watch?v=kVEgp6aHxBw&list=RDMM&start_radio=1' />
<ReactPlayer url='https://www.youtube.com/watch?v=kVEgp6aHxBw' /> */}



{/* <ReactPlayer url='https://www.youtube.com/watch?v=YS10Cdaz2Kk' />
<ReactPlayer url='https://www.youtube.com/watch?v=xFrGuyw1V8s&list=PLfbsJhc-1KOcGbiBLo8DS1UXTbq3xxUX0' />
<ReactPlayer url='https://www.youtube.com/watch?v=TvwMrd_EO-s' />
<ReactPlayer url='https://www.youtube.com/watch?v=lVrQEN3cU24' />
<ReactPlayer url='https://www.youtube.com/watch?v=30HBX7eHmIY' />
<ReactPlayer url='https://www.youtube.com/watch?v=qKx8-Zz_TO4' />
<ReactPlayer url='https://www.youtube.com/watch?v=iMqCcD5G3QY' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' /> */}




{/* <ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' />
<ReactPlayer url='' /> */}


        </div>
    )
}
