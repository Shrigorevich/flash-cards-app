import { useQuery, gql, useLazyQuery } from "@apollo/client";

const Query = gql`
    query deck($id: ID!) {
        deck(id: $id) {
            name
            description
            public
            _id
        }
    }
`;

export const useGetDeckQuery = () => {
    console.log("useMeQuery");
    const [deckQuery, { loading, error, data }] = useLazyQuery(Query, {
        onCompleted: (res) => {
            console.log(res);
        },
        skip: Boolean(false),
    });

    return !loading && data;
};
