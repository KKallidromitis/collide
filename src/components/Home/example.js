import React from 'react'
// import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: '12:00 PM',
    text: '12:00 PM',
    value: '12:00 PM',
  },
  {
    key: '12:30 PM',
    text: '12:30 PM',
    value: '12:30 PM',
  },
  {
    key: '1:00 PM',
    text: '1:00 PM',
    value: '1:00 PM',
  },
  {
    key: '1:30 PM',
    text: '1:30 PM',
    value: '1:30 PM',
  },
  {
    key: '2:00 PM',
    text: '2:00 PM',
    value: '2:00 PM',
  },
  {
    key: '2:30 PM',
    text: '2:30 PM',
    value: '2:30 PM',
  },
  {
    key: '3:00 PM',
    text: '3:00 PM',
    value: '3:00 PM',
  },
  {
    key: '3:30 PM',
    text: '3:30 PM',
    value: '3:30 PM',
  },
  {
    key: '4:00 PM',
    text: '4:00 PM',
    value: '4:00 PM',
  },
  {
    key: '4:30 PM',
    text: '4:30 PM',
    value: '4:30 PM',
  },
  {
    key: '5:00 PM',
    text: '5:00 PM',
    value: '5:00 PM',
  },
  {
    key: '5:30 PM',
    text: '5:30 PM',
    value: '5:30 PM',
  },
  {
    key: '6:00 PM',
    text: '6:00 PM',
    value: '6:00 PM',
  },
  {
    key: '6:30 PM',
    text: '6:30 PM',
    value: '6:30 PM',
  },
  {
    key: '7:00 PM',
    text: '7:00 PM',
    value: '7:00 PM',
  },
  {
    key: '7:30 PM',
    text: '7:30 PM',
    value: '7:30 PM',
  },
  {
    key: '8:00 PM',
    text: '8:00 PM',
    value: '8:00 PM',
  },
  {
    key: '8:30 PM',
    text: '8:30 PM',
    value: '8:30 PM',
  },
  {
    key: '9:00 PM',
    text: '9:00 PM',
    value: '9:00 PM',
  },
  {
    key: '9:30 PM',
    text: '9:30 PM',
    value: '9:30 PM',
  },
  {
    key: '10:00 PM',
    text: '10:00 PM',
    value: '10:00 PM',
  },
  {
    key: '10:30 PM',
    text: '10:30 PM',
    value: '10:30 PM',
  },
  {
    key: '11:00 PM',
    text: '11:00 PM',
    value: '11:00 PM',
  },
  {
    key: '11:30 PM',
    text: '11:30 PM',
    value: '11:30 PM',
  },
]

const DropdownExampleSelection = () => (
  <select
    placeholder='Select Time'
    // fluid
    // selection
    options={friendOptions}
  />
)

export default DropdownExampleSelection