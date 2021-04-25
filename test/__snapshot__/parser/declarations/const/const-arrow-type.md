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
                "flags": 768,
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
                            "flags": 768,
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
                                "flags": 768,
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
                                            "flags": 768,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "questionToken": {
                                            "kind": 22,
                                            "flags": 768,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "consequent": {
                                            "kind": 16637,
                                            "text": "",
                                            "autofix": 0,
                                            "flags": 12,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 768,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "alternate": {
                                            "kind": 134299649,
                                            "text": "any",
                                            "rawText": "any",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 18,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 10,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 10,
                            "end": 26
                        },
                        "flags": 128,
                        "start": 5,
                        "end": 26
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 26
            },
            "flags": 128,
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
                        "flags": 768,
                        "start": 27,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 768,
                        "start": 35,
                        "end": 36
                    },
                    "right": {
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259887,
                            "flags": 768,
                            "start": 36,
                            "end": 40
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "autofix": 0,
                            "flags": 12,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 256,
                        "start": 36,
                        "end": 40
                    },
                    "flags": 256,
                    "start": 27,
                    "end": 40
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 768,
                    "start": 40,
                    "end": 41
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 41,
                    "end": 41
                },
                "flags": 256,
                "start": 27,
                "end": 41
            },
            "flags": 128,
            "start": 27,
            "end": 41
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 46,
                "end": 46
            },
            "flags": 128,
            "start": 44,
            "end": 47
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 47,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "const fn = async (a?: any): Promise<void> => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 20, end: 21
@{x2716}@ ',' expected - start: 26, end: 27
@{x2716}@ Unexpected token. - start: 26, end: 27
@{x2716}@ Statement expected - start: 26, end: 27
@{x2716}@ Expression expected - start: 40, end: 41
@{x2716}@ Expression expected - start: 41, end: 44
@{x2716}@ Unexpected token. - start: 41, end: 44
@{x2716}@ Statement expected - start: 41, end: 44

```

