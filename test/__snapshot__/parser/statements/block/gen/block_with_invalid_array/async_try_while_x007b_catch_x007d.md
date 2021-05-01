# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: async try while { catch }
## Input

`````js
{ [catch] async try while { catch }
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
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
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
                                "flags": 16,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
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
                                "flags": 16,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 16,
                            "start": 9,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "original": "async",
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 9,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 9,
                        "end": 15
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 0,
                            "start": 15,
                            "end": 19
                        },
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "flags": 16,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 19
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 159,
                                        "tryKeyword": null,
                                        "block": {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 16,
                                            "start": 33,
                                            "end": 33
                                        },
                                        "catchClause": null,
                                        "finallyKeyword": null,
                                        "finallyBlock": {
                                            "kind": 249,
                                            "block": {
                                                "kind": 124,
                                                "statements": [],
                                                "flags": 16,
                                                "start": 35,
                                                "end": 35
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 35
                                        },
                                        "flags": 16,
                                        "start": 27,
                                        "end": 35
                                    }
                                ],
                                "flags": 16,
                                "start": 27,
                                "end": 35
                            },
                            "flags": 16,
                            "start": 25,
                            "end": 35
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "{ [catch] async try while { catch }",
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
✖ Expected a `;` - start: 3, end: 8
✖ 'try' expected - start: 3, end: 8
✖ Expected a `;` - start: 15, end: 19
✖ 'try' expected - start: 27, end: 33

```

