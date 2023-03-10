import logo from './logo.svg';
import './App.css';
import { Container, useDisclosure } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement, Button, InputLeftElement } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

function App() {

  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const [reset, setReset] = useState(false)

  const switchReset = () => setReset(!reset)

  const handleClick = () => setShow(!show)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const [tabIndex, setTabIndex] = useState(0)

  const handleTabsChange = (index) => {
    setReset(false)
    setTabIndex(index)
  }

  const [tab2Index, setTab2Index] = useState(0)

  const handleTabs2Change = (index) => {
    setTab2Index(index)
  }

  const orgs = [
    {
      id: 0,
      school_id: 1,
      school_name: 'College Jean Tabi',
      teachers: [
        {
          id: 1,
          name: 'M SANDEU Boris',
        }
      ],
      students: [
        {
          id: 1,
          name: 'Student Fabrice',
        },
        {
          id: 2,
          name: 'Student Max',
        }
      ]
    },
    {
      id: 1,
      school_id: 2,
      school_name: 'College Du Vaal',
      teachers: [
        {
          id: 2,
          name: 'M SANDEU Fabrice',
        },
        {
          id: 3,
          name: 'Mlle DJAI Diane',
        }
      ],
      students: [
        {
          id: 1,
          name: 'Student Boris',
        },
      ]
    }
  ]

  const teachers = [
    {
      id: 1,
      name: 'Mme BOUKAM Larissa',
      email: 'boukam.larissa@lms.com',
      phone: '+237651796157',
      location: 'Yaounde, Cameroon',
      role: 'scientific',
    },
    {
      id: 2,
      name: 'Mlle DJAI Diane',
      email: 'diane.lobe@lms.cm',
      phone: '+237657758401',
      location: 'Bafoussam, Cameroon',
      role: 'scientific',
    },
    {
      id: 3,
      name: 'M. SANDEU Boris',
      email: 'boris.sande@glms.com',
      phone: '+237657798765',
      location: 'Bamenda, Cameroon',
      role: 'other',
    }
  ]

  const students = [
    {
      id: 1,
      name: 'Student Max',
      email: 'max@lms.com',
      phone: '+237651796157',
      location: 'Yaounde, Cameroon',
      score: 10,
    },
    {
      id: 2,
      name: 'Student Fabrice',
      email: 'fabrice@lms.com',
      phone: '+237657758401',
      location: 'Douala, Cameroon',
      score: 8.5,
    },
    {
      id: 3,
      name: 'Student Boris',
      email: 'boris@lms.com',
      phone: '+237657798765',
      location: 'Bafoussam, Cameroon',
      score: 7,
    }
  ]

  const schools = [
    {
      id: 1,
      name: 'College Jean Tabi',
      email: 'infos@jeantabi.com',
      phone: '+237651796157',
      location: 'Yaounde, Cameroon',
      role: 'private',
    },
    {
      id: 2,
      name: 'Lycee Classique de Bafoussam',
      email: 'lyclabaf@minesec.cm',
      phone: '+237657758401',
      location: 'Bafoussam, Cameroon',
      role: 'public',
    },
    {
      id: 3,
      name: 'GTHS Bamenda',
      email: 'bamenda@gths.com',
      phone: '+237657798765',
      location: 'Bamenda, Cameroon',
      role: 'public',
    }
  ]

  const [teacherData, setTeacherData] = useState(teachers)

  const [studentData, setStudentData] = useState(students)

  const [orgData, setOrgData] = useState(orgs)

  const [schoolData, setSchoolData] = useState(schools)

  const deleteTeacher = (id) => {
    setTeacherData(teacherData.filter((teacher) => teacher.id !== id))
    setID(null)
  }

  const deleteSchool = (id) => {
    setSchoolData(schoolData.filter((school) => school.id !== id))
    setID(null)
  }

  const deleteStudent = (id) => {
    setStudentData(studentData.filter((student) => student.id !== id))
    setID(null)
  }

  const deleteOrg = (id) => {
    setOrgData(orgData.filter((org) => org.id !== id))
    setID(null)
  }

  const { isOpen: isDelOpen, onOpen: onDelOpen, onClose: onDelClose } = useDisclosure()
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()

  const { isOpen: isDel2Open, onOpen: onDel2Open, onClose: onDel2Close } = useDisclosure()
  const { isOpen: isAdd2Open, onOpen: onAdd2Open, onClose: onAdd2Close } = useDisclosure()

  const { isOpen: isDel3Open, onOpen: onDel3Open, onClose: onDel3Close } = useDisclosure()
  const { isOpen: isAdd3Open, onOpen: onAdd3Open, onClose: onAdd3Close } = useDisclosure()

  const { isOpen: isDel4Open, onOpen: onDel4Open, onClose: onDel4Close } = useDisclosure()
  const { isOpen: isAdd4Open, onOpen: onAdd4Open, onClose: onAdd4Close } = useDisclosure()

  const cancelRef = useRef()
  const cancel2Ref = useRef()
  const cancel3Ref = useRef()
  const cancel4Ref = useRef()

  const [id, setID] = useState(null)

  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [score, setScore] = useState(0)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [school, setSchool] = useState("")
  const [teacher, setTeacher] = useState("")
  const [student, setStudent] = useState("")
  const year = new Date().getFullYear()
  const [message, setMessage] = useState(null)

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    switch (name) {
      case 'name': setName(value); break;
      case 'role': setRole(value); break;
      case 'score': setRole(value); break;
      case 'teacher': setTeacher(value); break;
      case 'student': setStudent(value); break;
      case 'school': setSchool(value); break;
      case 'email': setEmail(value); break;
      case 'phone': setPhone(value); break;
      case 'location': setLocation(value); break;
      default: break;
    }
  }

  const updateStudent = (data) => {
    setID(data.id)
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setLocation(data.location)
    setScore(data.score)
    onAdd2Open()
  }

  const addStudent = () => {
    setID(null)
    setName("")
    setEmail("")
    setPhone("")
    setLocation("")
    setScore("")
    onAdd2Open()
  }

  const addTransfer = () => {
    setID(null)
    onAdd3Open()
  }

  const updateTeacher = (data) => {
    setID(data.id)
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setLocation(data.location)
    setRole(data.role)
    onAddOpen()
  }

  const addTeacher = () => {
    setID(null)
    setName("")
    setEmail("")
    setPhone("")
    setLocation("")
    setRole("")
    onAddOpen()
  }

  const updateSchool = (data) => {
    setID(data.id)
    setName(data.name)
    setEmail(data.email)
    setPhone(data.phone)
    setLocation(data.location)
    setRole(data.role)
    onAdd4Open()
  }

  const addSchool = () => {
    setID(null)
    setName("")
    setEmail("")
    setPhone("")
    setLocation("")
    setRole("")
    onAddOpen()
  }

  const createStudent = () => {
    const d = new Date();
    if (id === null) {
      studentData.push({
        id: d.getTime(),
        name: name,
        email: email,
        phone: phone,
        location: location,
        score: score,
      })
      setMessage({
        type: 'success',
        title: 'Add!',
        desc: 'Record added successfully',
      })
    }
    else {
      var arr = studentData.findIndex((student) => student.id === id)
      studentData[arr].name = name
      studentData[arr].email = email
      studentData[arr].phone = phone
      studentData[arr].location = location
      studentData[arr].score = score
      console.log(studentData[arr])
      setMessage({
        type: 'success',
        title: 'Update!',
        desc: 'Record updated successfully',
      })
    }
    setID(null)
    setName("")
    setEmail("")
    setPhone("")
    setLocation("")
    setRole("")
    setScore("")
    onAdd2Close()
  }

  const createTeacher = () => {
    const d = new Date();
    if (id === null) {
      teacherData.push({
        id: d.getTime(),
        name: name,
        email: email,
        phone: phone,
        location: location,
        role: role,
      })
      setMessage({
        type: 'success',
        title: 'Add!',
        desc: 'Record added successfully',
      })
    }
    else {
      var arr = teacherData.findIndex((teacher) => teacher.id === id)
      teacherData[arr].name = name
      teacherData[arr].email = email
      teacherData[arr].phone = phone
      teacherData[arr].location = location
      teacherData[arr].role = role
      console.log(teacherData[arr])
      setMessage({
        type: 'success',
        title: 'Update!',
        desc: 'Record updated successfully',
      })
    }
    setID(null)
    setName("")
    setEmail("")
    setPhone("")
    setLocation("")
    setRole("")
    setScore("")
    onAddClose()
  }

  const createSchool = () => {
    const d = new Date();
    if (id === null) {
      schoolData.push({
        id: d.getTime(),
        name: name,
        email: email,
        phone: phone,
        location: location,
        role: role,
      })
      setMessage({
        type: 'success',
        title: 'Add!',
        desc: 'Record added successfully',
      })
    }
    else {
      var arr = schoolData.findIndex((school) => school.id === id)
      schoolData[arr].name = name
      schoolData[arr].email = email
      schoolData[arr].phone = phone
      schoolData[arr].location = location
      schoolData[arr].role = role
      setMessage({
        type: 'success',
        title: 'Update!',
        desc: 'Record updated successfully',
      })
    }
    setID(null)
    setName("")
    setEmail("")
    setPhone("")
    setLocation("")
    setRole("")
    setScore("")
    onAdd4Close()
  }

  return (
    <main className="App">

      <div className="py-5 py-md-0">

        <header className="App-header">
          <h1>School Management System</h1>
        </header>
        {
          message !== null ?
            <Alert status={message.type}>
              <AlertIcon />
              <AlertTitle>{message.title}</AlertTitle>
              <AlertDescription>{message.desc}</AlertDescription>
            </Alert>
            : <></>
        }

        <Container className='App-container px-0 mt-3' style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
          <Tabs isFitted variant='soft-rounded' colorScheme='blue' index={tabIndex} onChange={handleTabsChange}>

            <TabList className='p-4'>
              <Tab>
                <lord-icon
                  src="https://cdn.lordicon.com/bhfjfgqz.json"
                  trigger="hover"
                  className="icon"
                  colors="primary:#121331"
                  style={{ width: "24px", height: "24px" }}>
                </lord-icon>
                &nbsp;&nbsp;
                <span className="tab" style={{ paddingTop: "5px" }}>User Registration</span>
              </Tab>
              <Tab>
                <lord-icon
                  src="https://cdn.lordicon.com/dnmvmpfk.json"
                  trigger="hover"
                  className="icon"
                  colors="primary:#121331"
                  style={{ width: "24px", height: "24px" }}>
                </lord-icon>
                &nbsp;&nbsp;
                <span className="tab" style={{ paddingTop: "5px" }}>Get Authorization</span>
              </Tab>
              <Tab>
                <lord-icon
                  src="https://cdn.lordicon.com/osuxyevn.json"
                  trigger="hover"
                  className="icon"
                  colors="primary:#121331"
                  style={{ width: "24px", height: "24px" }}>
                </lord-icon>
                &nbsp;&nbsp;
                <span className="tab" style={{ paddingTop: "5px" }}>School Records</span>
              </Tab>
              <Tab>
                <lord-icon
                  src="https://cdn.lordicon.com/fbdgkenc.json"
                  trigger="hover"
                  className="icon"
                  colors="primary:#121331"
                  style={{ width: "24px", height: "24px" }}>
                </lord-icon>
                &nbsp;&nbsp;
                <span className="tab" style={{ paddingTop: "5px" }}>Teache Records</span>
              </Tab>
              <Tab>
                <lord-icon
                  src="https://cdn.lordicon.com/uiakkykh.json"
                  trigger="hover"
                  className="icon"
                  colors="primary:#121331"
                  style={{ width: "24px", height: "24px" }}>
                </lord-icon>
                &nbsp;&nbsp;
                <span className="tab" style={{ paddingTop: "5px" }}>Student Records</span>
              </Tab>
              <Tab>
                <lord-icon
                  src="https://cdn.lordicon.com/uitzjnpu.json"
                  trigger="hover"
                  className="icon"
                  colors="primary:#121331"
                  style={{ width: "24px", height: "24px" }}>
                </lord-icon>
                &nbsp;&nbsp;
                <span className="tab" style={{ paddingTop: "5px" }}>Organization</span>
              </Tab>
            </TabList>

            <hr />

            <TabPanels className=''>

              <TabPanel className='m-0 py-0' style={{ paddingLeft: "0.7rem" }}>
                <div className="row">
                  <div className="col-md-6 bg"></div>
                  <div className="col-md-6 py-5">

                    <h2 className="fw-bold text-center fs-4">
                      {!reset ? "Register a new user to the system" : "Reset my acount credentials"}
                    </h2>

                    <form className="mt-5 px-4" onSubmit={handleSubmit} noValidate>

                      {
                        reset ?
                          <>
                            <p className="text-center text-muted mb-5">Provide the exact email you used to register to reset your account</p>
                            <InputGroup size='lg' className="mb-5">
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="mail-outline"></ion-icon>
                                }
                              />
                              <Input type='email' placeholder='Enter email address' />
                            </InputGroup>
                          </>
                          :
                          <>
                            <InputGroup size='lg' className="mb-3">
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="person-outline"></ion-icon>
                                }
                              />
                              <Input type='text' placeholder='Enter full name' />
                            </InputGroup>

                            <InputGroup size='lg' className="mb-5">
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="mail-outline"></ion-icon>
                                }
                              />
                              <Input type='email' placeholder='Enter email address' />
                            </InputGroup>

                            <InputGroup size='lg'>
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="key-outline"></ion-icon>
                                }
                              />
                              <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                              />
                              <InputRightElement width='4.5rem'>
                                <Button colorScheme='blue' h='1.75rem' size='sm' onClick={handleClick}>
                                  {show ? 'Hide' : 'Show'}
                                </Button>
                              </InputRightElement>
                            </InputGroup>

                            <InputGroup size='lg' className="mt-3">
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="key-outline"></ion-icon>
                                }
                              />
                              <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Confirm password'
                              />
                            </InputGroup>

                          </>
                      }

                      <Flex className='mt-5'>
                        <div>
                          <b className='link' onClick={switchReset}>{!reset ? "Reset my account" : <div className='d-flex align-items-cwenter'><ion-icon size='small' name="chevron-back-outline" />&nbsp;<span>Create my account</span></div>}</b>
                        </div>
                        <Spacer />
                        <div>
                          <b className='link' onClick={() => setTabIndex(1)}>Connect my account</b>
                        </div>
                      </Flex>

                      <Button
                        className='mt-5 w-100'
                        isLoading={loading}
                        type='submit'
                        loadingText='Submitting'
                        colorScheme='blue'
                      >
                        Submit
                      </Button>

                      <p className='mt-5 text-muted text-center'>&copy; Copyright Boris SANDEU {year}</p>

                    </form>

                  </div>
                </div>
              </TabPanel>

              <TabPanel className='m-0 py-0' style={{ paddingLeft: "0.7rem" }}>
                <div className="row">
                  <div className="col-md-6 bg2"></div>
                  <div className="col-md-6 py-5">

                    <h2 className="fw-bold text-center fs-4">
                      {!reset ? "Log in to the system" : "Reset my acount credentials"}
                    </h2>

                    <form className="mt-5 px-4" onSubmit={handleSubmit} noValidate>

                      {
                        reset ?
                          <>
                            <p className="text-center text-muted mb-5">Provide the exact email you used to register to reset your account</p>
                            <InputGroup size='lg' className="mb-5">
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="mail-outline"></ion-icon>
                                }
                              />
                              <Input type='email' placeholder='Enter email address' />
                            </InputGroup>
                          </>
                          :
                          <>
                            <InputGroup size='lg' className="mb-4">
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="mail-outline"></ion-icon>
                                }
                              />
                              <Input type='email' placeholder='Enter email address' />
                            </InputGroup>

                            <InputGroup size='lg'>
                              <InputLeftElement
                                pointerEvents='none'
                                children={
                                  <ion-icon name="key-outline"></ion-icon>
                                }
                              />
                              <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                              />
                              <InputRightElement width='4.5rem'>
                                <Button colorScheme='blue' h='1.75rem' size='sm' onClick={handleClick}>
                                  {show ? 'Hide' : 'Show'}
                                </Button>
                              </InputRightElement>
                            </InputGroup>

                          </>
                      }

                      <Flex className='mt-5'>
                        <div>
                          <b className='link' onClick={switchReset}>{!reset ? "Reset my account" : <div className='d-flex align-items-cwenter'><ion-icon size='small' name="chevron-back-outline" />&nbsp;<span>Connect my account</span></div>}</b>
                        </div>
                        <Spacer />
                        <div>
                          <b className='link' onClick={() => setTabIndex(0)}>Create my account</b>
                        </div>
                      </Flex>

                      <Button
                        className='mt-5 w-100'
                        isLoading={loading}
                        type='submit'
                        loadingText='Submitting'
                        colorScheme='blue'
                      >
                        Submit
                      </Button>

                      <p className='mt-5 text-muted text-center'>&copy; Copyright Boris SANDEU {year}</p>

                    </form>

                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="py-5">

                  <h2 className="fw-bold text-center fs-4">
                    School Records
                  </h2>

                  <TableContainer className='mt-5 border rounded-3'>
                    <Table variant='simple'>
                      <TableCaption className='link pb-4'>All School Records</TableCaption>

                      <Thead className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>Name</Th>
                          <Th className='text-white'>Type</Th>
                          <Th className='text-white text-center'>Contact</Th>
                          <Th className='text-white text-center'>

                            <Button onClick={onAdd4Open} className='w-75' leftIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue' size='sm' variant='solid'>
                              Add record
                            </Button>
                            <Modal size={'3xl'} closeOnOverlayClick={false} isOpen={isAdd4Open} onClose={onAdd4Close} isCentered>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Add New School</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                  {
                                    id === null ?
                                      <>
                                        <Alert
                                          status='info'
                                          variant='subtle'
                                          flexDirection='column'
                                          alignItems='center'
                                          justifyContent='center'
                                          textAlign='center'
                                          height='150px'
                                          className='mb-3'>
                                          <AlertIcon boxSize='40px' mr={0} />
                                          <AlertTitle mt={4} mb={1} fontSize='lg'>
                                            Create School Record
                                          </AlertTitle>
                                          <AlertDescription maxWidth='sm'>
                                            Enter your valid information to save a new record
                                          </AlertDescription>
                                        </Alert>
                                      </> : <></>
                                  }

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="person-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' placeholder='Full Name' value={name} name="name" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <Select size='lg' placeholder='Select Type' value={role} name="role" onChange={handleChange}>
                                        <option value='private'>Private</option>
                                        <option value='public'>Public</option>
                                        <option value='other'>Other</option>
                                      </Select>
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="mail-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='email' placeholder='Email Address' value={email} name="email" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="call-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='tel' placeholder='Phone Number' value={phone} name="phone" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="location-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' placeholder='Location Address' value={location} name="location" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                  </div>

                                </ModalBody>

                                <ModalFooter>
                                  <Button colorScheme='red' mr={3} onClick={onAdd4Close}>
                                    Close
                                  </Button>
                                  <Button onClick={createSchool} rightIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue'>{id === null ? "Add" : "Update"} School</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>

                          </Th>
                        </Tr>
                      </Thead>

                      <Tbody>
                        {
                          schoolData.map((school, index) => {
                            return (
                              <Tr key={index}>
                                <Td>{school.name}</Td>
                                <Td>{school.role.charAt(0).toUpperCase() + school.role.slice(1)}</Td>
                                <Td className=" text-center">
                                  <a href={"mailto:" + school.email}>
                                    <Tooltip label={'Write to ' + school.email}><ion-icon size="large" name="mail-outline"></ion-icon></Tooltip>
                                  </a>
                                  <a href={"tel:" + school.phone} className="mx-4">
                                    <Tooltip label={'Call ' + school.phone}><ion-icon size="large" name="call-outline"></ion-icon></Tooltip>
                                  </a>
                                  <span>
                                    <Tooltip label={school.location}><ion-icon size="large" name="location-outline"></ion-icon></Tooltip>
                                  </span>
                                </Td>
                                <Td className="text-center">

                                  <Button onClick={() => updateSchool(school)} className='w-50' size='sm' leftIcon={<ion-icon name="create-outline"></ion-icon>} colorScheme='yellow' variant='solid'>
                                    Update
                                  </Button>

                                  &nbsp;

                                  <Button onClick={() => {
                                    setID(school.id)
                                    onDel4Open()
                                  }} className='w-25' size='sm' leftIcon={<ion-icon name="trash-outline"></ion-icon>} colorScheme='red' variant='solid'>
                                    Detele
                                  </Button>

                                  <AlertDialog
                                    motionPreset='slideInBottom'
                                    leastDestructiveRef={cancel4Ref}
                                    onClose={onDel4Close}
                                    isOpen={isDel4Open}
                                    isCentered
                                  >
                                    <AlertDialogOverlay />

                                    <AlertDialogContent>
                                      <AlertDialogHeader>Delete Record?</AlertDialogHeader>
                                      <AlertDialogCloseButton />
                                      <AlertDialogBody>
                                        Are you sure you want to delete record?
                                      </AlertDialogBody>
                                      <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onDelClose}>
                                          No
                                        </Button>
                                        <Button onClick={() => {
                                          deleteSchool(id)
                                          onDel4Close()
                                          setMessage({
                                            type: 'success',
                                            title: 'Delete!',
                                            desc: 'Record deleted successfully',
                                          })
                                        }
                                        } colorScheme='red' ml={3}>
                                          Yes
                                        </Button>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>

                                  </AlertDialog>

                                </Td>
                              </Tr>
                            )
                          })
                        }
                      </Tbody>

                      <Tfoot className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>Name</Th>
                          <Th className='text-white'>Type</Th>
                          <Th className='text-white text-center'>Contact</Th>
                          <Th className='text-white text-center'>
                            Actions
                          </Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>

                </div>
              </TabPanel>

              <TabPanel>
                <div className="py-5">

                  <h2 className="fw-bold text-center fs-4">
                    Teacher Records
                  </h2>

                  <TableContainer className='mt-5 border rounded-3'>
                    <Table variant='simple'>
                      <TableCaption className='link pb-4'>All Teacher Records</TableCaption>

                      <Thead className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>Name</Th>
                          <Th className='text-white'>Subject</Th>
                          <Th className='text-white text-center'>Contact</Th>
                          <Th className='text-white text-center'>

                            <Button onClick={onAddOpen} className='w-75' leftIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue' size='sm' variant='solid'>
                              Add record
                            </Button>
                            <Modal size={'3xl'} closeOnOverlayClick={false} isOpen={isAddOpen} onClose={onAddClose} isCentered>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Add New Teacher</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                  {
                                    id === null ?
                                      <>
                                        <Alert
                                          status='info'
                                          variant='subtle'
                                          flexDirection='column'
                                          alignItems='center'
                                          justifyContent='center'
                                          textAlign='center'
                                          height='150px'
                                          className='mb-3'>
                                          <AlertIcon boxSize='40px' mr={0} />
                                          <AlertTitle mt={4} mb={1} fontSize='lg'>
                                            Create Teacher Record
                                          </AlertTitle>
                                          <AlertDescription maxWidth='sm'>
                                            Enter your valid information to save a new record
                                          </AlertDescription>
                                        </Alert>
                                      </> : <></>
                                  }

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="person-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' placeholder='Full Name' value={name} name="name" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <Select size='lg' placeholder='Select Subject Type' value={role} name="role" onChange={handleChange}>
                                        <option value='scientific'>Scientific</option>
                                        <option value='litterature'>Litterature</option>
                                        <option value='other'>Other</option>
                                      </Select>
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="mail-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='email' placeholder='Email Address' value={email} name="email" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="call-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='tel' placeholder='Phone Number' value={phone} name="phone" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="location-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' placeholder='Location Address' value={location} name="location" onChange={handleChange} />
                                      </InputGroup>
                                    </div>
                                  </div>

                                </ModalBody>

                                <ModalFooter>
                                  <Button colorScheme='red' mr={3} onClick={onAddClose}>
                                    Close
                                  </Button>
                                  <Button onClick={createTeacher} rightIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue'>{id === null ? "Add" : "Update"} Teacher</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>

                          </Th>
                        </Tr>
                      </Thead>

                      <Tbody>
                        {
                          teacherData.map((teacher, index) => {
                            return (
                              <Tr key={index}>
                                <Td>{teacher.name}</Td>
                                <Td>{teacher.role.charAt(0).toUpperCase() + teacher.role.slice(1)}</Td>
                                <Td className=" text-center">
                                  <a href={"mailto:" + teacher.email}>
                                    <Tooltip label={'Write to ' + teacher.email}><ion-icon size="large" name="mail-outline"></ion-icon></Tooltip>
                                  </a>
                                  <a href={"tel:" + teacher.phone} className="mx-4">
                                    <Tooltip label={'Call ' + teacher.phone}><ion-icon size="large" name="call-outline"></ion-icon></Tooltip>
                                  </a>
                                  <span>
                                    <Tooltip label={teacher.location}><ion-icon size="large" name="location-outline"></ion-icon></Tooltip>
                                  </span>
                                </Td>
                                <Td className="text-center">

                                  <Button onClick={() => updateTeacher(teacher)} className='w-50' size='sm' leftIcon={<ion-icon name="create-outline"></ion-icon>} colorScheme='yellow' variant='solid'>
                                    Update
                                  </Button>

                                  &nbsp;

                                  <Button onClick={() => {
                                    setID(teacher.id)
                                    onDelOpen()
                                  }} className='w-25' size='sm' leftIcon={<ion-icon name="trash-outline"></ion-icon>} colorScheme='red' variant='solid'>
                                    Detele
                                  </Button>

                                  <AlertDialog
                                    motionPreset='slideInBottom'
                                    leastDestructiveRef={cancelRef}
                                    onClose={onDelClose}
                                    isOpen={isDelOpen}
                                    isCentered
                                  >
                                    <AlertDialogOverlay />

                                    <AlertDialogContent>
                                      <AlertDialogHeader>Delete Record?</AlertDialogHeader>
                                      <AlertDialogCloseButton />
                                      <AlertDialogBody>
                                        Are you sure you want to delete record?
                                      </AlertDialogBody>
                                      <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onDelClose}>
                                          No
                                        </Button>
                                        <Button onClick={() => {
                                          deleteTeacher(id)
                                          onDelClose()
                                          setMessage({
                                            type: 'success',
                                            title: 'Delete!',
                                            desc: 'Record deleted successfully',
                                          })
                                        }
                                        } colorScheme='red' ml={3}>
                                          Yes
                                        </Button>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>

                                  </AlertDialog>

                                </Td>
                              </Tr>
                            )
                          })
                        }
                      </Tbody>

                      <Tfoot className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>Name</Th>
                          <Th className='text-white'>Subject</Th>
                          <Th className='text-white text-center'>Contact</Th>
                          <Th className='text-white text-center'>
                            Actions
                          </Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>

                </div>
              </TabPanel>

              <TabPanel>
                <div className="py-5">

                  <h2 className="fw-bold text-center fs-4">
                    Students Records
                  </h2>

                  <TableContainer className='mt-5 border rounded-3'>
                    <Table variant='simple'>
                      <TableCaption className='link pb-4'>All Students Records</TableCaption>

                      <Thead className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>Full Name</Th>
                          <Th className='text-white'><center>Score</center></Th>
                          <Th className='text-white text-center'>Contact</Th>
                          <Th className='text-white text-center'>

                            <Button onClick={addStudent} className='w-75' leftIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue' size='sm' variant='solid'>
                              Add record
                            </Button>
                            <Modal size={'3xl'} closeOnOverlayClick={false} isOpen={isAdd2Open} onClose={onAdd2Close} isCentered>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>{id === null ? "Add" : "Update"} New Student</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                  {
                                    id === null ?
                                      <>
                                        <Alert
                                          status='info'
                                          variant='subtle'
                                          flexDirection='column'
                                          alignItems='center'
                                          justifyContent='center'
                                          textAlign='center'
                                          height='150px'
                                          className='mb-3'>
                                          <AlertIcon boxSize='40px' mr={0} />
                                          <AlertTitle mt={4} mb={1} fontSize='lg'>
                                            Create Student Record
                                          </AlertTitle>
                                          <AlertDescription maxWidth='sm'>
                                            Enter your valid information to save a new record
                                          </AlertDescription>
                                        </Alert>
                                      </> : <></>
                                  }

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="person-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' value={name} name="name" onChange={handleChange} placeholder='Full Name' />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <NumberInput defaultValue={score} precision={2} step={0.1}>
                                        <NumberInputField placeholder='Average Score' value={score} onChange={(e) => setScore(e.target.value)} name="score" />
                                        <NumberInputStepper>
                                          <NumberIncrementStepper />
                                          <NumberDecrementStepper />
                                        </NumberInputStepper>
                                      </NumberInput>
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="mail-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='email' value={email} name="email" onChange={handleChange} placeholder='Email Address' />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="call-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='tel' value={phone} name="phone" onChange={handleChange} placeholder='Phone Number' />
                                      </InputGroup>
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="location-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' value={location} name="location" onChange={handleChange} placeholder='Location Address' />
                                      </InputGroup>
                                    </div>
                                  </div>

                                </ModalBody>

                                <ModalFooter>
                                  <Button colorScheme='red' mr={3} onClick={onAdd2Close}>
                                    Close
                                  </Button>
                                  <Button onClick={createStudent} rightIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue'>{id === null ? "Add" : "Update"} Student</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>

                          </Th>
                        </Tr>
                      </Thead>

                      <Tbody>
                        {
                          studentData.map((student, index) => {
                            return (
                              <Tr key={index}>
                                <Td>{student.name}</Td>
                                <Td><center>{student.score}</center></Td>
                                <Td className=" text-center">
                                  <a href={"mailto:" + student.email}>
                                    <Tooltip label={'Write to ' + student.email}><ion-icon size="large" name="mail-outline"></ion-icon></Tooltip>
                                  </a>
                                  <a href={"tel:" + student.phone} className="mx-4">
                                    <Tooltip label={'Call ' + student.phone}><ion-icon size="large" name="call-outline"></ion-icon></Tooltip>
                                  </a>
                                  <span>
                                    <Tooltip label={student.location}><ion-icon size="large" name="location-outline"></ion-icon></Tooltip>
                                  </span>
                                </Td>
                                <Td className="text-center">
                                  <Button onClick={() => updateStudent(student)} className='w-50' size='sm' leftIcon={<ion-icon name="create-outline"></ion-icon>} colorScheme='yellow' variant='solid'>
                                    Update
                                  </Button>

                                  &nbsp;

                                  <Button onClick={() => {
                                    setID(student.id)
                                    onDel2Open()
                                  }} className='w-25' size='sm' leftIcon={<ion-icon name="trash-outline"></ion-icon>} colorScheme='red' variant='solid'>
                                    Detele
                                  </Button>

                                  <AlertDialog
                                    motionPreset='slideInBottom'
                                    leastDestructiveRef={cancel2Ref}
                                    onClose={onDel2Close}
                                    isOpen={isDel2Open}
                                    isCentered
                                  >
                                    <AlertDialogOverlay />

                                    <AlertDialogContent>
                                      <AlertDialogHeader>Delete Record?</AlertDialogHeader>
                                      <AlertDialogCloseButton />
                                      <AlertDialogBody>
                                        Are you sure you want to delete record?
                                      </AlertDialogBody>
                                      <AlertDialogFooter>
                                        <Button ref={cancel2Ref} onClick={onDel2Close}>
                                          No
                                        </Button>
                                        <Button onClick={() => {
                                          deleteStudent(id)
                                          onDel2Close()
                                          setMessage({
                                            type: 'success',
                                            title: 'Delete!',
                                            desc: 'Record deleted successfully',
                                          })
                                        }
                                        } colorScheme='red' ml={3}>
                                          Yes
                                        </Button>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>

                                </Td>
                              </Tr>
                            )
                          })
                        }
                      </Tbody>
                      <Tfoot className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>Full Name</Th>
                          <Th className='text-white'><center>Score</center></Th>
                          <Th className='text-white text-center'>Contact</Th>
                          <Th className='text-white text-center'>
                            Actions
                          </Th>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>

                </div>
              </TabPanel>

              <TabPanel>
                <div className="py-5">

                  <h2 className="fw-bold text-center fs-4">
                    Organization
                  </h2>

                  <TableContainer className='mt-5 border rounded-3' style={{maxHeight: "500px", overflow:"auto"}}>

                    <Table variant='simple'>

                      <TableCaption className='link pb-4'>School Organization</TableCaption>

                      <Thead className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>School Name</Th>
                          <Th className='text-white'>Members</Th>
                          <Th className='text-white text-center'>

                            <Button onClick={addTransfer} className='w-75' leftIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='green' size='sm' variant='solid'>
                              Transfer
                            </Button>
                            <Modal size={'3xl'} closeOnOverlayClick={false} isOpen={isAdd3Open} onClose={onAdd3Close} isCentered>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>{id === null ? "Add" : "Update"} New Transfer</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                  {
                                    id === null ?
                                      <>
                                        <Alert
                                          status='success'
                                          variant='subtle'
                                          flexDirection='column'
                                          alignItems='center'
                                          justifyContent='center'
                                          textAlign='center'
                                          height='150px'
                                          className='mb-3'>
                                          <AlertIcon boxSize='40px' mr={0} />
                                          <AlertTitle mt={4} mb={1} fontSize='lg'>
                                            Create Transfer Record
                                          </AlertTitle>
                                          <AlertDescription maxWidth='sm'>
                                            Choose a school and a member entity to tansfer in Organization
                                          </AlertDescription>
                                        </Alert>
                                      </> : <></>
                                  }

                                  <Tabs isFitted colorScheme='green' index={tab2Index} onChange={handleTabs2Change}>

                                    <TabList>
                                      <Tab>
                                        Teacher
                                      </Tab>
                                      <Tab>
                                        Student
                                      </Tab>
                                    </TabList>

                                    <TabPanels>

                                      <TabPanel>
                                        <div className='row mt-4'>
                                          <div className='col-md-6'>
                                            <Select size='lg' placeholder='Choose School' value={school} name="school" onChange={handleChange}>
                                              {
                                                schoolData.map((s, k) => {
                                                  return (
                                                    <option value={s.id}>{s.name}</option>
                                                  )
                                                })
                                              }
                                            </Select>
                                          </div>
                                          <div className='col-md-6'>
                                            <Select size='lg' placeholder='Choose Teacher' value={teacher} name="teacher" onChange={handleChange}>
                                              {
                                                teacherData.map((s, k) => {
                                                  return (
                                                    <option value={s.id}>{s.name}</option>
                                                  )
                                                })
                                              }
                                            </Select>
                                          </div>
                                        </div>
                                      </TabPanel>
                                      <TabPanel>
                                        <div className='row mt-4'>
                                          <div className='col-md-6'>
                                            <Select size='lg' placeholder='Choose School' value={school} name="school" onChange={handleChange}>
                                              {
                                                schoolData.map((s, k) => {
                                                  return (
                                                    <option value={s.id}>{s.name}</option>
                                                  )
                                                })
                                              }
                                            </Select>
                                          </div>
                                          <div className='col-md-6'>
                                            <Select size='lg' placeholder='Choose Student' value={student} name="student" onChange={handleChange}>
                                              {
                                                studentData.map((s, k) => {
                                                  return (
                                                    <option value={s.id}>{s.name}</option>
                                                  )
                                                })
                                              }
                                            </Select>
                                          </div>
                                        </div>
                                      </TabPanel>

                                    </TabPanels>

                                  </Tabs>

                                </ModalBody>

                                <ModalFooter>
                                  <Button onClick={createStudent} colorScheme='yellow'>Transfer Entity {tab2Index}</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>

                          </Th>
                        </Tr>
                      </Thead>

                      <AlertDialog
                        motionPreset='slideInBottom'
                        leastDestructiveRef={cancel3Ref}
                        onClose={onDel3Close}
                        isOpen={isDel3Open}
                        isCentered
                      >
                        <AlertDialogOverlay />

                        <AlertDialogContent>
                          <AlertDialogHeader>Delete Record?</AlertDialogHeader>
                          <AlertDialogCloseButton />
                          <AlertDialogBody>
                            Are you sure you want to delete record?
                          </AlertDialogBody>
                          <AlertDialogFooter>
                            <Button ref={cancel3Ref} onClick={onDel3Close}>
                              No
                            </Button>
                            <Button onClick={() => {
                              deleteOrg(id)
                              onDel3Close()
                              setMessage({
                                type: 'success',
                                title: 'Delete!',
                                desc: 'Record deleted successfully',
                              })
                            }
                            } colorScheme='red' ml={3}>
                              Yes
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                      <Tbody>
                        {
                          orgData.map((org, index) => {
                            return (
                              <>
                                <Tr key={index}>
                                  <Th rowSpan={org.students.length + org.teachers.length + 2} style={{color:"#007bff", fontSize: "1.2rem"}}>{org.school_name}</Th>
                                  <Td colSpan={2}><b><h4>List of Teachers</h4></b></Td>
                                </Tr>
                                {
                                  org.teachers.map((s, k) => {
                                    return (
                                      <Tr>
                                        <Td><span><b style={{color:"#888"}}>{s.name}</b></span></Td>
                                        <Td className="text-center">
                                          <Button onClick={() => {
                                            setID(org.id)
                                            onDel3Open()
                                          }} className='w-75' size='sm' leftIcon={<ion-icon name="trash-outline"></ion-icon>} colorScheme='red' variant='solid'>
                                            Remove
                                          </Button>
                                        </Td>
                                      </Tr>
                                    )
                                  })
                                }
                                <Tr>
                                  <Td colSpan={2}><b><h3>List of Students</h3></b></Td>
                                </Tr>
                                {
                                  org.students.map((s, k) => {
                                    return (
                                      <Tr>
                                        <Td><span><b style={{color:"#888"}}>{s.name}</b></span></Td>
                                        <Td className="text-center">
                                          <Button onClick={() => {
                                            setID(org.id)
                                            onDel3Open()
                                          }} className='w-75' size='sm' leftIcon={<ion-icon name="trash-outline"></ion-icon>} colorScheme='red' variant='solid'>
                                            Remove
                                          </Button>
                                        </Td>
                                      </Tr>
                                    )
                                  })
                                }
                              </>
                            )
                          })
                        }
                      </Tbody>

                      <Tfoot className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>School Name</Th>
                          <Th className='text-white'>Members</Th>
                          <Th className='text-white text-center'>
                            Actions
                          </Th>
                        </Tr>
                      </Tfoot>

                    </Table>

                  </TableContainer>

                </div>
              </TabPanel>

            </TabPanels>
          </Tabs>
        </Container>
      </div>

    </main>
  );
}

export default App;