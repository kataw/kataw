# Kataw parser test case

## Input

`````js
<x>(): string => {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 13,
                    "end": 16
                },
                "typeParameters": {
                    "kind": 146,
                    "types": [
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 1,
                                "end": 2
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 1,
                            "end": 2
                        }
                    ],
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "parameters": [],
                "asyncToken": null,
                "returnType": {
                    "kind": 139,
                    "type": {
                        "kind": 134234347,
                        "flags": 512,
                        "start": 6,
                        "end": 13
                    },
                    "flags": 0,
                    "start": 5,
                    "end": 13
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 16,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "<x>(): string => {}",
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

