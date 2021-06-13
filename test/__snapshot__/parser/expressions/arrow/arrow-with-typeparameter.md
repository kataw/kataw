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

### CST

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
                    "flags": 64,
                    "start": 13,
                    "end": 16
                },
                "typeParameters": {
                    "kind": 307,
                    "typeParameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "type": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "start": 1,
                            "end": 2
                        }
                    ],
                    "flags": 2097152,
                    "start": 0,
                    "end": 3
                },
                "parameters": [],
                "asyncKeyword": null,
                "returnType": {
                    "kind": 139,
                    "type": {
                        "kind": 134234347,
                        "flags": 2097216,
                        "start": 6,
                        "end": 13
                    },
                    "flags": 2097152,
                    "start": 5,
                    "end": 13
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 18,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 16,
                    "end": 19
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "<x>(): string => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

() =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

