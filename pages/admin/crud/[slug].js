import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogUpdate from "../../../components/crud/BlogUpdate";
import Dashboard from "../../../components/Dashboard";

const Blog = () => {
  return (
    <Layout>
      <Dashboard>
        <Admin>
          <div className="card card-body">
            <BlogUpdate />
          </div>
        </Admin>
      </Dashboard>
    </Layout>
  );
};

export default Blog;
