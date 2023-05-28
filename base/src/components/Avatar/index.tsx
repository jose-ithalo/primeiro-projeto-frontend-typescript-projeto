import './avatar.css';

type PropAvatar = {
    image: string,
    size?: number

}

function Avatar({ image, size }: PropAvatar) {

    const sizeAvatar: number = size || 140;

    return (
        <img src={image} alt="Avatar" className='avatar' style={{ width: sizeAvatar }} />
    );
}

export default Avatar;