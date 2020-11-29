import React, { Component } from 'react';
import axios from 'axios';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: {},
         }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/posts/detail/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    post: res.data.post,
                });
            }
            console.log("post: ", this.state.post);
        });
    }

    render() { 
        return ( 
            <div>Detail Page</div>
         );
    }
}
 
export default DetailPage;