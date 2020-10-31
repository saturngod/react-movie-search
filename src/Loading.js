import "./Loading.css"

function Loading({isLoading}) {
    if (isLoading == true) {
        return (
            <div className="loading-message">
                Loading...
            </div>
        );
    }
    return (<div></div>);
}
export default Loading;