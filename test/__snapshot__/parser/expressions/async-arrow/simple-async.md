# Kataw parser test case

## Input

`````js
async (x, ...a)=>0;
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
                "end": 17
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 7,
                    "end": 8
                },
                {
                    "kind": 223,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 768,
                        "start": 9,
                        "end": 13
                    },
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
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 768,
                "start": 17,
                "end": 18
            },
            "flags": 2304,
            "start": 0,
            "end": 18
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 18,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "async (x, ...a)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The left hand side of the arrow is not destructible  - start: 15, end: 17

```

