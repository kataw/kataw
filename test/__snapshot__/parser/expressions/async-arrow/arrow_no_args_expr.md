# Kataw parser test case

## Input

`````js
async ()=>x;
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
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "flags": 2304,
            "start": 0,
            "end": 11
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 11,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "async ()=>x;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

