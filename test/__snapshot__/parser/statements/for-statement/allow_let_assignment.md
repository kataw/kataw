# Kataw parser test case

## Input

`````js
for (let=10;;);
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "let",
                    "rawText": "let",
                    "flags": 768,
                    "start": 5,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 8,
                    "end": 9
                },
                "right": {
                    "kind": 81921,
                    "text": 10,
                    "rawText": "10",
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 14,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "for (let=10;;);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

