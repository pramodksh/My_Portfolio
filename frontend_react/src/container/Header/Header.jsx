import React from 'react'
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";
import { AppWrap } from '../../wrapper';

import { images } from '../../constants'
import './Header.scss'

const scaleVarients = {
        whileInView: {
                scale: [0, 1],
                opacity: [0, 1],
                transition: {
                        duration: 1,
                        ease: 'easeInOut'
                }
        }
}

// const listOfIcons = [images.git, images.flutter,
// images.figma, images.html, images.css,
// images.javascript, images.blender, images.illustrator,
// images.aftereffect, images.premierepro,];

const listOfIcons = [images.git, images.flutter,]
// images.figma, images.html, images.css,
// images.javascript, images.blender, images.illustrator,
// images.aftereffect, images.premierepro,];

const Header = () => {
        return (
                <div className="app__header app__flex">
                        <motion.div
                                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 1 }}
                                className="app__header-info"
                        >
                                <div className="app__header-badge">
                                        <div className="badge-cmp app__flex">
                                                {/* <span>👋</span> */}
                                                <div style={{ marginLeft: 20 }}>
                                                        {/* <h6 className="p-text">Hello, I am</h6> */}
                                                        {/* <h6 className=" plusTen">Hello, I am</h6> */}
                                                        {/* <h1 className="head-text name-font">Pramod Kumar</h1> */}
                                                        <div className="App">
                                                                <Typewriter

                                                                        onInit={(typewriter) => {
                                                                                typewriter
                                                                                        .typeString("Hello, I am ")
                                                                                        .typeString("<h4>Pramod Kumar</h4>")
                                                                                        .pauseFor(1000)
                                                                                        // .deleteAll()
                                                                                        // .deleteChars(12)
                                                                                        // .typeString("Welcomes You")
                                                                                        .start();
                                                                        }}
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="tag-cmp app__flex">
                                                <p className="p-text">Android App Developer</p>
                                                <p className="p-text">Web Developer</p>
                                        </div>
                                </div>


                        </motion.div>
                        <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 1, delayChildren: 0.5 }}
                                className="app__header-img"
                        >
                                <img src={images.profile} alt="profile-bg" />
                                <motion.img
                                        whileInView={{ scale: [0, 1] }}
                                        transition={{ duration: 1, ease: 'easeInOut' }}
                                        className="overlay_circle"
                                        src={images.circle}
                                        alt="Profile_circle"
                                />

                        </motion.div>

                        <motion.div
                                variants={scaleVarients}
                                whileInView={scaleVarients.whileInView}
                                className="app__header-circles"
                        >
                                {listOfIcons.map((circle, index) => (
                                        <div className="circle-cmp app__flex" key={`circle-${index}`}>
                                                <img src={circle} alt="circle" />
                                        </div>
                                ))}


                        </motion.div>
                </div>
        )
}

export default AppWrap(Header, 'home');

// https://www.behance.net/gallery/155901101/Hot-Beans-Cafeteria
// https://www.behance.net/gallery/155901777/Poster-Design?
// https://www.behance.net/gallery/155930363/Dream
// https://www.behance.net/gallery/155930923/Paper-for-Peers



// TODO : Add current working project section