# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
a = ((b)) = c;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 121,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 81921,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 81921,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 13
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "a = ((b)) = c;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

