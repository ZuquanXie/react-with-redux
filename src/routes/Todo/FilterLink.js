import { connect } from 'react-redux';
import { setVisibility } from '../../action';
import Link from '../../component/Link';

const mapStateToProps = ({ Todo }, ownProps) => {
    return {
        active: Todo.visibilityFilter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onClick: () => dispatch(setVisibility(ownProps.filter))
    }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink
