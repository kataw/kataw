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
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 9,
                            "end": 15
                        },
                        "flags": 128,
                        "start": 9,
                        "end": 15
                    },
                    {
                        "kind": 159,
                        "tryKeyword": {
                            "kind": 37757027,
                            "flags": 768,
                            "start": 15,
                            "end": 19
                        },
                        "block": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 128,
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
                                                "multiLine": false,
                                                "flags": 128,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "flags": 128,
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
                                                "multiLine": false,
                                                "flags": 128,
                                                "start": 35,
                                                "end": 35
                                            },
                                            "flags": 128,
                                            "start": 35,
                                            "end": 35
                                        },
                                        "flags": 128,
                                        "start": 27,
                                        "end": 35
                                    }
                                ],
                                "multiLine": false,
                                "flags": 128,
                                "start": 27,
                                "end": 35
                            },
                            "flags": 128,
                            "start": 25,
                            "end": 35
                        },
                        "flags": 128,
                        "start": 15,
                        "end": 35
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 35
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "{ [catch] async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

