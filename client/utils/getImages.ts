export default async function getImages() {
  try {
    // Fetch images from the server and return them
    const res = await fetch(`${process.env.API_BASE_URL}/post/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 10,
      },
    })

    const data = await res.json()

    return data
  } catch (error) {
    // error occured while fetching images so return an empty array
    console.log(error)
    return {
      success: false,
      data: [],
    }
  }
}
