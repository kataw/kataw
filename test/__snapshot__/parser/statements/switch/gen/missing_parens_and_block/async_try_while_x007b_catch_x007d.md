# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: async try while { catch }
## Input

`````js
switch case async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 768,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 11,
                            "end": 17
                        },
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 768,
                                    "start": 17,
                                    "end": 21
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 21,
                                        "end": 21
                                    },
                                    "flags": 128,
                                    "start": 21,
                                    "end": 21
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
                                                        "start": 35,
                                                        "end": 35
                                                    },
                                                    "flags": 128,
                                                    "start": 35,
                                                    "end": 35
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
                                                        "start": 37,
                                                        "end": 37
                                                    },
                                                    "flags": 128,
                                                    "start": 37,
                                                    "end": 37
                                                },
                                                "flags": 128,
                                                "start": 29,
                                                "end": 37
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 29,
                                        "end": 37
                                    },
                                    "flags": 128,
                                    "start": 27,
                                    "end": 37
                                },
                                "flags": 128,
                                "start": 17,
                                "end": 37
                            }
                        ],
                        "flags": 128,
                        "start": 6,
                        "end": 37
                    }
                ],
                "flags": 128,
                "start": 6,
                "end": 37
            },
            "flags": 128,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "switch case async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 6, end: 11
@{x2716}@ Expression expected - start: 6, end: 11
@{x2716}@ Unexpected token. - start: 6, end: 11
@{x2716}@ Unexpected token. - start: 6, end: 11
@{x2716}@ Unexpected token. - start: 17, end: 21
@{x2716}@ Unexpected token. - start: 21, end: 27
@{x2716}@ Unexpected token. - start: 21, end: 27
@{x2716}@ Unexpected token. - start: 29, end: 35
@{x2716}@ Unexpected token. - start: 35, end: 37
@{x2716}@ Unexpected token. - start: 35, end: 37
@{x2716}@ Unexpected token. - start: 37, end: 37
@{x2716}@ Unexpected token. - start: 37, end: 37
@{x2716}@ Unexpected token. - start: 37, end: 37

```

