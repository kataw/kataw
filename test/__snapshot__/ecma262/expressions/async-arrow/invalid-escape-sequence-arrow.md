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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 16448,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 10
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 15
                },
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
                                        "kind": 82196,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 17,
                                    "end": 25
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 17,
                                "end": 25
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 25
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 27
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "\\u0061sync x => { await x }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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

