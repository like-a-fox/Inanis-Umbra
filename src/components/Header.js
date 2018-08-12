import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="inanis-umbra"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Inanis Umbra</h1>
                <p>'A Failure's Life' written by Derek Musser</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>The Gist</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Poem</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Teaser</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
