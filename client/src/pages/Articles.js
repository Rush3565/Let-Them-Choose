import React, { useState } from "react";

const articles = [
  {
    title: "When Parents Force Their Children to Choose a Stream",
    summary:
      "An article discussing the pressures children face when parents force them into specific academic streams and its psychological impact.",
    details:
      "Many children experience significant stress and anxiety when pressured to choose academic streams that do not align with their interests or strengths. This can lead to decreased motivation, poor academic performance, and long-term dissatisfaction. The pressure can also affect their mental health, causing feelings of inadequacy and low self-esteem. It is crucial for parents to recognize their child's unique talents and interests and provide support rather than impose rigid expectations. Encouraging open dialogue and allowing children to explore different options can foster a healthier and more positive educational experience. Parents should also seek to understand the evolving interests of their children and be flexible in their expectations to promote overall well-being.",
  },
  {
    title: "The Impact of Parental Pressure on Career Choices",
    summary:
      "Explores how parental pressure affects children's career decisions and mental health.",
    details:
      "Parental pressure to pursue certain careers can cause children to feel trapped and undervalued, leading to stress, anxiety, and even depression. This pressure often stems from parents' desires for security or social status but can overlook the child's passions and abilities. When children are forced into careers they do not enjoy, it can result in poor job satisfaction and burnout later in life. Supporting children in exploring their interests and providing guidance without coercion helps them develop confidence and make informed decisions that align with their true aspirations. Open communication and emotional support are key to helping children navigate these pressures effectively.",
  },
  {
    title: "How to Handle Parents Forcing You to Choose a Course",
    summary:
      "Advice and strategies for students dealing with parental pressure to select certain courses or careers.",
    details:
      "Students facing pressure to choose unwanted courses can benefit from honest and respectful conversations with their parents about their own goals and interests. Seeking support from school counselors, mentors, or trusted adults can provide additional perspectives and mediation. Exploring compromise solutions, such as taking elective courses or pursuing hobbies alongside required studies, can help balance parental expectations with personal desires. Building a strong support network and focusing on long-term goals empowers students to navigate these challenges and maintain their mental well-being. It is also important for students to develop assertiveness skills to express their preferences clearly and confidently.",
  },
  {
    title: "Parents Forcing Children to Work: Effects and Solutions",
    summary:
      "A detailed look at the consequences of parents forcing children into work and how to address it.",
    details:
      "Forcing children into work at a young age can disrupt their education, social development, and overall well-being. Child labor often leads to physical exhaustion, limited opportunities for learning, and emotional distress. It can perpetuate cycles of poverty and limit future prospects. Addressing this issue requires raising awareness about children's rights, providing access to quality education, and offering community support to families facing economic hardships. Governments and organizations must work together to enforce laws against child labor and create programs that support both children and their families. Empowering children through education and social services is essential to breaking these harmful cycles.",
  },
  {
    title: "Balancing Parental Expectations and Children's Aspirations",
    summary:
      "Discusses ways to balance parental expectations with children's own goals and dreams.",
    details:
      "Finding a balance between parental expectations and children's aspirations requires empathy, open communication, and flexibility from both parties. Parents should encourage exploration and respect their child's individuality while providing guidance and support to help them achieve their potential. Children, in turn, should strive to understand their parents' concerns and work together to find common ground. This balance fosters mutual respect, reduces conflict, and promotes healthy development, allowing children to pursue their passions while benefiting from parental wisdom. Establishing trust and maintaining ongoing dialogue are key components of this process.",
  },
];

export default function Articles() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto p-10 bg-gray-800 rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-400 drop-shadow-lg">
          Helpful Articles
        </h1>
        <div className="space-y-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-yellow-400 p-6 rounded-3xl shadow-lg text-gray-900"
            >
              <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
              <p className="text-lg leading-relaxed">{article.summary}</p>
              {expandedIndex === index && (
                <p className="mt-4 text-gray-800 whitespace-pre-line">{article.details}</p>
              )}
              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 text-indigo-700 font-semibold hover:underline focus:outline-none"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
