import {BsSearch} from 'react-icons/bs'

import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className="search-input-container">
        <label htmlFor="searchInput" className="visually-hidden">
          Search
        </label>
        <input
          type="search"
          id="searchInput"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          type="button"
          data-testid="searchButton"
          className="search-button-container"
          onClick={getJobs}
        >
          Click
          <BsSearch className="search-icon" />
        </button>
      </div>
    )
  }

  const onSelectEmployeeType = event => {
    const {changeEmployeeList} = props
    changeEmployeeList(event.target.value)
    // console.log(event.target.value)
  }

  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div className="employment-type-container filter-style">
        <h1 className="employment-type-heading"> Type of Employment</h1>
        <ul className="employee-type-list-container">
          {employmentTypesList.map(eachEmployeeType => (
            <li
              className="employee-item"
              key={eachEmployeeType.employmentTypeId}
            >
              <input
                type="checkbox"
                id={eachEmployeeType.employmentTypeId}
                className="check-input"
                value={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              />
              <label
                htmlFor={eachEmployeeType.employmentTypeId}
                className="check-label"
              >
                {eachEmployeeType.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div className="salary-range-container filter-style">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li
                className="salary-item"
                key={eachSalary.salaryRangeId}
                onClick={onClickSalary}
              >
                <input
                  type="radio"
                  id={eachSalary.salaryRangeId}
                  name="salary"
                  className="check-input"
                />
                <label
                  htmlFor={eachSalary.salaryRangeId}
                  className="check-label"
                >
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  const renderLocationRange = () => {
    const {handleLocation} = props
    return (
      <div className="filter-style">
        <input
          id="hyderabad"
          type="checkbox"
          className="check-input"
          onChange={() => handleLocation('Hyderabad')}
        />
        <label className="check-label" htmlFor="hyderabad">
          Hyderabad
        </label>
        <br />
        <br />
        <input
          id="bangalore"
          type="checkbox"
          className="check-input"
          onChange={() => handleLocation('Bangalore')}
        />
        <label className="check-label" htmlFor="bangalore">
          Bangalore
        </label>
        <br />
        <br />
        <input
          id="chennai"
          type="checkbox"
          className="check-input"
          onChange={() => handleLocation('Chennai')}
        />
        <label className="check-label" htmlFor="chennai">
          Chennai
        </label>
        <br />
        <br />

        <input
          id="delhi"
          type="checkbox"
          className="check-input"
          onChange={() => handleLocation('Delhi')}
        />
        <label className="check-label" htmlFor="delhi">
          Delhi
        </label>
        <br />
        <br />
        <input
          id="mumbai"
          type="checkbox"
          className="check-input"
          onChange={() => handleLocation('Mumbai')}
        />
        <label className="check-label" htmlFor="mumbai">
          Mumbai
        </label>
      </div>
    )
  }
  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
      <hr className="horizontal-line" />
      {renderLocationRange()}
    </div>
  )
}
export default FiltersGroup
