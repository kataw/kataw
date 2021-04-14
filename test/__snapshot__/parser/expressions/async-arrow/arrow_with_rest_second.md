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
                    "kind": 81921,
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
                "kind": 81921,
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
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
            "start": 15,
            "end": 18
        }
    ],
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

```

