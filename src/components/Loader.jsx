import PropTypes from 'prop-types'

import './Loader.css'

export const Loader = ({ isLoading }) => {
    return isLoading && <div className="loader"/>
}

Loader.propTypes = {
    isLoading: PropTypes.bool
}

Loader.defaultProps = {
    isLoading: false
}
