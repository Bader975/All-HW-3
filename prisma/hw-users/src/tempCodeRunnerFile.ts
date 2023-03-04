const createbook = async () => {

  const createbook = await prisma.books.create({
      data: {
        book_name: 'b',
             buyer_id:4,
      },
    })
    console.log(createbook);
    
}

createbook();
