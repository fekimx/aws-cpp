import React from 'react';
import './App.css';

const HomePage = () => {
  return (
    <div className="container row col-md-8" style={{ margin: 'auto', textAlign:'justify'}}>
      
      <div style={{textAlign:'center', paddingBottom:'0px'}}>
        <img src={`${process.env.PUBLIC_URL}/AWSCPCloud.png`} alt="Cloud image" style={{ width: '30%', height:'80%', maxWidth: '500px' }}></img>
      </div>
      
      <section>
        <h3>Why this site?</h3>
          <p>
            Even those with a solid computer science background and daily experience using AWS can find the certification exam challenging due to its extensive breadth. While it’s not an inherently difficult exam, the sheer volume of content—covering over 160 services and tools, along with pricing and shared responsibility models, and various concepts (WAF, CAF, 6Rs, ...🤪) can feel overwhelming. This site aims to simplify your study process, breaking down complex topics into manageable lessons so you can confidently tackle the exam and succeed.🧠 💻 ✨
          </p>
      </section>

      <section>
        <h3>Who is this for?</h3>
        <p> 
          This website is designed for individuals seeking to build a solid foundation in Amazon Web Services (AWS), particularly in the Cloud Practitioner exam. Whether you’re a complete beginner wanting to understand cloud concepts or a professional looking to enhance your skills for career advancement, these comprehensive study guides and practice quizzes cater to a wide range of learners, from students and IT professionals to business leaders aiming to leverage cloud technology effectively. Get ready to master the AWS Cloud and boost your confidence for the AWS Certified Cloud Practitioner exam! 🌥️ 📈 ✨
        </p>
      </section>

      <section>
        <h3>Personal Note</h3>
        <p> 
          I consider myself having a solid foundation in CS including programming, networking, security, cloud computing (though my direct AWS experience is limited to a graduate-level class at the time of my exam take and hosting this page on AWS after I took the exam 🥳) 
          <br></br>
          While preparing for the AWS Cloud Practitioner exam, I found that AWS Skill Builder materials not covering all of the services, tools, and concepts that showed up on the practice exams. Every time I took a practice test, I’d encounter something new! 
          <br></br>
          To bridge the gap, I curated detailed notes during my studies, organizing them into easy-to-digest units. I recommend reviewing all the concepts covered in <a href="/lessons">the lessons</a> and tackling <a href="/quiz">quizzes</a> once you have a good grasp of the material.
          <br></br>
          In my experience, the exam itself isn’t particularly difficult—definitely easier than the practice exams I took. The key is to have a broad understanding of AWS, rather than diving deep into any single area. With the right prep, you’ve got this! 📝 💪 ✨
        </p>
      </section>

      <section>
        <h3>Get Started!</h3>
        <p>
          Ready to dive into the world of AWS? Learn about <a href="/exam">the exam structure</a>, study <a href="/lessons">the lessons</a> to review key concepts, and take <a href="/quiz">quizzes</a> to assess your understanding. These resources will guide you on your cloud journey and help you build a solid foundation in AWS! 💡 ✅ ✨
        </p>
      </section>
    </div>
  );
};

export default HomePage;
