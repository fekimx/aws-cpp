import React, { useEffect, useState } from 'react';
import './style-lessons.css';

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <h2  className="font-weight-bold" onClick={toggle} style={{ cursor: 'pointer' }}>
        {title} {isOpen ? '-' : '+'}
      </h2>
      {isOpen && <div className="mb-4">{children}</div>}
    </div>
  );
};

const Lessons = () => {
  const [htmlContent, setHtmlContent] = useState([]);

  useEffect(() => {
    fetch('/AWS_CloudPractitioner.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');

        const sections = Array.from(doc.querySelectorAll('h2')).map(heading => {
          const content = [];
          let next = heading.nextElementSibling;

          while (next && next.tagName !== 'H2') {
            content.push(next.outerHTML);
            next = next.nextElementSibling;
          }

          return {
            title: heading.textContent,
            content: content.join(''),
          };
        });

        setHtmlContent(sections);
      })
      .catch(error => console.error('Error fetching HTML file:', error));
  }, []);

  return (
    <div className="container row col-md-8" style={{ margin: 'auto', textAlign:'justify' }}>
      <p>Welcome to the comprehensive lessons hub! Here, I share my detailed notes with you! You’ll find the table of contents designed to help you navigate through your study materials effortlessly. I suggest you expand each heading and make sure you know all of the content as it may appear on the exam.</p>
      {htmlContent.map((section, index) => (
        <CollapsibleSection key={index} title={section.title}>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </CollapsibleSection>
      ))}
    </div>
  );
};

export default Lessons;
