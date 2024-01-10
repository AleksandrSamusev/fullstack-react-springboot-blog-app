import {DashboardComponentRow} from "./DashboardComponentRow";

export const DashboardComponent = (props) => {

/*    const handleArticles = () => {
        if(props.user.articles.size === 0) {
            return '0'
        } else {
            return props.user.articles.size;
        }
    }

    const handleComments = () => {
        if(props.user.comments.size === 0) {
            return '0'
        } else {
            return props.user.comments.size;
        }
    }

    const handleSentMessages = () => {
        if(props.user.sentMessages.size === 0) {
            return '0'
        } else {
            return props.user.sentMessages.size;
        }
    }*/

    console.log(props.user.articles.length)

    return (
        <div>
            <div className="mt-5">
                <h2 className="text-end pe-4"
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: '36px',
                        fontWeight: '400'
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
                    rowValue= "-1"
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
                    rowValue= "-1"
                />
                <DashboardComponentRow
                    rowTitle="Comments on my articles:"
                    rowValue= "-1"
                />

            </div>
        </div>
    );
}