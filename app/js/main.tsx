import React from 'react'
import { render } from 'react-dom'
import Alert from '@kiwicom/orbit-components/lib/Alert'
import Card, { CardSection } from '@kiwicom/orbit-components/lib/Card'
import '@css/tailwind.css'

function App() {
    return (
        <Box>
            <Alert>Please Login with Facebook before moving ahead</Alert>

            <Card>
                <CardSection>Hello World!</CardSection>
            </Card>
        </Box>
    )
}

render(<App />, document.getElementById('app'))
