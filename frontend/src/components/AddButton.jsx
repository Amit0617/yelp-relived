import React from 'react'
import { Icon } from '@chakra-ui/react'
import { createIcon } from '@chakra-ui/react'

export const AddButton = createIcon({
    // width = "24" height = "24"
    viewBox: "0 0 226 226",
    // style:"fill:#000000;" >
    // <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
    path: (
        // <path d="M0,226v-226h226v226z" fill="none"/>
        <path fill="#ffffff" d="M113,18.83333c-51.89528,0 -94.16667,42.27139 -94.16667,94.16667c0,51.89528 42.27139,94.16667 94.16667,94.16667c51.89528,0 94.16667,-42.27139 94.16667,-94.16667c0,-51.89528 -42.27139,-94.16667 -94.16667,-94.16667zM113,37.66667c41.71699,0 75.33333,33.61635 75.33333,75.33333c0,41.71699 -33.61634,75.33333 -75.33333,75.33333c-41.71699,0 -75.33333,-33.61634 -75.33333,-75.33333c0,-41.71699 33.61635,-75.33333 75.33333,-75.33333zM103.58333,65.91667v37.66667h-37.66667v18.83333h37.66667v37.66667h18.83333v-37.66667h37.66667v-18.83333h-37.66667v-37.66667z" />
        // </g>)
    )
})

export default function AddLogo() {
    return (
        <Icon viewBox='0 0 226 226' color='red.500'>
            <path
                fill="#ffffff"
                d="M113,18.83333c-51.89528,0 -94.16667,42.27139 -94.16667,94.16667c0,51.89528 42.27139,94.16667 94.16667,94.16667c51.89528,0 94.16667,-42.27139 94.16667,-94.16667c0,-51.89528 -42.27139,-94.16667 -94.16667,-94.16667zM113,37.66667c41.71699,0 75.33333,33.61635 75.33333,75.33333c0,41.71699 -33.61634,75.33333 -75.33333,75.33333c-41.71699,0 -75.33333,-33.61634 -75.33333,-75.33333c0,-41.71699 33.61635,-75.33333 75.33333,-75.33333zM103.58333,65.91667v37.66667h-37.66667v18.83333h37.66667v37.66667h18.83333v-37.66667h37.66667v-18.83333h-37.66667v-37.66667z"
            />

        </Icon>)
}
