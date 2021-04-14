# Kataw parser test case

## Input

`````js
(async
 => async)
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
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 6,
                        "end": 10
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 768,
                                "start": 1,
                                "end": 6
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 256,
                            "start": 1,
                            "end": 6
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "returnType": null,
                    "contents": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 768,
                        "start": 10,
                        "end": 16
                    },
                    "flags": 2304,
                    "start": 1,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "(async\n => async)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 84,
            "error": "Line terminator not permitted before arrow",
            "start": 6,
            "end": 10
        }
    ],
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

