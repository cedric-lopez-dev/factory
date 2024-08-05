
const useEntity = () => {

    const findBy = () => {

        fetch("http://data-job-api:3000/api/job").then((res) => {
            return res.json()
        }).then((res) => {
            return res
        })

    };

    const findOne = () => {
        console.log('ntm');
    };

    return {
        findBy, findOne
    };

};

export default useEntity;