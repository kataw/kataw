# Kataw parser test case

## Input

`````js
a ? async (): string => {}  :  b;

async (): string => {}

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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 11,
                        "end": 11
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 134234347,
                            "flags": 2097216,
                            "start": 13,
                            "end": 20
                        },
                        "flags": 2097152,
                        "start": 13,
                        "end": 20
                    },
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 20,
                        "end": 23
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 25,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 23,
                        "end": 26
                    },
                    "flags": 288,
                    "start": 3,
                    "end": 26
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 26,
                    "end": 29
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 29,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        },
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 33,
                "end": 40
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 42,
                "end": 42
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234347,
                    "flags": 2097216,
                    "start": 44,
                    "end": 51
                },
                "flags": 2097152,
                "start": 44,
                "end": 51
            },
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 51,
                "end": 54
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 56,
                    "end": 56
                },
                "flags": 32,
                "start": 54,
                "end": 57
            },
            "flags": 288,
            "start": 33,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "a ? async (): string => {}  :  b;\n\nasync (): string => {}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

a ? async () =>  { } : b;
async () =>  { }

```

### Diagnostics

```javascript
✔ No errors
```

