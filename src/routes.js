import Home from './components/Home.vue';
import Blog from './components/blog/Blog.vue';
import Explore from './components/explore/Explore.vue';
import Post from './components/post/Post.vue';
import Profile from './components/profile/Profile.vue';
import About from './components/about/About.vue';
import Contact from './components/about/Contact.vue';
import Sponsor from './components/about/Sponsors.vue';
import Partner from './components/about/Partners.vue';
import PostCard from './components/post/PostCard.vue';
import Featured from './components/post/FeaturedCards.vue'
export const routes = [
    {
        path: '/', component: Home, children: [
            { path: '/', component: PostCard }
        ]
    },
    { path: '/blog', component: Blog },
    { path: '/explore', component: Explore },
    { path: '/post', component: Post, children: [
        { path: '/', component: Featured}
    ] },
    { path: '/profile', component: Profile },
    { path: '/about-us', component: About },
    { path: '/contact-us', component: Contact },
    { path: '/sponsors', component: Sponsor },
    { path: '/partners', component: Partner },
]