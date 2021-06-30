# Kataw parser test case

## Input

`````js
(let)[x] in x;
`````

## Options

### Parser Options

`````js
{}
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
                "kind": 198,
                "left": {
                    "kind": 130,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 134299649,
                            "text": "let",
                            "rawText": "let",
                            "flags": 96,
                            "start": 1,
                            "end": 4
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 5
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 536870944,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 8,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "(let)[x] in x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

(let)[x] in x;

```

### Diagnostics

```javascript
✔ No errors
```

