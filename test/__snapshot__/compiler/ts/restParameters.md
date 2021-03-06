# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function f18(a?:string, ...b:number[]){}

function f19(a?:string, b?:number, ...c:number[]){}

function f20(a:string, b?:string, ...c:number[]){}

function f21(a:string, b?:string, c?:number, ...d:number[]){}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function f18(a?:string, ...b:number[]){}\n\nfunction f19(a?:string, b?:number, ...c:number[]){}\n\nfunction f20(a:string, b?:string, ...c:number[]){}\n\nfunction f21(a:string, b?:string, c?:number, ...d:number[]){}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f18",
                    "rawText": "f18",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 12
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 13,
                                "end": 14
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 16,
                                "end": 22
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 13,
                            "end": 22
                        },
                        {
                            "kind": 89,
                            "ellipsis": true,
                            "binding": {
                                "kind": 131102,
                                "text": "b",
                                "rawText": "b",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 28
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 29,
                                    "end": 35
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 29,
                                "end": 38
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 4097,
                            "start": 23,
                            "end": 37
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 38
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 40
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 40
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f19",
                    "rawText": "f19",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 50,
                    "end": 54
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 55,
                                "end": 56
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 58,
                                "end": 64
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 55,
                            "end": 64
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "b",
                                "rawText": "b",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 65,
                                "end": 67
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 69,
                                "end": 75
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 65,
                            "end": 75
                        },
                        {
                            "kind": 89,
                            "ellipsis": true,
                            "binding": {
                                "kind": 131102,
                                "text": "c",
                                "rawText": "c",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 80,
                                "end": 81
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 82,
                                    "end": 88
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 82,
                                "end": 91
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 4097,
                            "start": 76,
                            "end": 90
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 91
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 92,
                        "end": 92
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 91,
                    "end": 93
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 256,
                "start": 40,
                "end": 93
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f20",
                    "rawText": "f20",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 103,
                    "end": 107
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 108,
                                "end": 109
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 110,
                                "end": 116
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 108,
                            "end": 116
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "b",
                                "rawText": "b",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 117,
                                "end": 119
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 121,
                                "end": 127
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 117,
                            "end": 127
                        },
                        {
                            "kind": 89,
                            "ellipsis": true,
                            "binding": {
                                "kind": 131102,
                                "text": "c",
                                "rawText": "c",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 132,
                                "end": 133
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 134,
                                    "end": 140
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 134,
                                "end": 143
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 4097,
                            "start": 128,
                            "end": 142
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 108,
                    "end": 143
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 144,
                        "end": 144
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 143,
                    "end": 145
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 256,
                "start": 93,
                "end": 145
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f21",
                    "rawText": "f21",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 155,
                    "end": 159
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 160,
                                "end": 161
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 162,
                                "end": 168
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 160,
                            "end": 168
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "b",
                                "rawText": "b",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 169,
                                "end": 171
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 173,
                                "end": 179
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 169,
                            "end": 179
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "c",
                                "rawText": "c",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 180,
                                "end": 182
                            },
                            "isOptional": true,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 184,
                                "end": 190
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 180,
                            "end": 190
                        },
                        {
                            "kind": 89,
                            "ellipsis": true,
                            "binding": {
                                "kind": 131102,
                                "text": "d",
                                "rawText": "d",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 195,
                                "end": 196
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 197,
                                    "end": 203
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 197,
                                "end": 206
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 4097,
                            "start": 191,
                            "end": 205
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 160,
                    "end": 206
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 207,
                        "end": 207
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 206,
                    "end": 208
                },
                "typeParameters": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 256,
                "start": 145,
                "end": 208
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 208
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 208
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

