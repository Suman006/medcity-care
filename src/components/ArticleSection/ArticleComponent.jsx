import { ServiceCardComponent } from "../ServiceCard/ServiceCardComponent"
import './articel.css';
import '../DoctorSection/doctor.css'
// import '../styles/common.css'

export const ArticleComponent = ({customArticles}) => {
    const defaultArticles = [
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
        }
    ]

    const articlesToRender = customArticles || defaultArticles;
    
    return  (
        <div className="row container-fluid common-pad article-section">
            <div className="container-class ">
                <div className="grid-center mb-5">
                    <div>
                        <p style={{color:'#0e204d'}} className="regular text-center"><b>Health Essentials</b></p>
                        <h2 className="text-center">Recent Articles</h2>
                    </div>
                </div>
                <ServiceCardComponent tiles={articlesToRender} buttonVariant='blue-btn' gap='gap' />
            </div>
        </div>
    )
}