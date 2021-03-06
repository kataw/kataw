# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function foo(...rest) {
     var x: number = rest[0];
     return x;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function foo(...rest) {\n     var x: number = rest[0];\n     return x;\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "foo",
                    "rawText": "foo",
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
                            "ellipsis": true,
                            "binding": {
                                "kind": 131102,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 16,
                                "end": 20
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 4097,
                            "start": 13,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 21
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097397,
                                "declarationList": {
                                    "kind": 244,
                                    "declarations": [
                                        {
                                            "kind": 243,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "exclamation": false,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 35,
                                                "end": 42
                                            },
                                            "initializer": {
                                                "kind": 66116,
                                                "member": {
                                                    "kind": 196712,
                                                    "text": "rest",
                                                    "rawText": "rest",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 44,
                                                    "end": 49
                                                },
                                                "expression": {
                                                    "kind": 4261540,
                                                    "text": 0,
                                                    "rawText": "0",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 50,
                                                    "end": 51
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 49,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 65536,
                                            "end": 52
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 52
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 53
                            },
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 67
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 68
                            }
                        ],
                        "multiline": true,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 68
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 70
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 70
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 70
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

