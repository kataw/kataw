# Kataw parser test case

## Input

`````js
(w, o, e, m) => { "use strict"; "use strict" }
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
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "w",
                            "rawText": "w",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        {
                            "kind": 134299649,
                            "text": "m",
                            "rawText": "m",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
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
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "\"use strict\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 30
                            },
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "\"use strict\"",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 44
                            }
                        ],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 44
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 46
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "(w, o, e, m) => { \"use strict\"; \"use strict\" }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
(w, o, e, m) => {};
```

### Diagnostics

```javascript
✔ No errors
```

