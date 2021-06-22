import React from 'react';
import ReactFuri from 'react-furi';
import styled from 'styled-components';

import './ResultCard.css';

const MyWrapper = styled(ReactFuri.Wrapper.withComponent('h1'))`
    
`;
const CustomFurigana = styled(ReactFuri.Furi)`
    font-size: medium;
    font-weight: 400;
    user-select: text;
`;  
const CustomText = styled(ReactFuri.Text)`
    font-size: xx-large;
    font-weight: 500;
`;

const OtherFormsFurigana = styled(ReactFuri.Furi)`
    font-size: 0.6em;
    font-weight: 400;
    user-select: text;
`;  
const OtherFormsText = styled(ReactFuri.Text)`
    font-size: 0.8em;
    font-weight: 500;
`;

const CustomKana = (kana, reading) => (
    <ReactFuri
      word={kana}
      reading={reading}
      render={({ pairs }) => (
        <MyWrapper lang="ja">
          {pairs.map(([furigana, text], index) => (
            <ReactFuri.Pair key={index}>
              <CustomFurigana>{furigana}</CustomFurigana>
              <CustomText>{text}</CustomText>
            </ReactFuri.Pair>
          ))}
        </MyWrapper>
      )}
    />
);

const OtherForms = (kana, reading) => (
    
    <ReactFuri
        word={kana}
        reading={reading}
        render={({ pairs }) => (
            <MyWrapper lang="ja">
            {pairs.map(([furigana, text], index) => (
                <ReactFuri.Pair key={index}>
                <OtherFormsFurigana>{furigana}</OtherFormsFurigana>
                <OtherFormsText>{text}</OtherFormsText>
                </ReactFuri.Pair>
            ))}
            </MyWrapper>
        )}
    />

);

const Definition = (definition, i) => (
    <div key={i} className="definition-container-plain">
        <p className="definition-type">{definition.type}</p>
        <p className="definition-text">{definition.text}</p>
        <p className="uk-text-meta">{definition.tags}</p>
    </div>
);

class ResultCard extends React.Component{
    constructor(props){
        super(props);
        this.hideElements = this.hideElements.bind(this);
    }

    hideElements(){
        let toRemoveElements = document.querySelectorAll('.hide');
        toRemoveElements.forEach(element => {
            element.remove();
        });

        let toRemoveParents = document.querySelectorAll('.hide-parent');
        toRemoveParents.forEach(element => {
            element.parentElement.remove();
        });
    }

    componentDidMount(){
        this.hideElements();
    }

    render(){
        console.log(this.props.data)
        const data = this.props.data;
        //const { kana, reading, spanishDefs} = this.props.data;
        return(
            <span>
                <ul className="uk-comment-list">
                    <li className="fc">
                        <article className="uk-comment main">
                            {CustomKana(data.japanese[0].word, data.japanese[0].reading)}
                        </article>
                        <ul>
                            <li>
                                <article className="uk-comment secondary">
                                    {data.spanishDefs.map((definition, index) => (
                                        Definition(definition, index)
                                    ))}
                                    {data.japanese.length <= 1 ? <span className='hide'></span> : <p className="other-forms-title">Variaciones:</p>}
                                    <div className="other-forms">
                                        {data.japanese.length <= 1 ? <span className='hide-parent'></span> : <span className='hide'></span>}
                                        {data.japanese.map((definition, index) => (
                                            <span className="alternative" key={index}>
                                                {index === 0 ? <span className='hide-parent'></span> : OtherForms(definition.word, definition.reading, index)}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr></hr>
            </span>
        );
    }
        



}

export default ResultCard;