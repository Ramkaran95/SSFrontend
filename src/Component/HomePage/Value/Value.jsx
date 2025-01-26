import React from 'react'
import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    AccordionItemPanel
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../../utilities/accordion'

const Value = () => {
  return (
    <section className='v-wrapper'>
        
        <div className="paddings innerwidth flexCenter v-container">
            {/*Left Side*/}
            <div className="v-left">
                <div className="image-container1">
                    <img src="./hero2-img.png" alt=''/>
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className='blueText'>Our Value</span>
                <span className='primaryText1'>Value We Give You</span>
                <span  className='secondaryText'>Seemless solutions,reliable professionals and<br/> personalised care-
                because your trust is our priority!</span>


                <Accordion
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                    data.map((item,i)=> {
                        return(
                            <AccordionItem className='accordionItem' key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        {/*<AccordionItemState>
                                            {({expanded})=>expanded?setClassName("expanded"):setClassName("collapsed")}
                                        </AccordionItemState>*/}
                                        <div className="flexCenter iconnn">
                                            {item.icon}
                                        </div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter iconnn">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                </AccordionItemPanel>

                            </AccordionItem>
                        )
                    })}

                </Accordion>

            </div>
        </div>
    </section>
  )
}

export default Value;