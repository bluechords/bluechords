import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

const SONGS_QUERY = gql`
    query GetSongs($filter: String) {
        songs(filter: $filter, orderBy: name_ASC) {
            id
            name
            content
        }
    }
`

class Songs extends Component
{
    renderSong(song)
    {
        return (
            <tr key={song.id}>
                <td><Link to={'/song/' + song.id}>{song.name}</Link></td>
            </tr>
        )
    }

    render()
    {
        return (
            <Query
                query={SONGS_QUERY}
                variables={{filter: this.props.filter || null}}
            >
                {({loading, error, data}) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const songsToRender = data.songs

                    return (
                        <Table size="sm" striped={true}>
                            <tbody>
                            {songsToRender.map(song => this.renderSong(song))}
                            </tbody>
                        </Table>
                    )
                }}
            </Query>
        )
    }
}

export default Songs
