# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: let const x = var
## Input

`````js
{ [catch] let const x = var
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 3
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 128,
                            "start": 8,
                            "end": 8
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 128,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 9,
                        "end": 13
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 13,
                            "start": 0,
                            "end": 19
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
                                        "flags": 768,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "flags": 128,
                                    "start": 19,
                                    "end": 23
                                }
                            ],
                            "flags": 160,
                            "start": 19,
                            "end": 23
                        },
                        "flags": 128,
                        "start": 13,
                        "end": 23
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 23,
                            "start": 0,
                            "end": 27
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [],
                            "flags": 128,
                            "start": 27,
                            "end": 27
                        },
                        "flags": 128,
                        "start": 23,
                        "end": 27
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "{ [catch] let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 23, end: 27
✖ ',' expected - start: 23, end: 27

```

