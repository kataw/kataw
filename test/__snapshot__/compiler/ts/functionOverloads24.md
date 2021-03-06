# Kataw parser test case

## Input

`````js
function foo(bar:number):(b:string)=>void;
function foo(bar:string):(a:number)=>void;
function foo(bar:any):(a)=>void { return function(){} }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function foo(bar:number):(b:string)=>void;\nfunction foo(bar:string):(a:number)=>void;\nfunction foo(bar:any):(a)=>void { return function(){} }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
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
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 13,
                                "end": 16
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 17,
                                "end": 23
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 13,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 24
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [
                            {
                                "kind": 8366,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 26,
                                    "end": 27
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 4202702,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 28,
                                    "end": 34
                                },
                                "initializer": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 26,
                                "end": 34
                            }
                        ],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 26,
                        "end": 34
                    },
                    "returnType": {
                        "kind": 4202742,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 37,
                        "end": 41
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 25,
                    "end": 41
                },
                "contents": null,
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 42
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 51,
                    "end": 55
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 56,
                                "end": 59
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 60,
                                "end": 66
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 56,
                            "end": 66
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 67
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [
                            {
                                "kind": 8366,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 69,
                                    "end": 70
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 4202657,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 71,
                                    "end": 77
                                },
                                "initializer": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 69,
                                "end": 77
                            }
                        ],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 69,
                        "end": 77
                    },
                    "returnType": {
                        "kind": 4202742,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 80,
                        "end": 84
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 68,
                    "end": 84
                },
                "contents": null,
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 42,
                "end": 85
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 94,
                    "end": 98
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 99,
                                "end": 102
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 103,
                                "end": 106
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 99,
                            "end": 106
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 107
                },
                "type": {
                    "kind": 8287,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 8367,
                        "parameterList": [
                            {
                                "kind": 8366,
                                "ellipsis": false,
                                "binding": {
                                    "kind": 131102,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 109,
                                    "end": 110
                                },
                                "isOptional": false,
                                "type": null,
                                "initializer": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 109,
                                "end": 110
                            }
                        ],
                        "trailingcomma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 109,
                        "end": 110
                    },
                    "returnType": {
                        "kind": 4202742,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 113,
                        "end": 117
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 108,
                    "end": 117
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 8456285,
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 136,
                                        "end": 137
                                    },
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 138,
                                            "end": 138
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 139
                                    },
                                    "typeParameters": null,
                                    "type": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 126,
                                    "end": 139
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 119,
                                "end": 139
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 119,
                        "end": 139
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 117,
                    "end": 141
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 85,
                "end": 141
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 141
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 141
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

