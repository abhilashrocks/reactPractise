function Modal(props) {
    function cancelHandeler() {
        props.onCancel();
    }
    function confirmHandeler() {
        props.onConfirm();
    }
    return (
        <div className='modal'>
            <p>Are You Sure?</p>
            <button className='btn btn--alt' onClick={cancelHandeler}>Cancel</button>
            <button className='btn' onClick={confirmHandeler}>Confirm</button>
        </div>
    )
}

export default Modal;