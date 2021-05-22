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
                    "flags": 0,
                    "start": 11,
                    "end": 14
                },
                "typeParameters": {
                    "kind": 265,
                    "typeParameters": [
                        {
                            "kind": 146,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 2
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 1,
                                "end": 2
                            },
                            "initializer": {
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
                                "flags": 0,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 0,
                            "start": 1,
                            "end": 4
                        },
                        {
                            "kind": 146,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 7
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 5,
                                "end": 7
                            },
                            "initializer": null,
                            "flags": 0,
                            "start": 5,
                            "end": 7
                        }
                    ],
                    "flags": 0,
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

```

### Diagnostics

```javascript
✖ The type parameter must have an 'default' - start: 7, end: 8

```

