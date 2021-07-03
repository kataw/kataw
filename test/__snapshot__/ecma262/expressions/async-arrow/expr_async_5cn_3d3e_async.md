# Kataw parser test case

## Input

`````js
(async
 => async)
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
                "kind": 121,
                "expression": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 1,
                        "end": 6
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 65,
                        "start": 6,
                        "end": 10
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 10,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(async\n => async)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Line terminator not permitted before arrow - start: 6, end: 10

```

