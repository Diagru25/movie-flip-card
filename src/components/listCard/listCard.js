import React, { useEffect } from 'react';
import FlipCard from '../card/flipCard';



function ListCard(props) {

    

    useEffect(() => {
        let card = document.getElementsByClassName("card__inner");

        console.log(card[0]);

        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener("click", function (e) {
                card[i].classList.toggle('is-flipped');
            });
        }
    });


    return (
        <section className="content">
            {
                props.results.map(element => (
                    <FlipCard 
                        key={element.imdbID}
                        result={element}
                        />
                ))
            }
        </section>
    );
}

export default ListCard;