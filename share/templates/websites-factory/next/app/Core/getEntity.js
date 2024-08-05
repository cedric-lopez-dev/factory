
export const getEntity = (path) => {

    const findBy = async () => {
        return fetch(path).then((res) => {
            return res.json()
        }).then((res) => {
            return res
        }).catch(() => {
            console.log("not found");
        })

    };

    const findOne = () => {
        console.log('ntm');
    };

    return {
        findBy, findOne, path
    };
};







