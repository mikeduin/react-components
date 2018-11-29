import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 4:50PM"
          post="Hahaha!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mike"
          date="Today at 2:00AM"
          post="This is a great app!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Hannah"
          date="Yesterday at 5:00PM"
          post="This thing sucks."
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
