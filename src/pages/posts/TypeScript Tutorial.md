---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'TypeScript学习'
pubDate: 2024-10-18 
description: 'TypeScript Tutorial'
author: 'Chen'
tags: ["frontend"]
category: "前端开发"
---
# TypeScript in React Framework

[TOC]

## Typing variables & functions

```typescript
// js variable
let url = 'https://www.google.com'
// ts variable
let url: string = 'https://www.google.com'
```

```typescript
// js function
const func = () => {
    // ...
}
function func(arg1, arg2) {
    // ...
}
// ts function
const func = ():string => {
    // ...
}
function func(arg1:number, arg2:string):string {
    // ...
}
```

## Typing React Component

```tsx
// arrow functional component
const Button:React.FC = () => {}
// functional component
function Button():React.Fc {}
```

## Typing React props

``` tsx
<Button backgroundColor="red" fontSize={5}></Button>

// definition in ()
const Button:React.FC = (props: {backgroundColor: string, fontSize: number}) => {
    return <button></button>
}
// definition in top scope
type ButtonProps = {
    backgroundColor: string,
    fontSize: number,
    // fontSize: any, 'any' may cause bugs, DO NOT use it
    isUpperCase?: boolean // it means this prop is optional
}
const Button:React.FC = (props: ButtonProps) => {}
```

## Union types

```tsx
let color = 'red' | 'blue' | 'green' // is similar to enum
let variable = number | string | boolean
```

## Array type

```tsx
type ButtonProps = {
    backgroundColor: string,
    fontSize: number,
    isUpperCase?: boolean,
    padding: number[], // it means the padding accept an array composed of numbers
    margin: [number, number, boolean], // it makes margin accept an tuple
}
```

## React.CSSProperties

```tsx
type ButtonProps = {
    style: React.CSSProperties, // Syntactic sugar by React
}
```

## Record Type

```tsx
<Button borderRadius={{
        'topLeft': 5,
        'topRight': 5,
        'bottomLeft': 10,
        'bottomRight': 10,
    }}></Button>

type ButtonProps = {
    borderRadius: Record<string, number>
}

const Button = (props: ButtonProps) => {}
```

## Functional Type in props

```tsx
const clickFunction:number = (args: string) => {
    return 5;
}
<Button onClick={clickFunction}></Button>

type ButtonProps = {
    onClick: (args: string) => number
}

const Button = (props: ButtonProps) => {}
```

## Children Type in props

```tsx
<Button>Hello World</Button>

type ButtonProps = {
    children: React.ReactNode,
}

const Button = (props: ButtonProps) => {
   	return <button>{props.children}</button>
}
```

## JSX.Element

```tsx
const icon:JSX.Element = <div></div>;
```

## useState setter function

```tsx
const [count, setCount] = useState(0);
<Button setCount={setCount} />

type ButtonProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
}

const Button = (props: ButtonProps) => {
   	return <button>{props.setCount}</button>
}
```

## default Value

```tsx
const [count, setCount] = useState(0);
<Button setCount={setCount} count={0}/>
```

## Interface

```tsx
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
const customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 
```

## Component Type

```tsx
type ButtonProps = React.ComponentPropsWithoutRef<'button'>
type ButtonProps = React.ComponentPropsWithRef<'div'>
```

## use ... to spread props

```tsx
<Button type={'submit'} name={'aaa'} value={'bbb'} ></Button>

type ButtonProps = {}

const Button = (props:ButtonProps) => {
    const {type, ...rest} = props
    
    return <button type={type} {...rest}></button>
}
```

## use & or extends to expand type or interface

```tsx
type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    buttonColor?: string,
    // ...
}

interface superButton extends ButtonProps {
    size?: string,
    // ...
}
```

## use Omit to minus type

```tsx
type User = {
    id: string,
    name: string,
}

type Guest = Omit<User, 'name'>
// below & upstair is the same
type Guest = {
    id: string,
}
```



## React event type

```tsx
const Button = () => {
    const handle = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // ...
    }
    return <button onClick={handle}></button>
}
```

## React useState type

```tsx
const [count, setCount] = useState<number>(0);
const [text, setText] = useState<string>('hello');
       
type User = {
	name: string,
    age: number,
}
const [user, setUser] = useState<User | null>(null)
const name = user?.name
```

## Typing useRef

```tsx
const Button = () => {
    const ref = useRef<HTMLElement | HTMLButtonElement | null>(null)
}
```

## Readonly Array

```tsx
const arr = [a, b, c] as const
```

## use as to assert a variable

```ts
type color = 'red' | 'blue' | 'yellow'
const buttonColor = localStorage.getItem('key') as color
```

## Generics

```ts
// arrow function
const toArray = <T,>(value: T):T[] => {
    return [value];
}

// function
function toArray<T>(value: T):T[] => {
    return [value];
}
```

## Generics in React

```tsx
type ButtonProps<T> {
	number: T,
	arr: T[],
}

const Button = <T,>(props: ButtonProps<T>) => {}
```

## Type lib

by creating a file named `index.d.ts` or `index.ts` to storage type definition.

```ts
export color = 'red' | 'yellow' | 'green'

// usage
import {color} from 'path'
```

## the unknown type

```ts
let data: unknown
```

## The Video Src

https://www.youtube.com/watch?v=TPACABQTHvM
