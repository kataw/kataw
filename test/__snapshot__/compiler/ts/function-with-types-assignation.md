# Kataw parser test case

## Input

`````js
function message(name:string, age:number = 100, ...args:Array<string>):string {
  return name;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function message(name:string, age:number = 100, ...args:Array<string>):string {\n  return name;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "message",
                    "rawText": "message",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 16
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "name",
                                "rawText": "name",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 17,
                                "end": 21
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 22,
                                "end": 28
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 17,
                            "end": 28
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "age",
                                "rawText": "age",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 29,
                                "end": 33
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 34,
                                "end": 40
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 100,
                                "rawText": "100",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 46
                            },
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 29,
                            "end": 46
                        },
                        {
                            "kind": 89,
                            "ellipsis": true,
                            "binding": {
                                "kind": 131102,
                                "text": "args",
                                "rawText": "args",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 51,
                                "end": 55
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 61
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 62,
                                            "end": 68
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 62,
                                    "end": 68
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 56,
                                "end": 70
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 4097,
                            "start": 47,
                            "end": 69
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 70
                },
                "type": {
                    "kind": 4202702,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 71,
                    "end": 77
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 196712,
                                    "text": "name",
                                    "rawText": "name",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 88,
                                    "end": 93
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 94
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 79,
                        "end": 94
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 96
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 96
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 96
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

