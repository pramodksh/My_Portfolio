import React from 'react'
import{ BsTwitter, BsInstagram} from 'react-icons/bs';
// import{ FaFacebookF} from 'react-icons/fa';
import{ BsGithub} from 'react-icons/bs';

const SocialMedia = () => {
  return (
                <div className="app__social">
                                <div>
                                                <BsTwitter/>
                                </div>
                                <div>
                                                <BsInstagram/>
                                </div>
                                <div>
                                                <BsGithub/>
                                </div>
                </div>
  )
}

export default SocialMedia