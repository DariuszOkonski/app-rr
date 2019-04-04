import React from 'react';
import Article from '../components/Article';

const articles = [{
  id: 1,
  title: 'Czym jest teoria strun',
  author: 'Jan Nowak',
  text: '1111Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti voluptas eligendi omnis vitae odit laboriosam, illo provident alias rem id, quasi labore possimus sint quibusdam veniam aut magni exercitationem!amet consectetur adipisicing elit. Fugit corrupti voluptas eligendi omnis vitae odit laboriosam, illo provident alias rem id, quasi labore possimus sint quibusdam veniam aut magni exercitationem!'
},
{
  id: 2,
  title: 'Czym jest paradoks fermiego?',
  author: 'Ania Kwiatkowska',
  text: '222Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti voluptas eligendi omnis vitae odit laboriosam!'
},
{
  id: 3,
  title: 'Ciemna materia i ciemna energia?',
  author: 'Jan Kowalski',
  text: '3333Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit corrupti voluptas eligendi omnis vitae odit laboriosam,amet consectetur adipisicing elit. Fugit corrupti voluptas eligendi omnis vitae odit laboriosam, illo provident alias rem id, quasi labore'
},
]

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))

  return (
    <div className="home" >
      {artList}
    </div>
  );
}

export default HomePage;