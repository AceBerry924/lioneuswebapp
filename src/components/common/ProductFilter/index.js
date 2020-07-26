import React from "react";

const ProductFilter = (props) => {

    const { opened, activeFilter, toggleBox, handleFilter, clearFilter } = props;

    return (
        <section className="filter_tab">
            <div className="container">
                <div className="ls_filter">
                    <button className="ls_filter_action" onClick={toggleBox}>
                        <i className="fas fa-sliders-h" /> Filter
                    </button>
                </div>
                {opened ? (
                    <div className="ls_all_filters">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="ls_filter_col">
                                    <p className={activeFilter === 'high-to-low' ? "ls_filter_col-active" : ""} onClick={() => handleFilter('high-to-low')}>High to low</p>
                                </div>
                            </div>
                            {/* col-lg-3 col-md-3 col-sm-3 col-6 */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="ls_filter_col">
                                    <p className={activeFilter === 'low-to-high' ? "ls_filter_col-active" : ""} onClick={() => handleFilter('low-to-high')}>Low to high</p>
                                </div>
                            </div>
                            {/* col-lg-3 col-md-3 col-sm-3 col-6 */}
                            {/* <div className="col-lg-3 col-md-3 col-sm-3 col-6">
                                <div className="ls_filter_col">
                                    <p className={activeFilter === 'popular' ? "ls_filter_col-active" : ""} onClick={() => handleFilter('popular')}>Popular</p>
                                </div>
                            </div> */}
                            {/* col-lg-3 col-md-3 col-sm-3 col-6 */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="ls_filter_col">
                                    <p className={activeFilter === 'newest' ? "ls_filter_col-active" : ""} onClick={() => handleFilter('newest')}>Newest</p>
                                </div>
                            </div>
                            {/* col-lg-3 col-md-3 col-sm-3 col-6 */}
                            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                <div className="ls_filter_col">
                                    <p onClick={clearFilter}>Clear Filter</p>
                                </div>
                            </div>
                            {/* col-lg-3 col-md-3 col-sm-3 col-6 */}
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export default ProductFilter;
