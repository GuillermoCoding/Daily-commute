import React from 'react';
import styles from '../styles/LoadMoreButton.css';
import { withApollo, compose } from 'react-apollo';
import { 
  fetchJobs, 
  fetchSearchedJob, 
  fetchAddress, 
  fetchCommuteOption, 
  fetchJobList,

} from '../queries';
import { updateJobList } from '../mutations';

class LoadMoreButton extends React.Component {
  async loadMore (){
    
  }
  render(){
    return (
      <button className={styles.button} onClick={this.loadMore.bind(this)}>
        <h6 className={styles.text}>Load More</h6>
      </button>
    );
  }
}

export default LoadMoreButton;