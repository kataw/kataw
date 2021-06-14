# Kataw parser test case

## Input

`````js
<A=b, a>(x) => {}
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
                        "kind": 310,
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
                                "defaultType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 4
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "flags": 2097152,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 2097152,
                                "start": 1,
                                "end": 4
                            },
                            {
                                "kind": 146,
                                "name": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 7
                                },
                                "type": null,
                                "defaultType": null,
                                "flags": 2097152,
                                "start": 5,
                                "end": 7
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 1,
                        "end": 7
                    },
                    "flags": 2097152,
                    "start": 0,
                    "end": 8
                },
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 9,
                        "end": 10
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
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "<A=b, a>(x) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
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

