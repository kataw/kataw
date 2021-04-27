# Kataw parser test case

## Input

`````js
((a),...b) => 0;
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
                    "expressions": [
                        {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 2,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 5,
                            "end": 5
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 8,
                "end": 9
            },
            "flags": 128,
            "start": 8,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "flags": 128,
            "start": 13,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "((a),...b) => 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Expression expected - start: 5, end: 8
@{x2716}@ Statement expected - start: 5, end: 8
@{x2716}@ Statement expected - start: 9, end: 10
@{x2716}@ Statement expected - start: 10, end: 13

```

