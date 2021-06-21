# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: s
> :: test: unclosed parens
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
{( super
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
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 225,
                                    "superKeyword": {
                                        "kind": 4259935,
                                        "flags": 96,
                                        "start": 2,
                                        "end": 8
                                    },
                                    "flags": 96,
                                    "start": 2,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 536870944,
                                "start": 2,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 8
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 8
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{( super",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 2, end: 8
✖ Dot property must be an identifier - start: 8, end: 8
✖ Expected a ')' to match the '(' token here - start: 3, end: 8

```

