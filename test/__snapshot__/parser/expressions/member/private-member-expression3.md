# Kataw parser test case

## Input

`````js
this?.#c[d];
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 4,
                    "end": 6
                },
                "member": {
                    "kind": 4276321,
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "chain": {
                    "kind": 203,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 67191035,
                                "text": "#c",
                                "rawText": "#c",
                                "flags": 96,
                                "start": 6,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 8
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 536870944,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "this?.#c[d];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 6, end: 8

```

