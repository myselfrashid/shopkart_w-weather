import React, { Component } from 'react';
import loading from 'D:/Websites/React/newsbucket/src/loading.gif'


export class Spinner extends Component {
  render() {
    return (
        <div className='flex justify-center self-center text-center'>
            <img src={loading} alt="loading" />
        </div>
    )
  }
}

export default Spinner