async function songs(root, args, context)
{
    // this doesn't work, no idea what could be wrong
    //const where = args.filter ? { OR: [{ name_contains : args.filter }, { content_contains: args.filter }] } : {}

    const where = args.filter ? {name_contains : args.filter} : {}

    return await context.prisma.songs({
        where,
        orderBy: args.orderBy
    })
}

async function song(root, args, context)
{
    const {id} = args // destructure input arguments
    return context.prisma.song({id})
}

module.exports = {
    song,
    songs,
}
