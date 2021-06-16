# Kataw parser test case

## Input

`````js
async <T>() => {}

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
                    "start": 11,
                    "end": 14
                },
                "typeParameters": {
                    "kind": 307,
                    "declarations": {
                        "kind": 337,
                        "parameters": [
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 7,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 0,
                        "end": 17
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 17
                },
                "parameters": [],
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 9
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 17
                },
                "flags": 288,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "async <T>() => {}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

async () =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

