# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: (a b, c = b : string)
## Input

`````js
{ [catch] (a b, c = b : string)
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
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 3
            },
            "flags": 128,
            "start": 0,
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 256,
                    "start": 9,
                    "end": 12
                },
                "flags": 256,
                "start": 9,
                "end": 12
            },
            "flags": 128,
            "start": 9,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 12,
                        "end": 14
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 768,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 21
                    }
                ],
                "flags": 256,
                "start": 12,
                "end": 21
            },
            "flags": 128,
            "start": 12,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 768,
                "start": 23,
                "end": 30
            },
            "flags": 128,
            "start": 23,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "{ [catch] (a b, c = b : string)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

