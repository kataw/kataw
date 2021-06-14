# Kataw parser test case

## Input

`````js
<A, B>(x) => {}
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
                    "start": 9,
                    "end": 12
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
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 2
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 5
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 3,
                                "end": 5
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 1,
                        "end": 5
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 6
                },
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 12,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "<A, B>(x) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

(x) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

