# Kataw parser test case

## Input

`````js
a ? async (): string => {}  :  b;

async (): string => {}

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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 22,
                    "flags": 768,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 20,
                        "end": 23
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": {
                        "kind": 82031,
                        "flags": 768,
                        "start": 3,
                        "end": 9
                    },
                    "returnType": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 768,
                            "start": 13,
                            "end": 20
                        },
                        "flags": 0,
                        "start": 12,
                        "end": 20
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 25,
                            "end": 25
                        },
                        "flags": 256,
                        "start": 23,
                        "end": 26
                    },
                    "flags": 2304,
                    "start": 3,
                    "end": 26
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 768,
                    "start": 26,
                    "end": 29
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 29,
                    "end": 32
                },
                "flags": 256,
                "start": 0,
                "end": 32
            },
            "flags": 128,
            "start": 0,
            "end": 33
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 51,
                "end": 54
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 33,
                "end": 40
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 134234347,
                    "flags": 768,
                    "start": 44,
                    "end": 51
                },
                "flags": 0,
                "start": 43,
                "end": 51
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 56,
                    "end": 56
                },
                "flags": 256,
                "start": 54,
                "end": 57
            },
            "flags": 2304,
            "start": 33,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "a ? async (): string => {}  :  b;\n\nasync (): string => {}\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 58
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

