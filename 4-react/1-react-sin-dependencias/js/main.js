import React from 'https://esm.sh/react@18.0.0'
import ReactDom from 'https://esm.sh/react-dom@18.0.0/client'

const appElement = document.getElementById('app')
const root = ReactDom.createRoot(appElement)

const button = React.createElement('button', {onClick: () => alert('Hola mundo')}, 'Haz clic!')

root.render(button)

