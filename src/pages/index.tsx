import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'

export const IndexPage = () => (
  <>
    <h2>Welcome to my world</h2>
    <p>The blog contains lessons learned, ideas, interesting readings and most importantly a personal trove of information</p>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
