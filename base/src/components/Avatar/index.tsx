import './avatar.css';

type PropAvatar = {
    image: string
}

function Avatar({ image }: PropAvatar) {
    return (
        <img src={image} alt="Avatar" className='avatar' />
    );
}

export default Avatar;