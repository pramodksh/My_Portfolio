import React from 'react'

const NavigationDots = ({ active }) => {

        // var listOfSections = ['home', 'about', 'works', 'skills', 'testimonial', 'contact'];
        var listOfSections = ['home', 'about', 'works', 'contact'];
        return (
                <div className='app__navigation'>
                        {listOfSections.map((item, index) => (
                                // eslint-disable-next-line jsx-a11y/anchor-has-content
                                <a
                                        href={`#${item}`}
                                        key={item + index}
                                        className="app__navigation-dot"
                                        style={active === item ? { backgroundColor: '#313BAC' } : {}}
                                />
                        ))}
                </div>
        )
}

export default NavigationDots 