import { Fragment, useState } from "react";
import Container from "../components/Container";
import Navbar from "../layout/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import { Listbox, Transition } from '@headlessui/react'
import { nanoid } from "nanoid";
import { Dialog } from '@headlessui/react'

export default function Register() {

    return (
        <div className="bg-bgdark min-h-[100vh] overflow-hidden">
            <div className="hidden lg:block">
                <Navbar buttonType="gradient" />
            </div>
            <Container>
                <div className="py-10 lg:py-20 grid lg:grid-cols-2 gap-10 justify-between">
                    <figure className="hidden lg:block">
                        <img src="/images/graphic-designer.svg" alt="" className="" />
                    </figure>
                    <RegisterForm />
                </div>
            </Container>
        </div>
    )
}

const RegisterForm = () => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        console.log(isOpen)
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const [formData, setFormData] = useState({
        first_name: "",
        mail: "",
        message: "",
    })

    const formDataHandler = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const people = [
        { id: nanoid(), name: 'Durward Reynolds', unavailable: false },
        { id: nanoid(), name: 'Kenton Towne', unavailable: false },
        { id: nanoid(), name: 'Therese Wunsch', unavailable: false },
        { id: nanoid(), name: 'Benedict Kessler', unavailable: false },
        { id: nanoid(), name: 'Katelyn Rohan', unavailable: false },
    ]

    const groups = [
        { id: nanoid(), name: '1' },
        { id: nanoid(), name: '2' },
        { id: nanoid(), name: '3' },
        { id: nanoid(), name: '4' },
        { id: nanoid(), name: '5' },
        { id: nanoid(), name: '6' },
        { id: nanoid(), name: '7' },
        { id: nanoid(), name: '8' },
        { id: nanoid(), name: '9' },
        { id: nanoid(), name: '10' },
        { id: nanoid(), name: '11' },
    ]

    const [selectedPerson, setSelectedPerson] = useState(null)
    const [selectedGroup, setSelectedGroup] = useState(null)

    const submit = (e) =>{
        e.preventDefault()

        openModal()
    }

    return (
        <>
            <div className="w-full lg:max-w-[740px] pt-0 pb-16 lg:py-16 lg:px-6 rounded-lg lg:bg-[#ffffff08] lg:shadow-[0px_4px_4px_0px] #00000040] relative col-span-2 lg:col-start-2">
                <div className="w-full max-w-[558px] mx-auto">
                    <header className="mb-5 relative z-10">
                        <h1 className="text-primary font-[ClashDisplay] text-[32px] mb-8 font-semibold">Register</h1>
                        <figure className="block lg:hidden mb-5 ">
                            <img src="/images/graphic-designer.svg" alt="" className="relative z-10 max-w-[195px] max-h-[155px] mx-auto" />
                        </figure>
                        <div className="text-white flex mb-8">
                            <p className="self-end -mb-[7px]">Be part of this movement! &nbsp;</p>
                            <span className="border-b-[1px] w-[101px] inline-block border-b-primary border-dashed ">
                                <div className="flex justify-center">
                                    <img src="/icons/emoji-female.svg" alt="Female emoji" className="inline-block" />
                                    <img src="/icons/emoji-male.svg" alt="Male emoji" className="inline-block" />
                                </div>
                            </span>
                        </div>
                        <div className="text-white">
                            <h1 className="text-[24px] text-white mb-8">CREATE YOUR ACCOUNT</h1>
                        </div>
                    </header>
                    <p className="lg:hidden text-white mb-8 text-[12px]">Email us below to any question related to our event</p>
                    <form onSubmit={submit}>
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 pb-8">
                            <fieldset>
                                <label className="inline-block mb-2 text-white text-[13px]">Team&rsquo;s Name</label>
                                <Input
                                    placeholder="Enter the name of the group"
                                    className="placeholder-[#FFFFFF40] text-[14px]"
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-white text-[13px]">Phone</label>
                                <Input
                                    placeholder="Enter your phone number"
                                    className="placeholder-[#FFFFFF40] text-[14px]"
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-white text-[13px]">Email</label>
                                <Input
                                    placeholder="Enter your email address"
                                    className="placeholder-[#FFFFFF40] text-[14px]"
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-white text-[13px]">Project Topic</label>
                                <Input
                                    placeholder="What is your group project topic"
                                    className="placeholder-[#FFFFFF40] text-[14px]"
                                />
                            </fieldset>
                        </div>
                        <div className="pb-8 flex lg:flex-row gap-2 lg:gap-10">
                            <fieldset className="flex-1">
                                <div>
                                    <label className="inline-block mb-2 text-[13px] text-white">Category</label>
                                </div>
                                <Listbox value={selectedPerson} as="div" onChange={setSelectedPerson} className="relative">
                                    {({ open }) => (
                                        <>
                                            <div className="flex justify-between gap-2 pr-2 h-[47px] w-full bg-transparent border-[1px] border-white rounded-md">
                                                <Listbox.Button className="pl-3 lg:pl-6 text-[14px] text-left h-full text-white flex-1">
                                                    {({ value }) => value?.name ? value.name : <p className="line-clamp-3">Select your category</p>}
                                                </Listbox.Button>
                                                <div className="w-[24px] h-full grid place-items-center">
                                                    <span className="material-icons text-white"> {open ? "expand_less" : "expand_more"} </span>
                                                </div>
                                            </div>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                enterTo="transform scale-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform scale-100 opacity-100"
                                                leaveTo="transform scale-95 opacity-0"
                                            >
                                                <Listbox.Options className="z-10 absolute bg-white w-full rounded-md mt-2 overflow-x-hidden max-h-[150px] custom-scroll-bar">
                                                    {people.map((person) => (
                                                        <Listbox.Option
                                                            key={person.id}
                                                            value={person}
                                                            disabled={person.unavailable}
                                                            className="py-[8px] px-6 cursor-pointer hover:bg-primary hover:bg-opacity-70 text-[14px] border-b-[1px] border-b-[#ccc]"
                                                        >
                                                            {person.name}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </>
                                    )}
                                </Listbox>
                            </fieldset>
                            <fieldset className="lg:flex-1">
                                <div>
                                    <label className="inline-block mb-2 text-white text-[13px]">Group Size</label>
                                </div>
                                <Listbox value={selectedGroup} as="div" onChange={setSelectedGroup} className="relative">
                                    {({ open }) => (
                                        <>
                                            <div className="flex justify-between gap-2 pr-2 h-[47px] w-full bg-transparent border-[1px] border-white rounded-md">
                                                <Listbox.Button className="pl-3 lg:pl-6 text-[14px] h-full text-left text-white flex-1">
                                                    {({ value }) => value?.name ? value.name : "Select"}
                                                </Listbox.Button>
                                                <div className="w-[24px] h-full grid place-items-center">
                                                    <span className="material-icons text-white"> {open ? "expand_less" : "expand_more"} </span>
                                                </div>
                                            </div>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                enterTo="transform scale-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform scale-100 opacity-100"
                                                leaveTo="transform scale-95 opacity-0"
                                            >
                                                <Listbox.Options className="z-10 absolute bg-white w-full rounded-md mt-2 overflow-x-hidden max-h-[150px] overflow-y-auto custom-scroll-bar">
                                                    {groups.map((group) => (
                                                        <Listbox.Option
                                                            key={group.id}
                                                            value={group}
                                                            className="py-[8px] px-6 cursor-pointer hover:bg-primary hover:bg-opacity-70 text-[14px] border-b-[1px] border-b-[#ccc]"
                                                        >
                                                            {group.name}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </>
                                    )}
                                </Listbox>
                            </fieldset>
                        </div>
                        <div className="mb-8">
                            <p className="text-[#FF26B9] mb-4">Please review your registration details before submitting</p>
                            <div className="flex gap-3 items-center">
                                <div className="w-[14px] h-[14px] shrink-0 mt-[5px] self-start rounded-[2px] border-[1px] border-white">
                                </div>
                                <p className="text-white relative z-10">I agreed with the event terms and conditions  and privacy policy</p>
                            </div>
                        </div>
                        <Button
                            className="lg:!w-full mx-auto lg:mx-0"
                            onClick={openModal}
                        >
                            Register Now
                        </Button>
                    </form>
                </div >
                <img src="/images/purple-lens-flare-left.svg" alt="purple lens flare" className="absolute pointer-events-none top-[4%] min-[500px]:top-[-5%] min-[768px]:top-[-10%] left-[-10%] lg:top-[-20%] lg:left-[-130%] mix-blend-hard-light" />
                <img src="/images/purple-lens-flare-right.svg" alt="purple lens flare" className="absolute pointer-events-none lg:bottom-[-20%] lg:right-[-50%] mix-blend-hard-light" />
            </div >
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#150e28ed]" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[669px] transform overflow-hidden rounded-2xl bg-transparent border-[1px] border-primary px-6 pt-4 pb-8 lg:pb-16 lg:px-12 text-left align-middle shadow-xl transition-all">
                                    <header className="grid place-items-center text-center gap-4">
                                        <img src="/images/congratulation.svg" alt="Congratulations" className="max-w-[258px] lg:max-w-[472px]" />
                                        <Dialog.Title
                                            as="h1"
                                            className="font-medium lg:text-[32px] font-semibold text-white font-bold"
                                        >
                                            Congratulations <br /> you have successfully Registered!
                                        </Dialog.Title>
                                    </header>
                                    <div className="mt-4 lg:font-semibold text-[12px] lg:text-[14px] text-white text-center">
                                        <p>
                                            Yes, it was easy and you did it!
                                        </p>
                                        <p>
                                            check your mail box for next step <img src="/icons/wink-emoji.svg" alt="Wink Emoji" className="inline" />
                                        </p>
                                    </div>
                                    <div className="mt-8">
                                        <Button
                                            type="button"
                                            className="w-full"
                                            onClick={closeModal}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}