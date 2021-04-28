# Kataw parser test case

## Input

`````js
(): string => {}
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
                    "flags": 10,
                    "start": 0,
                    "end": 13
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": {
                    "kind": 139,
                    "type": {
                        "kind": 134234347,
                        "flags": 512,
                        "start": 3,
                        "end": 10
                    },
                    "flags": 0,
                    "start": 2,
                    "end": 10
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 15,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 13,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "(): string => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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

