
import { ArticleComponent } from "../../../components/ArticleSection/ArticleComponent"
import { FooterComponent } from "../../../components/Footer/FooterComponent"
import { BlogHeroComponent } from "../BlogHero/BlogHeroComponent"

export const BlogIndexComponent = () => {
    const sixArticles = [
        {
            image : '/images/article-1.jpg',
            pill:'Neurology',
            heading: 'Unsure About Wearing Face Mask? Here’s How and Why',
            paragraph : 'That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or hospital, it’s wise to wear…'

        },
        {
            image : '/images/article-2.jpg',
            pill:'Laboratory, Pediatric',
            heading: '6 Tips to Protect Your Mental Health When You’re Sick',
            paragraph : 'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a medical conditio – and that’s certainly true if you test positive for COVID-19, or are presumed…'

        },
        {
            image : '/images/article-3.jpg',
            pill:'Neurology, Pathology',
            heading: 'Tips for Eating Healthy When You’re Working From Home',
            paragraph : 'You’re on a conference call and somehow wandered into the kitchen. Next thing you know you’re eating crackers and dry cereal out of the box. Or maybe you got so…'
        },
        {
            image : '/images/article-4.jpg',
            pill:'Cardiology, Pathology',
            heading: 'Why Coronavirus Cases At Young Is Bad News',
            paragraph : 'A new surge of coronavirus cases has spread across the country and while there’s still so much to learn about the virus, how it’s transmitted and its long-term effects, the…'

        },
        {
            image : '/images/article-5.jpg',
            pill:'Pathology, Pediatric',
            heading: 'Why Do People Get Kidney Stones in the Summer?',
            paragraph : 'Summer may have just officially started, but kidney stone season began a couple of weeks ago. Doctors see an increase in kidney stone cases when the weather warms up.'

        },
        {
            image : '/images/article-6.jpg',
            pill:'Cardiology, Pediatric',
            heading: 'Do Any Drugs Really Work to Treat Coronavirus?',
            paragraph : 'While most people who get COVID-19 are able to recover at home, the rush is on to find a treatment that’s safe and effective against life-threatening cases of the disease.'
        }
    ]
    return (
        <div>
            <BlogHeroComponent />
            <ArticleComponent customArticles={sixArticles} />
            <FooterComponent />
        </div>
    )
}