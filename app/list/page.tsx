 


export default function List() {


    let 상품=['토마토', '파스타', '코코넛',]
    console.log(상품);
    let a=[1, 2, 3,]
    console.log(a);
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[3]);



    a.map((s, i)=>{
        console.log(i, s);
    })


    상품.map((s,i)=>{
        console.log(i, s);
    })



    let tt = 상품.map((s,i)=>{
        return i+s
        console.log(i, s);
    })

    console.log(tt);

  
    let title='상품목록'
  
    let ver = 1
    return (
      <div>

        {/* content area */}
        <h4 style={{color:'green', fontSize:'30px'}} className="title">{title} {ver}</h4>

        {
            상품.map((p, i)=>{
                return (
                    <div className="food" key={i}>
                        {/* <Image src={food0}} className="food-img" /> */}
                        <img src={`/food${i}.png`} className="food-img" />
                        {상품[i]}
                        <h4>{p} ${i}</h4>
                    </div>

                )
            })
        }


      </div>
    )
  }
  