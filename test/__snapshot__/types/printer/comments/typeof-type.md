# Kataw parser test case

## Input

`````js
let num2: typeof num1 = 3.14;     // Works!

let num3: /*1*/ typeof /*2*/ num1 = 3.14;     // Works!
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
                            "text": "num2",
                            "rawText": "num2",
                            "flags": 96,
                            "start": 3,
                            "end": 8
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134299891,
                                "typeOfKeyword": {
                                    "kind": 138477613,
                                    "flags": 64,
                                    "start": 9,
                                    "end": 16
                                },
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "num1",
                                        "rawText": "num1",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 21
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 21
                                },
                                "flags": 2097152,
                                "start": 9,
                                "end": 21
                            },
                            "flags": 2097152,
                            "start": 9,
                            "end": 21
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 3.14,
                            "rawText": "3.14",
                            "flags": 96,
                            "start": 23,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 28
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 28
            },
            "flags": 33554448,
            "start": 0,
            "end": 29
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 29,
                "end": 48
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "num3",
                            "rawText": "num3",
                            "flags": 96,
                            "start": 48,
                            "end": 53
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134299891,
                                "typeOfKeyword": {
                                    "kind": 138477613,
                                    "flags": 64,
                                    "start": 54,
                                    "end": 67
                                },
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "num1",
                                        "rawText": "num1",
                                        "flags": 96,
                                        "start": 67,
                                        "end": 78
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 67,
                                    "end": 78
                                },
                                "flags": 2097152,
                                "start": 54,
                                "end": 78
                            },
                            "flags": 2097152,
                            "start": 54,
                            "end": 78
                        },
                        "initializer": {
                            "kind": 201392130,
                            "text": 3.14,
                            "rawText": "3.14",
                            "flags": 96,
                            "start": 80,
                            "end": 85
                        },
                        "flags": 16,
                        "start": 48,
                        "end": 85
                    }
                ],
                "flags": 17,
                "start": 48,
                "end": 85
            },
            "flags": 33554448,
            "start": 29,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "let num2: typeof num1 = 3.14;     // Works!\n\nlet num3: /*1*/ typeof /*2*/ num1 = 3.14;     // Works!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 100
}
```

### Printed

```javascript

let num2:  = 3.14; // Works!

let num3:  = 3.14; // Works!
```

### Diagnostics

```javascript
✔ No errors
```

