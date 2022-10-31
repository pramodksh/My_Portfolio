import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
// import{ FaFacebookF} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
        return (
                <div className="app__social">
                        <div>
                                <BsGithub />
                        </div>
                        <div>
                                <BsInstagram />
                        </div>
                        <div>
                                <BsLinkedin />
                        </div>
                </div>
        )
}

export default SocialMedia