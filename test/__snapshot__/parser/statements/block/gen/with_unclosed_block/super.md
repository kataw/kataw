# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: k
> :: test: with unclosed block
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
{ {} finally(x) { super
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [],
                            "flags": 16,
                            "start": 3,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 4
                    },
                    {
                        "kind": 159,
                        "tryKeyword": null,
                        "block": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 4,
                                "end": 4
                            },
                            "flags": 16,
                            "start": 4,
                            "end": 4
                        },
                        "catchClause": null,
                        "finallyKeyword": {
                            "kind": 37757016,
                            "flags": 64,
                            "start": 4,
                            "end": 12
                        },
                        "finallyBlock": {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [],
                                "flags": 16,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 16,
                            "start": 12,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 4,
                        "end": 12
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 12,
                        "end": 15
                    },
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 96,
                                                "start": 17,
                                                "end": 23
                                            },
                                            "flags": 96,
                                            "start": 17,
                                            "end": 23
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "start": 23,
                                            "end": 23
                                        },
                                        "flags": 536870944,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "start": 17,
                                    "end": 23
                                }
                            ],
                            "flags": 16,
                            "start": 17,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{ {} finally(x) { super",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'try' expected - start: 4, end: 12
✖ Expected a `;` - start: 15, end: 17
✖ 'super' must be followed by an argument list or member access. - start: 17, end: 23
✖ Dot property must be an identifier - start: 23, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 18, end: 23

```

