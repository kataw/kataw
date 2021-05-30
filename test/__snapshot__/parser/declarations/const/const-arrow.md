# Kataw parser test case

## Input

`````js
const foo = (foo?: bar) => {};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 23,
                                "end": 26
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 203,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 16
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "flags": 0,
                                        "start": 17,
                                        "end": 22
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 11,
                                    "end": 22
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 26,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 29
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 29
            },
            "flags": 33554448,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "const foo = (foo?: bar) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

const foo = (foo?) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

