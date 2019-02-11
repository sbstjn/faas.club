import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout primary="Not Found" secondary="404" footer={false}>
    <SEO title="404: Not found" />
  </Layout>
)

export default NotFoundPage
