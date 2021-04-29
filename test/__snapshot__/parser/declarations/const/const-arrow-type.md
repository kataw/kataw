# Kataw parser test case

## Input

`````js
const fn = async (a?: any): Promise<void> => {};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 37757004,
                "flags": 0,
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
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "start": 5,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 10,
                                "end": 16
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 197,
                                        "shortCircuit": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "questionToken": {
                                            "kind": 134217750,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "consequent": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 0,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "alternate": {
                                            "kind": 134299649,
                                            "text": "any",
                                            "rawText": "any",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 26
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "Promise",
                        "rawText": "Promise",
                        "flags": 96,
                        "start": 27,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 35,
                        "end": 36
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 138477615,
                            "flags": 64,
                            "start": 36,
                            "end": 40
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 32,
                        "start": 36,
                        "end": 40
                    },
                    "flags": 32,
                    "start": 27,
                    "end": 40
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 40,
                    "end": 41
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 41,
                    "end": 41
                },
                "flags": 32,
                "start": 27,
                "end": 41
            },
            "flags": 16,
            "start": 27,
            "end": 41
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 46,
                "end": 46
            },
            "flags": 16,
            "start": 44,
            "end": 47
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 47,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "const fn = async (a?: any): Promise<void> => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 20, end: 21
✖ ',' expected - start: 26, end: 27
✖ Statement expected - start: 26, end: 27
✖ Expression expected - start: 40, end: 41
✖ Expression expected - start: 41, end: 44
✖ Statement expected - start: 41, end: 44

```

