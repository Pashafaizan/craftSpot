import "./Heading.css"

export default function Heading({text}) {

    return <>
        <div className="heading-container">
            <h3 className="heading-title">
                <b></b>
                <span>
                <i class="fa fa-gift"></i>
                {text}
                </span>
                <b></b>
            </h3>
        </div>
    </>
}