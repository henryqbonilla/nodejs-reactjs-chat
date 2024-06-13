import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='cb093390-f00d-45aa-b90f-91d10596b694'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage