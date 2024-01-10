import {DashboardComponentRow} from "./DashboardComponentRow";

export const DashboardComponent = (props) => {

    console.log(props.user.articles.length)

    const getNumberOfLikes = () => {
        let count: number = 0;
        const articles = props.user.articles;
        for(let i = 0; i<articles.length; i++) {
            count = count + articles[i].likes.length;
        }
        return count;
    }

    const getNumberOfComments = () => {
        let count: number = 0;
        const articles = props.user.articles;
        for(let i = 0; i<articles.length; i++) {
            count = count + articles[i].comments.length;
        }
        return count;
    }

    return (
        <div>
            <div className="mt-5">
                <h2 className="text-end pe-4"
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: '38px',
                        fontWeight: '500'
                    }}>
                    Dashboard</h2>
            </div>
            <hr/>
            <div className="row g-0 pt-5 px-5 pb-5 mt-5 border shadow-lg"
                 style={{borderRadius: '10px'}}>

                <DashboardComponentRow
                    rowTitle="Articles posted:"
                    rowValue= {props.user.articles.length}
                />
                <DashboardComponentRow
                    rowTitle="Articles liked:"
                    rowValue= {props.user.likes.length}
                />
                <DashboardComponentRow
                    rowTitle="Comments posted:"
                    rowValue={props.user.comments.length}
                />
                <DashboardComponentRow
                    rowTitle="Messages written:"
                    rowValue= {props.user.sentMessages.length}
                />

                <DashboardComponentRow
                    rowTitle="Messages received:"
                    rowValue= {props.user.receivedMessages.length}
                />
                <DashboardComponentRow
                    rowTitle="Likes from other users:"
                    rowValue= {getNumberOfLikes()}
                />
                <DashboardComponentRow
                    rowTitle="Comments on my articles:"
                    rowValue= {getNumberOfComments()}
                />

            </div>
        </div>
    );
}