import React from 'react'
import SwiperSlideEffectFade from '../components/SwiperSlideEffectFade'
import { TiTick } from 'react-icons/ti'
import { LiaCarSolid } from 'react-icons/lia'
import { GiAlarmClock } from 'react-icons/gi'
import { MdPermPhoneMsg } from 'react-icons/md'
import Card from "../components/Card";


function Home() {
  return (
    <div className="container-fluid p-0" style={{marginTop:"150px"}}>
      <div className="container p-0 ">
        <div className="row m-0 justify-content-between ">
          <div className="col-lg-8  py-lg-4 pe-lg-4 overflow-hidden" style={{ height: '500px' }}>
            <div className="w-100 h-100 ">
              <SwiperSlideEffectFade />
            </div>
          </div>
          <div className="col-lg-4 py-lg-4 overflow-hidden py-2" style={{ height: '500px' }}>
            <div className="col-12 h-50 position-relative overflow-hidden ">
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center">
                <p className='fs-6 m-0'>Save 15%</p>
                <h3 className='fw-medium m-0'>Special Offer</h3>
                <button className='btn btn-outline-light rounded-0 px-4  mt-3'>
                  Shop Now
                </button>
              </div>
              <img
                src="https://cdn.mos.cms.futurecdn.net/AEYvg9hJbdXFmWL4XKPiHk.jpg"
                className="h-100 w-100 object-fit-cover"
                style={{ filter: "brightness(50%)" }}
                alt="Special Offer"
              />
            </div>
            <div className="col-12 h-50 position-relative overflow-hidden pt-2">
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center">
                <p className='fs-6 m-0'>Save 34%</p>
                <h3 className='fw-medium m-0'>Special Offer</h3>
                <button className='btn btn-outline-light rounded-0 px-4  mt-3'>
                  Shop Now
                </button>
              </div>
              <img
                src="https://www.cnet.com/a/img/resize/9bc5f206aad960b4ba5b710de0605bbb29892073/hub/2024/09/13/61e90bfe-868b-4a2d-ae5f-25db8bc086db/iphone-16-plus-iphone-16-4535.jpg?auto=webp&fit=crop&height=900&width=1200"
                className="h-100 w-100 object-fit-cover"
                style={{ filter: "brightness(50%)" }}
                alt="Special Offer"
              />
            </div>
          </div>
        </div>

        <div className="row m-0 py-4 g-3 py-lg-0 g-2 font-poppins ">
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-3 ">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <TiTick style={{ fontSize: '50px' }} className='text-primary' />
              <h3 className='fs-4 ms-2 mb-0'>Quality Priduct</h3>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-3 ">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <LiaCarSolid style={{ fontSize: '50px' }} className='text-primary' />
              <h3 className='fs-4 ms-2 mb-0'>Fast Delivery</h3>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-3 ">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <MdPermPhoneMsg style={{ fontSize: '50px' }} className='text-primary' />
              <h3 className='fs-2 ms-2 mb-0'>14-Day Return</h3>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-0 py-lg-3 ">
            <div className="d-flex align-items-center justify-content-center shadow py-4 px-2">
              <GiAlarmClock style={{ fontSize: '50px' }} className='text-primary' />
              <h3 className='fs-4 ms-2 mb-0'>24 / Support</h3>
            </div>
          </div>
        </div>

        {/* categories */}
        <div className="row align-items-center p-0 mt-5">
          <div className="col-12 col-lg-2">
            <h1 className='mb-0'>Category</h1>
          </div>
          <div className="col-12 col-lg-10">
            <hr style={{ border: '2px dashed gray' }} />
          </div>
        </div>
        <div className="row justify-content-center m-0 py-4 g-3 py-lg-0 g-2 mt-4 font-poppins ">
          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 bg-dark overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://cdn.mos.cms.futurecdn.net/ydFk9saCrLVpaZfgGUtfqG.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>50 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 mb-3 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 bg-dark overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2024/10/Best-camera-2024.png" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>38 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 bg-dark overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://static.independent.co.uk/2024/10/14/17/best-phone-october-2024-2.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>52 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-0 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://mediaserver.goepson.com/ImConvServlet/imconv/ad2a4bf4188611f0490c406592eca2d70a03fa43/original?use=productpictures&hybrisId=B2C&assetDescr=tile-homepage-do-colorworks" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>23 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://www.loffler.com/hubfs/iStock-1819806286%20%281%29.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>78 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 mb-3">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://pro.sony/s3/2017/09/18134059/hdc5500_3q_190225_01-Large.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>12 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4  overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://geekculture.co/wp-content/uploads/2019/08/ROG-laptops-2019-1.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>221 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-0 py-lg-0">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4  overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://cdn.vox-cdn.com/thumbor/JyxvHQS45Dsb45KDZUrmcnzvB9U=/0x0:6000x4000/1400x1400/filters:focal(3000x2000:3001x2001)/cdn.vox-cdn.com/uploads/chorus_asset/file/25446398/iPadAirFront.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>210 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 mb-3 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://www.dellstore.com/pub/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/a/n/anm16a0ucfg001cdb1-1_1.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>1033 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08867129.png" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>545 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-lg shadow-sm bg-hover transition">
              <div className="col-4 overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://welpix.b-cdn.net/wp-content/uploads/2024/03/The-art-of-storytelling-in-electronic-product-photography.webp" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>1592 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-0 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4  overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202407/oppo-reno-12-series-122536173-16x9_1.jpg?VersionId=wnVGJbb6cEahyrsB4FDmolRWFY2t9xVN&size=690:388" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>347 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4  overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://dellshop.lk/wp-content/uploads/2021/12/2-6.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>213 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4 overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://www.instax.in/cdn/shop/files/CopyofCopyof1_2.webp?v=1707396954" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>970 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-3 py-lg-0 ">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4  overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://i.ytimg.com/vi/7YFx0h5e3CY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGggaChoMA8=&rs=AOn4CLDump2sAlCf-blQ6eBa2h0ZxVOwzg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>503 Products</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 px-3 ps-lg-0 pe-lg-0 py-lg-0 mb-3">
            <div className="d-flex align-items-center justify-content-between shadow-sm shadow-lg bg-hover transition">
              <div className="col-4  overflow-hidden" style={{ height: '70px', width: '70px' }}>
                <img src="https://cdn.mos.cms.futurecdn.net/L7QTffG28jgJ2cvQ7RQ5Ek.jpg" alt="" className='w-100 h-100 object-fit-cover hover-scale transition' />
              </div>
              <div className="col-8 ps-2">
                <h4 >Category</h4>
                <p className='m-0'>1020 Products</p>
              </div>
            </div>
          </div>
        </div>

        <Card/>
      </div>
    </div>
  )
}

export default Home