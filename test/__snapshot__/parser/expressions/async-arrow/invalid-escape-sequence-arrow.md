# Kataw parser test case

## Input

`````js
\u0061sync x => { await x }
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
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 16448,
                    "start": 0,
                    "end": 10
                },
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82032,
                                        "flags": 0,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 25
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 25
                            }
                        ],
                        "flags": 32,
                        "start": 17,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 27
                },
                "flags": 288,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "\\u0061sync x => { await x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'async' keyword in an async arrow must not contain escaped characters - start: 10, end: 12

```

