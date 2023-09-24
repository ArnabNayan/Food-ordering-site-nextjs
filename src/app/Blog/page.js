import BlogAward from "@/components/BlogAward";
import BlogBanner from "@/components/BlogBanner";
import BlogVideo from "@/components/BlogVideo";

export const metadata = {
    title: 'Blog | Food Ordering Zone',
    description: 'Generated by create next app',
  }

const Blogpage = () => {
    return (
        <div className="overflow-x-hidden overflow-y-hidden">
           <BlogBanner/>
           <BlogVideo/>
           <BlogAward/>
        </div>
    );
};

export default Blogpage;