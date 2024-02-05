import { News_Posts_Section } from "../components/post_section/News_Posts_Section"
import posts from "../assets/posts.json"
import './../styles/home.css'
import { News } from "../components/News"

export const Home = () => {
  return (
    <main className="max-w-screen overflow-x-hidden font-roboto">
      <header>
        <News
          news={{
            id: '1',
            image: 'header-clothe',
            title_front: 'NEW',
            title_middle: ' THIS ',
            title_end: 'MONTH',
            info: 'Urban and gym clothing.',
            button1_title: 'FEATURED PRODUCTS',
            button2_title: 'NEW PRODUCTS',
          }}
        />
      </header>
      <News_Posts_Section posts={posts.posts} />
      <News
        news={{
          id: '1',
          image: 'off-clothe',
          title_front: '20%',
          title_middle: '',
          title_end: 'OFF',
          info: 'Urban and gym clothing.',
          button1_title: 'FEATURED PRODUCTS',
          button2_title: 'NEW PRODUCTS',
        }}
      />
      <News_Posts_Section posts={posts.posts} />
    </main>
  )
}