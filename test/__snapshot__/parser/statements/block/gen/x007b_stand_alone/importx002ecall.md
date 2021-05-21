# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: { stand alone
> :: case: import.call
## Input

`````js
{ import.call
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
                            "kind": 207,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 0,
                                "start": 1,
                                "end": 8
                            },
                            "metaIdentifier": null,
                            "flags": 8,
                            "start": 96,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "{ import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 13, end: 13
✖ The parser expected to find a '}' to match the '{' token here - start: 13, end: 13

```

