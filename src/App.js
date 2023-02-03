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

  const teachers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '+237651796157',
      location: 'Yaounde, Cameroon',
      role: 'teacher',
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'john@smith.com',
      phone: '+237657758401',
      location: 'Douala, Cameroon',
      role: 'teacher',
    },
    {
      id: 3,
      name: 'John Lane',
      email: 'john@lane.com',
      phone: '+237657798765',
      location: 'Bafoussam, Cameroon',
      role: 'principal',
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

  const [teacherData, setTeacherData] = useState(teachers)

  const [studentData, setStudentData] = useState(students)

  const deleteTeacher = (id) => {
    setTeacherData(teacherData.filter((teacher) => teacher.id !== id))
  }

  const deleteStudent = (id) => {
    setStudentData(studentData.filter((student) => student.id !== id))
  }

  const { isOpen: isDelOpen, onOpen: onDelOpen, onClose: onDelClose } = useDisclosure()
  const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()

  const { isOpen: isDel2Open, onOpen: onDel2Open, onClose: onDel2Close } = useDisclosure()
  const { isOpen: isAdd2Open, onOpen: onAdd2Open, onClose: onAdd2Close } = useDisclosure()

  const cancelRef = useRef()
  const cancel2Ref = useRef()

  const [id, setID] = useState(null)

  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [score, setScore] = useState(0)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [loation, setLocation] = useState("")

  const year = new Date().getFullYear()
  const [message, setMessage] = useState(null)

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    switch(name) {
      case 'name': setName(value); break;
      case 'role': setRole(value); break;
      case 'score': setRole(value); break;
      case 'email': setEmail(value); break;
      case 'phone': setPhone(value); break;
      case 'location': setLocation(value); break;
      default: break;
    }
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
                <span className="tab">User Registration</span>
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
                <span className="tab">Get Authorization</span>
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
                <span className="tab">Teachers Records</span>
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
                <span className="tab">Students Records</span>
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
                                  <ion-icon name="mail-outline"></ion-icon>
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
                    Teacher Records
                  </h2>

                  <TableContainer className='mt-5 border rounded-3'>
                    <Table variant='simple'>
                      <TableCaption className='link pb-4'>All Teachers Records</TableCaption>

                      <Thead className='bg-dark'>
                        <Tr>
                          <Th className='text-white'>Full Name</Th>
                          <Th className='text-white'>Role</Th>
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

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="person-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' placeholder='Full Name' />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <Select size='lg' placeholder='Select Role'>
                                        <option value='teacher'>Teacher</option>
                                        <option value='principal'>Supervisor</option>
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
                                        <Input type='email' placeholder='Email Address' />
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
                                        <Input type='tel' placeholder='Phone Number' />
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
                                        <Input type='text' placeholder='Location Address' />
                                      </InputGroup>
                                    </div>
                                  </div>

                                </ModalBody>

                                <ModalFooter>
                                  <Button colorScheme='red' mr={3} onClick={onAddClose}>
                                    Close
                                  </Button>
                                  <Button rightIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue'>Add Teacher</Button>
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
                                  <Button className='w-50' size='sm' leftIcon={<ion-icon name="create-outline"></ion-icon>} colorScheme='yellow' variant='solid'>
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
                                        Are you sure you want to delete record? {id}
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
                          <Th className='text-white'>Full Name</Th>
                          <Th className='text-white'>Role</Th>
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

                            <Button onClick={onAdd2Open} className='w-75' leftIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue' size='sm' variant='solid'>
                              Add record
                            </Button>
                            <Modal size={'3xl'} closeOnOverlayClick={false} isOpen={isAdd2Open} onClose={onAdd2Close} isCentered>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>Add New Student</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

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

                                  <div className='row'>
                                    <div className='col-md-6'>
                                      <InputGroup size='lg' className="mb-4">
                                        <InputLeftElement
                                          pointerEvents='none'
                                          children={
                                            <ion-icon name="person-outline"></ion-icon>
                                          }
                                        />
                                        <Input type='text' placeholder='Full Name' />
                                      </InputGroup>
                                    </div>
                                    <div className='col-md-6'>
                                      <Select size='lg' placeholder='Select Role'>
                                        <option value='teacher'>Teacher</option>
                                        <option value='principal'>Supervisor</option>
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
                                        <Input type='email' placeholder='Email Address' />
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
                                        <Input type='tel' placeholder='Phone Number' />
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
                                        <Input type='text' placeholder='Location Address' />
                                      </InputGroup>
                                    </div>
                                  </div>

                                </ModalBody>

                                <ModalFooter>
                                  <Button colorScheme='red' mr={3} onClick={onAdd2Close}>
                                    Close
                                  </Button>
                                  <Button rightIcon={<ion-icon name="add-outline"></ion-icon>} colorScheme='blue'>Add Teacher</Button>
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
                                  <Button className='w-50' size='sm' leftIcon={<ion-icon name="create-outline"></ion-icon>} colorScheme='yellow' variant='solid'>
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

            </TabPanels>
          </Tabs>
        </Container>
      </div>

    </main>
  );
}

export default App;