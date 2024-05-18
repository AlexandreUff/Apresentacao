export default function Modal(props){

    const closeModal = () => {
        props.isClose(false);
    }

    return (
        <>
            {props.isOpen && (
                <div className="main-modal" id='background-modal' onClick={closeModal}>
                    {props.children}
                </div>
            )}
        </>
    )
}