const CONTENTFUL_ENDPOINT = process.env.CONTENTFUL_ENDPOINT;

const CONTENTFUL_TOKEN = process.env.CONTENTFUL_TOKEN;

export async function getAllPosts() {
  const query = `
    {
        blogPostCollection{
       items{
        title
        slug
           heroImage {
             title
             description
             contentType
             fileName
             size
             url
             width
             height
           }
       }
     } 
   }   
    `;
  const response = await fetch(`${CONTENTFUL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authenticate the request
      Authorization: CONTENTFUL_TOKEN,
    },
    // send the GraphQL query
    body: JSON.stringify({ query }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const allPosts = data;

  //   for (const key in data) {
  //     // const quoteObj = {
  //     //   id: key,
  //     //   ...data[key],
  //     // };

  //     allPosts.push(quoteObj);
  //   }

  return allPosts;
}

export async function getSinglePost(slug) {
  const query = `
  query{
    blogPostCollection(where: {slug: "${slug}"}, limit:1){
   items{
    title
    body
    publishDate
    slug
       heroImage {
         title
         description
         contentType
         fileName
         size
         url
         width
         height
       }
   }
 } 
}
`;
  const response = await fetch(`${CONTENTFUL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authenticate the request
      Authorization: 'Bearer 4u1CJtamdXVhjkxZtS0o5Bdct67hy_gkipc8pWfN0-o',
    },
    // send the GraphQL query
    body: JSON.stringify({ query }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${CONTENTFUL_ENDPOINT}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(
    `${CONTENTFUL_ENDPOINT}/comments/${requestData.quoteId}.json`,
    {
      method: 'POST',
      body: JSON.stringify(requestData.commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(
    `${CONTENTFUL_ENDPOINT}/comments/${quoteId}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
