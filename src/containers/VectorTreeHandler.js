import axios from 'axios';


async function get_tree_data(url){
    const res = await axios.get(url);
    return res.data

}


async function get_all_totality(tree_data){
    let mapping = []
    let vapi_totalities = get_tree_data(config.urls.vapi_totalities)
    for (let totality = 0; totality < vapi_totalities.length; totality++) {
        let totality_name = vapi_totalities[totality]["name"]
        let totality_id = vapi_totalities[totality]["id"]
        mapping.push({
            key:totality_id,
            value:totality_name
        })

        
    }
    return mapping
}

async function get_all_departments(totality,tree_data) {

}

async function get_all_tziahs(vector_tree,tree_data,department){

}