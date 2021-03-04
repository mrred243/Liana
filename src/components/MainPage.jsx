import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import bodyshop from '../assets/thebodyshop.png'
import laplandsHotels from '../assets/lapland-hotels.jpg';
import ikea from '../assets/ikea.png'
import bosch from '../assets/bosch.png'

const MainPage = () => {
    const [data, setData] = useState(null);
    const [ snackbarOpen, setSnackbarOpen ] = useState(false)

    const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lianatech.com%2Fblog.rss`;
    
    useEffect(() => {       
        fetch(RSS_URL)
        .then(response => response.json())
        .then(res => {
            setData(res)
        })       
    }, [])

    const onClickNewsletter = () => {
        setSnackbarOpen(true);
        setTimeout(function(){ setSnackbarOpen(false); }, 2000);
      }


    return (
        <>
        <header>
            <div className='header header_1'>
                <div className='header_1__list'>
                    <a className='header_1__list__item' href='t'>News</a>
                    <a className='header_1__list__item' href='t'>Intranet</a>
                    <select className='header_1__list__item' name="language" id="language">
                        <option value="en">In English</option>
                        <option value="fi">In Finnish</option>
                        <option value="sw">In Swedish</option>
                    </select>
                </div>
            </div>
            <div className='header header_2'>
                    <img className='logo' src={logo} alt='liana-logo' height='60px' width='120px' />
                <div className='header_2__nav'>
                    <a className='header_2__nav_item' href='t'>Company</a>
                    <a className='header_2__nav_item' href='t'>Products</a>
                    <a className='header_2__nav_item' href='t'>Contact Us</a>
                </div>
                <div className='grow' />
                <div className='header_2__search'>
                    <input className='header_2__search__input' placeholder='Search'></input>
                    <button className='header_2__search__btn'>Search</button>
                </div>
            </div>
        </header>

        <main>
            <div className='cover'>
                    <h2 className='title'>Software fueling digital marketing</h2>
                    <button className='cover__btn'>Learn more</button>
            </div>
            <div className='direct'>
                <div className='direct__item'>
                    <h4>Company</h4>
                </div>
                <div className='direct__item'>
                    <h4>Products</h4>
                </div>
                <div className='direct__item'>
                    <h4>Contact us</h4>
                </div>
            </div>
            <div className='number_info'>
                <div className='number_info__item'>
                    <div>
                        <i className="fas fa-briefcase icon"></i>                    
                    </div>
                    <div>
                        <h2 className='number'>3000</h2>
                        <p>Clients</p>
                    </div>
                </div>
                <div className='number_info__item'>
                    <div>
                        <i className="far fa-grin-stars icon"></i>                  
                    </div>
                    <div>
                        <h2 className='number'>1800</h2>
                        <p>Employees</p>
                    </div>                
                </div>
                <div className='number_info__item'>
                    <div>
                        <i className="fas fa-globe icon"></i>
                    </div>
                    <div>
                        <h2 className='number'>10000</h2>
                        <p>Daily users</p>
                    </div>                
                </div>
            </div>
            <div className='lastest_news'>
                <h2 className='lastest_news__title'>Lastest news</h2>
                <div className='lastest_news__content'>
                    {
                        data === null ? (
                        <div></div>
                        ) : (
                            <>
                                <div className='lastest_news__item'>
                                    <a href={data.items[0].link}>
                                        <p>{data.items[0].pubDate.substring(0,10)}</p>
                                        <p>{data.items[0].title}</p>
                                    </a>
                                </div>
                                <div className='lastest_news__item'>
                                    <a href={data.items[1].link}>
                                        <p>{data.items[1].pubDate.substring(0,10)}</p>
                                        <p>{data.items[1].title}</p>
                                    </a>
                                </div>                  
                                <div className='lastest_news__item'>
                                    <a href={data.items[2].link}>
                                        <p>{data.items[2].pubDate.substring(0,10)}</p>
                                        <p>{data.items[2].title}</p>
                                    </a>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='reference'>
                <h2>Reference</h2>
                <div className='reference__content'>
                    <div className='reference__item'>
                        <div className='reference__logo'>
                            <img src={bosch} alt='logo' width='100px'/>
                        </div>
                        <div className='reference__item__p'>
                            <h3>Robert Bosch</h3>
                            <p>Bosch is multinational engineering and electronics company</p>
                        </div>
                    </div>                  
                    <div className='reference__item'>
                        <div className='reference__logo'>
                            <img src={bodyshop} alt='logo' width='100px'/>
                        </div>
                        <div className='reference__item__p'>
                            <h3>The Body Shop</h3>
                            <p>The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.</p>
                        </div>
                    </div>                    
                    <div className='reference__item'>
                        <div className='reference__logo' >
                            <img src={laplandsHotels} alt='logo' width='100px'/>
                        </div>
                        <div className='reference__item__p'>
                            <h3>Lapland Hotels</h3>
                            <p>Lapland Hotels is the largest and the most diverse hotel chain in Lapland.</p>
                        </div>
                    </div>
                    <div className='reference__item'>
                        <div className='reference__logo'>
                            <img src={ikea} alt='logo' width='100px'/>
                        </div>
                        <div className='reference__item__p'>
                            <h3>IKEA</h3>
                            <p>IKEA is a multinational furniture store.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='newsletter'>
                <div id="snackbar" className={ snackbarOpen === true ? 'show' : '' }>Thank you for your subscription.</div>
                <h2>Subscribe to our newsletter</h2>
                <p>Follow our story and get the lastest promotional news about our products and events.</p>
                <div>
                    <input placeholder='Your email address' type='text' />
                    <button onClick={onClickNewsletter}>Subscribe</button>
                </div>
            </div>
        </main>
        <footer>
            <div className='contact'>
                <h3>Liana Technologies</h3>
                <div className='contact__content'>
                    <p><strong>Sales and inquiries</strong></p>
                    <div className='contact__item'>
                        <div style={{marginRight: '10px'}}>
                            <p>Email: sales@lianatech.com</p>
                            <p>Phone: +358 10 387 7053</p>
                        </div>
                        <div>
                            <button>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact right'>
                <div className='contact__list'>
                    <a className='contact__link' href='t'>Company</a>
                    <a className='contact__link' href='t'>Products</a>
                    <a className='contact__link' href='t'>Contact us</a>
                    <a className='contact__link' href='t'>News</a>
                    <a className='contact__link' href='t'>Intranet</a>
                </div>
                <div>
                    <i className="fab fa-facebook footer-icon"></i>
                    <i className="fab fa-twitter footer-icon"></i>
                    <i className="fab fa-linkedin footer-icon"></i>
                </div>
            </div>
        </footer>
        </>
    )
}

export default MainPage
