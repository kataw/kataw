# Kataw parser test case

## Input

`````js
async (a, ...b) => a;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 15,
                "end": 18
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 223,
                    "flags": 256,
                    "start": 9,
                    "end": 14
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 18,
                "end": 20
            },
            "flags": 2304,
            "start": 0,
            "end": 20
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 20,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "async (a, ...b) => a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The left hand side of the arrow is not destructible  - start: 15, end: 18

```

