# Kataw parser test case

## Input

`````js
async (s: any) => x
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
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
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234252,
                            "flags": 64,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "initializer": null,
                    "flags": 32,
                    "start": 7,
                    "end": 13
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "flags": 288,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "async (s: any) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

