# Kataw parser test case

## Input

`````js
let f = async
 (g = await foo) => g
`````

## Output

### Hybrid CST

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
                            "original": "f",
                            "text": "f",
                            "rawText": " f",
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
                                "flags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "original": "g",
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "original": "await",
                                        "text": "await",
                                        "rawText": " await",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 16,
                                    "end": 25
                                },
                                {
                                    "kind": 134299649,
                                    "original": "foo",
                                    "text": "foo",
                                    "rawText": " foo",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 29
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "original": "g",
                                "text": "g",
                                "rawText": " g",
                                "flags": 96,
                                "start": 33,
                                "end": 35
                            },
                            "flags": 290,
                            "start": 7,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 35
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 35
            },
            "flags": 33554448,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "let f = async\n (g = await foo) => g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

