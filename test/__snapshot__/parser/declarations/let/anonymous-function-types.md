# Kataw parser test case

## Input

`````js
let x = (): Array<(string) => number> => []
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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 37,
                                "end": 40
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "typeParameters": {
                                        "kind": 266,
                                        "parameters": [
                                            {
                                                "kind": 267,
                                                "type": {
                                                    "kind": 261,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "start": 26,
                                                        "end": 29
                                                    },
                                                    "parameters": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 19,
                                                        "end": 25
                                                    },
                                                    "returnType": {
                                                        "kind": 134234345,
                                                        "flags": 64,
                                                        "start": 29,
                                                        "end": 36
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 32,
                                                    "start": 18,
                                                    "end": 36
                                                },
                                                "flags": 32,
                                                "start": 18,
                                                "end": 36
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 17,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 37
                            },
                            "contents": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 42,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 40,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 43
            },
            "flags": 33554448,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "let x = (): Array<(string) => number> => []",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

let x = () =>  [];
```

### Diagnostics

```javascript
✔ No errors
```

