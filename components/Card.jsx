// import stock  from "../stock";
// import './Card.css';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Card() {
  const [keyword, setKeyword] = useState("");
  const [hasilFilter, setHasilfilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [stock, setStock] = useState([]);

  // const [search, setSearch] = useState('');
  // const desc = data.description;
  // console.log(desc);
  // const describe = desc.substr(0, 20);

  const handlefilter = (e) => {
    const filterData = stock.filter((e) => {
      return e.category.toLowerCase().includes(keyword.toLowerCase());
    });
    setHasilfilter(filterData);
  };

  useEffect(() => {
    handlefilter();
  }, [stock, keyword]);

  function getFiltered(filtered) {
    if (filtered === 0) {
      return "Barang Tidak Ada";
    } else {
      return filtered + " Products ";
    }
  }

  useEffect(() => {
    try{
      const fetchData = async () => {
        const response = await fetch("https://api.jsonbin.io/v3/b/640fbca9ebd26539d08e2e8e");
        const data = await response.json();
        setStock(data.record);
      };
      fetchData();
    } catch (err){
    console.log(err);
  }
  }, []);

  return (
    <>
      <div className="p-7 text-black z-[2] mt-20">
        <h1 className="text-3xl font-bold  text-center">Products</h1>
      </div>
      <div className="" id="products">
        <div className=" flex items-center justify-center mx-auto my-0 pt-5 ">
          <input
            className="border w-3/12 p-2.5 rounded-[10px] border-solid border-black"
            id="searchInput"
            type="text "
            placeholder="Search Here"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />

          <div className="filter-area">
            <form onChange={handlefilter}>
              <select
                className="filter border h-[45px] w-[110px] mx-2.5 my-0 rounded-[10px] border-solid border-black"
                name="isAvailable"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              >
                <option value="">All</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Clothes">Clothes</option>
                <option value="Uniform">Uniform</option>
              </select>
            </form>
          </div>
        </div>

        {/* Information  */}
        <div className="information w-1/5 text-center mx-auto my-0 pt-2.5">
          {getFiltered(hasilFilter.length)}
        </div>

        <div className="container mx-auto items-center justify-center w-10/12 ">
          <div className="md:flex flex-wrap justify-center items-center">
            {hasilFilter.length > 0
              ? hasilFilter
                  .filter((products) =>
                    searchTerm !== ""
                      ? products.nama.toLowerCase().includes(searchTerm)
                      : products
                  )
                  .map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="lg:w-4/12 md:w-6/12 xl:w-3/12 ">
                      <Link href={`shop/${item.id}`}>
                        <div className=" bg-white md:block flex flex-col justify-center items-center border m-5 p-5 rounded-[10px] border-solid border-[#a7a7a7] hover:transition-[0.4s] hover:shadow-[0_10px_40px_0_rgba(0,0,0,0.4)] hover:z-[3] hover:scale-110">
                          <Image
                            key={item.id}
                            src={item.gambar}
                            alt=""
                            width={200}
                            height={200}
                            className="border mt-[5px] mb-5 rounded-[10px] mx-auto border-solid border-black"
                          />
                          <h3 className="card-name font-bold mb-3">
                            {item.nama}
                          </h3>
                          <p className="card-text ">{item.description}</p>
                          <p className="price font-semibold mt-3">
                            Rp. {item.harga}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))
              : stock
                  .filter((val) => {
                    if (searchTerm == "") {
                      return val;
                    } else if (
                      val.nama.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val) => {
                    return (
                      <div className="template" key={val.id}>
                        <Image
                          src={val.gambar}
                          alt=""
                          width={400}
                          height={400}
                        />
                        <h3 className="card-name">{val.nama}</h3>
                        <p className="card-text">{val.description}</p>
                        <p className="price">Rp {val.harga}</p>
                        <button className="px-8 py-2 border">Book</button>
                      </div>
                    );
                  })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;