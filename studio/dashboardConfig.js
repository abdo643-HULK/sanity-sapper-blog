export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603e90f1dd5c4c13cc9caa87',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio',
                  apiId: 'a048e13a-d3e7-46b9-ba31-a4bbbeab877b'
                },
                {
                  buildHookId: '603e90f135597a16c4c40d20',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog',
                  apiId: '0055e81b-d0f4-4035-aa2b-dc5681355682'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abdo643-HULK/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
