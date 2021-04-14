# Kataw parser test case

## Input

`````js
async (s: any) => x
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
                "start": 14,
                "end": 17
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "s",
                        "rawText": "s",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234252,
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "autofix": 0,
                        "flags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "initializer": null,
                    "flags": 256,
                    "start": 7,
                    "end": 13
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
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "flags": 2304,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "async (s: any) => x",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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

```

