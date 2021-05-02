# Kataw parser test case

## Input

`````js
(p\x61ckage) => { "use strict"; }

(p\x61ckage) => { }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 0,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x61ckage",
                "rawText": "x61ckage",
                "flags": 96,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 3,
            "end": 11
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "\"use strict\"",
                            "flags": 96,
                            "start": 17,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 31
            },
            "flags": 16,
            "start": 15,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 33,
                    "end": 37
                },
                "flags": 32,
                "start": 33,
                "end": 37
            },
            "flags": 16,
            "start": 33,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x61ckage",
                "rawText": "x61ckage",
                "flags": 96,
                "start": 38,
                "end": 46
            },
            "flags": 16,
            "start": 38,
            "end": 46
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 52,
                "end": 52
            },
            "flags": 16,
            "start": 50,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "(p\\x61ckage) => { \"use strict\"; }\n\n(p\\x61ckage) => { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 1, end: 2
✖ Invalid hexadecimal escape sequence - start: 2, end: 2
✖ Expected a `;` - start: 2, end: 3
✖ Declaration or statement expected - start: 2, end: 3
✖ Expected a `;` - start: 11, end: 12
✖ Declaration or statement expected - start: 11, end: 12
✖ Declaration or statement expected - start: 12, end: 15
✖ Invalid hexadecimal escape sequence - start: 36, end: 37
✖ Invalid hexadecimal escape sequence - start: 37, end: 37
✖ Expected a `;` - start: 37, end: 38
✖ Declaration or statement expected - start: 37, end: 38
✖ Expected a `;` - start: 46, end: 47
✖ Declaration or statement expected - start: 46, end: 47
✖ Declaration or statement expected - start: 47, end: 50

```

