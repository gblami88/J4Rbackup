import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  overview: string;
  content: string;
  author: string;
  author_description: string;
  published_at: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "43205fab-b669-4e1c-9eb1-27531465966e",
    title: "Imagine Flipping a Switch",
    slug: "imagine-flipping-a-switch",
    overview: "Direct response marketing gets you in front of more local clients ready to buy.",
    content: "What if getting more customers was as simple as flipping a switch?\n\nNo more guessing which ads work.\n\nNo more throwing money at platforms and hoping something sticks.\n\nNo more wondering if anyone will even see your business.\n\nJust flip the switch, and customers start finding you.\n\nThat's what proper marketing does.\n\nDirect response marketing gets you in front of more local clients ready to buy.\n\nNot tire-kickers. Not maybes. Real people with real problems that your business solves, who are actively looking for someone like you right now.\n\nHere's what that looks like:\n\nSomeone searches for your service on Google. Your business shows up first. They click. They call. They book.\n\nNo complicated sales pitch is needed. They already want what you offer. You just made it easy for them to find you.\n\nThat's the switch.\n\nMost local businesses never flip it because they think marketing is complicated, expensive, or something only big companies can afford.\n\nBut here's the truth:\n\nThe businesses dominating your local market aren't spending more money than you. They're just spending it smarter.\n\nThey know exactly which platforms work for their industry. They know what messages get people to take action. And they've built systems that bring in customers consistently, not randomly.\n\nYou can have that too.\n\nThe difference between struggling to get customers and having more than you can handle? It's not luck. It's not connections. It's just knowing how to flip the switch.\n\nWant us to show you how? Get your FREE marketing analysis, and we'll map out exactly what's working in your market and how to tap into it.\n\nFlip the switch.\n\nTalk soon\n\n— Lamin\n\nHelping local businesses get found online and fill their calendars with customers.",
    author: "Lamin",
    author_description: "Helping local businesses get found online and fill their calendars with customers.",
    published_at: "2025-12-19T11:25:00.160178Z"
  }
];

const BlogPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cardStyles = [
    { bgGradient: "from-blue-50 to-blue-100" },
    { bgGradient: "from-green-50 to-green-100" },
    { bgGradient: "from-orange-50 to-orange-100" }
  ];

  const togglePost = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#e8e5df] px-6 sm:px-12 lg:px-20 py-12">
      <div className="mb-16">
        <span className="inline-block bg-[#d4d1ca] px-6 py-3 rounded-full text-black text-lg">
          Blog
        </span>
      </div>

      <div className="max-w-6xl mb-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight mb-12">
          The Blog to Get More Customers:
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl">
          Simple Marketing Tactics Any Local Business Can Use This Week to Bring In More Customers
        </p>
      </div>

      <div className="max-w-4xl">
        <div className="space-y-6">
          {BLOG_POSTS.map((post, index) => {
              const style = cardStyles[index % cardStyles.length];
              return (
              <article
                key={post.id}
                className={`group relative bg-gradient-to-br ${style.bgGradient} rounded-2xl border-2 border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-gray-400`}
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Accent corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${style.bgGradient} opacity-50 rounded-tr-2xl rounded-bl-full pointer-events-none`}></div>

                <div className="relative px-6 py-6 sm:px-8 sm:py-8">
                  <div className="mb-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
                      {post.title}
                    </h2>
                    <time className="text-sm text-gray-500">
                      {formatDate(post.published_at)}
                    </time>
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                    {post.overview}
                  </p>

                  <button
                    onClick={() => togglePost(index)}
                    className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all duration-200"
                    aria-expanded={openIndex === index}
                    aria-controls={`post-content-${index}`}
                  >
                    <span>{openIndex === index ? 'Read less' : 'Learn More'}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`post-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-[2000px] mt-6' : 'max-h-0'
                    }`}
                  >
                    <div className="prose prose-lg max-w-none">
                      {post.content.split('\n').map((paragraph, i) => (
                        paragraph.trim() ? (
                          <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ) : null
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        {post.author}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {post.author_description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
