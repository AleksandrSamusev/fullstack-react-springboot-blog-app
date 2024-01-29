import {DashboardComponentRow} from "./DashboardComponentRow";

export const DashboardComponent = (props) => {

    console.log(props.user.articles.length)

    const getNumberOfLikes = () => {
        let count: number = 0;
        const articles = props.user.articles;
        for (let i = 0; i < articles.length; i++) {
            count = count + articles[i].likes.length;
        }
        return count;
    }

    const getNumberOfComments = () => {
        let count: number = 0;
        const articles = props.user.articles;
        for (let i = 0; i < articles.length; i++) {
            count = count + articles[i].comments.length;
        }
        return count;
    }

    return (
        <div>
            <div className="row d-flex">
                <div className="col-md-4 ">
                    <h3 className="text-center mb-3">STATISTICS</h3>
                    <br/>
                    <DashboardComponentRow
                        rowTitle="Articles posted:"
                        rowValue={props.user.articles.length}
                    />
                    <DashboardComponentRow
                        rowTitle="Articles liked:"
                        rowValue={props.user.likes.length}
                    />
                    <DashboardComponentRow
                        rowTitle="Comments posted:"
                        rowValue={props.user.comments.length}
                    />
                    <DashboardComponentRow
                        rowTitle="Messages written:"
                        rowValue={props.user.sentMessages.length}
                    />

                    <DashboardComponentRow
                        rowTitle="Messages received:"
                        rowValue={props.user.receivedMessages.length}
                    />
                    <DashboardComponentRow
                        rowTitle="Likes from other users:"
                        rowValue={getNumberOfLikes()}
                    />
                    <DashboardComponentRow
                        rowTitle="Comments on my articles:"
                        rowValue={getNumberOfComments()}
                    />
                </div>

                <div className="col-md-3">
                    <h3 className="text-center mb-3">PERSONAL INFORMATION</h3>
                    <br/>
                    <div className="row mb-3">
                        <div className="col-5">
                            <h5>First name</h5>
                        </div>
                        <div className="col-7 d-flex justify-content-end">
                            <h5>{props.user.firstName}</h5>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5">
                            <h5>Last name</h5>
                        </div>
                        <div className="col-7 d-flex justify-content-end">
                            <h5>{props.user.lastName}</h5>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5">
                            <h5>Birthday</h5>
                        </div>
                        <div className="col-7 d-flex justify-content-end">
                            <h5>{props.user.birthDate}</h5>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5">
                            <h5>Username</h5>
                        </div>
                        <div className="col-7 d-flex justify-content-end">
                            <h5>{props.user.username}</h5>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-5">
                            <h5>Email</h5>
                        </div>
                        <div className="col-7 d-flex justify-content-end">
                            <h5>{props.user.email}</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}