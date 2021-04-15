# Kataw parser test case

## Input

`````js
(w, o, e, m) => { "use strict"; "use strict" }
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "w",
                            "rawText": "w",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 768,
                            "start": 6,
                            "end": 8
                        },
                        {
                            "kind": 134299649,
                            "text": "m",
                            "rawText": "m",
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 768,
                                "start": 17,
                                "end": 30
                            },
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "use strict",
                                "flags": 768,
                                "start": 31,
                                "end": 44
                            }
                        ],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 17,
                        "end": 44
                    },
                    "flags": 256,
                    "start": 15,
                    "end": 46
                },
                "flags": 256,
                "start": 0,
                "end": 46
            },
            "flags": 128,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "(w, o, e, m) => { \"use strict\"; \"use strict\" }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

