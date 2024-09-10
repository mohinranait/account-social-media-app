'use client';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
    ArchiveBoxXMarkIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
} from '@heroicons/react/16/solid'
import { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi'
import Modal from '../modals/Modal';
import PostEditorComponent from '../post-editor/PostEditorComponent';
import CreatePostProvider from '@/provider/CreatePostProvider';

const PostActionIcon = ({ post }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null)

    return (
        <CreatePostProvider>
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-gray-600  focus:outline-none ">
                    <HiOutlineDotsVertical size={16} />
                    {/* <ChevronDownIcon className="size-4 fill-white/60" /> */}
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-white/5 bg-white shadow shadow-gray-200 p-1 text-sm/6 text-gray-500 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    <MenuItem>
                        <button onClick={() => { setIsOpen(true); setSelectedPost(post) }} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100 ">
                            <PencilIcon className="size-4 fill-gray-600" />
                            Edit
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                            <Square2StackIcon className="size-4 fill-gray-600" />
                            Duplicate
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                            <ArchiveBoxXMarkIcon className="size-4 fill-gray-600" />
                            Archive
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                            <TrashIcon className="size-4 fill-gray-600" />
                            Delete
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                <PostEditorComponent setIsOpen={setIsOpen} selectedPost={selectedPost} />
            </Modal>
        </CreatePostProvider>
    )
}

export default PostActionIcon