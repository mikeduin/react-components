import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="Today at 4:50PM"
        post="Hahaha!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Mike"
        date="Today at 2:00AM"
        post="This is a great app!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Hannah"
        date="Yesterday at 5:00PM"
        post="This thing sucks."
        image={faker.image.avatar()}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
