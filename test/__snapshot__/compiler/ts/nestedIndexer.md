# Kataw parser test case

## Input

`````js
function then(x) {

var match: { [index: number]: string; }

}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function then(x) {\n\nvar match: { [index: number]: string; }\n\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "then",
                    "rawText": "then",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 13
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 14,
                                "end": 15
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 14,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 16
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
                                                "text": "match",
                                                "rawText": "match",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 23,
                                                "end": 29
                                            },
                                            "exclamation": false,
                                            "type": {
                                                "kind": 8422,
                                                "objectTypeMembers": {
                                                    "kind": 169,
                                                    "members": [
                                                        {
                                                            "kind": 73844,
                                                            "accessModifier": null,
                                                            "parameters": {
                                                                "kind": 8367,
                                                                "parameterList": [
                                                                    {
                                                                        "kind": 8366,
                                                                        "ellipsis": false,
                                                                        "binding": {
                                                                            "kind": 131102,
                                                                            "text": "index",
                                                                            "rawText": "index",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 1025,
                                                                            "start": 34,
                                                                            "end": 39
                                                                        },
                                                                        "isOptional": false,
                                                                        "type": {
                                                                            "kind": 4202657,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 2097152,
                                                                            "start": 40,
                                                                            "end": 47
                                                                        },
                                                                        "initializer": null,
                                                                        "accessModifier": null,
                                                                        "isReadOnly": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 1,
                                                                        "start": 34,
                                                                        "end": 47
                                                                    }
                                                                ],
                                                                "trailingcomma": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 34,
                                                                "end": 47
                                                            },
                                                            "returnType": {
                                                                "kind": 4202702,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 49,
                                                                "end": 56
                                                            },
                                                            "isStatic": false,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 2097152,
                                                            "start": 34,
                                                            "end": 57
                                                        }
                                                    ],
                                                    "multiline": false,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 32,
                                                    "end": 59
                                                },
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 30,
                                                "end": 59
                                            },
                                            "initializer": null,
                                            "flags": 23,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 16384,
                                            "end": 59
                                        }
                                    ],
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 59
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 59
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 59
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 62
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 62
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 62
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 63
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

