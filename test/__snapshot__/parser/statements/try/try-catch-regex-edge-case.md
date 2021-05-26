# Kataw parser test case

## Input

`````js
try/catch/finally/{
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 3,
                    "end": 3
                },
                "flags": 16,
                "start": 3,
                "end": 3
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 3,
                    "end": 3
                },
                "flags": 16,
                "start": 3,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 221,
                    "text": "/catch/finally",
                    "flags": 96,
                    "start": 3,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 17,
                    "end": 18
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 48,
                    "start": 18,
                    "end": 19
                },
                "flags": 32,
                "start": 3,
                "end": 19
            },
            "flags": 16,
            "start": 3,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "try/catch/finally/{",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unknown regular expression flag - start: 3, end: 4
✖ Unknown regular expression flag - start: 3, end: 4
✖ Unknown regular expression flag - start: 3, end: 4
✖ Unknown regular expression flag - start: 3, end: 4
✖ Unknown regular expression flag - start: 3, end: 4
✖ The parser expected to find a '}' to match the '{' token here - start: 19, end: 19

```

