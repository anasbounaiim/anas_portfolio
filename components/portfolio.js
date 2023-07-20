import Image from "next/image";
import web2 from "public/web2.png";
import web1 from "public/web1.png";
import web3 from "public/web3.png";
import web4 from "public/web4.png";
import web5 from "public/web5.png";
import web6 from "public/web6.png";
const Portfo = () => {
    return ( 
        <section className="py-4">
        <div>
          
          <p className="text-lg py-2 leading-8 text-gray-800 lg:text-xl dark:text-white">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-blue-300"> agencies </span>
            consulted for <span className="text-blue-300">startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
          </p>
          <p className="text-lg py-2 leading-8 text-gray-800 lg:text-xl dark:text-white">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web1}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web2}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web3}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web4}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web5}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web6}
            />
          </div>
        </div>

    


<div className="mockup-code dark:bg-white my-11">
<pre data-prefix="$"><code>buu -- شكراً على الزيارة (Shukran ʿalā al-ziyārah)</code></pre> 
<pre data-prefix=">" className="text-warning"><code>leaving...</code></pre> 
<pre data-prefix=">" className="text-success"><code>Done!</code></pre>
</div>
     
      </section>
     );
}
 
export default Portfo;