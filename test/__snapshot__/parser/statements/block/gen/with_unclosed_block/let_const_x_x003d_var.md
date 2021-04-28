# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: with unclosed block
> :: case: let const x = var
## Input

`````js
{ {} finally(x) { let const x = var
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
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 4
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
                                "start": 12,
                                "end": 12
                            },
                            "flags": 128,
                            "start": 12,
                            "end": 12
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
                                "start": 13,
                                "end": 13
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 13
                        },
                        "flags": 128,
                        "start": 4,
                        "end": 13
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 128,
                        "start": 13,
                        "end": 14
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 768,
                            "start": 17,
                            "end": 21
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 21
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 768,
                            "start": 21,
                            "end": 27
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
                                        "start": 27,
                                        "end": 29
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 128,
                                    "start": 27,
                                    "end": 31
                                }
                            ],
                            "flags": 160,
                            "start": 27,
                            "end": 31
                        },
                        "flags": 128,
                        "start": 21,
                        "end": 31
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 768,
                            "start": 31,
                            "end": 35
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [],
                            "flags": 128,
                            "start": 35,
                            "end": 35
                        },
                        "flags": 128,
                        "start": 31,
                        "end": 35
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 17,
                "end": 35
            },
            "flags": 128,
            "start": 15,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "{ {} finally(x) { let const x = var",
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
✖ Statement expected - start: 14, end: 15
✖ Expression expected - start: 31, end: 35
✖ ',' expected - start: 31, end: 35

```

