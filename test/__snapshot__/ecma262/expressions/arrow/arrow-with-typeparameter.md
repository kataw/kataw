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
                "asyncKeyword": null,
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
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
                                "assignToken": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 1,
                                "end": 2
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 3
                },
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 4,
                    "end": 4
                },
                "returnType": {
                    "kind": 139,
                    "bitwiseOrToken": null,
                    "bitwiseAndToken": null,
                    "type": {
                        "kind": 134234347,
                        "flags": 2097216,
                        "start": 6,
                        "end": 13
                    },
                    "flags": 2097152,
                    "start": 6,
                    "end": 13
                },
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 13,
                    "end": 16
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

