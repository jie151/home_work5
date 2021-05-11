import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const User=()=>{
    class UserGithub extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                githubUrl:'',
                avatarUrl: '',
                user_id:'',
                user_login:'',
                repos:'',
                followers:'',
                following:'',
            }
          
        }
        componentDidMount() {
            $.get(this.props.source, (result)=> {
                console.log(result);
                const data = result;
                if (data) {
                    this.setState({
                        username: data.name,
                        githubUrl: data.html_url,
                        avatarUrl:data.avatar_url,
                        user_id:data.id,
                        user_login:data.login,
                        repos:data.public_repos,
                        followers:data.followers,
                        following:data.following,
                    });
                }
            });
        }
        render() {
            return(
                <div>
                    <img src={this.state.avatarUrl}/>
                    <h3>Login:{this.state.user_login}</h3>
                    <h4>Name:{this.state.username}</h4>
                    <h3>ID:{this.state.user_id}</h3>
                    <h3>public repositories:{this.state.repos}</h3>
                    <h3>followers:{this.state.followers}</h3>
                    <h3>followering:{this.state.following}</h3>
                    <a href={this.state.githubUrl}>Github Link</a>
                </div>
            );
        }
    }
    ReactDOM.render(
        <UserGithub source = "https://api.github.com/users/jie151"/>,
        document.getElementById('root')
    );
    var output=[];
    output.push(<UserGithub/>)
    return output
}

export default User;

