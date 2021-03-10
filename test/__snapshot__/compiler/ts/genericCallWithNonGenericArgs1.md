# Kataw parser test case

## Input

`````js
function f<T>(x: any) { }
f<any>(null)

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function f<T>(x: any) { }\nf<any>(null)\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
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
                            "type": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 16,
                                "end": 20
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 14,
                            "end": 20
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 21
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 25
                },
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 12
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 11,
                    "end": 12
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 25
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "typeArguments": {
                        "kind": 8419,
                        "typeArgumentsList": [
                            {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 28,
                                "end": 31
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 28,
                        "end": 32
                    },
                    "argumentList": {
                        "kind": 3,
                        "elements": [
                            {
                                "kind": 4260512,
                                "text": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 37
                            }
                        ],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 33,
                        "end": 37
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 27,
                    "end": 38
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 25,
                "end": 38
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 38
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
